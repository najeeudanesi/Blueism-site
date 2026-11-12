import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { RevealText, FadeUp } from '../components/motion'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" noindex />
      <Header />
      <main className="page container notfound">
        <RevealText as="h1" className="nf-title" text="404" delay={0.3} />
        <FadeUp as="p" delay={0.5}>
          This page doesn’t exist — or it’s still in the studio.
        </FadeUp>
        <FadeUp delay={0.6}>
          <Link to="/" className="underline-link" data-cursor="HOME">
            Back to home
          </Link>
        </FadeUp>
      </main>
      <Footer muted />
    </>
  )
}
