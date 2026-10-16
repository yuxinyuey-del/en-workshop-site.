import { useState, useEffect, useRef } from 'react'
import { colors, fonts } from '../lib/styles'
import { SQUARE_BOOKING_URL } from '../lib/constants'

interface BookingWidgetProps {
  fullWidth?: boolean
}

export default function BookingWidget({ fullWidth = false }: BookingWidgetProps) {
  const [loaded, setLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Detect when Square's iframe content is interactive.
  // Square's embed is a plain iframe — we listen for load on our wrapper
  // and reveal after a minimum delay to avoid a flash of skeleton.
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  const outerMaxWidth = fullWidth ? '100%' : 480

  return (
    <div
      style={{
        maxWidth: outerMaxWidth,
        width: '100%',
        border: `1px solid ${colors.line}`,
        borderRadius: 4,
        backgroundColor: colors.paperAlt,
        padding: 32,
        boxSizing: 'border-box',
      }}
    >
      {/* Pre-embed explanatory text */}
      <p
        style={{
          fontFamily: fonts.sans,
          fontSize: 14,
          lineHeight: 1.65,
          color: colors.inkSoft,
          marginBottom: 20,
        }}
      >
        Choose your session below. Full payment is taken at booking. Payments are processed by Square — we never see or store your card details.
      </p>

      {/* Embed container */}
      <div style={{ position: 'relative', minHeight: 400 }}>
        {/* Skeleton — visible until loaded */}
        {!loaded && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 2,
              overflow: 'hidden',
              zIndex: 1,
            }}
          >
            <style>{`
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.45; }
              }
              .skeleton-pulse {
                animation: pulse 1.6s ease-in-out infinite;
              }
            `}</style>
            <div
              className="skeleton-pulse"
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: colors.line,
                minHeight: 400,
              }}
            />
          </div>
        )}

        {/*
          SQUARE_APPOINTMENTS_EMBED
          ─────────────────────────────────────────────────────────────────
          Paste Square's official embed code below. Obtain it from:
          Square Dashboard → Appointments → Online Booking → Share → Embed
          Use the iframe or button widget Square provides.
          Do NOT rebuild this UI or call Square's API directly.
          ─────────────────────────────────────────────────────────────────
        */}
        <iframe
          ref={iframeRef}
          src={SQUARE_BOOKING_URL}
          title="Book a workshop — 縁 EN Kyoto (Square Appointments)"
          width="100%"
          height="700"
          frameBorder="0"
          scrolling="no"
          allow="payment"
          onLoad={() => setLoaded(true)}
          style={{
            display: 'block',
            border: 'none',
            borderRadius: 2,
            backgroundColor: '#ffffff',
            // Minimum height keeps the skeleton proportional on load.
            minHeight: 400,
            // iOS Safari fix: overflow:scroll + -webkit-overflow-scrolling
            // prevents the common "iframe content clipped" bug on mobile.
            WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
        {/* ── END SQUARE EMBED ── */}
      </div>

      {/* Fallback text */}
      <p
        style={{
          fontFamily: fonts.sans,
          fontSize: 13,
          lineHeight: 1.6,
          color: colors.inkSoft,
          marginTop: 20,
          paddingTop: 20,
          borderTop: `1px solid ${colors.line}`,
        }}
      >
        Widget not loading?{' '}
        <a
          href={SQUARE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: colors.greenDeep, textDecoration: 'underline' }}
        >
          Book directly on Square
        </a>
        , or call{' '}
        <a
          href="tel:+818022036353"
          style={{ color: colors.greenDeep, textDecoration: 'underline' }}
        >
          +81 80-2203-6353
        </a>
        .
      </p>
    </div>
  )
}
