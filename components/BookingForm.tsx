import { useState, useEffect } from 'react'
import { colors, fonts, primaryBtn } from '../lib/styles'
import { projectId, publicAnonKey } from '../../utils/supabase/info'

const EDGE_URL = `https://${projectId}.supabase.co/functions/v1/hyper-function/booking`

const WORKSHOPS = [
  {
    id: 'chopsticks' as const,
    name: 'Chopstick Making',
    japanese: '箸作り',
    duration: '60 min',
    price: 4000,
    maxGuests: 10,
    slots: ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'],
    desc: 'Make chopsticks from a raw block of Japanese wood. Every edge made by hand.',
  },
  {
    id: 'kintsugi' as const,
    name: 'Kintsugi',
    japanese: '金継ぎ',
    duration: '90 min',
    price: 5000,
    maxGuests: 8,
    slots: ['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
    desc: 'Repair broken ceramics with lacquer and gold. The break becomes the best part.',
  },
  {
    id: 'knives' as const,
    name: 'Knife Sharpening',
    japanese: '包丁研ぎ',
    duration: '60 min',
    price: 15000,
    maxGuests: 6,
    slots: ['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
    desc: 'Sharpen a 三徳包丁 on whetstones. Leave with a proper edge and your name on the blade.',
  },
  {
    id: 'musubi' as const,
    name: 'MUSUBI Coin Ring Making',
    japanese: 'コインリング作り',
    duration: '60 min',
    price: 4500,
    maxGuests: 6,
    slots: ['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
    desc: 'Hammer a real coin into a one-of-a-kind ring you can wear home.',
    location: 'MUSUBI Coin Ring Workshop (not the 縁 EN venue)',
    locationUrl: 'https://maps.app.goo.gl/Cfzphp9Tc2HtjZGt5?g_st=ic',
  },
]

type WorkshopId = typeof WORKSHOPS[number]['id']
type Step = 'workshop' | 'schedule' | 'contact' | 'review' | 'confirmed'

interface BookingData {
  workshopId: WorkshopId | null
  guests: number
  date: string
  time: string
  name: string
  email: string
  phone: string
}

const STEPS: Exclude<Step, 'confirmed'>[] = ['workshop', 'schedule', 'contact', 'review']
const STEP_LABELS = ['Workshop', 'Date & Time', 'Contact', 'Review']

const inputStyle: React.CSSProperties = {
  fontFamily: fonts.sans,
  fontSize: 16,
  color: colors.ink,
  backgroundColor: colors.paper,
  border: `1px solid ${colors.line}`,
  borderRadius: 4,
  padding: '12px 16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  fontFamily: fonts.sans,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: colors.inkSoft,
  display: 'block',
  marginBottom: 8,
}

const SESSION_KEY = 'en_booking_data'

export default function BookingForm() {
  const [step, setStep] = useState<Step>('workshop')
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [paidData, setPaidData] = useState<BookingData | null>(null)
  const [data, setData] = useState<BookingData>({
    workshopId: null,
    guests: 1,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('transactionId') || params.get('referenceId')) {
      try {
        const saved = sessionStorage.getItem(SESSION_KEY)
        if (saved) {
          const parsed: BookingData = JSON.parse(saved)
          setPaidData(parsed)
          sessionStorage.removeItem(SESSION_KEY)
          window.history.replaceState({}, '', window.location.pathname)
        }
      } catch { /* ignore */ }
    }
  }, [])

  const workshop = WORKSHOPS.find(w => w.id === data.workshopId) ?? null
  const total = workshop ? workshop.price * data.guests : 0
  const stepIndex = STEPS.indexOf(step as Exclude<Step, 'confirmed'>)
  const today = new Date().toISOString().split('T')[0]

  const update = (patch: Partial<BookingData>) => setData(d => ({ ...d, ...patch }))

  const canNext = (): boolean => {
    switch (step) {
      case 'workshop': return data.workshopId !== null
      case 'schedule': return data.date !== '' && data.time !== '' && data.guests >= 1
      case 'contact': return data.name.trim() !== '' && /\S+@\S+\.\S+/.test(data.email) && data.phone.trim() !== ''
      default: return true
    }
  }

  const next = async () => {
    const idx = STEPS.indexOf(step as Exclude<Step, 'confirmed'>)
    if (idx < STEPS.length - 1) {
      setStep(STEPS[idx + 1])
    } else {
      // Final step — submit booking
      setSubmitting(true)
      setSubmitError(null)
      try {
        const returnUrl = `${window.location.origin}${window.location.pathname}?page=book`
        const res = await fetch(EDGE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${publicAnonKey}` },
          body: JSON.stringify({
            workshopName: workshop?.name,
            workshopJapanese: workshop?.japanese,
            date: data.date,
            time: data.time,
            guests: data.guests,
            name: data.name,
            email: data.email,
            phone: data.phone,
            total,
            returnUrl,
            location: workshop && 'location' in workshop ? workshop.location : '縁 EN Chopsticks & Craft Workshop',
            locationUrl: workshop && 'locationUrl' in workshop ? workshop.locationUrl : '',
          }),
        })
        const text = await res.text()
        if (!res.ok) {
          throw new Error(`[${res.status}] ${text.slice(0, 200)}`)
        }
        let json: { success?: boolean; paymentUrl?: string | null; error?: string } = {}
        try { json = JSON.parse(text) } catch { throw new Error(`Bad response: ${text.slice(0, 200)}`) }
        if (!json.paymentUrl) throw new Error(json.error || 'We could not open Square checkout. Please try again.')
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(data))
        window.location.assign(json.paymentUrl)
      } catch (err) {
        setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      } finally {
        setSubmitting(false)
      }
    }
  }

  const back = () => {
    const idx = STEPS.indexOf(step as Exclude<Step, 'confirmed'>)
    if (idx > 0) setStep(STEPS[idx - 1])
  }

  const confirmedBooking = paidData ?? (step === 'confirmed' ? data : null)
  const confirmedWorkshop = confirmedBooking ? WORKSHOPS.find(w => w.id === confirmedBooking.workshopId) ?? null : null
  const confirmedTotal = confirmedWorkshop ? confirmedWorkshop.price * (confirmedBooking?.guests ?? 1) : 0

  if (confirmedBooking && confirmedWorkshop) {
    return (
      <div style={{ textAlign: 'center', padding: '48px 24px' }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          backgroundColor: colors.greenPale,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 32px',
          color: colors.greenDeep, fontSize: 22, fontWeight: 600,
        }}>
          ✓
        </div>
        <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, color: colors.ink, marginBottom: 16, letterSpacing: '-0.02em' }}>
          Booking confirmed.
        </h2>
        <p style={{ fontFamily: fonts.sans, fontSize: 16, color: colors.inkSoft, lineHeight: 1.65, maxWidth: '44ch', margin: '0 auto 32px' }}>
          Thank you, {confirmedBooking.name.split(' ')[0]}. Your spot at {confirmedWorkshop.name} on {confirmedBooking.date} at {confirmedBooking.time} is now reserved. A confirmation email has been sent to {confirmedBooking.email}.
        </p>
        <div style={{ border: `1px solid ${colors.line}`, borderRadius: 4, padding: '20px 24px', maxWidth: 360, margin: '0 auto 32px', textAlign: 'left' }}>
          {[
            { label: 'Workshop', value: confirmedWorkshop.name },
            { label: 'Date', value: confirmedBooking.date },
            { label: 'Time', value: confirmedBooking.time },
            { label: 'Guests', value: `${confirmedBooking.guests}` },
            ...('location' in confirmedWorkshop ? [{ label: 'Location', value: confirmedWorkshop.location }] : []),
            { label: 'Total paid', value: `¥${confirmedTotal.toLocaleString()}` },
          ].map((row, i, arr) => (
            <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: i < arr.length - 1 ? 12 : 0, marginBottom: i < arr.length - 1 ? 12 : 0, borderBottom: i < arr.length - 1 ? `1px solid ${colors.line}` : 'none' }}>
              <span style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.inkSoft }}>{row.label}</span>
              <span style={{ fontFamily: fonts.sans, fontSize: 14, color: colors.ink }}>{row.value}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.inkSoft }}>
          Questions? Call{' '}
          <a href="tel:+818022036353" style={{ color: colors.greenDeep, textDecoration: 'underline' }}>
            +81 80-2203-6353
          </a>
        </p>
        {'locationUrl' in confirmedWorkshop && (
          <p style={{ fontFamily: fonts.sans, fontSize: 13, marginTop: 12 }}>
            <a href={confirmedWorkshop.locationUrl} target="_blank" rel="noreferrer" style={{ color: colors.greenDeep, textDecoration: 'underline' }}>
              Open the MUSUBI venue in Google Maps
            </a>
          </p>
        )}
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', width: '100%' }}>
      {/* Step indicator */}
      <div style={{ display: 'flex', marginBottom: 48 }}>
        {STEPS.map((s, i) => (
          <div key={s} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              {i > 0 && (
                <div style={{ flex: 1, height: 1, backgroundColor: i <= stepIndex ? colors.greenDeep : colors.line }} />
              )}
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                backgroundColor: i < stepIndex ? colors.greenDeep : i === stepIndex ? colors.greenDeep : 'transparent',
                border: `1.5px solid ${i <= stepIndex ? colors.greenDeep : colors.line}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: i <= stepIndex ? colors.paper : colors.inkSoft,
                fontFamily: fonts.sans, fontSize: 11, fontWeight: 600,
                transition: 'all 0.2s',
              }}>
                {i < stepIndex ? '✓' : i + 1}
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ flex: 1, height: 1, backgroundColor: i < stepIndex ? colors.greenDeep : colors.line }} />
              )}
            </div>
            <span style={{
              fontFamily: fonts.sans, fontSize: 10, fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: i === stepIndex ? colors.greenDeep : colors.inkSoft,
              marginTop: 8,
            }}>
              {STEP_LABELS[i]}
            </span>
          </div>
        ))}
      </div>

      {/* Step 1: Workshop */}
      {step === 'workshop' && (
        <div>
          <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, color: colors.ink, marginBottom: 32, letterSpacing: '-0.02em' }}>
            Choose your workshop.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {WORKSHOPS.map(w => (
              <button
                key={w.id}
                onClick={() => update({ workshopId: w.id, time: '' })}
                style={{
                  textAlign: 'left', cursor: 'pointer', padding: '24px 28px',
                  backgroundColor: data.workshopId === w.id ? colors.greenPale : colors.paper,
                  border: `1.5px solid ${data.workshopId === w.id ? colors.greenDeep : colors.line}`,
                  borderRadius: 4, width: '100%', transition: 'all 0.15s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, gap: 16 }}>
                  <div>
                    <span style={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 400, color: colors.ink, letterSpacing: '-0.01em' }}>{w.name}</span>
                    <span style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.inkSoft, marginLeft: 10 }}>{w.japanese}</span>
                  </div>
                  <span style={{ fontFamily: fonts.serif, fontSize: 18, color: colors.ink, whiteSpace: 'nowrap', flexShrink: 0 }}>
                    ¥{w.price.toLocaleString()}
                    <span style={{ fontFamily: fonts.sans, fontSize: 12, color: colors.inkSoft }}> /person</span>
                  </span>
                </div>
                <p style={{ fontFamily: fonts.sans, fontSize: 14, color: colors.inkSoft, lineHeight: 1.55, marginBottom: 8 }}>{w.desc}</p>
                {'location' in w && (
                  <p style={{ fontFamily: fonts.sans, fontSize: 12, fontWeight: 600, color: colors.wood, lineHeight: 1.55, marginBottom: 8 }}>
                    Different venue: {w.location}
                  </p>
                )}
                <span style={{ fontFamily: fonts.sans, fontSize: 12, color: colors.inkSoft }}>{w.duration} · Max {w.maxGuests} guests</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Schedule */}
      {step === 'schedule' && workshop && (
        <div>
          <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, color: colors.ink, marginBottom: 32, letterSpacing: '-0.02em' }}>
            When would you like to come?
          </h2>
          {'locationUrl' in workshop && (
            <div style={{ backgroundColor: colors.paperAlt, border: `1px solid ${colors.line}`, borderRadius: 4, padding: '16px 20px', marginBottom: 28 }}>
              <p style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 600, color: colors.ink, marginBottom: 4 }}>
                Different location: {workshop.location}
              </p>
              <a href={workshop.locationUrl} target="_blank" rel="noreferrer" style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.greenDeep, textDecoration: 'underline' }}>
                Check the MUSUBI venue on Google Maps
              </a>
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <label style={labelStyle}>Date</label>
              <input
                type="date"
                min={today}
                value={data.date}
                onChange={e => update({ date: e.target.value, time: '' })}
                style={inputStyle}
              />
            </div>

            {data.date && (
              <div>
                <label style={labelStyle}>Start time</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {workshop.slots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => update({ time: slot })}
                      style={{
                        padding: '10px 20px', cursor: 'pointer', borderRadius: 4,
                        fontFamily: fonts.sans, fontSize: 14, fontWeight: 500,
                        backgroundColor: data.time === slot ? colors.greenDeep : colors.paper,
                        color: data.time === slot ? colors.paper : colors.ink,
                        border: `1.5px solid ${data.time === slot ? colors.greenDeep : colors.line}`,
                        transition: 'all 0.15s',
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label style={labelStyle}>Number of guests</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 12 }}>
                <button
                  onClick={() => update({ guests: Math.max(1, data.guests - 1) })}
                  style={{
                    width: 40, height: 40, border: `1px solid ${colors.line}`,
                    backgroundColor: colors.paper, cursor: 'pointer', borderRadius: 4,
                    fontFamily: fonts.sans, fontSize: 20, color: colors.ink,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  −
                </button>
                <span style={{ fontFamily: fonts.serif, fontSize: 32, color: colors.ink, minWidth: 32, textAlign: 'center', lineHeight: 1 }}>
                  {data.guests}
                </span>
                <button
                  onClick={() => update({ guests: Math.min(workshop.maxGuests, data.guests + 1) })}
                  style={{
                    width: 40, height: 40, border: `1px solid ${colors.line}`,
                    backgroundColor: colors.paper, cursor: 'pointer', borderRadius: 4,
                    fontFamily: fonts.sans, fontSize: 20, color: colors.ink,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  +
                </button>
                <span style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.inkSoft }}>
                  Max {workshop.maxGuests}
                </span>
              </div>
              <p style={{ fontFamily: fonts.sans, fontSize: 14, color: colors.inkSoft }}>
                {data.guests} × ¥{workshop.price.toLocaleString()} = <strong style={{ color: colors.ink }}>¥{(workshop.price * data.guests).toLocaleString()}</strong>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Contact */}
      {step === 'contact' && (
        <div>
          <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, color: colors.ink, marginBottom: 32, letterSpacing: '-0.02em' }}>
            Your details.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label style={labelStyle}>Full name</label>
              <input
                type="text"
                value={data.name}
                onChange={e => update({ name: e.target.value })}
                placeholder="Your name"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                value={data.email}
                onChange={e => update({ email: e.target.value })}
                placeholder="you@example.com"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Phone number</label>
              <input
                type="tel"
                value={data.phone}
                onChange={e => update({ phone: e.target.value })}
                placeholder="+1 234 567 8900"
                style={inputStyle}
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Review */}
      {step === 'review' && workshop && (
        <div>
          <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, color: colors.ink, marginBottom: 32, letterSpacing: '-0.02em' }}>
            Review your reservation.
          </h2>
          <div style={{ border: `1px solid ${colors.line}`, borderRadius: 4, overflow: 'hidden', marginBottom: 28 }}>
            {[
              { label: 'Workshop', value: `${workshop.name} · ${workshop.japanese}` },
              { label: 'Duration', value: workshop.duration },
              { label: 'Date', value: data.date },
              { label: 'Time', value: data.time },
              { label: 'Guests', value: `${data.guests} ${data.guests === 1 ? 'person' : 'people'}` },
              { label: 'Name', value: data.name },
              { label: 'Email', value: data.email },
              { label: 'Phone', value: data.phone },
              ...('location' in workshop ? [{ label: 'Location', value: workshop.location }] : []),
            ].map((row, i, arr) => (
              <div
                key={row.label}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 20px',
                  borderBottom: i < arr.length - 1 ? `1px solid ${colors.line}` : 'none',
                  backgroundColor: i % 2 === 0 ? colors.paper : colors.paperAlt,
                  gap: 16,
                }}
              >
                <span style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.inkSoft, flexShrink: 0 }}>
                  {row.label}
                </span>
                <span style={{ fontFamily: fonts.sans, fontSize: 15, color: colors.ink, textAlign: 'right' }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '20px 0', borderTop: `2px solid ${colors.greenDeep}`, marginBottom: 24 }}>
            <span style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.inkSoft }}>
              Total
            </span>
            <span style={{ fontFamily: fonts.serif, fontSize: 36, fontWeight: 400, color: colors.ink }}>
              ¥{total.toLocaleString()}
            </span>
          </div>

          <p style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.inkSoft, lineHeight: 1.65, opacity: 0.85 }}>
            You will continue to Square to pay securely in English. Your reservation is confirmed after payment. Please cancel at least one day in advance if your plans change.
          </p>
        </div>
      )}

      {/* Navigation */}
      {submitError && (
        <p style={{ fontFamily: fonts.sans, fontSize: 13, color: '#c0392b', marginTop: 16, textAlign: 'center' }}>
          {submitError}
        </p>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32, paddingTop: 28, borderTop: `1px solid ${colors.line}` }}>
        {stepIndex > 0 ? (
          <button
            onClick={back}
            disabled={submitting}
            style={{ background: 'none', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer', fontFamily: fonts.sans, fontSize: 14, color: colors.inkSoft, padding: 0, opacity: submitting ? 0.4 : 1 }}
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        <button
          onClick={next}
          disabled={!canNext() || submitting}
          style={{
            ...primaryBtn,
            opacity: canNext() && !submitting ? 1 : 0.35,
            cursor: canNext() && !submitting ? 'pointer' : 'not-allowed',
            minWidth: 180,
          }}
        >
          {submitting ? 'Opening Square…' : step === 'review' ? 'Continue to secure payment' : 'Continue →'}
        </button>
      </div>
    </div>
  )
}
