import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { RevealText, FadeUp, ScrollWords, EASE } from '../components/motion'
import { useI18n } from '../i18n/I18nProvider'

export default function About() {
  const { t, lang, isRTL, values } = useI18n()
  const rockRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: rockRef, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], isRTL ? [10, -14] : [-10, 14])
  const ry = useTransform(scrollYProgress, [0, 1], [60, -80])
  const combine = t('about.combine')

  return (
    <>
      <Seo title={t('seo.aboutTitle')} description={t('seo.aboutDesc')} />
      <Header rule={false} />
      <main className="page about">
        <section className="container about-hero">
          <RevealText key={`title-${lang}`} as="h1" className="about-title" lines={t('about.titleLines')} delay={0.4} />
          <div className="about-split">
            <div ref={rockRef} className="rock-wrap">
              <motion.img
                src="/images/about-rock.webp"
                alt={t('about.rockAlt')}
                className="rock"
                style={{ rotate, y: ry }}
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.6, ease: EASE, delay: 0.6 }}
              />
            </div>
            <div className="combine" key={`combine-${lang}`}>
              <FadeUp as="p" delay={0.8}>
                {t('about.combineIntro')}
              </FadeUp>
              <ul>
                {combine.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.9 + i * 0.06 }}
                  >
                    {c}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container about-statement">
          <ScrollWords key={`stmt-${lang}`} className="statement" text={t('about.statement')} />
        </section>

        <section className="container values">
          <RevealText key={`values-${lang}`} as="h2" className="section-label" text={t('about.values')} />
          <ol className="values-list">
            {values.map((v, i) => (
              <motion.li
                key={i}
                className="value"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                <span className="value-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-text">{v.text}</p>
              </motion.li>
            ))}
          </ol>
        </section>
      </main>
      <Footer accent={false} />
    </>
  )
}
