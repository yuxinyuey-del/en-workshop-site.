import { useState } from 'react'
import FadeSection from '../components/FadeSection'
import { colors, fonts, primaryBtn } from '../lib/styles'
import musubiRingsImg from '../imports/_____-1.png'

interface RainyDayPageProps {
  onNavigate: (p: string) => void
  variant?: 'rain' | 'heat'
}

const rainEntries = [
  {
    n: 1,
    name: 'Make chopsticks from a block of Japanese wood',
    body: 'A sixty-minute workshop where you carve chopsticks from a raw square block of Japanese wood using a traditional hand plane. Indoors, air-conditioned, English spoken. The result goes home with you.',
    meta: 'Shimogyo Ward · From ¥4,000 · 60 min',
    link: 'chopsticks',
    linkLabel: 'See the chopstick workshop →',
    img: 'https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?w=680&h=453&fit=crop&auto=format&q=80',
    imgAlt: 'Craftsman at work in a Kyoto workshop',
  },
  {
    n: 2,
    name: 'Nishiki Market',
    body: 'A covered market running five blocks through central Kyoto. Vendors sell pickled vegetables, tofu, skewered fish, fresh mochi, and kitchen tools. Entirely roofed. It gets crowded; come before noon.',
    meta: 'Nakagyo Ward · Free to enter · 1–2 hr',
    link: null,
    img: 'https://images.unsplash.com/photo-1779883605139-e4365f48cc59?w=680&h=453&fit=crop&auto=format&q=80',
    imgAlt: 'Covered market with vendors and shoppers',
  },
  {
    n: 3,
    name: 'Kintsugi — repair broken ceramics with gold',
    body: 'Kintsugi workshops take a broken ceramic piece and repair it with lacquer and gold powder, making the cracks the most visible part of the object. Sessions run around ninety minutes, entirely indoors, and you leave with the repaired piece the same day.',
    meta: 'Shimogyo Ward · From ¥5,000 · 1 hr 30 min',
    link: 'kintsugi',
    linkLabel: 'See the kintsugi workshop →',
    img: 'https://images.unsplash.com/photo-1783192485616-90cc518983f7?w=680&h=453&fit=crop&auto=format&q=80',
    imgAlt: 'Ceramic dish repaired with gold kintsugi seams',
  },
  {
    n: 4,
    name: 'Sharpen a Japanese kitchen knife',
    body: 'Several craft workshops in Kyoto offer whetstone knife-sharpening sessions. You work through a sequence of stones on a 三徳包丁, finish with a paper test, and take the knife home sharp. Groups are small — typically six people — and English is spoken.',
    meta: 'Shimogyo Ward · From ¥15,000 · 60 min',
    link: 'knives',
    linkLabel: 'See the knife workshop →',
    img: 'https://images.unsplash.com/photo-1583418007992-a8e33a92e7ad?w=680&h=453&fit=crop&auto=format&q=80',
    imgAlt: 'Whetstone surface during knife sharpening',
  },
  {
    n: 5,
    name: 'Kyoto Railway Museum',
    body: 'A serious transport museum with real retired locomotives, a working steam train, and a detailed history of Japanese rail. The scale model room alone takes twenty minutes. Larger than it looks from outside.',
    meta: 'Shimogyo Ward · ¥1,200 adults · 2–3 hr',
    link: null,
    img: 'https://images.unsplash.com/photo-1561503972-839d0c56de17?w=680&h=453&fit=crop&auto=format&q=80',
    imgAlt: 'Kyoto street and buildings from street level',
  },
  {
    n: 6,
    name: 'Kyoto Aquarium',
    body: 'Fully indoor, with a large sea otter tank, a jellyfish section, and a penguin area. Not the largest aquarium in Japan, but well-maintained and genuinely worth the time on a wet afternoon.',
    meta: 'Shimogyo Ward · ¥2,050 adults · 2–3 hr',
    link: null,
    img: 'https://images.unsplash.com/photo-1664711414381-b0768d979223?w=680&h=453&fit=crop&auto=format&q=80',
    imgAlt: 'Interior display of a Japanese aquarium',
  },
  {
    n: 7,
    name: 'Hammer a real coin into a ring at MUSUBI',
    body: 'Choose a coin, then hammer, shape, size, and finish it into a one-of-a-kind ring. The workshop is entirely indoors and the finished piece goes home on your finger.',
    meta: 'Separate MUSUBI venue · ¥4,500 · 60 min',
    link: 'musubi',
    linkLabel: 'See the musubi workshop →',
    img: musubiRingsImg,
    imgAlt: 'Guests showing finished coin rings made at MUSUBI',
  },
  {
    n: 8,
    name: 'A tea ceremony',
    body: 'Several venues in central Kyoto offer English-language tea ceremonies in purpose-built tatami rooms. The ceremony takes about forty minutes. It is slow, formal, and genuinely calming. Book ahead; popular with the same crowd as you.',
    meta: 'Various locations · From ¥1,500 · 40 min',
    link: null,
    img: 'https://images.unsplash.com/photo-1644899391229-703510a95108?w=680&h=453&fit=crop&auto=format&q=80',
    imgAlt: 'Traditional tea ceremony setting',
  },
  {
    n: 9,
    name: 'Kyoto National Museum',
    body: 'The permanent collection spans Buddhist sculpture, lacquerware, textiles, and ceramics. The Heisei Chishinkan building — designed by Taniguchi Yoshio — is quietly spectacular. Check the special exhibition calendar.',
    meta: 'Higashiyama Ward · ¥700 adults · 2–3 hr',
    link: null,
    img: 'https://images.unsplash.com/photo-1543921162-9a0dc171d44f?w=680&h=453&fit=crop&auto=format&q=80',
    imgAlt: 'Museum exterior with courtyard',
  },
  {
    n: 10,
    name: 'Kyoto International Manga Museum',
    body: 'A former primary school converted into a library and exhibition space for manga. The walls are shelved floor to ceiling. You can sit on the lawn (covered) or in reading rooms. No Japanese required for the visual storytelling.',
    meta: 'Nakagyo Ward · ¥900 adults · 1–2 hr',
    link: null,
    img: 'https://images.unsplash.com/photo-1628338243893-056573e389ea?w=680&h=453&fit=crop&auto=format&q=80',
    imgAlt: 'Reading room with tall shelves of books',
  },
  {
    n: 11,
    name: 'A sento or onsen',
    body: 'Public bathhouses are a functional part of daily life in Kyoto, not a luxury item. A neighborhood sento costs around ¥490 and is entirely indoor. Bring or buy a small towel. Tattoo policies vary — check before you go.',
    meta: 'Citywide · From ¥490 · 1 hr',
    link: null,
    img: 'https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?w=680&h=453&fit=crop&auto=format&q=80',
    imgAlt: 'Quiet interior space for relaxation',
  },
  {
    n: 12,
    name: 'Department store basement food halls',
    body: 'Takashimaya, Daimaru, and Isetan all have basement food halls — depachika — worth an hour each. Kyoto specialties, pickles in bulk, wagashi in rows, prepared foods for dinner. Dry, warm, and free to browse.',
    meta: 'City centre · Free to enter · 1 hr',
    link: null,
    img: 'https://images.unsplash.com/photo-1773841040212-5dba1c146585?w=680&h=453&fit=crop&auto=format&q=80',
    imgAlt: 'Department store food hall with displays of prepared foods',
  },
  {
    n: 13,
    name: 'Kyoto Station and its indoor levels',
    body: 'The station building itself is worth visiting. It has a rooftop promenade, a Sky Garden terrace, an underground shopping street, restaurants on multiple levels, and a view north to the mountains. Everything is under one vast roof.',
    meta: 'Shimogyo Ward · Free to explore · 1–2 hr',
    link: null,
    img: 'https://images.unsplash.com/photo-1557153416-a32d90fe2a65?w=680&h=453&fit=crop&auto=format&q=80',
    imgAlt: 'Kyoto Station interior with wide concourse and light',
  },
]

