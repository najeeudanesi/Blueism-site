import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import NotFound from './NotFound'
import { RevealText, FadeUp, RevealImage, Rule, EASE } from '../components/motion'
import { useI18n } from '../i18n/I18nProvider'

export default function Project() {
  const { slug } = useParams()
  const { t, lang, projects } = useI18n()
  const available = projects.filter((x) => x.available)
  const idx = available.findIndex((x) => x.slug === slug)
  if (idx === -1) return <NotFound />
  const p = available[idx]
  const next = available[(idx + 1) % available.length]
  const themed = Boolean(p.theme)

  return (
    <div
      className={`project-page ${themed ? 'is-themed' : ''}`}
      style={themed ? { '--p-bg': p.theme.bg, '--p-ink': p.theme.ink, '--p-accent': p.theme.accent } : undefined}
    >
      <Seo title={p.fullName ? `${p.title} (${p.fullName})` : p.title} description={p.intro} image={p.hero} />
      <Header rule={false} />
      <main className="page project" key={`${slug}-${lang}`}>
        <div className="container">
          <FadeUp delay={0.3}>
            <Link to="/#work" className="back-link" data-cursor={t('cursor.allWork')}>
              <span aria-hidden="true" className="arrow arrow-back">
                &lt;
              </span>{' '}
              {t('project.back')}
            </Link>
          </FadeUp>
        </div>
        <Rule className="rule-blue project-rule" delay={0.4} />

        <section className="container project-head">
          <div>
            <RevealText as="h1" className="project-title" text={p.title} delay={0.5} />
            {p.eyebrow && (
              <FadeUp as="p" className="project-kicker" delay={0.7}>
                {p.service}
                <br />
                <bdi>© {p.year}</bdi>
              </FadeUp>
            )}
          </div>
          <div className="project-intro">
            {p.eyebrow && (
              <FadeUp as="p" className="project-eyebrow" delay={0.6}>
                {p.eyebrow}
              </FadeUp>
            )}
            <FadeUp as="p" delay={0.65}>
              {p.intro}
            </FadeUp>
          </div>
        </section>

        <section className="container">
          <RevealImage src={p.hero} alt={p.title} className={`project-hero ${p.heroFit === 'tall' ? 'is-tall' : ''}`} priority delay={0.5} />
        </section>

        <section className="container project-details">
          <FadeUp as="p" className="project-body">
            {p.body}
          </FadeUp>
          <FadeUp as="dl" className="project-meta" delay={0.1}>
            <div>
              <dt>{t('project.service')}</dt>
              <dd>{p.service}</dd>
            </div>
            <div>
              <dt>{t('project.client')}</dt>
              <dd>
                <bdi>{p.client}</bdi>
              </dd>
            </div>
            <div>
              <dt>{t('project.year')}</dt>
              <dd>{p.year}</dd>
            </div>
          </FadeUp>
        </section>

        <div className="project-sections">
          {p.sections.map((s, i) => (
            <Section key={i} s={s} />
          ))}
        </div>

        <div className="container next-wrap">
          <Link to={`/work/${next.slug}`} className="next-link" data-cursor={next.title.toUpperCase()}>
            <span className="next-label">{t('project.next')}</span>{' '}
            <span aria-hidden="true" className="arrow arrow-next">
              &gt;
            </span>
            <span className="next-thumb">
              <img src={next.cover} alt="" />
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function Section({ s }) {
  const { t, color } = useI18n()
  switch (s.type) {
    case 'image':
      return (
        <div className={s.bleed ? 'sec sec-bleed' : `container sec ${s.size === 'half' ? 'sec-half' : ''} ${s.inset ? 'sec-inset' : ''}`}>
          <RevealImage src={s.src} alt={s.alt} parallax={s.parallax} className={s.bleed ? 'is-bleed' : ''} />
        </div>
      )
    case 'trio':
      return (
        <div className={s.flush ? 'sec sec-trio is-flush' : 'container sec sec-trio'}>
          {s.items.map((it, k) => (
            <RevealImage key={k} src={it.src} alt={it.alt} delay={k * 0.1} className={s.flush ? 'is-bleed' : ''} />
          ))}
        </div>
      )
    case 'pair':
      return (
        <div className="container sec sec-pair">
          {s.items.map((it, k) => (
            <RevealImage key={k} src={it.src} alt={it.alt} delay={k * 0.12} />
          ))}
        </div>
      )
    case 'palette':
      return (
        <div className="sec sec-palette">
          <div className="container">
            <RevealText as="h2" className="palette-title" lines={t('project.palette')} />
          </div>
          <motion.div
            className={`palette palette-${s.swatches.length}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            {s.swatches.map((c) => (
              <motion.div
                key={c.hex}
                className={`swatch area-${c.area}`}
                style={{ background: c.hex, color: c.ink }}
                variants={{
                  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
                  show: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.1, ease: EASE } },
                }}
              >
                <strong>{color(c.name)}</strong>
                {/* <bdi> keeps hex/RGB/CMYK values in reading order on RTL pages */}
                <bdi dir="ltr">{c.hex}</bdi>
                <span>
                  RGB
                  <br />
                  <bdi dir="ltr">{c.rgb}</bdi>
                </span>
                <span>
                  CMYK
                  <br />
                  <bdi dir="ltr">{c.cmyk}</bdi>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )
    case 'video':
      return (
        <div className="sec sec-video">
          <RevealImage src={s.side} alt={t('project.appIconAlt')} className="video-side" />
          <motion.div
            className="video-frame"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <video src={s.src} poster={s.poster} autoPlay muted loop playsInline preload="metadata" aria-label={s.alt} />
          </motion.div>
        </div>
      )
    default:
      return null
  }
}
