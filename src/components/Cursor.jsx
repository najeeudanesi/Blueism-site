import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

/**
 * Custom cursor from the design notes:
 *  - default: small black blob (rounded, one square corner — echoes the B. counter)
 *  - [data-cursor="SEE WORK"] etc: blue pill label next to the pointer
 *  - [data-cursor-variant="circle"]: large black "SHOW MORE" disc
 * Only enabled for fine pointers (mouse / trackpad).
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [state, setState] = useState({ label: null, variant: 'default', dark: false })
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 600, damping: 45, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 600, damping: 45, mass: 0.4 })

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('has-cursor')
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const t = e.target instanceof Element ? e.target.closest('[data-cursor], a, button, input, textarea, select, [role="button"]') : null
      const dark = Boolean(e.target instanceof Element && e.target.closest('[data-theme-dark]'))
      if (t?.dataset.cursor) {
        setState({ label: t.dataset.cursor, variant: t.dataset.cursorVariant ?? 'pill', dark })
      } else if (t && t.matches('input, textarea, select')) {
        setState({ label: null, variant: 'text', dark })
      } else if (t) {
        setState({ label: null, variant: 'link', dark })
      } else {
        setState({ label: null, variant: 'default', dark })
      }
    }
    const leave = () => setVisible(false)
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    return () => {
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [enabled, x, y])

  if (!enabled) return null
  const { label, variant, dark } = state

  return (
    <div className={`cursor ${dark ? 'is-dark' : ''}`} aria-hidden="true" style={{ opacity: visible ? 1 : 0 }}>
      <motion.div className="cursor-pos" style={{ x: sx, y: sy }}>
        <motion.div
          className="cursor-blob"
          animate={{
            scale: variant === 'default' ? 1 : variant === 'link' ? 0.55 : variant === 'text' ? 0.35 : 0,
            opacity: variant === 'circle' || variant === 'pill' ? 0 : 1,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
        <AnimatePresence>
          {variant === 'pill' && label && (
            <motion.div
              key={`pill-${label}`}
              className="cursor-pill"
              initial={{ opacity: 0, scale: 0.6, x: 4 }}
              animate={{ opacity: 1, scale: 1, x: 10 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: 'spring', stiffness: 520, damping: 32 }}
            >
              <PointerIcon />
              <span>{label}</span>
            </motion.div>
          )}
          {variant === 'circle' && label && (
            <motion.div
              key={`circle-${label}`}
              className="cursor-circle"
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            >
              <span>{label}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

function PointerIcon() {
  return (
    <svg className="cursor-hand" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M9 2.5c.9 0 1.6.7 1.6 1.6v6.2l.4-.1c.9-.2 1.8.3 2 1.2l.1.3.4-.1c.9-.2 1.8.3 2 1.2l.1.4.3-.1c.9-.1 1.7.5 1.8 1.4l.4 3.3c.2 1.6-.3 3.2-1.4 4.4l-.6.7H9.6l-4.3-5.2c-.6-.7-.5-1.8.2-2.4.7-.6 1.7-.5 2.3.1l.6.7V4.1C7.4 3.2 8.1 2.5 9 2.5Z"
        fill="#111"
        stroke="#fff"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
