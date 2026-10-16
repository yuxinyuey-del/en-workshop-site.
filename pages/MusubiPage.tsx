import FadeSection from '../components/FadeSection'
import Accordion from '../components/Accordion'
import { colors, fonts, eyebrow, display, primaryBtn, sectionPad, container } from '../lib/styles'
import ringsImg from '../imports/_____-1.png'

const MAP_URL = 'https://maps.app.goo.gl/Cfzphp9Tc2HtjZGt5?g_st=ic'

const steps = [
  {
    num: '01',
    title: 'Choose your coin',
    body: 'Start with the coin that will become your ring. Its lettering, texture, and patina remain visible, so every finished piece has a different character.',
  },
  {
    num: '02',
    title: 'Hammer and shape',
    body: 'Using workshop tools, you gradually work the coin into a ring. The process is hands-on and rhythmic; your instructor guides the pressure and angle at every stage.',
  },
  {
    num: '03',
    title: 'Size and finish',
    body: 'The ring is shaped to fit, then the edges and surface are carefully finished. You leave wearing a one-of-a-kind reminder of your time in Kyoto.',
  },
]

const faqItems = [
  {
    question: 'Is this the same location as 縁 EN?',
    answer: 'No. MUSUBI Coin Ring Making takes place at a separate workshop. Please use the Google Maps link on this page rather than the directions for 縁 EN.',
  },
  {
    question: 'Do I need jewellery-making experience?',
    answer: 'Not at all. The workshop is designed for first-time makers, and an instructor guides you through each step and helps with the specialist tools.',
  },
  {
    question: 'Can I take the ring home the same day?',
    answer: 'Yes. You complete and wear your finished coin ring home at the end of the session.',
  },
  {
    question: 'How much does it cost?',
    answer: 'The workshop is ¥4,500 per person. Secure payment is completed through Square when you book.',
  },
]

