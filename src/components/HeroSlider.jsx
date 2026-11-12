import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE } from './motion'
import { useI18n } from '../i18n/I18nProvider'

const DURATION = 5500

/** "Recently.." featured slider — arrows, dots, swipe, arrow keys, autoplay. */
export default function HeroSlider({ slides }) {
  const [[i, dirn], setState] = useState([0, 1])
  const [paused, setPaused] = useState(false)
  const { t, isRTL } = useI18n()
  const touch = useRef(null)
  const n = slides.length

  const go = (step) => setState(([v]) => [(v + step + n) % n, step])
  const goTo = (k) => setState(([v]) => [k, k >= v ? 1 : -1])

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(() => go(1), DURATION)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, paused, n])

  // In RTL "previous" sits on the right, so visual direction flips.
  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(isRTL ? -1 : 1)
    if (e.key === 'ArrowLeft') go(isRTL ? 1 : -1)
  }
  const onTouchStart = (e) => {
    touch.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touch.current == null) return
    const dx = e.changedTouches[0].clientX - touch.current
    touch.current = null
    if (Math.abs(dx) < 40) return
    const forward = isRTL ? dx > 0 : dx < 0
    go(forward ? 1 : -1)
  }

  const s = slides[i]
  const shift = (isRTL ? -1 : 1) * dirn * 6

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKey}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label={t('home.recently')}
    >
      <div className="hero-stage">
        <Link to={`/work/${s.slug}`} className="hero-frame" data-cursor={t('cursor.seeWork')} aria-label={`${s.title} — ${t('card.view')}`}>
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
                initial={{ opacity: 0, scale: 1.12, x: `${shift}%`, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, x: '0%', filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: `${-shift}%` }}
                transition={{ duration: 1.3, ease: EASE }}
              />
            </AnimatePresence>
          </motion.div>
        </Link>
        <button type="button" className="hero-arrow is-prev" onClick={() => go(-1)} aria-label={`${t('slider.prev')}`}>
          <Chevron />
        </button>
        <button type="button" className="hero-arrow is-next" onClick={() => go(1)} aria-label={`${t('slider.next')}`}>
          <Chevron />
        </button>
        <div className="hero-progress" aria-hidden="true">
          <motion.span
            key={`${i}-${paused}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: paused ? 0 : 1 }}
            transition={{ duration: paused ? 0.3 : DURATION / 1000, ease: 'linear' }}
          />
        </div>
      </div>
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
            <bdi>{s.title}</bdi>
          </motion.span>
        </AnimatePresence>
        <div className="dots" role="tablist" aria-label={t('home.recently')}>
          {slides.map((sl, k) => (
            <button
              key={k}
              role="tab"
              aria-selected={k === i}
              aria-label={`${sl.title} (${sl.category})`}
              className={`dot ${k === i ? 'is-active' : ''}`}
              onClick={() => goTo(k)}
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

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 5.5 8 12l6.5 6.5" />
    </svg>
  )
}
