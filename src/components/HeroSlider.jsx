import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE } from './motion'

const DURATION = 5500

/** "Recently.." featured slider — auto-advancing with dots, crossfade + scale. */
export default function HeroSlider({ slides }) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setI((v) => (v + 1) % slides.length), DURATION)
    return () => clearTimeout(t)
  }, [i, paused, slides.length])

  const s = slides[i]

  return (
    <div className="hero-slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Link to={`/work/${s.slug}`} className="hero-frame" data-cursor="SEE WORK" aria-label={`${s.title} — see work`}>
        <motion.div
          className="hero-frame-inner"
          initial={{ clipPath: 'inset(18% 10% 18% 10% round 24px)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0% round 10px)' }}
          transition={{ duration: 1.5, ease: EASE, delay: 0.5 }}
        >
          <AnimatePresence initial={false} mode="sync">
            <motion.img
              key={i}
              src={s.image}
              alt={s.title}
              style={{ objectPosition: s.pos ?? 'center' }}
              initial={{ opacity: 0, scale: 1.12, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: EASE }}
            />
          </AnimatePresence>
        </motion.div>
      </Link>
      <div className="hero-meta">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={`t-${i}`}
            className="hero-title"
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {s.title}
          </motion.span>
        </AnimatePresence>
        <div className="dots" role="tablist" aria-label="Featured projects">
          {slides.map((sl, k) => (
            <button
              key={k}
              role="tab"
              aria-selected={k === i}
              aria-label={`Show ${sl.title} (${sl.category})`}
              className={`dot ${k === i ? 'is-active' : ''}`}
              onClick={() => setI(k)}
            >
              <span />
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={`c-${i}`}
            className="hero-cat"
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {s.category}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
