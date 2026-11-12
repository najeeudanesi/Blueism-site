import { useEffect, useId, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE } from './motion'
import { LANGUAGES, useI18n } from '../i18n/I18nProvider'

/** Globe button that opens a language menu. Keyboard: Esc closes, arrows move. */
export default function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const root = useRef(null)
  const btn = useRef(null)
  const listId = useId()

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (root.current && !root.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        btn.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    // focus the active option when opening
    requestAnimationFrame(() => root.current?.querySelector('[aria-current="true"]')?.focus())
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const onListKey = (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    e.preventDefault()
    const items = [...root.current.querySelectorAll('.lang-option')]
    const i = items.indexOf(document.activeElement)
    const next = e.key === 'ArrowDown' ? (i + 1) % items.length : (i - 1 + items.length) % items.length
    items[next]?.focus()
  }

  const choose = (code) => {
    setLang(code)
    setOpen(false)
    btn.current?.focus()
  }

  return (
    <div className="lang-switch" ref={root}>
      <button
        ref={btn}
        type="button"
        className="lang-button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${t('lang.label')}: ${LANGUAGES.find((l) => l.code === lang)?.name}`}
        onClick={() => setOpen((v) => !v)}
      >
        <GlobeIcon />
        <span className="lang-code" aria-hidden="true">
          {lang.toUpperCase()}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            id={listId}
            className="lang-menu"
            aria-label={t('lang.label')}
            onKeyDown={onListKey}
            initial={{ opacity: 0, y: -8, scale: 0.97, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -6, scale: 0.98, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {LANGUAGES.map((l, i) => (
              <motion.li
                key={l.code}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: EASE, delay: 0.03 * i }}
              >
                <button
                  type="button"
                  className="lang-option"
                  lang={l.code}
                  dir={l.dir}
                  aria-current={l.code === lang}
                  onClick={() => choose(l.code)}
                >
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-abbr" dir="ltr">
                    {l.code.toUpperCase()}
                  </span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9.25" />
      <ellipse cx="12" cy="12" rx="4" ry="9.25" />
      <path d="M3 12h18M4.5 7.25h15M4.5 16.75h15" />
    </svg>
  )
}
