import FadeSection from '../components/FadeSection'
import Accordion from '../components/Accordion'
import { colors, fonts, eyebrow, display, primaryBtn, sectionPad, container } from '../lib/styles'
import familyImg from '../imports/chopsticks-hero-guests.png'
import purpleHeartImg from '../imports/images-8.jpeg'
import woodsImg from '../imports/caption__2_.jpg'
import planingImg from '../imports/caption-1-1.jpg'
import sandImg from '../imports/images-3-1.jpeg'
import engraveImg from '../imports/da.jpg'
import oilImg from '../imports/caption-4.jpg'

const woods = [
  { name: 'Hinoki', japanese: '檜', lasts: '~1 year', character: 'Soft, pale, smells like a bathhouse. Shows the marks of use.', included: 'Included', img: 'https://images.unsplash.com/photo-1611072337226-1140ab367200?w=400&h=400&fit=crop&auto=format&q=80' },
  { name: 'Cherry', japanese: '桜', lasts: '1–2 years', character: 'Warm pink-brown. Deepens in colour as it ages.', included: 'Upgrade', img: 'https://images.unsplash.com/photo-1621295693450-080546d2ec8e?w=400&h=400&fit=crop&auto=format&q=80' },
  { name: 'Walnut', japanese: 'ウォールナット', lasts: '2–3 years', character: 'Deep chocolate brown. Resists staining that lighter woods absorb.', included: 'Upgrade', img: 'https://images.unsplash.com/photo-1732505385271-0e1fbad47bf1?w=400&h=400&fit=crop&auto=format&q=80' },
  { name: 'Keyaki', japanese: '欅', lasts: '3–5 years', character: 'Japanese zelkova. The same wood used in temple construction.', included: 'Upgrade', img: 'https://images.unsplash.com/photo-1644931551533-02906718127f?w=400&h=400&fit=crop&auto=format&q=80' },
  { name: 'White Oak', japanese: 'ホワイトオーク', lasts: '4–6 years', character: 'Tight grain, almost no porosity. Takes the longest to make.', included: 'Upgrade', img: 'https://images.unsplash.com/photo-1644925757334-d0397c01518c?w=400&h=400&fit=crop&auto=format&q=80' },
  { name: 'Purple Heart', japanese: 'パープルハート', lasts: 'Longest', character: 'Colour deepens from bright purple to a settled tone over months.', included: 'Upgrade', img: purpleHeartImg },
]

const steps = [
  {
    num: '01', title: 'Choose your wood',
    body: 'We lay all six woods out for you to hold before you decide. The difference in weight and texture is immediately obvious. Pick the one that feels right in your hand.',
    img: woodsImg,
  },
  {
    num: '02', title: 'Plane',
    body: 'A square block becomes a rough octagon with the kanna — a Japanese hand plane set at a fixed angle. This takes most of the session. You will find your rhythm. The shavings accumulate under the workbench.',
    img: planingImg,
  },
  {
    num: '03', title: 'Sand',
    body: 'Three grades of sandpaper, coarse through to fine. Each pass removes the marks left by the previous one. You will know you are done when you can no longer feel the facets under your thumb.',
    img: sandImg,
  },
  {
    num: '04', title: 'Engrave',
    body: 'A name, a date, a short phrase. Any language. Vertical or horizontal. Popular with couples on honeymoon, and with anyone who has a gift to give and has not yet decided what.',
    img: engraveImg,
    note: 'Engraving is available at an additional charge and is not included in the base price.',
  },
  {
    num: '05', title: 'Oil',
    body: 'A coat of food-safe finishing oil, applied by hand and worked into the grain. The wood darkens and the grain opens up. Give it a few minutes to absorb. Then you take them home.',
    img: oilImg,
  },
]

const faqItems = [
  {
    question: 'Do I need to book?',
    answer: 'No. Walk-ins are welcome every day. That said, weekend afternoons between 14:00 and 16:00 tend to fill up, so a booking for that window is worth making. Booking is also required for groups of six or more.',
  },
  {
    question: 'How long does it really take?',
    answer: 'Forty-five minutes is realistic for Hinoki or Cherry, worked steadily. Ninety minutes is realistic for Purple Heart, which is genuinely hard. Most guests finish somewhere in between. There is no pressure to hurry.',
  },
  {
    question: 'Can children do this?',
    answer: 'Age 7 and up. Children under 12 should be accompanied by an adult who can assist with the planing. The tools are sharp and the technique takes a few minutes to learn, but most children manage well once they get the angle right. [TODO: confirm exact age policy]',
  },
  {
    question: 'Is there dust?',
    answer: 'Yes, there is wood dust, particularly when sanding. We provide masks on request. If you have a dust sensitivity, let us know when you arrive.',
  },
  {
    question: 'Can I bring my own wood?',
    answer: 'No. All wood is provided in the workshop. We supply six options for you to choose from on arrival.',
  },
  {
    question: 'Can I take them on a plane?',
    answer: 'Yes. Chopsticks are permitted in both checked luggage and carry-on baggage.',
  },
  {
    question: 'Do you ship?',
    answer: 'No. We do not offer shipping. Your chopsticks go home with you on the day.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Please cancel at least one day in advance. If you are running late, let us know as early as possible so we can hold your spot.',
  },
  {
    question: 'How do I take care of them?',
    answer: 'Rub them lightly with any edible oil — sesame, olive, vegetable — once a month or every three months. A small amount on a cloth, worked into the wood, then left to absorb. They can go in the dishwasher, though hand washing extends the finish.',
  },
]

