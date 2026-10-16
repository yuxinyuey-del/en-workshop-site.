import FadeSection from '../components/FadeSection'
import { colors, fonts, eyebrow, sectionPad, container } from '../lib/styles'

const articles = [
  {
    category: '木 · Wood',
    title: 'Why Hinoki stays with you.',
    excerpt: 'Japanese cypress has been used in temples, baths, and kitchens for a thousand years. The reason is not nostalgia. It is the way the wood responds to use.',
    img: 'https://images.unsplash.com/photo-1611072337226-1140ab367200?w=800&h=560&fit=crop&auto=format&q=80',
    imgAlt: 'Japanese cypress wood grain — pale, close-grained, warm',
  },
  {
    category: '金継ぎ · Kintsugi',
    title: 'The break is not the end of the object.',
    excerpt: 'A cracked bowl in 15th century Japan was sent to China for repair. The staples that came back were considered ugly. What Japanese craftspeople developed instead changed how a broken thing could be understood.',
    img: 'https://images.unsplash.com/photo-1783192485616-90cc518983f7?w=800&h=560&fit=crop&auto=format&q=80',
    imgAlt: 'Ceramic bowl repaired with gold kintsugi seams',
  },
  {
    category: '包丁 · Knife',
    title: 'Single-bevel and why it matters.',
    excerpt: 'A Japanese kitchen knife is ground on one side only. This is not a design limitation. It is a choice that makes the blade sharper, longer-holding, and more honest about what sharpening actually is.',
    img: 'https://images.unsplash.com/photo-1583418007992-a8e33a92e7ad?w=800&h=560&fit=crop&auto=format&q=80',
    imgAlt: 'Whetstone surface during knife sharpening',
  },
]

export default function TeamPage({ onNavigate: _onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <main style={{ backgroundColor: colors.paper }}>
      {/* HEADER */}
      <section style={{ padding: '120px 24px 80px', borderBottom: `1px solid ${colors.line}` }}>
        <div style={{ ...container, maxWidth: 720 }}>
          <FadeSection>
            <p style={eyebrow}>記事 · Journal</p>
            <h1
              style={{
                fontFamily: fonts.serif,
                fontSize: 'clamp(32px, 5vw, 60px)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: colors.ink,
                marginBottom: 28,
              }}
            >
              Writing about craft.
            </h1>
            <p style={{ fontFamily: fonts.sans, fontSize: 19, lineHeight: 1.65, color: colors.inkSoft, maxWidth: '52ch' }}>
              Notes on wood, repair, and the things made by hand in Kyoto. Written by the people who run the workshop.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ARTICLES */}
      <section style={{ ...sectionPad }}>
        <div style={container}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, backgroundColor: colors.line }}>
            {articles.map((article, i) => (
              <FadeSection key={i} delay={i * 0.07}>
                <div
                  style={{
                    backgroundColor: colors.paper,
                    display: 'grid',
                    gridTemplateColumns: i % 2 === 0
                      ? 'minmax(320px, 1fr) minmax(240px, 480px)'
                      : 'minmax(240px, 480px) minmax(320px, 1fr)',
                    minHeight: 360,
                  }}
                >
                  {/* Text */}
                  <div
                    style={{
                      order: i % 2 === 0 ? 0 : 1,
                      padding: '56px 48px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: fonts.sans,
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: colors.greenDeep,
                        marginBottom: 20,
                      }}
                    >
                      {article.category}
                    </p>
                    <h2
                      style={{
                        fontFamily: fonts.serif,
                        fontSize: 'clamp(24px, 3vw, 36px)',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                        color: colors.ink,
                        marginBottom: 20,
                      }}
                    >
                      {article.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: fonts.sans,
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: colors.inkSoft,
                        maxWidth: '52ch',
                      }}
                    >
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Image */}
                  <div
                    style={{
                      order: i % 2 === 0 ? 1 : 0,
                      position: 'relative',
                      minHeight: 280,
                      backgroundColor: colors.paperAlt,
                    }}
                  >
                    <img
                      src={article.img}
                      alt={article.imgAlt}
                      loading="lazy"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE COMPANY */}
      <section style={{ ...sectionPad, backgroundColor: colors.paperAlt, borderTop: `1px solid ${colors.line}` }}>
        <div style={{ ...container, maxWidth: 720 }}>
          <FadeSection>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 32 }}>
              <span style={{ fontFamily: fonts.mincho, fontSize: 48, fontWeight: 400, color: colors.greenDeep, letterSpacing: '-0.02em', lineHeight: 1 }}>縁</span>
              <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft }}>EN Workshop</span>
            </div>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft, maxWidth: '60ch', marginBottom: 20 }}>
              縁 — pronounced "en" — is a Japanese word with no clean English equivalent. It refers to a tie or connection between people: the circumstances that bring two people together. The kind of thing that feels like coincidence but turns out to be more than that.
            </p>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft, maxWidth: '60ch', marginBottom: 40 }}>
              We run 縁 EN under 合同会社 Kushi Base. The workshop is in Shimogyo Ward, Kyoto, open every day.
            </p>
            <p style={{ fontFamily: fonts.sans, fontSize: 15, color: colors.inkSoft }}>
              Room 302, 3rd floor · Nihou Kyoto No.2 Building · Senshojicho · Shimogyo Ward · Kyoto 600-8076
            </p>
          </FadeSection>
        </div>
      </section>
    </main>
  )
}
