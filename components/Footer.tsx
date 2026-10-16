import { fonts, colors } from '../lib/styles'

interface FooterProps {
  onNavigate: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const linkBtn: React.CSSProperties = {
    color: 'rgba(246,243,237,0.72)',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '3px 0',
    fontFamily: fonts.sans,
    fontSize: 14,
    lineHeight: 1.8,
    display: 'block',
    textAlign: 'left',
  }

  return (
    <footer style={{ backgroundColor: colors.greenDeep, color: colors.paper, padding: '80px 24px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px 40px',
            paddingBottom: 64,
            borderBottom: '1px solid rgba(221,214,201,0.2)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
              <span style={{ fontFamily: fonts.mincho, fontSize: 32, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1 }}>縁</span>
              <span style={{ fontFamily: fonts.sans, fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>EN</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(246,243,237,0.72)', maxWidth: 220, marginBottom: 20 }}>
              Chopstick making, kintsugi, and Japanese knife workshops in Kyoto, Shimogyo Ward.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: colors.wood, fontSize: 13, letterSpacing: 2 }}>★★★★★</span>
              <span style={{ fontSize: 13, color: 'rgba(246,243,237,0.72)' }}>4.9 · 948 reviews</span>
            </div>
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20, color: 'rgba(246,243,237,0.45)' }}>Workshops</p>
            <button onClick={() => onNavigate('chopsticks')} style={linkBtn}>Chopstick Making</button>
            <button onClick={() => onNavigate('kintsugi')} style={linkBtn}>Kintsugi</button>
            <button onClick={() => onNavigate('knives')} style={linkBtn}>Japanese Knives</button>
            <button onClick={() => onNavigate('musubi')} style={linkBtn}>MUSUBI Coin Rings</button>
            <button onClick={() => onNavigate('find-us')} style={{ ...linkBtn, marginTop: 16 }}>How to Find Us</button>
            <button onClick={() => onNavigate('team')} style={linkBtn}>About</button>
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20, color: 'rgba(246,243,237,0.45)' }}>Location</p>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: 'rgba(246,243,237,0.72)', marginBottom: 20 }}>
              Room 302, 3rd floor<br />
              Nihou Kyoto No.2 Building<br />
              Senshojicho, Shimogyo Ward<br />
              Kyoto 600-8076, Japan
            </p>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, color: 'rgba(246,243,237,0.45)' }}>Show this to your taxi driver</p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: colors.paper, marginBottom: 20, fontFamily: fonts.zhSerif }}>
              〒600-8076<br />京都市下京区扇酒屋町<br />日宝京都2号館 302
            </p>
            <p style={{ fontSize: 14, color: 'rgba(246,243,237,0.72)', marginBottom: 4 }}>
              <a href="tel:+818022036353" style={{ color: 'inherit', textDecoration: 'none' }}>+81 80-2203-6353</a>
            </p>
            <p style={{ fontSize: 14, color: 'rgba(246,243,237,0.72)', marginBottom: 16 }}>10:00–19:00, open every day</p>
            <a
              href="https://maps.google.com/?q=35.0003,135.7633"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, color: colors.greenPale, textDecoration: 'underline' }}
            >
              Open in Google Maps →
            </a>
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20, color: 'rgba(246,243,237,0.45)' }}>Follow</p>
            <a
              href="https://www.instagram.com/en_craftworkshop?igsh=MWJuc2VyMGVvZGY4"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 14, color: 'rgba(246,243,237,0.72)', display: 'block', marginBottom: 32, textDecoration: 'none' }}
            >
              Instagram →
            </a>
            <p style={{ fontSize: 13, color: 'rgba(246,243,237,0.55)', lineHeight: 1.7, maxWidth: 200 }}>
              We also run MUSUBI — coin ring workshops where you hammer a real coin into a ring you can wear home.
            </p>
          </div>
        </div>

        <div
          style={{
            paddingTop: 32,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: 12, color: 'rgba(246,243,237,0.35)' }}>合同会社 Kushi Base</p>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ fontSize: 12, color: 'rgba(246,243,237,0.35)', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ fontSize: 12, color: 'rgba(246,243,237,0.35)', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