export default function ChopsticksPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <main style={{ backgroundColor: colors.paper }}>
      {/* HERO — split layout */}
      <section style={{ paddingTop: 80 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            minHeight: '80vh',
          }}
        >
          <div style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 600 }}>
            <p style={eyebrow}>Chopstick Making</p>
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
              Make chopsticks from raw wood.
            </h1>
            <p style={{ fontFamily: fonts.sans, fontSize: 18, lineHeight: 1.65, color: colors.inkSoft, marginBottom: 36 }}>
              60 minutes · English spoken · From ¥4,000
            </p>
            <div>
              <button onClick={() => onNavigate('book')} style={primaryBtn}>Book Direct</button>
            </div>
          </div>
          <div style={{ position: 'relative', minHeight: 400, backgroundColor: colors.paperAlt }}>
            <img
              src={familyImg}
              alt="Guests holding their finished handmade chopsticks at the workshop"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* FACTS STRIP */}
      <FadeSection>
        <div
          style={{
            borderTop: `1px solid ${colors.line}`,
            borderBottom: `1px solid ${colors.line}`,
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Duration', value: '60 minutes' },
            { label: 'Price from', value: '¥4,000' },
            { label: 'Languages', value: 'English' },
          ].map((fact, i) => (
            <div
              key={fact.label}
              style={{
                flex: '1 1 160px',
                padding: '24px 28px',
                borderRight: i < 2 ? `1px solid ${colors.line}` : 'none',
              }}
            >
              <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft, marginBottom: 6 }}>{fact.label}</p>
              <p style={{ fontFamily: fonts.serif, fontSize: 20, color: colors.ink }}>{fact.value}</p>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* WOOD CARDS */}
      <section style={{ ...sectionPad }}>
        <div style={container}>
          <FadeSection>
            <p style={eyebrow}>Six Woods</p>
            <h2 style={{ ...display('clamp(28px, 4vw, 48px)'), marginBottom: 16 }}>The wood decides everything.</h2>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.65, color: colors.inkSoft, maxWidth: '62ch', marginBottom: 12 }}>
              Only Hinoki is included in the base price. The other five are an upgrade. You choose after holding all six — nobody picks the one they expected to.
            </p>
          </FadeSection>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: 24,
              marginTop: 48,
            }}
          >
            {woods.map((wood, i) => (
              <FadeSection key={wood.name} delay={i * 0.04}>
                <div style={{ border: `1px solid ${colors.line}`, overflow: 'hidden', backgroundColor: colors.paper, height: '100%' }}>
                  {/* Photo slot — replace with macro grain shot of each wood */}
                  <div
                    style={{
                      position: 'relative',
                      paddingTop: '133%',
                      backgroundColor: colors.paperAlt,
                    }}
                  >
                    <img
                      src={wood.img}
                      alt={`${wood.name} wood grain — ${wood.japanese}`}
                      loading="lazy"
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                      <div>
                        <p style={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 400, color: colors.ink, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{wood.name}</p>
                        <p style={{ fontFamily: fonts.sans, fontSize: 12, color: colors.inkSoft, marginTop: 2 }}>{wood.japanese}</p>
                      </div>
                      {wood.included === 'Included' && (
                        <span style={{ fontFamily: fonts.sans, fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 8px', backgroundColor: colors.greenPale, color: colors.greenDeep, borderRadius: 2, flexShrink: 0, marginTop: 2 }}>
                          Included
                        </span>
                      )}
                    </div>
                    <p style={{ fontFamily: fonts.sans, fontSize: 13, lineHeight: 1.6, color: colors.inkSoft, marginBottom: 12 }}>{wood.character}</p>
                    <p style={{ fontFamily: fonts.sans, fontSize: 12, color: colors.wood, fontWeight: 500 }}>Lasts {wood.lasts}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* FULL PROCESS */}
      <section style={{ ...sectionPad, backgroundColor: colors.paperAlt }}>
        <div style={container}>
          <FadeSection>
            <p style={eyebrow}>The process</p>
            <h2 style={{ ...display('clamp(28px, 4vw, 48px)'), marginBottom: 16 }}>Every step, in full.</h2>
          </FadeSection>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80, marginTop: 64 }}>
            {steps.map((step, i) => (
              <FadeSection key={step.num}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 48,
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <span style={{ fontFamily: fonts.serif, fontSize: 72, fontWeight: 400, color: colors.greenPale, display: 'block', lineHeight: 1, marginBottom: 16 }}>{step.num}</span>
                    <h3 style={{ fontFamily: fonts.serif, fontSize: 28, fontWeight: 400, letterSpacing: '-0.02em', color: colors.ink, marginBottom: 16, lineHeight: 1.1 }}>{step.title}</h3>
                    <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.7, color: colors.inkSoft, maxWidth: '48ch' }}>{step.body}</p>
                    {step.note && <p style={{ fontFamily: fonts.sans, fontSize: 12, color: colors.inkSoft, opacity: 0.65, marginTop: 10 }}>{step.note}</p>}
                  </div>
                  <div>
                    <div style={{ position: 'relative', paddingTop: '66.67%', backgroundColor: colors.line }}>
                      <img
                        src={step.img}
                        alt={`Step ${step.num}: ${step.title}`}
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

      {/* ENGRAVING */}
      <section style={{ ...sectionPad }}>
        <div style={container}>
          <FadeSection>
            <h2 style={{ ...display('clamp(28px, 4vw, 48px)'), marginBottom: 24 }}>Whatever you want, in whatever direction.</h2>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.65, color: colors.inkSoft, maxWidth: '55ch', marginBottom: 16 }}>
              Any language. Vertical or horizontal. Names, dates, short messages. The engraving machine can handle Roman letters, kanji, hangul, Arabic script, and most other character sets.
            </p>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.65, color: colors.inkSoft, maxWidth: '55ch', marginBottom: 48 }}>
              Popular with couples on honeymoon, and with anyone who has to buy a gift and has not yet found one.
            </p>
          </FadeSection>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 1,
              backgroundColor: colors.line,
            }}
          >
            {[
              'https://images.unsplash.com/photo-1628338243893-056573e389ea?w=400&h=400&fit=crop&auto=format&q=80',
              'https://images.unsplash.com/photo-1583418007992-a8e33a92e7ad?w=400&h=400&fit=crop&auto=format&q=80',
              'https://images.unsplash.com/photo-1697507695420-04623ccff2af?w=400&h=400&fit=crop&auto=format&q=80',
              'https://images.unsplash.com/photo-1621295693450-080546d2ec8e?w=400&h=400&fit=crop&auto=format&q=80',
              'https://images.unsplash.com/photo-1522092663698-61ab4b1aa6a7?w=400&h=400&fit=crop&auto=format&q=80',
              'https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?w=400&h=400&fit=crop&auto=format&q=80',
            ].map((src, i) => (
              <div key={i} style={{ position: 'relative', paddingTop: '100%', backgroundColor: colors.paperAlt }}>
                <img
                  src={src}
                  alt={`Engraved chopsticks example ${i + 1}`}
                  loading="lazy"
                  width={400}
                  height={400}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...sectionPad, backgroundColor: colors.paperAlt }}>
        <div style={{ ...container, maxWidth: 720 }}>
          <FadeSection>
            <p style={eyebrow}>Good to know</p>
            <h2 style={{ ...display('clamp(24px, 3vw, 40px)'), marginBottom: 48 }}>Common questions.</h2>
          </FadeSection>
          <FadeSection>
            <Accordion items={faqItems} />
          </FadeSection>
        </div>
      </section>

      {/* BOOKING CTA */}
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
                  Open every day, 10:00 to 19:00.
                </h2>
                <p
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 17,
                    lineHeight: 1.65,
                    color: colors.inkSoft,
                    maxWidth: '46ch',
                    marginBottom: 32,
                  }}
                >
                  Walk-ins welcome. Booking ahead guarantees your spot and wood choice. Most days we can start you within fifteen minutes of arrival.
                </p>
                <p style={{ fontFamily: fonts.sans, fontSize: 14, color: colors.inkSoft }}>
                  Or call us:{' '}
                  <a
                    href="tel:+818022036353"
                    style={{ color: colors.greenDeep, textDecoration: 'underline' }}
                  >
                    +81 80-2203-6353
                  </a>
                </p>
              </div>

              <button onClick={() => onNavigate('book')} style={{ ...primaryBtn, marginTop: 8 }}>Reserve a Spot</button>
            </div>
          </FadeSection>
        </div>
      </section>
    </main>
  )
}
