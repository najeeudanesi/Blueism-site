import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import HeroSlider from '../components/HeroSlider'
import WorkCard from '../components/WorkCard'
import { ToggleIcon, Collapse } from '../components/Accordion'
import { RevealText, FadeUp, Rule, EASE } from '../components/motion'
import { useI18n } from '../i18n/I18nProvider'

export default function Home() {
  const [open, setOpen] = useState(0)
  const { t, lang, projects, featured, services } = useI18n()

  return (
    <>
      <Seo />
      <Header />
      <main className="page home">
        <section className="intro container">
          <RevealText key={`intro-${lang}`} as="h1" className="intro-title" lines={t('home.introLines')} delay={0.45} />
          <FadeUp delay={0.9} className="intro-cta-wrap">
            <Link to="/contact" className="underline-link intro-cta" data-cursor={t('cursor.letsTalk')}>
              {t('home.startProject')}
            </Link>
          </FadeUp>
        </section>

        <section className="recent container" aria-label={t('home.recently')}>
          <div className="recent-head">
            <FadeUp as="p" delay={1} className="recent-lede">
              {t('home.lede')}
            </FadeUp>
            <FadeUp as="p" delay={1.05} className="recent-label">
              {t('home.recently')}
            </FadeUp>
          </div>
          <HeroSlider slides={featured} />
        </section>

        <Rule className="rule-blue section-rule" />

        <section id="work" className="works container">
          <RevealText key={`works-${lang}`} as="h2" className="section-label" text={t('home.allWorks')} />
          <div className="works-grid">
            {projects.map((p, i) => (
              <WorkCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </section>

        <Rule className="rule-blue section-rule" />

        <section id="services" className="services container">
          <RevealText key={`svc-${lang}`} as="h2" className="section-label" text={t('home.services')} />
          <ol className="svc-list">
            {services.map((s, i) => {
              const isOpen = open === i
              return (
                <FadeUp as="li" key={i} className={`svc ${isOpen ? 'is-open' : ''}`} delay={i * 0.05}>
                  <button
                    className="svc-head"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`svc-${i}`}
                    data-cursor={isOpen ? t('cursor.close') : t('cursor.open')}
                  >
                    <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="svc-title">{s.title}</span>
                    <ToggleIcon open={isOpen} />
                  </button>
                  <Collapse open={isOpen}>
                    <div className="svc-body" id={`svc-${i}`}>
                      <motion.div
                        className="svc-img"
                        initial={{ clipPath: 'inset(0 100% 0 0 round 10px)' }}
                        animate={{ clipPath: 'inset(0 0% 0 0 round 10px)' }}
                        transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                      >
                        <img src={s.image} alt="" loading="lazy" />
                      </motion.div>
                      <div className="svc-copy">
                        <p>{s.text}</p>
                        <ul>
                          {s.items.map((it) => (
                            <li key={it}>- {it}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Collapse>
                </FadeUp>
              )
            })}
          </ol>
        </section>
      </main>
      <Footer muted />
    </>
  )
}
