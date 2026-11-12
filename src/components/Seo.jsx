import { useLocation } from 'react-router-dom'
import { SITE } from '../data/site'
import { useI18n } from '../i18n/I18nProvider'

/** React 19 hoists <title>, <meta> and <link> into <head> automatically. */
export default function Seo({ title, description, image = '/og-image.jpg', noindex = false }) {
  const { pathname } = useLocation()
  const { t, ogLocale } = useI18n()
  const desc = description ?? t('seo.description')
  const fullTitle = title ? `${title} — ${SITE.name}` : `${SITE.name} — ${t('seo.homeTitle')}`
  const url = `${SITE.url}${pathname === '/' ? '/' : pathname}`
  const img = image.startsWith('http') ? image : `${SITE.url}${image}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content={ogLocale} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </>
  )
}