export default function MusubiPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <main style={{ backgroundColor: colors.paper }}>
      <section style={{ paddingTop: 80 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            minHeight: '80vh',
          }}
        >
          <div style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 620 }}>
            <p style={eyebrow}>MUSUBI · Coin Ring Making</p>
            <h1 style={{ ...display('clamp(36px, 5vw, 64px)'), marginBottom: 24 }}>
              Turn a real coin into a ring of your own.
            </h1>
            <p style={{ fontFamily: fonts.sans, fontSize: 18, lineHeight: 1.65, color: colors.inkSoft, maxWidth: '48ch', marginBottom: 18 }}>
              Hammer, shape, size, and finish a coin by hand. In one hour, it becomes a ring you can wear home from Kyoto.
            </p>
            <p style={{ fontFamily: fonts.sans, fontSize: 15, color: colors.inkSoft, marginBottom: 36 }}>
              60 minutes · ¥4,500 per person · English spoken
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20 }}>
              <button onClick={() => onNavigate('book')} style={primaryBtn}>Book Direct</button>
              <a href={MAP_URL} target="_blank" rel="noreferrer" style={{ fontFamily: fonts.sans, fontSize: 14, color: colors.greenDeep, textDecoration: 'underline' }}>
                Open workshop location →
              </a>
            </div>
          </div>
          <div style={{ position: 'relative', minHeight: 420, backgroundColor: colors.paperAlt }}>
            <img
              src={ringsImg}
              alt="Guests showing the coin rings they made at the MUSUBI workshop"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <FadeSection>
        <div style={{ borderTop: `1px solid ${colors.line}`, borderBottom: `1px solid ${colors.line}`, display: 'flex', flexWrap: 'wrap' }}>
          {[
            { label: 'Duration', value: '60 minutes' },
            { label: 'Price', value: '¥4,500' },
            { label: 'Take home', value: 'Your coin ring' },
            { label: 'Location', value: 'MUSUBI workshop' },
          ].map((fact, i) => (
            <div key={fact.label} style={{ flex: '1 1 180px', padding: '24px 28px', borderRight: i < 3 ? `1px solid ${colors.line}` : 'none' }}>
              <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft, marginBottom: 6 }}>{fact.label}</p>
              <p style={{ fontFamily: fonts.serif, fontSize: 20, color: colors.ink }}>{fact.value}</p>
            </div>
          ))}
        </div>
      </FadeSection>

      <section style={sectionPad}>
        <div style={{ ...container, maxWidth: 760 }}>
          <FadeSection>
            <p style={eyebrow}>A small object with a history</p>
            <h2 style={{ ...display('clamp(30px, 4vw, 48px)'), marginBottom: 28 }}>
              The details of the coin stay with you.
            </h2>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft, marginBottom: 20 }}>
              A coin already carries marks from the world it has travelled through. Rather than melting those details away, coin-ring making reshapes the metal so its lettering and pattern wrap around your finger.
            </p>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft }}>
              The finished ring is personal because you made it. Small differences in hammering and finish mean that no two pieces come out exactly the same.
            </p>
          </FadeSection>
        </div>
      </section>

      <section style={{ ...sectionPad, backgroundColor: colors.paperAlt }}>
        <div style={container}>
          <FadeSection>
            <p style={eyebrow}>The process</p>
            <h2 style={{ ...display('clamp(30px, 4vw, 48px)'), marginBottom: 64 }}>Coin to ring, in three stages.</h2>
          </FadeSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, backgroundColor: colors.line }}>
            {steps.map((step, i) => (
              <FadeSection key={step.num} delay={i * 0.06} style={{ height: '100%' }}>
                <div style={{ backgroundColor: colors.paper, padding: '40px 32px', minHeight: 280, height: '100%', boxSizing: 'border-box' }}>
                  <span style={{ display: 'block', fontFamily: fonts.serif, fontSize: 48, lineHeight: 1, color: colors.greenPale, marginBottom: 28 }}>{step.num}</span>
                  <h3 style={{ fontFamily: fonts.serif, fontSize: 28, fontWeight: 400, color: colors.ink, marginBottom: 16 }}>{step.title}</h3>
                  <p style={{ fontFamily: fonts.sans, fontSize: 15, lineHeight: 1.7, color: colors.inkSoft }}>{step.body}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionPad}>
        <div style={container}>
          <FadeSection>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'center' }}>
              <div>
                <p style={eyebrow}>Important · Separate venue</p>
                <h2 style={{ ...display('clamp(30px, 4vw, 46px)'), marginBottom: 24 }}>
                  MUSUBI has its own workshop location.
                </h2>
                <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.7, color: colors.inkSoft, maxWidth: '50ch', marginBottom: 32 }}>
                  Please do not go to the 縁 EN chopsticks workshop for this experience. Use the dedicated MUSUBI map below when planning your route.
                </p>
                <a href={MAP_URL} target="_blank" rel="noreferrer" style={{ ...primaryBtn, textDecoration: 'none' }}>
                  View MUSUBI on Google Maps
                </a>
              </div>
              <div style={{ border: `1px solid ${colors.line}`, backgroundColor: colors.paperAlt, padding: '40px 36px' }}>
                <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.wood, marginBottom: 18 }}>Before you travel</p>
                <p style={{ fontFamily: fonts.serif, fontSize: 26, lineHeight: 1.25, color: colors.ink, marginBottom: 16 }}>Check your confirmation email for the MUSUBI venue.</p>
                <p style={{ fontFamily: fonts.sans, fontSize: 14, lineHeight: 1.7, color: colors.inkSoft }}>The map link is also shown during booking and in your booking details.</p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      <section style={{ ...sectionPad, backgroundColor: colors.paperAlt }}>
        <div style={{ ...container, maxWidth: 760 }}>
          <FadeSection>
            <p style={eyebrow}>Good to know</p>
            <h2 style={{ ...display('clamp(28px, 4vw, 42px)'), marginBottom: 48 }}>Common questions.</h2>
          </FadeSection>
          <FadeSection><Accordion items={faqItems} /></FadeSection>
        </div>
      </section>

      <section style={{ padding: '88px 24px', backgroundColor: colors.greenDeep, textAlign: 'center' }}>
        <FadeSection>
          <p style={{ ...eyebrow, color: colors.greenPale }}>MUSUBI Coin Ring Making</p>
          <h2 style={{ ...display('clamp(32px, 5vw, 52px)'), color: colors.paper, marginBottom: 18 }}>Make something you will keep wearing.</h2>
          <p style={{ fontFamily: fonts.sans, fontSize: 16, lineHeight: 1.65, color: colors.greenPale, marginBottom: 32 }}>60 minutes · ¥4,500 per person · Separate MUSUBI venue</p>
          <button onClick={() => onNavigate('book')} style={{ ...primaryBtn, backgroundColor: colors.paper, color: colors.greenDeep }}>Reserve a Spot</button>
        </FadeSection>
      </section>
    </main>
  )
}
