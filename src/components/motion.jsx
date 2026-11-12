import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

// Shared easing — a soft "expo out" like Framer's editorial templates.
export const EASE = [0.22, 1, 0.36, 1]

/**
 * Masked line/word slide-up reveal.
 * Pass `lines` (array of strings) for explicit line breaks, or `text` to split by words.
 */
export function RevealText({ as = 'div', text, lines, className, delay = 0, stagger = 0.06, once = true, amount = 0.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount })
  const Tag = motion[as] ?? motion.div
  // Each line is a group of masked words: lines break on desktop (display:block)
  // and reflow naturally on phones (display:inline), with line-based timing kept.
  const groups = lines ? lines.map((l) => l.split(' ')) : [text.split(' ')]
  const label = lines ? lines.join(' ') : text
  let n = 0
  return (
    <Tag ref={ref} className={className} aria-label={label}>
      {groups.map((words, li) => (
        <span key={li} className={lines ? 'mask-line' : undefined} aria-hidden="true">
          {words.map((w, wi) => {
            const i = n++
            const d = lines ? delay + li * stagger * 1.5 + wi * 0.012 : delay + i * stagger
            return (
              <span key={wi} className="mask-word">
                <motion.span
                  className="mask-inner"
                  initial={{ y: '110%', rotate: 2 }}
                  animate={inView ? { y: '0%', rotate: 0 } : undefined}
                  transition={{ duration: 1, ease: EASE, delay: d }}
                >
                  {w}
                </motion.span>
                {wi < words.length - 1 || (lines && li < groups.length - 1) ? ' ' : ''}
              </span>
            )
          })}
        </span>
      ))}
    </Tag>
  )
}

/** Fade + rise + de-blur on enter. */
export function FadeUp({ as = 'div', children, delay = 0, y = 24, className, amount = 0.25, ...rest }) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * Scroll-scrubbed word opacity — paragraph "reads itself" as you scroll.
 */
export function ScrollWords({ text, className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  )
}
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <motion.span style={{ opacity }} className="scroll-word">
      {children}{' '}
    </motion.span>
  )
}

/**
 * Image with clip-path reveal + scale-down on enter, optional scroll parallax.
 */
export function RevealImage({ src, alt, className = '', imgClassName = '', parallax = false, ratio, priority = false, style, delay = 0 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ['-8%', '8%'] : ['0%', '0%'])
  return (
    <motion.figure
      ref={ref}
      className={`reveal-img ${parallax ? 'is-parallax' : ''} ${className}`}
      style={{ aspectRatio: ratio, ...style }}
      initial={{ clipPath: 'inset(12% 6% 12% 6% round 14px)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.3, ease: EASE, delay }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={imgClassName}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{ y }}
        initial={{ scale: 1.18 }}
        whileInView={{ scale: parallax ? 1.12 : 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.6, ease: EASE, delay }}
      />
    </motion.figure>
  )
}

/** Horizontal rule that draws itself left → right. */
export function Rule({ className = '', delay = 0 }) {
  return (
    <motion.hr
      className={`rule ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: EASE, delay }}
    />
  )
}
