import { motion, AnimatePresence } from 'framer-motion'
import { EASE } from './motion'

/** Animated +/× toggle icon */
export function ToggleIcon({ open }) {
  return (
    <motion.span className="toggle-icon" animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.5, ease: EASE }} aria-hidden="true">
      <span />
      <span />
    </motion.span>
  )
}

export function Collapse({ open, children, className = '' }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          className={`collapse ${className}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ height: { duration: 0.7, ease: EASE }, opacity: { duration: 0.4 } }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
