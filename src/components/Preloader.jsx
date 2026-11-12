import { useEffect, useState } from 'react'
import { motion, animate } from 'framer-motion'
import { Logomark } from './Logo'
import { EASE } from './motion'

/** First-visit intro: B. mark + counter, then the curtain lifts. */
export default function Preloader({ onDone }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.4,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setN(Math.round(v)),
      onComplete: () => setTimeout(onDone, 250),
    })
    return () => controls.stop()
  }, [onDone])

  return (
    <motion.div
      className="preloader"
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden="true"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <Logomark className="preloader-mark" />
      </motion.div>
      <span className="preloader-count">{String(n).padStart(3, '0')}</span>
    </motion.div>
  )
}
