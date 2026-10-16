import FadeSection from '../components/FadeSection'
import { colors, fonts, eyebrow, display, primaryBtn, secondaryBtn, sectionPad, container } from '../lib/styles'
import heroImg from '../imports/home-hero-workshop.png'
import engraveImg from '../imports/da.jpg'
import groupImg from '../imports/chopsticks-hero-guests.png'
import oilImg from '../imports/caption-4.jpg'
import purpleHeartImg from '../imports/images-8.jpeg'
import buildingImg from '../imports/777.jpg'
import woodsImg from '../imports/caption__2_.jpg'
import planingImg from '../imports/caption-1-1.jpg'
import musubiRingsImg from '../imports/_____-1.png'
import sandImg from '../imports/images-3-1.jpeg'

type Nav = (page: string) => void

const woods = [
  { name: 'Hinoki', japanese: '檜', note: 'Replace roughly every year. Soft enough to show the marks of daily use — that is the point of a hinoki chopstick.', img: 'https://images.unsplash.com/photo-1611072337226-1140ab367200?w=400&h=400&fit=crop&auto=format&q=80' },
  { name: 'Cherry', japanese: '桜', note: 'One to two years of regular use. The warm pink-brown deepens as it ages.', img: 'https://images.unsplash.com/photo-1621295693450-080546d2ec8e?w=400&h=400&fit=crop&auto=format&q=80' },
  { name: 'Walnut', japanese: 'ウォールナット', note: 'Two to three years. Dense enough to resist the staining that lighter woods absorb over time.', img: 'https://images.unsplash.com/photo-1732505385271-0e1fbad47bf1?w=400&h=400&fit=crop&auto=format&q=80' },
  { name: 'Keyaki', japanese: '欅', note: 'Three to five years. The same wood used in temple construction, chosen for the same reasons.', img: 'https://images.unsplash.com/photo-1644931551533-02906718127f?w=400&h=400&fit=crop&auto=format&q=80' },
  { name: 'White Oak', japanese: 'ホワイトオーク', note: 'Four to six years. Tight grain, almost no porosity. Takes the longest to make; lasts accordingly.', img: 'https://images.unsplash.com/photo-1644925757334-d0397c01518c?w=400&h=400&fit=crop&auto=format&q=80' },
  { name: 'Purple Heart', japanese: 'パープルハート', note: 'The longest-lasting wood here. The colour deepens from bright purple to a darker, settled tone over months of use.', img: purpleHeartImg },
]

const steps = [
  { num: '01', title: 'Choose', desc: 'Pick your wood. Hold each one; they weigh different amounts.', img: woodsImg },
  { num: '02', title: 'Plane', desc: 'Square block to rough octagon with the kanna. This is the long part.', img: planingImg },
  { num: '03', title: 'Sand', desc: 'Three grits, coarse to fine, until the edges disappear under your thumb.', img: sandImg },
  { num: '04', title: 'Engrave', desc: 'Your name, a date, a message. Vertical or horizontal, your choice.', img: engraveImg, note: 'Engraving is available at an additional charge.' },
  { num: '05', title: 'Oil', desc: 'A coat of food-safe oil. The grain darkens. You take them home.', img: oilImg },
]

