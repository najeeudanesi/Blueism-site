import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Wordmark, Logomark } from './Logo'
import { EASE } from './motion'
import { useLenis, scrollToTarget } from './SmoothScroll'
import LanguageSwitcher from './LanguageSwitcher'
import { useI18n } from '../i18n/I18nProvider'

const NAV = [
  { key: 'work', to: '/', hash: 'work' },
  { key: 'about', to: '/about' },
  { key: 'services', to: '/', hash: 'services' },
  { key: 'contact', to: '/contact' },
]

function NavLinks({ onNav, pathname, t, animateIn }) {
  return NAV.map((item, i) => {
    const href = item.hash ? `/#${item.hash}` : item.to
    const active = !item.hash && pathname.startsWith(item.to)
    const label = t(`nav.${item.key}`)
    return (
      <motion.span
        key={item.key}
        initial={{ y: animateIn.y, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: animateIn.duration, ease: EASE, delay: animateIn.delay + i * animateIn.stagger }}
      >
        <Link to={href} onClick={(e) => onNav(e, item)} className={`nav-link ${active ? 'is-active' : ''}`}>
          <span className="roll" data-text={label}>
            <span>{label}</span>
          </span>
        </Link>
      </motion.span>
    )
  })
}

/**
 * Two layers, so nothing ever slides over page content:
 *  1. The full header (wordmark + nav) sits in the page and scrolls away.
 *  2. A compact sticky bar (B. logomark + nav + globe) drops in from the top
 *     exactly as the full header leaves the viewport, and hides again above it.
 */
export default function Header({ rule = true }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const lenis = useLenis()
  const { t } = useI18n()
  const fullRef = useRef(null)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = fullRef.current
      if (!el) return
      // Show the bar once the full header's nav row has scrolled out of view.
      const bottom = el.getBoundingClientRect().bottom
      setCompact(bottom < 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const onNav = (e, item) => {
    if (!item.hash) return
    e.preventDefault()
    if (pathname === '/') scrollToTarget(lenis, item.hash)
    else navigate('/', { state: { scrollTo: item.hash } })
  }

  return (
    <>
      {/* Zero-height sticky rail that carries the compact bar */}
      <div className="compact-rail">
        <AnimatePresence>
          {compact && (
            <motion.div
              className="compact-bar"
              initial={{ y: '-105%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-105%' }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <motion.div
                initial={{ scale: 0.4, rotate: -12, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
              >
                <Link to="/" aria-label="Blueism Studio" data-cursor={t('cursor.home')} className="compact-logo">
                  <Logomark className="header-mark" />
                </Link>
              </motion.div>
              <nav className="compact-nav" aria-label="Primary">
                <NavLinks onNav={onNav} pathname={pathname} t={t} animateIn={{ y: -10, duration: 0.5, delay: 0.15, stagger: 0.04 }} />
              </nav>
              <LanguageSwitcher />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <header ref={fullRef} className="site-header">
        <div className="header-bar">
          <motion.div
            className="header-logo"
            initial={{ y: '-120%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
          >
            <Link to="/" aria-label="Blueism Studio" data-cursor={t('cursor.home')}>
              <Wordmark />
            </Link>
          </motion.div>
          <motion.div
            className="header-lang"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          >
            <LanguageSwitcher />
          </motion.div>
          <nav className="header-nav" aria-label="Primary">
            <NavLinks onNav={onNav} pathname={pathname} t={t} animateIn={{ y: 16, duration: 0.9, delay: 0.25, stagger: 0.06 }} />
          </nav>
        </div>
        {rule && (
          <motion.div
            className="header-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.35 }}
          />
        )}
      </header>
    </>
  )
}
