import FadeSection from '../components/FadeSection'
import Accordion from '../components/Accordion'
import { colors, fonts, eyebrow, display, primaryBtn, sectionPad, container } from '../lib/styles'
import sharpeningImg from '../imports/fa.jpg'

const stages = [
  {
    num: '01',
    title: 'Sharpening',
    body: 'A 三徳包丁 is single-bevel — the edge is ground on one side only. You work through a sequence of whetstones, coarse through fine. The angle is fixed; what changes is your consistency across the full length of the blade. This is slow, deliberate work. Most of the session is here.',
    img: sharpeningImg,
    imgAlt: 'Whetstone surface during knife sharpening',
  },
  {
    num: '02',
    title: 'Handle fitting',
    body: 'The handle is Japanese cypress — ヒノキ. Light, naturally moisture-resistant, and warm in the hand. You check the fit between blade and handle, and secure the tang so there is no movement. You will feel immediately if it is not right.',
    img: 'https://images.unsplash.com/photo-1611072337226-1140ab367200?w=700&h=467&fit=crop&auto=format&q=80',
    imgAlt: 'Japanese cypress wood — ヒノキ handle material',
  },
  {
    num: '03',
    title: 'Engraving',
    body: 'Laser engraving. Any script is supported — Roman letters, kanji, hiragana, katakana, Arabic, Korean, and others. A name, a date, a short phrase. Many guests engrave the Japanese form of their name and we can help find the right characters. Engraving is available at an additional charge.',
    img: 'https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?w=700&h=467&fit=crop&auto=format&q=80',
    imgAlt: 'Laser engraving being applied to a knife blade',
  },
]

const faqItems = [
  {
    question: 'Do I need to book?',
    answer: 'Yes. Group size is limited to 6 and we prepare knives and whetstones in advance for each session. Walk-ins are not accepted for this workshop.',
  },
  {
    question: 'Do I bring my own knife?',
    answer: 'No. A 三徳包丁 is provided for the session. You sharpen it, fit the handle, and engrave it — then take it home.',
  },
  {
    question: 'What knife will I be sharpening?',
    answer: 'A 三徳包丁 (santoku) — the all-purpose knife found in most Japanese home kitchens. We also offer a 菜切り包丁, a hand-forged carbon steel vegetable knife. Let us know your preference when you book.',
  },
  {
    question: 'How sharp will it be when I leave?',
    answer: 'You test the edge yourself at the end — a clean slice through a sheet of paper is the standard. A whetstone-sharpened single-bevel edge holds significantly longer than a factory-ground blade. You will be shown how to maintain it at home.',
  },
  {
    question: 'What is the handle material?',
    answer: 'Japanese cypress — ヒノキ. The traditional choice for Japanese kitchen knives: light, naturally moisture-resistant, and comfortable for long use. The same wood used in our Hinoki chopsticks.',
  },
  {
    question: 'Is the engraving laser or hand-done?',
    answer: 'Laser. Any script is supported — Roman letters, kanji, hiragana, katakana, Arabic, Korean, and others. We can help you find the right characters if you want to engrave your name in Japanese. Engraving is available at an additional charge and is not included in the base price.',
  },
  {
    question: 'Can I take the knife on a plane?',
    answer: 'Yes, but in checked luggage only — knives are not permitted in carry-on bags under international aviation rules. Pack it securely in your hold luggage. If you are unsure about your specific airline or destination, check with your carrier before you fly.',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Please cancel at least one day in advance. If you are running late, let us know as early as possible so we can hold your spot.',
  },
]

