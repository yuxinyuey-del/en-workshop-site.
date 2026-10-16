import { useState } from 'react'
import { colors, fonts } from '../lib/styles'

interface AccordionItem {
  question: string
  answer: string
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ borderTop: `1px solid ${colors.line}` }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: `1px solid ${colors.line}` }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '22px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: 24,
            }}
          >
            <span style={{ fontFamily: fonts.sans, fontSize: 16, fontWeight: 500, color: colors.ink, lineHeight: 1.4 }}>{item.question}</span>
            <span style={{ color: colors.inkSoft, fontSize: 22, lineHeight: 1, flexShrink: 0 }}>{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: 24 }}>
              <p style={{ fontFamily: fonts.sans, fontSize: 16, lineHeight: 1.7, color: colors.inkSoft }}>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