export default function HomePage({ onNavigate }: { onNavigate: Nav }) {
  return (
    <main>
      {/* SECTION 1 — HERO */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={heroImg}
          alt="Guests using Japanese hand planes to make chopsticks at 縁 EN workshop in Kyoto"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.42)' }} />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            padding: '0 24px',
            maxWidth: 700,
          }}
        >
          <h1
            style={{
              fontFamily: fonts.serif,
              fontSize: 'clamp(36px, 7vw, 72px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: colors.paper,
              marginBottom: 28,
            }}
          >
            You start with a square block of wood.
          </h1>
          <p
            style={{
              fontFamily: fonts.sans,
              fontSize: 19,
              lineHeight: 1.6,
              color: 'rgba(246,243,237,0.88)',
              maxWidth: 480,
              margin: '0 auto 40px',
            }}
          >
            Not a pre-shaped stick. Ninety minutes later, you walk out with chopsticks you actually made. Gion, Kyoto.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            <button onClick={() => onNavigate('book')} style={primaryBtn}>
              Book Direct
            </button>
            <button
              onClick={() => onNavigate('find-us')}
              style={{ ...secondaryBtn, color: colors.paper, borderColor: 'rgba(246,243,237,0.55)' }}
            >
              See how to find us
            </button>
          </div>
          <p style={{ fontFamily: fonts.sans, fontSize: 13, color: 'rgba(246,243,237,0.65)' }}>
            4.9 on Google · 948 reviews · Walk-ins welcome · English spoken
          </p>
        </div>
      </section>

      {/* SECTION 2 — THE DIFFERENCE */}
      <section style={{ backgroundColor: colors.paperAlt, padding: '120px 24px' }}>
        <FadeSection style={{ ...container }}>
          <p style={eyebrow}>What makes us different</p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              border: `1px solid ${colors.line}`,
            }}
          >
            <div style={{ padding: '48px 40px', borderRight: `1px solid ${colors.line}` }}>
              <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.inkSoft, marginBottom: 24 }}>Most workshops</p>
              <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.7, color: colors.inkSoft }}>
                You are handed a stick that has already been shaped by machine. You sand it, engrave it, and leave in thirty minutes.
              </p>
            </div>
            <div style={{ padding: '48px 40px' }}>
              <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.greenDeep, marginBottom: 24 }}>Here</p>
              <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.7, color: colors.ink }}>
                You are handed a square block and a kanna — a Japanese hand plane. You make every edge yourself. It takes forty-five to ninety minutes depending on the wood you choose. That is the point.
              </p>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* SECTION 3 — CHOOSE YOUR WOOD */}
      <section style={{ ...sectionPad, backgroundColor: colors.paper }}>
        <div style={container}>
          <FadeSection>
            <p style={eyebrow}>Six Woods</p>
            <h2 style={{ ...display('clamp(32px, 4vw, 56px)'), marginBottom: 16 }}>The wood decides how long these last.</h2>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.65, color: colors.inkSoft, maxWidth: '62ch', marginBottom: 56 }}>
              Chopsticks wear out. Most last a year, get thin at the tips, and get thrown away without much thought. These do not have to. What you choose here is really a choice about how long you want them to last.
            </p>
          </FadeSection>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: 24,
            }}
          >
            {woods.map((wood, i) => (
              <FadeSection key={wood.name} delay={i * 0.04}>
                <div style={{ border: `1px solid ${colors.line}`, overflow: 'hidden', backgroundColor: colors.paper }}>
                  <div style={{ position: 'relative', paddingTop: '133%', backgroundColor: colors.paperAlt }}>
                    <img
                      src={wood.img}
                      alt={`${wood.name} wood grain — ${wood.japanese}`}
                      loading="lazy"
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 18px' }}>
                    <p style={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 400, color: colors.ink, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{wood.name}</p>
                    <p style={{ fontFamily: fonts.sans, fontSize: 12, color: colors.inkSoft, marginTop: 2 }}>{wood.japanese}</p>
                    <p style={{ fontFamily: fonts.sans, fontSize: 13, lineHeight: 1.6, color: colors.inkSoft, marginTop: 12 }}>{wood.note}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
          <FadeSection style={{ marginTop: 40 }}>
            <button
              onClick={() => onNavigate('chopsticks')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: fonts.sans, fontSize: 15, color: colors.greenDeep, padding: 0, textDecoration: 'underline' }}
            >
              Full wood comparison →
            </button>
          </FadeSection>
        </div>
      </section>

      {/* SECTION 4 — WHAT HAPPENS */}
      <section style={{ ...sectionPad, backgroundColor: colors.paperAlt }}>
        <div style={container}>
          <FadeSection>
            <p style={eyebrow}>The process</p>
            <h2 style={{ ...display('clamp(32px, 4vw, 52px)'), marginBottom: 72 }}>What happens in the workshop.</h2>
          </FadeSection>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 72 }}>
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
                    <h3 style={{ fontFamily: fonts.serif, fontSize: 32, fontWeight: 400, letterSpacing: '-0.02em', color: colors.ink, marginBottom: 16, lineHeight: 1.1 }}>{step.title}</h3>
                    <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.65, color: colors.inkSoft, maxWidth: '45ch' }}>{step.desc}</p>
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

      {/* SECTION 5 — ALSO HERE */}
      <section style={{ ...sectionPad, backgroundColor: colors.paper }}>
        <div style={container}>
          <FadeSection>
            <p style={eyebrow}>Also here</p>
            <h2 style={{ ...display('clamp(28px, 4vw, 48px)'), marginBottom: 56 }}>Three more workshops.</h2>
          </FadeSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, backgroundColor: colors.line }}>
            {[
              {
                title: 'Kintsugi',
                desc: 'Repair a broken bowl with lacquer and gold. The crack becomes the best part of the object.',
                meta: '90min · From ¥5000',
                page: 'kintsugi',
                img: 'https://images.unsplash.com/photo-1783192485616-90cc518983f7?w=600&h=400&fit=crop&auto=format&q=80',
                imgAlt: 'Ceramic dishes repaired with gold kintsugi',
              },
              {
                title: 'Japanese Knives',
                desc: 'A handcrafted blade, sharpened, handled, and engraved by you.',
                meta: '60 min · From ¥15,000',
                page: 'knives',
                img: 'https://images.unsplash.com/flagged/photo-1553027192-8deee45cb47c?w=600&h=400&fit=crop&auto=format&q=80',
                imgAlt: 'Japanese knife held in hand',
              },
              {
                title: 'MUSUBI Coin Ring Making',
                desc: 'Hammer and shape a real coin into a one-of-a-kind ring you can wear home.',
                meta: '60 min · ¥4,500',
                page: 'musubi',
                img: musubiRingsImg,
                imgAlt: 'Hands displaying finished musubi rings made in the workshop',
              },
            ].map((ws) => (
              <FadeSection key={ws.title}>
                <div
                  style={{ backgroundColor: colors.paper, padding: '40px 36px', cursor: 'pointer' }}
                  onClick={() => onNavigate(ws.page)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onNavigate(ws.page)}
                >
                  <div style={{ position: 'relative', paddingTop: '66.67%', backgroundColor: colors.paperAlt, marginBottom: 32 }}>
                    <img
                      src={ws.img}
                      alt={ws.imgAlt}
                      loading="lazy"
                      width={600}
                      height={400}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <h3 style={{ fontFamily: fonts.serif, fontSize: 28, fontWeight: 400, letterSpacing: '-0.02em', color: colors.ink, marginBottom: 12 }}>{ws.title}</h3>
                  <p style={{ fontFamily: fonts.sans, fontSize: 15, lineHeight: 1.65, color: colors.inkSoft, marginBottom: 12 }}>{ws.desc}</p>
                  <p style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.inkSoft, marginBottom: 24 }}>{ws.meta}</p>
                  <span style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.greenDeep, textDecoration: 'underline' }}>Learn more →</span>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINDING US */}
      <section style={{ backgroundColor: colors.greenDeep, padding: '120px 24px' }}>
        <div
          style={{
            ...container,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          <FadeSection>
            <p style={{ ...eyebrow, color: 'rgba(246,243,237,0.5)' }}>Location</p>
            <h2 style={{ ...display('clamp(28px, 4vw, 48px)'), color: colors.paper, marginBottom: 24 }}>
              We are on the third floor. Room 302.
            </h2>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.65, color: 'rgba(246,243,237,0.8)', maxWidth: '50ch', marginBottom: 36 }}>
              This is the one thing guests tell us is hard, so here is the honest version: we are inside an ordinary office building, across the street from a ramen shop. Take the lift to 3F and turn left. Room 302.
            </p>
            <button
              onClick={() => onNavigate('find-us')}
              style={{ ...primaryBtn, backgroundColor: colors.paper, color: colors.greenDeep }}
            >
              Photo-by-photo directions →
            </button>
          </FadeSection>
          <FadeSection>
            <div style={{ position: 'relative', paddingTop: '75%', backgroundColor: 'rgba(246,243,237,0.08)' }}>
              <img
                src={buildingImg}
                alt="Entrance of 日宝京都2号館 — our building, Room 302"
                loading="lazy"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 65%' }}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </FadeSection>
        </div>
      </section>

      {/* SECTION 7 — REVIEWS */}
      <section style={{ lineHeight: 0 }}>
        <img
          src={groupImg}
          alt="Guests holding their finished handmade chopsticks after the workshop"
          loading="lazy"
          style={{ width: '100%', maxHeight: 480, objectFit: 'cover', objectPosition: 'center 30%' }}
        />
      </section>
      <section style={{ ...sectionPad, backgroundColor: colors.paper }}>
        <div style={container}>
          <FadeSection>
            <h2 style={{ ...display('clamp(32px, 4vw, 56px)'), marginBottom: 12 }}>4.9 from 948 people.</h2>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, color: colors.inkSoft, marginBottom: 64 }}>What guests write after they leave.</p>
          </FadeSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 40, marginBottom: 64 }}>
            {[
              'Super interesting activity. I would do it again without a doubt.',
              'The perfect way to end our long day. Our guide was incredibly kind, patient, and so funny. We made some wonderful memories.',
              'Strongly advised for people who want a special souvenir of Japan. The staff help you a lot and are really patient and pedagogical.',
            ].map((text, i) => (
              <FadeSection key={i}>
                <div style={{ borderTop: `2px solid ${colors.greenDeep}`, paddingTop: 24 }}>
                  <p style={{ fontFamily: fonts.serif, fontSize: 19, fontStyle: 'italic', lineHeight: 1.65, color: colors.ink, marginBottom: 20 }}>
                    "{text}"
                  </p>
                  <p style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.inkSoft, marginTop: 6 }}>Google review</p>
                </div>
              </FadeSection>
            ))}
          </div>
          <FadeSection>
            <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'center', paddingTop: 40, borderTop: `1px solid ${colors.line}` }}>
              {['Google', 'TripAdvisor', 'GetYourGuide'].map((platform) => (
                <div key={platform} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 500, color: colors.ink }}>{platform}</span>
                  <span style={{ color: colors.wood, letterSpacing: 2 }}>★★★★★</span>
                  <span style={{ fontFamily: fonts.sans, fontSize: 14, color: colors.inkSoft }}>4.9</span>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* SECTION 8 — RAINY DAY / HOT DAY */}
      <section style={{ ...sectionPad, backgroundColor: colors.paperAlt }}>
        <div style={container}>
          <FadeSection style={{ maxWidth: '62ch' }}>
            <h2 style={{ ...display('clamp(28px, 4vw, 48px)'), marginBottom: 24 }}>
              Kyoto in the rain. Kyoto at 36 degrees.
            </h2>
            <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.65, color: colors.inkSoft, marginBottom: 36 }}>
              We are indoors and air-conditioned, and the workshop takes as long as you want it to. If the weather has ruined your plan for the day, this is a good replacement for it.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <button
                onClick={() => onNavigate('rainy-day')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: fonts.sans, fontSize: 15, color: colors.greenDeep, padding: 0, textAlign: 'left', textDecoration: 'underline' }}
              >
                Indoor things to do in Kyoto when it rains →
              </button>
              <button
                onClick={() => onNavigate('summer-indoor')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: fonts.sans, fontSize: 15, color: colors.greenDeep, padding: 0, textAlign: 'left', textDecoration: 'underline' }}
              >
                Escaping the Kyoto summer heat →
              </button>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* SECTION 9 — BOOKING CTA */}
      <section style={{ backgroundColor: colors.greenDeep, padding: '120px 24px', textAlign: 'center' }}>
        <FadeSection>
          <h2 style={{ ...display('clamp(32px, 4vw, 56px)'), color: colors.paper, marginBottom: 24 }}>
            Open every day, 10:00 to 19:00.
          </h2>
          <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.65, color: 'rgba(246,243,237,0.8)', maxWidth: '50ch', margin: '0 auto 44px' }}>
            Booking ahead guarantees a spot, but walk-ins are genuinely welcome — most days we can start you within fifteen minutes.
          </p>
          <button
            onClick={() => onNavigate('book')}
            style={{ ...primaryBtn, backgroundColor: colors.paper, color: colors.greenDeep, marginBottom: 20 }}
          >
            Book Direct
          </button>
          <br />
          <a href="tel:+818022036353" style={{ fontFamily: fonts.sans, fontSize: 15, color: 'rgba(246,243,237,0.65)', textDecoration: 'none' }}>
            Or call +81 80-2203-6353
          </a>
        </FadeSection>
      </section>
    </main>
  )
}
