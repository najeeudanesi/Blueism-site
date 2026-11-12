import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { RevealText, FadeUp, ScrollWords, EASE } from '../components/motion'
import { values } from '../data/site'

const COMBINE = ['strategy,', 'brand identity,', 'visual communication', 'and art direction', 'with digital products,', 'motion,', '3D,', 'automation', 'and AI-powered tools.']

export default function About() {
  const rockRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: rockRef, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 14])
  const ry = useTransform(scrollYProgress, [0, 1], [60, -80])

  return (
    <>
      <Seo
        title="About"
        description="Blueism Studio is an independent design studio working across brand identity, digital design and interior design — building complete brands and digital systems from the ground up."
      />
      <Header rule={false} />
      <main className="page about">
        <section className="container about-hero">
          <RevealText
            as="h1"
            className="about-title"
            lines={['Blueism Studio is a design studio that builds', 'complete brands and digital systems from', 'the ground up.']}
            delay={0.4}
          />
          <div className="about-split">
            <div ref={rockRef} className="rock-wrap">
              <motion.img
                src="/images/about-rock.webp"
                alt="Stone engraved with BLUEISM"
                className="rock"
                style={{ rotate, y: ry }}
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.6, ease: EASE, delay: 0.6 }}
              />
            </div>
            <div className="combine">
              <FadeUp as="p" delay={0.8}>We combine</FadeUp>
              <ul>
                {COMBINE.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, x: 40 }}
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
          <ScrollWords
            className="statement"
            text="Blueism Studio is an independent design studio working across brand identity, digital design and interior design. We help businesses shape how people experience their brand, from the first time someone sees their logo to the moment they visit their website or walk into their space."
          />
        </section>

        <section className="container values">
          <RevealText as="h2" className="section-label" text="OUR VALUES" />
          <ol className="values-list">
            {values.map((v, i) => (
              <motion.li
                key={v.title}
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
