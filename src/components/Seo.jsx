import { useLocation } from 'react-router-dom'
import { SITE } from '../data/site'

/** React 19 hoists <title>, <meta> and <link> into <head> automatically. */
export default function Seo({ title, description = SITE.description, image = '/og-image.jpg', noindex = false }) {
  const { pathname } = useLocation()
  const fullTitle = title ? `${title} — ${SITE.name}` : `${SITE.name} — Brand Identity, Digital & Interior Design`
  const url = `${SITE.url}${pathname === '/' ? '/' : pathname}`
  const img = image.startsWith('http') ? image : `${SITE.url}${image}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </>
  )
}