export default function KnivesPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <main style={{ backgroundColor: colors.paper }}>
      {/* HERO */}
      <section style={{ paddingTop: 80 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            minHeight: '80vh',
          }}
        >
          <div style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 600 }}>
            <p style={eyebrow}>包丁 · Japanese Knife</p>
            <h1
              style={{
                fontFamily: fonts.serif,
                fontSize: 'clamp(32px, 5vw, 60px)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: colors.ink,
                marginBottom: 24,
              }}
            >
              Sharpen a 三徳包丁 the right way.
            </h1>
            <p
              style={{
                fontFamily: fonts.sans,
                fontSize: 18,
                lineHeight: 1.65,
                color: colors.inkSoft,
                maxWidth: '46ch',
                marginBottom: 16,
              }}
            >
              Three stages: sharpening on whetstones, handle fitting, and engraving. You leave with a properly sharpened knife with your name on it.
            </p>
            <p style={{ fontFamily: fonts.sans, fontSize: 15, color: colors.inkSoft, marginBottom: 36 }}>
              60 minutes · From ¥15,000 · Up to 6 guests · English spoken
            </p>
            <div>
              <button onClick={() => onNavigate('book')} style={primaryBtn}>Book Direct</button>
            </div>
          </div>
          <div style={{ position: 'relative', minHeight: 400, backgroundColor: colors.paperAlt }}>
            <img
              src={sharpeningImg}
              alt="Hands sharpening a Japanese knife on a wet whetstone at 縁 EN workshop"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* FACTS STRIP */}
      <FadeSection>
        <div style={{ borderTop: `1px solid ${colors.line}`, borderBottom: `1px solid ${colors.line}`, display: 'flex', flexWrap: 'wrap' }}>
          {[
            { label: 'Duration', value: '60 minutes' },
            { label: 'Price from', value: '¥15,000' },
            { label: 'Group size', value: '6 max' },
            { label: 'Languages', value: 'English' },
            { label: 'Booking', value: 'Required' },
          ].map((fact, i) => (
            <div
              key={fact.label}
              style={{
                flex: '1 1 160px',
                padding: '24px 28px',
                borderRight: i < 4 ? `1px solid ${colors.line}` : 'none',
              }}
            >
              <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft, marginBottom: 6 }}>{fact.label}</p>
              <p style={{ fontFamily: fonts.serif, fontSize: 20, color: colors.ink }}>{fact.value}</p>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* WHAT YOU LEARN */}
      <section style={{ ...sectionPad }}>
        <div style={{ ...container, maxWidth: 720 }}>
          <FadeSection>
            <p style={eyebrow}>What you will learn</p>
            <h2 style={{ ...display('clamp(28px, 4vw, 44px)'), marginBottom: 24 }}>
              How a Japanese knife is actually sharpened.
            </h2>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft, maxWidth: '60ch', marginBottom: 20 }}>
              Most kitchen knives sold outside Japan are double-bevel, machine-ground, and lose their edge quickly. A 三徳包丁 is single-bevel — ground on one side only — which makes it sharper at a given angle and longer-holding, but requires a different technique to maintain.
            </p>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft, maxWidth: '60ch', marginBottom: 20 }}>
              In this session you learn the whetstone method used by Japanese home cooks and professional chefs. The knife goes home with you sharp, engraved, and ready to use.
            </p>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft, maxWidth: '60ch', marginBottom: 20 }}>
              Each knife is hand-crafted, so no two look exactly alike — the grain of the handle, the finish of the blade, and the weight in your hand will be your own.
            </p>
            <div style={{ borderLeft: `3px solid ${colors.greenPale}`, paddingLeft: 20, marginTop: 8 }}>
              <p style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 500, color: colors.ink, marginBottom: 6 }}>Also available: 菜切り包丁</p>
              <p style={{ fontFamily: fonts.sans, fontSize: 15, lineHeight: 1.65, color: colors.inkSoft, maxWidth: '52ch' }}>
                A 菜切り包丁 is a traditional Japanese vegetable knife — flat-edged, double-bevel, and purpose-built for clean vegetable cuts. Our 菜切り包丁 are hand-forged from carbon steel, which takes a finer edge than stainless. Ask when you book if you would like this option.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* THREE STAGES */}
      <section style={{ ...sectionPad, backgroundColor: colors.paperAlt }}>
        <div style={container}>
          <FadeSection>
            <p style={eyebrow}>The process</p>
            <h2 style={{ ...display('clamp(28px, 4vw, 48px)'), marginBottom: 16 }}>Three stages.</h2>
            <p
              style={{
                fontFamily: fonts.sans,
                fontSize: 17,
                lineHeight: 1.65,
                color: colors.inkSoft,
                maxWidth: '55ch',
                marginBottom: 72,
              }}
            >
              Sharpening is the core of the session. Handle fitting and engraving follow once the edge is right.
            </p>
          </FadeSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {stages.map((stage, i) => (
              <FadeSection key={stage.num}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 48,
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: fonts.serif,
                        fontSize: 72,
                        fontWeight: 400,
                        color: colors.greenPale,
                        display: 'block',
                        lineHeight: 1,
                        marginBottom: 16,
                      }}
                    >
                      {stage.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: fonts.serif,
                        fontSize: 32,
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        color: colors.ink,
                        marginBottom: 16,
                        lineHeight: 1.1,
                      }}
                    >
                      {stage.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: fonts.sans,
                        fontSize: 17,
                        lineHeight: 1.7,
                        color: colors.inkSoft,
                        maxWidth: '48ch',
                      }}
                    >
                      {stage.body}
                    </p>
                    {stage.title === 'Engraving' && (
                      <p style={{ fontFamily: fonts.sans, fontSize: 12, color: colors.inkSoft, opacity: 0.65, marginTop: 12 }}>
                        Not included in the base price — available at an additional charge.
                      </p>
                    )}
                  </div>
                  <div>
                    <div style={{ position: 'relative', paddingTop: '66.67%', backgroundColor: colors.line }}>
                      <img
                        src={stage.img}
                        alt={stage.imgAlt}
                        loading="lazy"
                        width={700}
                        height={467}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...sectionPad, backgroundColor: colors.paper }}>
        <div style={{ ...container, maxWidth: 720 }}>
          <FadeSection>
            <p style={eyebrow}>Good to know</p>
            <h2 style={{ ...display('clamp(24px, 3vw, 40px)'), marginBottom: 48 }}>
              Common questions.
            </h2>
          </FadeSection>
          <FadeSection>
            <Accordion items={faqItems} />
          </FadeSection>
        </div>
      </section>

      {/* BOOKING */}
      <section style={{ ...sectionPad, backgroundColor: colors.paperAlt }}>
        <div style={container}>
          <FadeSection>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 64,
                alignItems: 'flex-start',
              }}
            >
              <div>
                <h2 style={{ ...display('clamp(28px, 4vw, 44px)'), marginBottom: 20 }}>
                  Book the knife workshop.
                </h2>
                <p
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 17,
                    lineHeight: 1.65,
                    color: colors.inkSoft,
                    maxWidth: '44ch',
                    marginBottom: 32,
                  }}
                >
                  Booking is required — we prepare knives and whetstones for each session in advance. Open every day, 10:00–19:00.
                </p>
                <p style={{ fontFamily: fonts.sans, fontSize: 14, color: colors.inkSoft }}>
                  Questions?{' '}
                  <a href="tel:+818022036353" style={{ color: colors.greenDeep, textDecoration: 'underline' }}>
                    +81 80-2203-6353
                  </a>
                </p>
              </div>
              <button onClick={() => onNavigate('book')} style={{ ...primaryBtn, marginTop: 8 }}>Reserve a Spot</button>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CROSS-SELL */}
      <section style={{ padding: '64px 24px', borderTop: `1px solid ${colors.line}` }}>
        <div style={{ ...container, maxWidth: 680 }}>
          <FadeSection>
            <p style={eyebrow}>Also here</p>
            <p
              style={{
                fontFamily: fonts.sans,
                fontSize: 17,
                lineHeight: 1.65,
                color: colors.inkSoft,
                marginBottom: 20,
              }}
            >
              Some guests combine the knife workshop with a chopstick session the same afternoon. The two fit comfortably in a half-day.
            </p>
            <button
              onClick={() => onNavigate('chopsticks')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: fonts.sans,
                fontSize: 15,
                color: colors.greenDeep,
                padding: 0,
                textDecoration: 'underline',
              }}
            >
              Chopstick making workshop →
            </button>
          </FadeSection>
        </div>
      </section>
    </main>
  )
}
