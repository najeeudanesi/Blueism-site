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
                {p.kicker ?? p.service}
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
          <RevealImage
            src={p.hero}
            video={p.heroVideo}
            alt={p.title}
            className={`project-hero ${p.heroFit === 'tall' ? 'is-tall' : ''} ${p.heroVideo ? 'is-video' : ''}`}
            priority
            delay={0.5}
          />
          {p.heroCap && <Caption text={p.copy?.caps?.[p.heroCap]} num={p.heroVideo ? t('project.scroll') : '01'} />}
        </section>

        {p.body && (
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
        )}

        <div className={`project-sections ${p.copy ? 'is-editorial' : ''}`}>
          {p.sections.map((s, i) => (
            <Section key={i} s={s} p={p} />
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

/** Small caption line under media: description left, figure number right. */
function Caption({ text, num }) {
  if (!text && !num) return null
  return (
    <FadeUp className="media-cap" amount={0.6}>
      <span>{text}</span>
      {num && <span>{num}</span>}
    </FadeUp>
  )
}

/** "(03) Process" label + large heading, as in the studio's case-study format. */
function SecHead({ n, label, title }) {
  return (
    <div className="container sec-head">
      <FadeUp className="sec-label">
        <b>({n})</b>
        {label}
      </FadeUp>
      <RevealText as="h2" className="sec-title" text={title} stagger={0.05} />
    </div>
  )
}

const STEP_CLASS = ['', '', 'is-branch', 'is-branch', 'is-dark', 'is-accent']

/** Process flow: Listen → Direct → (Brand ∥ Design) → Build → Launch. Nodes and connectors draw in sequence. */
function Process({ c }) {
  const steps = c.steps
  const node = (st, i) => (
    <motion.div
      key={i}
      className={`pf-node ${STEP_CLASS[i]}`}
      variants={{ hidden: { opacity: 0, y: 30, filter: 'blur(6px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } } }}
    >
      <small>{i === steps.length - 1 ? c.live : String(i + 1).padStart(2, '0')}</small>
      <strong>{st.title}</strong>
      {st.lines.map((l) => (
        <span key={l}>{l}</span>
      ))}
    </motion.div>
  )
  const line = (k) => (
    <motion.i
      key={`l${k}`}
      className="pf-line"
      aria-hidden="true"
      variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.7, ease: EASE } } }}
    />
  )
  return (
    <div className="container">
      <motion.div
        className="pf"
        role="group"
        aria-label={steps.map((s) => s.title).join(' → ')}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.14 }}
      >
        {node(steps[0], 0)}
        {line(0)}
        {node(steps[1], 1)}
        {line(1)}
        <div className="pf-branch">
          <motion.span className="pf-par" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
            {c.parallel}
          </motion.span>
          {node(steps[2], 2)}
          {node(steps[3], 3)}
        </div>
        {line(2)}
        {node(steps[4], 4)}
        {line(3)}
        {node(steps[5], 5)}
      </motion.div>
    </div>
  )
}

function Section({ s, p }) {
  const { t, color } = useI18n()
  const c = p.copy ?? {}
  const cap = s.cap ? <Caption text={c.caps?.[s.cap]} num={s.num} /> : null
  switch (s.type) {
    case 'textblock':
      return (
        <div className="container ed-block">
          <div>
            <FadeUp className="sec-label">
              <b>(01)</b>
              {c.overview}
            </FadeUp>
            <FadeUp as="dl" className="ed-meta" delay={0.1}>
              <div>
                <dt>{t('project.client')}</dt>
                <dd>
                  <bdi>{p.client}</bdi>
                </dd>
              </div>
              <div>
                <dt>{t('project.service')}</dt>
                <dd>{p.service}</dd>
              </div>
              {p.scope && (
                <div>
                  <dt>{t('project.scope')}</dt>
                  <dd>{p.scope}</dd>
                </div>
              )}
              {p.platforms && (
                <div>
                  <dt>{t('project.platforms')}</dt>
                  <dd>{p.platforms}</dd>
                </div>
              )}
              <div>
                <dt>{t('project.year')}</dt>
                <dd>{p.year}</dd>
              </div>
            </FadeUp>
          </div>
          <div>
            <FadeUp as="p" className="ed-lead">
              {c.lead}
            </FadeUp>
            <div className="ed-cols">
              {c.cols?.map((txt, i) => (
                <FadeUp as="p" key={i} delay={0.1 + i * 0.1}>
                  {txt}
                </FadeUp>
              ))}
            </div>
            <FadeUp className="ed-tags" delay={0.25}>
              {c.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </FadeUp>
          </div>
        </div>
      )
    case 'brief':
      return (
        <div className="container ed-block">
          <FadeUp className="sec-label">
            <b>(02)</b>
            {c.brief}
          </FadeUp>
          <div className="ed-cols is-brief">
            {[
              [c.challenge, c.challengeTitle, c.challengeText],
              [c.approach, c.approachTitle, c.approachText],
            ].map(([label, title, text], i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="ed-small">{label}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      )
    case 'heading':
      return <SecHead n={s.n} label={c[s.label]} title={c[s.title]} />
    case 'process':
      return <Process c={c} />
    case 'smallvideo':
      return (
        <div className="container sec sec-smallvideo">
          <div className="smallvideo-frame">
            <RevealImage video={s.src} poster={s.poster} src={s.poster} alt={s.alt} />
          </div>
          {cap && <div className="smallvideo-cap">{cap}</div>}
        </div>
      )
    case 'duo':
      return (
        <div className="container sec sec-duo">
          {s.items.map((it, k) => (
            <RevealImage key={k} src={it.src} alt={it.alt} delay={k * 0.12} />
          ))}
        </div>
      )
    case 'image':
      return (
        <div className={s.bleed ? 'sec sec-bleed' : `container sec ${s.size === 'half' ? 'sec-half' : ''} ${s.inset ? 'sec-inset' : ''}`}>
          <RevealImage src={s.src} alt={s.alt} parallax={s.parallax} className={s.bleed ? 'is-bleed' : ''} />
          {cap}
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
        <>
          <div className={`container sec sec-pair ${s.flat ? 'is-flat' : ''}`}>
            {s.items.map((it, k) => (
              <RevealImage key={k} src={it.src} alt={it.alt} delay={k * 0.12} />
            ))}
          </div>
          {cap && <div className="container">{cap}</div>}
        </>
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
