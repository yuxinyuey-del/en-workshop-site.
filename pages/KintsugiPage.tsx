import FadeSection from '../components/FadeSection'
import Accordion from '../components/Accordion'
import { colors, fonts, eyebrow, primaryBtn, sectionPad, container } from '../lib/styles'
import kintsugiHeroImg from '../imports/a1.jpg'
import kintsugiProcessImg from '../imports/a4.jpg'
import kintsugiGroupImg from '../imports/a2.jpg'
import kintsugiPlateImg from '../imports/02.jpg'

const gold = '#B8933F'

const faqItems = [
  {
    question: 'Do I need to book?',
    answer: 'Booking is recommended as the kintsugi workshop has limited places per session. Walk-ins are welcome when space is available.',
  },
  {
    question: 'Can I bring my own broken piece?',
    answer: 'Yes. Bring whatever you want repaired. Depending on the size and number of breaks, there may be an additional charge of ¥2,000–3,000. We will let you know before we start.',
  },
  {
    question: 'Do you use traditional urushi lacquer or modern synthetic resin?',
    answer: 'We use modern lacquer. It is safer to handle, dries faster, and produces a result that is visually identical. Traditional urushi requires a multi-week curing process that is not compatible with a same-day workshop.',
  },
  {
    question: 'Can I take the finished piece home the same day?',
    answer: 'Yes. The piece is ready to take home with you at the end of the session.',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Please cancel at least one day in advance. If you are running late, let us know as early as possible so we can hold your spot.',
  },
  {
    question: 'How do I care for the finished piece?',
    answer: 'Leave it wrapped and undisturbed for 7 days after the session to let the lacquer cure fully. After that it can be rinsed with cold water only — no soaking, no hot water, no dishwasher. The piece is decorative; it is not food safe and we do not recommend using it for food.',
  },
]

