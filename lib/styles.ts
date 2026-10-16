import type { CSSProperties } from 'react'

export const fonts = {
  serif: "'Newsreader', Georgia, serif",
  sans: "'Inter', system-ui, sans-serif",
  zhSerif: "'Noto Serif TC', Georgia, serif",
  zhSans: "'Noto Sans TC', system-ui, sans-serif",
  mincho: "'Shippori Mincho', 'Noto Serif JP', Georgia, serif",
}

export const colors = {
  paper: '#F6F3ED',
  paperAlt: '#EDE8DE',
  ink: '#23211C',
  inkSoft: '#5C574E',
  greenDeep: '#22402F',
  greenPale: '#C7D4C0',
  wood: '#A9743F',
  line: '#DDD6C9',
}

export const eyebrow: CSSProperties = {
  fontFamily: fonts.sans,
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: colors.inkSoft,
  marginBottom: 16,
  display: 'block',
}

export const display = (size: string | number = 'clamp(36px, 5vw, 64px)'): CSSProperties => ({
  fontFamily: fonts.serif,
  fontSize: size,
  fontWeight: 400,
  letterSpacing: '-0.02em',
  lineHeight: 1.05,
  color: colors.ink,
})

export const primaryBtn: CSSProperties = {
  backgroundColor: colors.greenDeep,
  color: colors.paper,
  border: 'none',
  cursor: 'pointer',
  padding: '14px 28px',
  borderRadius: 4,
  fontFamily: fonts.sans,
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  display: 'inline-block',
}

export const secondaryBtn: CSSProperties = {
  backgroundColor: 'transparent',
  color: colors.ink,
  border: `1px solid ${colors.ink}`,
  cursor: 'pointer',
  padding: '14px 28px',
  borderRadius: 4,
  fontFamily: fonts.sans,
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  display: 'inline-block',
}

export const sectionPad: CSSProperties = {
  padding: '120px 24px',
}

export const container: CSSProperties = {
  maxWidth: 1200,
  margin: '0 auto',
}
