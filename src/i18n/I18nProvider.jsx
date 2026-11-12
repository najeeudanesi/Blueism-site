import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import en from './locales/en'
import es from './locales/es'
import fr from './locales/fr'
import ar from './locales/ar'
import pt from './locales/pt'
import de from './locales/de'
import { projects as baseProjects, featured as baseFeatured } from '../data/projects'
import { services as baseServices, values as baseValues, faqs as baseFaqs } from '../data/site'

// Order shown in the language menu.
export const LANGUAGES = [
  { code: 'en', name: 'English', dir: 'ltr', og: 'en_US' },
  { code: 'es', name: 'Español', dir: 'ltr', og: 'es_ES' },
  { code: 'fr', name: 'Français', dir: 'ltr', og: 'fr_FR' },
  { code: 'ar', name: 'العربية', dir: 'rtl', og: 'ar_MA' },
  { code: 'pt', name: 'Português', dir: 'ltr', og: 'pt_BR' },
  { code: 'de', name: 'Deutsch', dir: 'ltr', og: 'de_DE' },
]
const DICTS = { en, es, fr, ar, pt, de }
const STORAGE_KEY = 'blueism:lang'
const DEFAULT = 'en'

const I18nContext = createContext(null)

function initialLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang')
    if (q && DICTS[q]) return q
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && DICTS[saved]) return saved
  } catch {
    /* storage unavailable */
  }
  return DEFAULT
}

const get = (obj, path) => path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj)

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)
  const meta = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]
  const dict = DICTS[lang]

  const setLang = useCallback((code) => {
    if (!DICTS[code]) return
    setLangState(code)
    try {
      localStorage.setItem(STORAGE_KEY, code)
    } catch {
      /* storage unavailable */
    }
  }, [])

  // Keep <html lang/dir> in sync — drives RTL layout, hyphenation and fonts.
  useEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir = meta.dir
  }, [lang, meta.dir])

  const value = useMemo(() => {
    const t = (key) => {
      const v = get(dict, key)
      return v === undefined ? get(en, key) : v
    }
    const cat = (name) => dict.categories?.[name] ?? name
    const color = (name) => dict.colors?.[name] ?? name
    const merge = (base, over) => base.map((b, i) => ({ ...b, ...(over?.[i] ?? {}) }))

    const projects = baseProjects.map((p) => {
      const o = dict.projects?.[p.slug] ?? {}
      return { ...p, ...o, category: cat(p.category) }
    })
    const featured = baseFeatured.map((f) => {
      const p = projects.find((x) => x.slug === f.slug)
      const title = f.slug === 'dlvrnc' ? f.title : (p?.title ?? f.title)
      return { ...f, title, category: cat(f.category) }
    })

    return {
      lang,
      dir: meta.dir,
      isRTL: meta.dir === 'rtl',
      ogLocale: meta.og,
      setLang,
      t,
      cat,
      color,
      services: merge(baseServices, dict.services),
      values: merge(baseValues, dict.values),
      faqs: merge(baseFaqs, dict.faqs),
      projects,
      featured,
    }
  }, [lang, meta, dict, setLang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
