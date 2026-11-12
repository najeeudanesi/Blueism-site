import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import NotFound from './NotFound'
import { RevealText, FadeUp, RevealImage, Rule, EASE } from '../components/motion'
import { getProject, nextProject } from '../data/projects'

export default function Project() {
  const { slug } = useParams()
  const p = getProject(slug)
  if (!p) return <NotFound />
  const next = nextProject(slug)
  const themed = Boolean(p.theme)

  return (
    <div className={`project-page ${themed ? 'is-themed' : ''}`} style={themed ? { '--p-bg': p.theme.bg, '--p-ink': p.theme.ink, '--p-accent': p.theme.accent } : undefined}>
      <Seo title={p.fullName ? `${p.title} (${p.fullName})` : p.title} description={p.intro} image={p.hero} />
      <Header rule={false} />
      <main className="page project" key={slug}>
        <div className="container">
          <FadeUp delay={0.3}>
            <Link to="/#work" className="back-link" data-cursor="ALL WORK">
              <span aria-hidden="true">&lt;</span> Back
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
                <br />© {p.year}
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
              <dt>Service</dt>
              <dd>{p.service}</dd>
            </div>
            <div>
              <dt>Client</dt>
              <dd>{p.client}</dd>
            </div>
            <div>
              <dt>Year</dt>
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
            <span className="next-label">Next</span> <span aria-hidden="true">&gt;</span>
            <motion.span className="next-thumb" initial={false}>
              <img src={next.cover} alt="" />
            </motion.span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function Section({ s }) {
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
            <RevealText as="h2" className="palette-title" lines={['Color', 'Palette']} />
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
                <strong>{c.name}</strong>
                <span>{c.hex}</span>
                <span>
                  RGB
                  <br />
                  {c.rgb}
                </span>
                <span>
                  CMYK
                  <br />
                  {c.cmyk}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )
    case 'video':
      return (
        <div className="sec sec-video">
          <RevealImage src={s.side} alt="DLVRNC. app icon" className="video-side" />
          <motion.div
            className="video-frame"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
