import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import SmoothScroll, { useLenis, scrollToTarget } from './components/SmoothScroll'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import { EASE } from './components/motion'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import NotFound from './pages/NotFound'

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -24, filter: 'blur(6px)' }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  const lenis = useLenis()

  // After the old page has faded out: jump to top, or to a requested section.
  const onExitComplete = () => {
    scrollToTarget(lenis, null, true)
  }

  // Handle /#work, /#services and navigate(..., { state: { scrollTo } })
  useEffect(() => {
    const target = location.state?.scrollTo ?? location.hash.replace('#', '')
    if (!target) return
    const t = setTimeout(() => scrollToTarget(lenis, target), 700)
    return () => clearTimeout(t)
  }, [location, lenis])

  return (
    <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
        <Route path="/work/:slug" element={<Page><Project /></Page>} />
        <Route path="*" element={<Page><NotFound /></Page>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(() => {
    try {
      return !sessionStorage.getItem('blueism:intro')
    } catch {
      return true
    }
  })

  const done = () => {
    try {
      sessionStorage.setItem('blueism:intro', '1')
    } catch {
      /* storage unavailable */
    }
    setLoading(false)
  }

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <Cursor />
        <AnimatePresence>{loading && <Preloader onDone={done} />}</AnimatePresence>
        {!loading && <AnimatedRoutes />}
      </SmoothScroll>
    </MotionConfig>
  )
}
