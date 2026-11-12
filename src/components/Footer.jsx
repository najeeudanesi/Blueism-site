import { Link } from 'react-router-dom'
import { Logomark } from './Logo'
import { FadeUp } from './motion'
import { SITE } from '../data/site'
import SocialIcon from './SocialIcon'

export default function Footer({ muted = false, accent = true }) {
  return (
    <footer className={`site-footer ${muted ? 'is-muted' : ''}`}>
      <div className="footer-top">
        <FadeUp className="footer-left">
          <Logomark className="footer-mark" />
          <div className="footer-contact">
            <a href={`mailto:${SITE.email}`} className="footer-big" data-cursor="EMAIL US">
              {SITE.email}
            </a>
            <a href="https://www.instagram.com/blueismstudio" target="_blank" rel="noreferrer" className="footer-big" data-cursor="INSTAGRAM">
              {SITE.handle}
            </a>
          </div>
        </FadeUp>
        <FadeUp className="footer-right" delay={0.1}>
          <Link to="/contact" className={`footer-cta ${accent ? 'is-accent' : ''}`} data-cursor="LET'S TALK">
            Start a project
          </Link>
          <p>
            {SITE.location}
            <br />
            {SITE.reach}
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
        <p>Blueism {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </footer>
  )
}
