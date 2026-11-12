import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { RevealText, FadeUp } from '../components/motion'
import { useI18n } from '../i18n/I18nProvider'

export default function NotFound() {
  const { t } = useI18n()
  return (
    <>
      <Seo title={t('notFound.title')} noindex />
      <Header />
      <main className="page container notfound">
        <RevealText as="h1" className="nf-title" text="404" delay={0.3} />
        <FadeUp as="p" delay={0.5}>
          {t('notFound.text')}
        </FadeUp>
        <FadeUp delay={0.6}>
          <Link to="/" className="underline-link" data-cursor={t('cursor.home')}>
            {t('notFound.home')}
          </Link>
        </FadeUp>
      </main>
      <Footer muted />
    </>
  )
}
