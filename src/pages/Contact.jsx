import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { ToggleIcon, Collapse } from '../components/Accordion'
import { RevealText, FadeUp, EASE } from '../components/motion'
import { faqs, services, SITE } from '../data/site'

const BUDGETS = ['Under $2,000', '$2,000 – $5,000', '$5,000 – $10,000', '$10,000 – $25,000', '$25,000+', 'Not sure yet']

export default function Contact() {
  const [open, setOpen] = useState(0)
  const [sent, setSent] = useState(false)

  // No backend: compose the brief into an email to the studio.
  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = `New project — ${f.get('services')} — ${f.get('name')}`
    const body = [
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      `Service: ${f.get('services')}`,
      `Budget: ${f.get('budget')}`,
      '',
      f.get('message') || '',
    ].join('\n')
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="theme-dark" data-theme-dark>
      <Seo
        title="Contact"
        description="Starting a brand, building a website, or developing something new? Tell Blueism Studio about your project."
      />
      <Header rule={false} />
      <main className="page contact">
        <section className="container contact-hero">
          <RevealText as="h1" className="contact-title" text="Good projects start with a conversation." delay={0.4} stagger={0.04} />
          <FadeUp as="p" className="contact-lede" delay={0.7}>
            Starting a brand, building a website, or developing something new?
            <br />
            Tell us what you have in mind.
          </FadeUp>
        </section>

        <section className="container form-section">
          <RevealText as="h2" className="form-title" text="Tell us about your project" />
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                className="form-sent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <p>Thank you — your email app should open with your brief.</p>
                <p>
                  If it didn’t, write to us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                </p>
                <button className="btn-light" onClick={() => setSent(false)}>
                  Back to form
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" className="project-form" onSubmit={onSubmit} exit={{ opacity: 0, y: -20 }}>
                <FadeUp className="field">
                  <label htmlFor="name">Name*</label>
                  <input id="name" name="name" required placeholder="Full Name" autoComplete="name" />
                </FadeUp>
                <FadeUp className="field" delay={0.05}>
                  <label htmlFor="email">Email*</label>
                  <input id="email" name="email" type="email" required placeholder="Work Email" autoComplete="email" />
                </FadeUp>
                <FadeUp className="field" delay={0.1}>
                  <label htmlFor="services">Services*</label>
                  <select id="services" name="services" required defaultValue="">
                    <option value="" disabled>
                      Service you’re looking for
                    </option>
                    {services.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                    <option>Interior Design</option>
                    <option>Something else</option>
                  </select>
                </FadeUp>
                <FadeUp className="field" delay={0.15}>
                  <label htmlFor="budget">Budget*</label>
                  <select id="budget" name="budget" required defaultValue="">
                    <option value="" disabled>
                      Estimated project budget
                    </option>
                    {BUDGETS.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </FadeUp>
                <FadeUp className="field field-full" delay={0.2}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={7} placeholder="Tell us about your project" />
                </FadeUp>
                <FadeUp className="field-full" delay={0.25}>
                  <button type="submit" className="btn-light" data-cursor="SEND">
                    Submit
                  </button>
                </FadeUp>
              </motion.form>
            )}
          </AnimatePresence>
        </section>

        <section className="container faq">
          <RevealText as="h2" className="section-label" text="FAQ" />
          <ul className="faq-list">
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <FadeUp as="li" key={f.q} className="faq-item" delay={i * 0.05}>
                  <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} data-cursor={isOpen ? 'CLOSE' : 'OPEN'}>
                    <span>{f.q}</span>
                    <ToggleIcon open={isOpen} />
                  </button>
                  <Collapse open={isOpen}>
                    <p className="faq-a">{f.a}</p>
                  </Collapse>
                </FadeUp>
              )
            })}
          </ul>
        </section>
      </main>
      <Footer accent={false} />
    </div>
  )
}
