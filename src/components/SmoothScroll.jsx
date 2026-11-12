import { createContext, useContext, useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { frame, cancelFrame } from 'framer-motion'

const LenisContext = createContext(null)
export const useLenis = () => useContext(LenisContext)

export default function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null)
  const raf = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const instance = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    // Drive Lenis from framer-motion's frame loop so scroll-linked animations stay in sync.
    raf.current = (data) => instance.raf(data.timestamp)
    frame.update(raf.current, true)
    setLenis(instance)
    return () => {
      cancelFrame(raf.current)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

/** Scroll to an element id or to top, using Lenis when available. */
export function scrollToTarget(lenis, target, immediate = false) {
  const el = typeof target === 'string' ? document.getElementById(target) : null
  if (lenis) {
    lenis.scrollTo(el ?? 0, { immediate, offset: el ? -24 : 0, duration: 1.4 })
  } else if (el) {
    el.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth' })
  } else {
    window.scrollTo(0, 0)
  }
}
