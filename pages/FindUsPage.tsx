import { useState } from 'react'
import FadeSection from '../components/FadeSection'
import { colors, fonts, primaryBtn, secondaryBtn } from '../lib/styles'
import dir1 from '../imports/111.jpg'
import dir2 from '../imports/222.jpg'
import dir3 from '../imports/333.jpg'
import dir4 from '../imports/444.jpg'
import dir5 from '../imports/555.jpg'
import dir6 from '../imports/666.jpg'
import dir7 from '../imports/777.jpg'

export default function FindUsPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [copied, setCopied] = useState(false)

  const japaneseAddress = '〒600-8076 京都市下京区扇酒屋町 日宝京都2号館 302'

  const handleCopy = () => {
    navigator.clipboard.writeText(japaneseAddress).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const directions = [
    {
      n: 1,
      instruction: 'Come out of 四条駅 (Shijo station) at Exit 5. You will see a green サイゼリヤ restaurant sign immediately to your right as you surface.',
      img: dir1, pos: 'center center',
      alt: 'Exit 5 of Shijo subway station',
    },
    {
      n: 2,
      instruction: 'Turn left out of the exit. Walk with the サイゼリヤ sign behind you. Head straight along the street.',
      img: dir2, pos: 'center center',
      alt: 'Street outside Exit 5 — turn left and walk straight',
    },
    {
      n: 3,
      instruction: 'Cross the first crosswalk. You will pass a post office on your left — look for the red and white Japan Post sign (〒).',
      img: dir3, pos: 'center center',
      alt: 'Crosswalk with Japan Post sign on the left',
    },
    {
      n: 4,
      instruction: 'Turn right at the police box — a small grey building with a blue POLICE sign on the right side of the road.',
      img: dir4, pos: 'center center',
      alt: 'Police box on the right side of the road',
    },
    {
      n: 5,
      instruction: 'Continue straight. There is a shrine wall on your right. Keep going — you are nearly there.',
      img: dir5, pos: 'center center',
      alt: 'Street with shrine wall on the right',
    },
    {
      n: 6,
      instruction: 'At the intersection where you can see a Pizza Hut sign ahead, turn right. Do not cross.',
      img: dir6, pos: 'center center',
      alt: 'Intersection — Pizza Hut sign visible ahead, turn right',
    },
    {
      n: 7,
      instruction: 'Our building is on your left — 日宝京都2号館. Look for the directory board and the Chopstick Workshop sign on the wall. Enter and take the lift to the 3rd floor. Turn left. Room 302.',
      img: dir7, pos: 'center 65%',
      alt: 'Building entrance — 日宝京都2号館, Room 302',
    },
  ]

  return (
    <main style={{ backgroundColor: colors.paper, paddingTop: 80 }}>
      {/* TOP: Address above the fold */}
      <section style={{ padding: '64px 24px 48px', borderBottom: `1px solid ${colors.line}` }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h1
            style={{
              fontFamily: fonts.serif,
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: colors.ink,
              marginBottom: 32,
            }}
          >
            Room 302, 3rd floor.
          </h1>

          <div
            style={{
              backgroundColor: colors.greenPale,
              borderLeft: `4px solid ${colors.greenDeep}`,
              padding: '18px 20px',
              marginBottom: 24,
            }}
          >
            <p style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 600, lineHeight: 1.6, color: colors.greenDeep, marginBottom: 4 }}>
              These directions are only for Chopstick Making, Kintsugi, and Japanese Knife workshops.
            </p>
            <p style={{ fontFamily: fonts.sans, fontSize: 13, lineHeight: 1.6, color: colors.inkSoft }}>
              MUSUBI Coin Ring Making is held at a different location.{' '}
              <a
                href="https://maps.app.goo.gl/Cfzphp9Tc2HtjZGt5?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: colors.greenDeep, fontWeight: 600, textDecoration: 'underline' }}
              >
                Open the MUSUBI map →
              </a>
            </p>
          </div>

          <div
            style={{
              backgroundColor: colors.paperAlt,
              border: `1px solid ${colors.line}`,
              borderRadius: 4,
              padding: '28px 32px',
              marginBottom: 32,
            }}
          >
            <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft, marginBottom: 12 }}>
              Show this to your taxi driver
            </p>
            <p
              style={{
                fontFamily: fonts.zhSerif,
                fontSize: 18,
                lineHeight: 1.8,
                color: colors.ink,
                marginBottom: 20,
                userSelect: 'text',
              }}
            >
              {japaneseAddress}
            </p>
            <button
              onClick={handleCopy}
              style={{
                fontFamily: fonts.sans,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                backgroundColor: copied ? colors.greenPale : 'transparent',
                color: copied ? colors.greenDeep : colors.inkSoft,
                border: `1px solid ${copied ? colors.greenPale : colors.line}`,
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: 4,
                transition: 'all 0.2s',
              }}
            >
              {copied ? 'Copied' : 'Copy address'}
            </button>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="https://maps.google.com/?q=35.0003,135.7633"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...primaryBtn, textDecoration: 'none' }}
            >
              Open in Google Maps
            </a>
            <a
              href="tel:+818022036353"
              style={{ ...secondaryBtn, textDecoration: 'none' }}
            >
              Call us
            </a>
          </div>
        </div>
      </section>

      {/* THE LANDMARK */}
      <section style={{ padding: '80px 24px', borderBottom: `1px solid ${colors.line}` }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FadeSection>
            <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft, marginBottom: 20 }}>The building</p>
            <p style={{ fontFamily: fonts.sans, fontSize: 19, lineHeight: 1.65, color: colors.ink, marginBottom: 32 }}>
              Look for the directory board on the wall. Room 302 is listed. There is a Chopstick Workshop sign below it.
            </p>
            <div style={{ position: 'relative', paddingTop: '75%', backgroundColor: colors.paperAlt }}>
              <img
                src={dir7}
                alt="Building entrance — 日宝京都2号館 with directory board and workshop sign"
                loading="lazy"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 65%' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 16,
                  left: 16,
                  backgroundColor: 'rgba(34,64,47,0.9)',
                  color: colors.paper,
                  fontFamily: fonts.sans,
                  fontSize: 12,
                  padding: '6px 12px',
                  borderRadius: 2,
                }}
              >
                日宝京都2号館 · Room 302 · 3rd floor
              </div>
            </div>
            <p style={{ fontFamily: fonts.sans, fontSize: 15, color: colors.inkSoft, marginTop: 12, lineHeight: 1.6 }}>
              Enter the building, take the lift to 3F, turn left, Room 302 is on your left.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* STEP BY STEP */}
      <section style={{ padding: '80px 24px', borderBottom: `1px solid ${colors.line}` }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FadeSection>
            <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft, marginBottom: 20 }}>Step by step from 四条駅 · Shijo Station (Exit 5)</p>
            <p style={{ fontFamily: fonts.sans, fontSize: 15, color: colors.inkSoft, marginBottom: 48, lineHeight: 1.65 }}>
              Every instruction below describes what you will actually see — colors, shapes, and landmarks — so you do not need to read Japanese.
            </p>
          </FadeSection>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {directions.map((dir) => (
              <FadeSection key={dir.n}>
                <div style={{ position: 'relative', paddingTop: '75%', backgroundColor: colors.paperAlt, marginBottom: 20 }}>
                  <img
                    src={dir.img}
                    alt={dir.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: dir.pos }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      width: 40,
                      height: 40,
                      backgroundColor: colors.greenDeep,
                      color: colors.paper,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: fonts.sans,
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    {dir.n}
                  </div>
                </div>
                <p style={{ fontFamily: fonts.sans, fontSize: 16, lineHeight: 1.65, color: colors.ink }}>{dir.instruction}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.paperAlt, borderBottom: `1px solid ${colors.line}` }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FadeSection>
            <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft, marginBottom: 32 }}>Common mistakes</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                'Some listings say 2nd floor. They are wrong. We are on the 3rd floor.',
                'Do not knock on other workshops in the building to ask for directions — they are unrelated businesses. Look for the directory board outside and go straight to 3F.',
                'Use Exit 5 at Shijo station, not Exit 2. Exit 2 takes you in the wrong direction.',
              ].map((mistake, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: fonts.serif, fontSize: 20, color: colors.wood, flexShrink: 0, lineHeight: 1.4 }}>—</span>
                  <p style={{ fontFamily: fonts.sans, fontSize: 16, lineHeight: 1.65, color: colors.ink }}>{mistake}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* MAP EMBEDS */}
      <section style={{ padding: '80px 24px', borderBottom: `1px solid ${colors.line}` }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FadeSection>
            <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft, marginBottom: 24 }}>On the map</p>
            <div
              style={{
                width: '100%',
                paddingTop: '56.25%',
                position: 'relative',
                backgroundColor: colors.paperAlt,
                border: `1px solid ${colors.line}`,
                marginBottom: 16,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.5!2d135.7633!3d35.0003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z35.0003%2C135.7633!5e0!3m2!1sen!2sjp!4v1234567890"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing location of 縁 EN workshop in Kyoto"
              />
            </div>
            <a
              href="https://maps.google.com/?q=35.0003,135.7633"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: fonts.sans, fontSize: 14, color: colors.greenDeep, textDecoration: 'underline' }}
            >
              Open in Google Maps →
            </a>
          </FadeSection>
        </div>
      </section>

      {/* STILL LOST */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.greenDeep, textAlign: 'center' }}>
        <FadeSection>
          <p style={{ fontFamily: fonts.serif, fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 400, color: colors.paper, lineHeight: 1.4, marginBottom: 24 }}>
            Still cannot find us? Call +81 80-2203-6353.
          </p>
          <p style={{ fontFamily: fonts.sans, fontSize: 16, color: 'rgba(246,243,237,0.75)', marginBottom: 32 }}>
            We will come down and meet you at the entrance.
          </p>
          <a href="tel:+818022036353" style={{ ...primaryBtn, backgroundColor: colors.paper, color: colors.greenDeep, textDecoration: 'none' }}>
            Call now
          </a>
        </FadeSection>
      </section>
    </main>
  )
}
