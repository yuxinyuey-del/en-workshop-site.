import { useState, useEffect } from 'react'
import { fonts, colors, primaryBtn } from '../lib/styles'

interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

const navItems = [
  { label: 'Chopsticks', page: 'chopsticks' },
  { label: 'Kintsugi', page: 'kintsugi' },
  { label: 'Knives', page: 'knives' },
  { label: 'Coin Rings', page: 'musubi' },
  { label: 'Find Us', page: 'find-us' },
  { label: 'About', page: 'team' },
]

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavigate = (page: string) => {
    onNavigate(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0 })
  }

  const isHero = currentPage === 'home' && !scrolled
  const textColor = isHero ? colors.paper : colors.ink
  const logoGreen = isHero ? colors.paper : colors.greenDeep

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? colors.paper : 'transparent',
          borderBottom: scrolled ? `1px solid ${colors.line}` : 'none',
          transition: 'background-color 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <button
            onClick={() => handleNavigate('home')}
            style={{ display: 'flex', alignItems: 'baseline', gap: 8, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            aria-label="縁 EN — go to homepage"
          >
            <span style={{ fontFamily: fonts.mincho, fontSize: 28, fontWeight: 400, color: logoGreen, letterSpacing: '-0.02em', lineHeight: 1 }}>縁</span>
            <span style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: logoGreen }}>EN</span>
          </button>

          <nav className="hidden md:flex" style={{ gap: 32, alignItems: 'center' }} aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: fonts.sans,
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: currentPage === item.page ? (isHero ? colors.paper : colors.greenDeep) : textColor,
                  opacity: currentPage === item.page ? 1 : isHero ? 0.8 : 0.65,
                  transition: 'opacity 0.2s, color 0.2s',
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 20 }}>
            <button
              onClick={() => handleNavigate('book')}
              style={primaryBtn}
            >
              Book Direct
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 24,
                  height: 1.5,
                  backgroundColor: menuOpen ? colors.paper : textColor,
                  transition: 'transform 0.25s, opacity 0.25s',
                  transformOrigin: 'center',
                  transform: menuOpen
                    ? i === 0
                      ? 'translateY(6.5px) rotate(45deg)'
                      : i === 2
                        ? 'translateY(-6.5px) rotate(-45deg)'
                        : 'scaleX(0)'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: colors.greenDeep,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 36,
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: fonts.serif,
                fontSize: 36,
                fontWeight: 400,
                color: colors.paper,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavigate('book')}
            style={{
              marginTop: 16,
              backgroundColor: colors.paper,
              color: colors.greenDeep,
              border: 'none',
              cursor: 'pointer',
              padding: '14px 36px',
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
        </div>
      )}
    </>
  )
}