export default function RainyDayPage({ onNavigate, variant = 'rain' }: RainyDayPageProps) {
  const [activeSection, setActiveSection] = useState<number | null>(null)

  const isHeat = variant === 'heat'
  const title = isHeat
    ? 'Where to go in Kyoto when it is 36 degrees.'
    : 'Thirteen indoor things to do in Kyoto when it rains.'
  const intro1 = isHeat
    ? 'Kyoto in summer is genuinely demanding. The humidity arrives in June and does not leave until September. Thirty-six degrees with high humidity is not comfortable for extended walking, and the most popular temple routes offer almost no shade.'
    : 'Kyoto in the rain is a specific kind of beautiful. The stone paths darken, the moss deepens, and the crowds thin out. But temple-hopping in a downpour is also genuinely miserable, particularly in June during the rainy season, which catches a lot of visitors out.'
  const intro2 = isHeat
    ? 'What follows is a list of places that are worth the time when being outdoors is not appealing. They are genuinely good options, not fallbacks.'
    : 'What follows is a practical list. These are not consolation prizes for a ruined day. Several of them are better in the rain than in the dry.'

  return (
    <main style={{ backgroundColor: colors.paper }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px',
          paddingTop: 96,
        }}
        className="lg-grid"
      >
        <style>{`
          @media (min-width: 1000px) {
            .lg-grid {
              grid-template-columns: 220px 1fr !important;
              gap: 80px !important;
            }
            .toc {
              display: block !important;
            }
          }
        `}</style>

        {/* TOC — sticky on desktop */}
        <aside className="toc" style={{ display: 'none' }}>
          <div style={{ position: 'sticky', top: 96, paddingTop: 64 }}>
            <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft, marginBottom: 20 }}>Contents</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {rainEntries.map((entry) => (
                <button
                  key={entry.n}
                  onClick={() => {
                    const el = document.getElementById(`entry-${entry.n}`)
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: fonts.sans,
                    fontSize: 13,
                    color: activeSection === entry.n ? colors.greenDeep : colors.inkSoft,
                    padding: '3px 0',
                    textAlign: 'left',
                    lineHeight: 1.4,
                  }}
                >
                  {entry.n}. {entry.name}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Article body */}
        <article style={{ paddingTop: 64, paddingBottom: 120 }}>
          <FadeSection>
            <p style={{ fontFamily: fonts.sans, fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft, marginBottom: 20 }}>
              {isHeat ? 'Kyoto · Summer heat guide' : 'Kyoto · Rainy day guide'}
            </p>
            <h1
              style={{
                fontFamily: fonts.serif,
                fontSize: 'clamp(28px, 4vw, 52px)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: colors.ink,
                marginBottom: 40,
              }}
            >
              {title}
            </h1>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft, maxWidth: '65ch', marginBottom: 20 }}>{intro1}</p>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft, maxWidth: '65ch', marginBottom: 64 }}>{intro2}</p>
            <p style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.inkSoft, fontStyle: 'italic', marginBottom: 64, borderLeft: `2px solid ${colors.line}`, paddingLeft: 16 }}>
              [TODO: verify all hours and prices before publishing. These can change without notice.]
            </p>
          </FadeSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {rainEntries.map((entry) => (
              <FadeSection key={entry.n}>
                <div id={`entry-${entry.n}`} style={{ scrollMarginTop: 96 }}>
                  <div style={{ position: 'relative', paddingTop: '56.25%', backgroundColor: colors.paperAlt, marginBottom: 28 }}>
                    <img
                      src={entry.img}
                      alt={entry.imgAlt}
                      loading="lazy"
                      width={680}
                      height={453}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        fontFamily: fonts.sans,
                        fontSize: 13,
                        fontWeight: 500,
                        color: colors.paper,
                        backgroundColor: colors.greenDeep,
                        padding: '4px 12px',
                        borderRadius: 2,
                      }}
                    >
                      {entry.n}
                    </div>
                  </div>
                  <h2
                    style={{
                      fontFamily: fonts.serif,
                      fontSize: 'clamp(22px, 3vw, 32px)',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: colors.ink,
                      marginBottom: 16,
                      lineHeight: 1.1,
                    }}
                  >
                    {entry.name}
                  </h2>
                  <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft, maxWidth: '65ch', marginBottom: 16 }}>
                    {entry.body}
                  </p>
                  <p style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.inkSoft, padding: '12px 0', borderTop: `1px solid ${colors.line}`, borderBottom: `1px solid ${colors.line}`, marginBottom: 16 }}>
                    {entry.meta}
                  </p>
                  {entry.link && (
                    <button
                      onClick={() => onNavigate(entry.link!)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: fonts.sans, fontSize: 14, color: colors.greenDeep, padding: 0, textDecoration: 'underline' }}
                    >
                      {entry.linkLabel}
                    </button>
                  )}
                </div>
              </FadeSection>
            ))}
          </div>

          {/* Where to shelter */}
          <FadeSection style={{ marginTop: 96, paddingTop: 48, borderTop: `1px solid ${colors.line}` }}>
            <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 400, letterSpacing: '-0.02em', color: colors.ink, marginBottom: 24, lineHeight: 1.1 }}>
              {isHeat ? 'Where to cool down near each area.' : 'Where to shelter near each area.'}
            </h2>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft, maxWidth: '65ch' }}>
              [TODO: add a short practical note per district — nearest covered arcade, underground passage, or indoor venue — so guests can orient themselves if the weather changes while they are out]
            </p>
          </FadeSection>

          {/* Booking CTA */}
          <FadeSection style={{ marginTop: 80 }}>
            <div style={{ backgroundColor: colors.greenDeep, padding: '48px 40px', borderRadius: 4 }}>
              <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(246,243,237,0.55)', marginBottom: 16 }}>While you are deciding</p>
              <p style={{ fontFamily: fonts.serif, fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 400, letterSpacing: '-0.02em', color: colors.paper, marginBottom: 20, lineHeight: 1.15 }}>
                We are open every day until 19:00. Walk-ins welcome.
              </p>
              <p style={{ fontFamily: fonts.sans, fontSize: 15, color: 'rgba(246,243,237,0.75)', marginBottom: 28 }}>
                Indoors, air-conditioned, and it smells like hinoki.
              </p>
              <button
                onClick={() => onNavigate('chopsticks')}
                style={{ ...primaryBtn, backgroundColor: colors.paper, color: colors.greenDeep }}
              >
                See the chopstick workshop
              </button>
            </div>
          </FadeSection>
        </article>
      </div>
    </main>
  )
}
