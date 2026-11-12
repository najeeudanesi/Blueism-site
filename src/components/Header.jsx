import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
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

const LAYOUT = { duration: 0.75, ease: EASE }

/**
 * Sticky header. At the top it shows the full "Blueism Studio" wordmark over
 * the nav; once you scroll it condenses into one bar and the wordmark morphs
 * into the B. logomark.
 */
export default function Header({ rule = true }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const lenis = useLenis()
  const { t, lang } = useI18n()
  const [compact, setCompact] = useState(false)
  const ref = useRef(null)
  const expandedH = useRef(0)
  const [spacer, setSpacer] = useState(0)

  // Condense after scrolling a little; hysteresis avoids flicker at the threshold.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setCompact((c) => (c ? y > 40 : y > 140))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Keep the document flow height constant so content doesn't jump when the
  // header shrinks: the difference is added back as bottom margin.
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => {
      const h = el.offsetHeight
      if (!compact) {
        expandedH.current = h
        setSpacer(0)
      } else {
        setSpacer(Math.max(0, expandedH.current - h))
      }
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [compact, lang])

  const onNav = (e, item) => {
    if (!item.hash) return
    e.preventDefault()
    if (pathname === '/') scrollToTarget(lenis, item.hash)
    else navigate('/', { state: { scrollTo: item.hash } })
  }

  return (
    <header ref={ref} className={`site-header ${compact ? 'is-compact' : ''}`} style={{ marginBottom: spacer }}>
      <LayoutGroup>
        <div className="header-bar">
          <motion.div
            layout="position"
            transition={{ layout: LAYOUT }}
            className="header-logo"
            initial={{ y: '-120%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link to="/" aria-label="Blueism Studio" data-cursor={t('cursor.home')}>
              <AnimatePresence mode="popLayout" initial={false}>
                {compact ? (
                  <motion.span
                    key="mark"
                    className="logo-swap"
                    initial={{ opacity: 0, scale: 0.6, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.6, filter: 'blur(6px)' }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <Logomark className="header-mark" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="word"
                    className="logo-swap"
                    initial={{ opacity: 0, y: '-40%', filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: '0%', filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: '-40%', filter: 'blur(6px)' }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    <Wordmark />
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </motion.div>

          <nav className="header-nav" aria-label="Primary">
            {NAV.map((item, i) => {
              const href = item.hash ? `/#${item.hash}` : item.to
              const active = !item.hash && pathname.startsWith(item.to)
              const label = t(`nav.${item.key}`)
              return (
                <motion.span
                  key={item.key}
                  layout="position"
                  transition={{ layout: LAYOUT, default: { duration: 0.9, ease: EASE, delay: 0.25 + i * 0.06 } }}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link to={href} onClick={(e) => onNav(e, item)} className={`nav-link ${active ? 'is-active' : ''}`}>
                    <span className="roll" data-text={label}>
                      <span>{label}</span>
                    </span>
                  </Link>
                </motion.span>
              )
            })}
          </nav>

          <motion.div
            layout="position"
            transition={{ layout: LAYOUT, default: { duration: 0.9, ease: EASE, delay: 0.5 } }}
            className="header-lang"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <LanguageSwitcher />
          </motion.div>
        </div>
      </LayoutGroup>
      {rule && (
        <motion.div
          className="header-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.35 }}
        />
      )}
    </header>
  )
}
