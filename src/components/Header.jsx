import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Wordmark } from './Logo'
import { EASE } from './motion'
import { useLenis, scrollToTarget } from './SmoothScroll'

const NAV = [
  { label: 'Work', to: '/', hash: 'work' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/', hash: 'services' },
  { label: 'Contact', to: '/contact' },
]

export default function Header({ rule = true }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const lenis = useLenis()

  const onNav = (e, item) => {
    if (!item.hash) return
    e.preventDefault()
    if (pathname === '/') scrollToTarget(lenis, item.hash)
    else navigate('/', { state: { scrollTo: item.hash } })
  }

  return (
    <header className="site-header">
      <motion.div
        className="header-logo"
        initial={{ y: '-120%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
      >
        <Link to="/" aria-label="Blueism Studio — home" data-cursor="HOME">
          <Wordmark />
        </Link>
      </motion.div>
      <nav className="header-nav" aria-label="Primary">
        {NAV.map((item, i) => {
          const href = item.hash ? `/#${item.hash}` : item.to
          const active = !item.hash && pathname.startsWith(item.to)
          return (
            <motion.span
              key={item.label}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.25 + i * 0.06 }}
            >
              <Link to={href} onClick={(e) => onNav(e, item)} className={`nav-link ${active ? 'is-active' : ''}`}>
                <span className="roll" data-text={item.label}>
                  <span>{item.label}</span>
                </span>
              </Link>
            </motion.span>
          )
        })}
      </nav>
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
