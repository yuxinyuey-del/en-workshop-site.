import { fonts, colors } from '../lib/styles'

interface MobileCTAProps {
  onNavigate: (page: string) => void
}

export default function MobileCTA({ onNavigate }: MobileCTAProps) {
  return (
    <div
      className="md:hidden"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        display: 'flex',
        gap: 12,
        padding: '12px 16px',
        backgroundColor: colors.paper,
        borderTop: `1px solid ${colors.line}`,
      }}
    >
      <button
        onClick={() => onNavigate('book')}
        style={{
          flex: 1,
          backgroundColor: colors.greenDeep,
          color: colors.paper,
          border: 'none',
          cursor: 'pointer',
          padding: 14,
          borderRadius: 4,
          fontFamily: fonts.sans,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        Book Direct
      </button>
      <button
        onClick={() => onNavigate('find-us')}
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          color: colors.ink,
          border: `1px solid ${colors.ink}`,
          cursor: 'pointer',
          padding: 14,
          borderRadius: 4,
          fontFamily: fonts.sans,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        How to Find Us
      </button>
    </div>
  )
}