export default function KintsugiPage({ onNavigate }: { onNavigate: (p: string) => void }) {
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
            <p style={{ ...eyebrow, color: colors.inkSoft }}>Kintsugi</p>
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
              The crack is the point.
            </h1>
            <p style={{ fontFamily: fonts.sans, fontSize: 18, lineHeight: 1.65, color: colors.inkSoft, maxWidth: '52ch', marginBottom: 16 }}>
              Kintsugi is the Japanese practice of repairing broken ceramics with lacquer and gold. The repair is not hidden. It is the most valuable part of the object.
            </p>
            <p style={{ fontFamily: fonts.sans, fontSize: 15, color: colors.inkSoft, marginBottom: 36 }}>
              1 hr 30 min · From ¥5,000
            </p>
            <div>
              <button onClick={() => onNavigate('book')} style={primaryBtn}>Book Direct</button>
            </div>
          </div>
          <div style={{ position: 'relative', minHeight: 400, backgroundColor: colors.paperAlt }}>
            <img
              src={kintsugiHeroImg}
              alt="Hands holding a repaired 豆皿 — gold seam visible across the cobalt glaze"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 3,
                backgroundColor: gold,
              }}
            />
          </div>
        </div>
      </section>

      {/* FACTS STRIP */}
      <FadeSection>
        <div style={{ borderTop: `1px solid ${colors.line}`, borderBottom: `1px solid ${colors.line}`, display: 'flex', flexWrap: 'wrap' }}>
          {[
            { label: 'Duration', value: '1 hr 30 min' },
            { label: 'Price from', value: '¥5,000' },
            { label: 'Languages', value: 'English' },
          ].map((fact, i, arr) => (
            <div
              key={fact.label}
              style={{
                flex: '1 1 160px',
                padding: '24px 28px',
                borderRight: i < arr.length - 1 ? `1px solid ${colors.line}` : 'none',
              }}
            >
              <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft, marginBottom: 6 }}>{fact.label}</p>
              <p style={{ fontFamily: fonts.serif, fontSize: 20, color: colors.ink }}>{fact.value}</p>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* WHAT YOU MAKE */}
      <section style={{ ...sectionPad }}>
        <div style={{ ...container, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          <FadeSection>
            <p style={eyebrow}>What you will make</p>
            <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1, color: colors.ink, marginBottom: 24 }}>
              A repaired piece you take home.
            </h2>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.7, color: colors.inkSoft, marginBottom: 16 }}>
              We provide a 豆皿 — a small Japanese ceramic dish — as the piece for each session. Depending on your choice of plate, an additional fee may apply. You can also bring your own broken piece; depending on size and number of breaks, there may be an additional charge of ¥2,000–3,000, confirmed before you start.
            </p>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.7, color: colors.inkSoft }}>
              The gold fills the cracks and hardens. When it is done, the break becomes the defining feature of the piece. It is not camouflage. It is part of the object now. The finished piece goes home with you the same day.
            </p>
          </FadeSection>
          <FadeSection>
            <div style={{ position: 'relative', paddingTop: '100%', backgroundColor: colors.paperAlt }}>
              <img
                src={kintsugiPlateImg}
                alt="White ceramic plate repaired with gold kintsugi seams"
                loading="lazy"
                width={600}
                height={600}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, border: `2px solid ${gold}`, opacity: 0.25, pointerEvents: 'none' }} />
            </div>
          </FadeSection>
        </div>
      </section>

      {/* GROUP PHOTO */}
      <section style={{ lineHeight: 0 }}>
        <img
          src={kintsugiGroupImg}
          alt="Family group at the kintsugi workshop table in Kyoto"
          loading="lazy"
          style={{ width: '100%', maxHeight: 520, objectFit: 'cover', objectPosition: 'center 40%' }}
        />
      </section>

      {/* THE PHILOSOPHY */}
      <section style={{ ...sectionPad, backgroundColor: colors.paperAlt }}>
        <div style={{ ...container, maxWidth: 720 }}>
          <FadeSection>
            <p style={{ ...eyebrow, color: colors.inkSoft }}>The history</p>
            <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 400, letterSpacing: '-0.02em', color: colors.ink, marginBottom: 40, lineHeight: 1.1 }}>
              金継ぎ and the idea of wabi-sabi.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft }}>
                Kintsugi — 金継ぎ — emerged in 15th century Japan, reportedly after the shogun Ashikaga Yoshimasa sent a damaged tea bowl to China for repair and was dissatisfied with the metal staples returned. Japanese craftspeople developed a lacquer-and-gold method that made the repair visible rather than hidden.
              </p>
              <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft }}>
                The philosophy behind it is wabi-sabi — an aesthetic that finds value in imperfection and incompleteness. A repaired bowl is not a compromised bowl. The break is part of its history now, and the gold marks exactly where that history sits.
              </p>
              <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.75, color: colors.inkSoft }}>
                This workshop does not require any craft background. The technique is precise but learnable. What you take home is something that was broken and is now, in a specific and visible way, whole.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* PROCESS PHOTO */}
      <section style={{ lineHeight: 0 }}>
        <img
          src={kintsugiProcessImg}
          alt="Hands carefully holding a broken ceramic piece before repair"
          loading="lazy"
          style={{ width: '100%', maxHeight: 440, objectFit: 'cover', objectPosition: 'center 35%' }}
        />
      </section>

      {/* THE PROCESS */}
      <section style={{ ...sectionPad }}>
        <div style={container}>
          <FadeSection>
            <p style={eyebrow}>The process</p>
            <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(24px, 3vw, 44px)', fontWeight: 400, letterSpacing: '-0.02em', color: colors.ink, marginBottom: 16, lineHeight: 1.1 }}>
              Four steps.
            </h2>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.65, color: colors.inkSoft, maxWidth: '55ch', marginBottom: 64 }}>
              We use modern lacquer — safer to handle, faster to dry, and visually identical to the traditional result. The gold seam is real gold powder applied by hand.
            </p>
          </FadeSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, backgroundColor: colors.line, overflow: 'hidden', alignItems: 'stretch' }}>
            {[
              { num: '01', title: 'Break', body: 'You break the plate yourself. This is deliberate — the break is yours, which means the repair is yours too. We guide the technique so the pieces are workable.' },
              { num: '02', title: 'Reassemble', body: 'The pieces are fitted back together with superglue. This holds the form while you check the fit and prepares the seams for lacquer.' },
              { num: '03', title: 'Join', body: 'Lacquer mixed to the correct consistency is applied along each seam. The pieces are held while the lacquer sets and bonds.' },
              { num: '04', title: 'Gild', body: 'Gold powder is applied to the wet lacquer. As it dries, the seam hardens into something permanent.' },
            ].map((step) => (
              <FadeSection key={step.num} style={{ height: '100%' }}>
                <div style={{ backgroundColor: colors.paper, padding: '40px 32px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: fonts.serif, fontSize: 48, fontWeight: 400, color: colors.greenPale, display: 'block', lineHeight: 1, marginBottom: 20 }}>{step.num}</span>
                  <h3 style={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 400, color: colors.ink, marginBottom: 12, letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p style={{ fontFamily: fonts.sans, fontSize: 15, lineHeight: 1.65, color: colors.inkSoft, flex: 1 }}>{step.body}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...sectionPad, backgroundColor: colors.paperAlt }}>
        <div style={{ ...container, maxWidth: 720 }}>
          <FadeSection>
            <p style={eyebrow}>Good to know</p>
            <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 400, letterSpacing: '-0.02em', color: colors.ink, marginBottom: 48, lineHeight: 1.1 }}>
              Common questions.
            </h2>
          </FadeSection>
          <FadeSection>
            <Accordion items={faqItems} />
          </FadeSection>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section style={{ backgroundColor: colors.greenDeep, padding: '120px 24px', textAlign: 'center' }}>
        <FadeSection>
          <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, color: colors.paper, marginBottom: 24 }}>
            Open every day, 10:00 to 19:00.
          </h2>
          <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.65, color: 'rgba(246,243,237,0.8)', maxWidth: '46ch', margin: '0 auto 44px' }}>
            Booking ahead is recommended for the kintsugi workshop. Places are limited per session.
          </p>
          <button onClick={() => onNavigate('book')} style={{ ...primaryBtn, backgroundColor: colors.paper, color: colors.greenDeep, marginBottom: 20 }}>
            Book Direct
          </button>
          <br />
          <a href="tel:+818022036353" style={{ fontFamily: fonts.sans, fontSize: 15, color: 'rgba(246,243,237,0.65)', textDecoration: 'none' }}>
            Or call +81 80-2203-6353
          </a>
        </FadeSection>
      </section>

      {/* CROSS-SELL */}
      <section style={{ ...sectionPad, borderTop: `1px solid ${colors.line}` }}>
        <div style={{ ...container, maxWidth: 680 }}>
          <FadeSection>
            <p style={eyebrow}>While you are here</p>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.65, color: colors.inkSoft, marginBottom: 20 }}>
              Many guests do the chopstick workshop the same afternoon. The two sessions fit comfortably into a half-day.
            </p>
            <button
              onClick={() => onNavigate('chopsticks')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: fonts.sans, fontSize: 15, color: colors.greenDeep, padding: 0, textDecoration: 'underline' }}
            >
              Chopstick making workshop →
            </button>
          </FadeSection>
        </div>
      </section>
    </main>
  )
}
