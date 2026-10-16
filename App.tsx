import { useEffect, useState } from 'react'
import WeatherBanner from './components/WeatherBanner'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import HomePage from './pages/HomePage'
import FindUsPage from './pages/FindUsPage'
import ChopsticksPage from './pages/ChopsticksPage'
import KintsugiPage from './pages/KintsugiPage'
import RainyDayPage from './pages/RainyDayPage'
import TeamPage from './pages/TeamPage'
import KnivesPage from './pages/KnivesPage'
import MusubiPage from './pages/MusubiPage'
import { colors, fonts, primaryBtn, container } from './lib/styles'
import BookingForm from './components/BookingForm'

type Page =
  | 'home'
  | 'find-us'
  | 'chopsticks'
  | 'kintsugi'
  | 'knives'
  | 'musubi'
  | 'rainy-day'
  | 'summer-indoor'
  | 'team'
  | 'book'

const PAGE_PATHS: Record<Page, string> = {
  home: '/',
  'find-us': '/how-to-find-us',
  chopsticks: '/chopsticks',
  kintsugi: '/kintsugi',
  knives: '/knives',
  musubi: '/musubi',
  'rainy-day': '/rainy-day-guide',
  'summer-indoor': '/summer-indoor',
  team: '/team',
  book: '/booking',
}

function pageFromLocation(): Page {
  const legacyPage = new URLSearchParams(window.location.search).get('page')
  if (legacyPage === 'book') return 'book'

  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
  const match = (Object.entries(PAGE_PATHS) as [Page, string][])
    .find(([, path]) => path === normalizedPath)
  return match?.[0] ?? 'home'
}

function BookPage({ onNavigate: _onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <main style={{ backgroundColor: colors.paper, paddingTop: 80 }}>
      <section style={{ padding: '80px 24px 120px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p
            style={{
              fontFamily: fonts.sans,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: colors.inkSoft,
              marginBottom: 20,
            }}
          >
            Book Direct
          </p>
          <h1
            style={{
              fontFamily: fonts.serif,
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: colors.ink,
              marginBottom: 16,
            }}
          >
            Reserve your spot.
          </h1>
          <p
            style={{
              fontFamily: fonts.sans,
              fontSize: 17,
              lineHeight: 1.65,
              color: colors.inkSoft,
              maxWidth: '58ch',
              marginBottom: 56,
            }}
          >
            Booking directly costs less than booking through Klook, GetYourGuide, or Viator — platforms take 20–25% commission, which comes out of what you pay. Same workshop, same instructors, lower price.
          </p>

          <BookingForm />
        </div>
      </section>
    </main>
  )
}

function ComingSoonPage({ onNavigate, pageName }: { onNavigate: (p: string) => void; pageName: string }) {
  return (
    <main style={{ backgroundColor: colors.paper, paddingTop: 80 }}>
      <section style={{ padding: '120px 24px', textAlign: 'center' }}>
        <div style={{ ...container, maxWidth: 540 }}>
          <h1
            style={{
              fontFamily: fonts.serif,
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: colors.ink,
              marginBottom: 24,
              textTransform: 'capitalize',
            }}
          >
            {pageName.replace(/-/g, ' ')}
          </h1>
          <p style={{ fontFamily: fonts.sans, fontSize: 17, color: colors.inkSoft, marginBottom: 40 }}>
            This page is coming soon.
          </p>
          <button onClick={() => onNavigate('home')} style={primaryBtn}>
            Back to home
          </button>
        </div>
      </section>
    </main>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>(pageFromLocation)

  useEffect(() => {
    const handlePopState = () => {
      setPage(pageFromLocation())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (p: string) => {
    const nextPage = p as Page
    setPage(nextPage)
    window.history.pushState({}, '', PAGE_PATHS[nextPage] ?? '/')
    window.scrollTo({ top: 0 })
  }

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={navigate} />
      case 'find-us':
        return <FindUsPage onNavigate={navigate} />
      case 'chopsticks':
        return <ChopsticksPage onNavigate={navigate} />
      case 'kintsugi':
        return <KintsugiPage onNavigate={navigate} />
      case 'rainy-day':
        return <RainyDayPage onNavigate={navigate} variant="rain" />
      case 'summer-indoor':
        return <RainyDayPage onNavigate={navigate} variant="heat" />
      case 'knives':
        return <KnivesPage onNavigate={navigate} />
      case 'musubi':
        return <MusubiPage onNavigate={navigate} />
      case 'team':
        return <TeamPage onNavigate={navigate} />
      case 'book':
        return <BookPage onNavigate={navigate} />
      default:
        return <ComingSoonPage onNavigate={navigate} pageName={page} />
    }
  }

  return (
    <div style={{ backgroundColor: colors.paper, minHeight: '100vh' }}>
      <WeatherBanner />
      <Header currentPage={page} onNavigate={navigate} />
      {renderPage()}
      <Footer onNavigate={navigate} />
      <MobileCTA onNavigate={navigate} />
    </div>
  )
}
