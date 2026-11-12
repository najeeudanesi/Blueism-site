import { Link } from 'react-router-dom'
import { Logomark } from './Logo'
import { FadeUp } from './motion'
import { SITE } from '../data/site'
import SocialIcon from './SocialIcon'
import { useI18n } from '../i18n/I18nProvider'

export default function Footer({ muted = false, accent = true }) {
  const { t } = useI18n()
  return (
    <footer className={`site-footer ${muted ? 'is-muted' : ''}`}>
      <div className="footer-top">
        <FadeUp className="footer-left">
          <Logomark className="footer-mark" />
          <div className="footer-contact">
            {/* dir="ltr" keeps the email and @handle intact inside Arabic pages */}
            <a href={`mailto:${SITE.email}`} className="footer-big" dir="ltr" data-cursor={t('cursor.emailUs')}>
              {SITE.email}
            </a>
            <a
              href="https://www.instagram.com/blueismstudio"
              target="_blank"
              rel="noreferrer"
              className="footer-big"
              dir="ltr"
              data-cursor={t('cursor.instagram')}
            >
              {SITE.handle}
            </a>
          </div>
        </FadeUp>
        <FadeUp className="footer-right" delay={0.1}>
          <Link to="/contact" className={`footer-cta ${accent ? 'is-accent' : ''}`} data-cursor={t('cursor.letsTalk')}>
            {t('footer.startProject')}
          </Link>
          <p>
            {t('footer.location')}
            <br />
            {t('footer.reach')}
          </p>
        </FadeUp>
      </div>
      <div className="footer-bottom">
        <ul className="socials">
          {SITE.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <SocialIcon name={s.icon} />
              </a>
            </li>
          ))}
        </ul>
        <p>
          <bdi>Blueism {new Date().getFullYear()}</bdi> - {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
