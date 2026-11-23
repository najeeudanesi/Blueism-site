import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { ToggleIcon, Collapse } from '../components/Accordion'
import { RevealText, FadeUp, EASE } from '../components/motion'
import { SITE } from '../data/site'
import { useI18n } from '../i18n/I18nProvider'

export default function Contact() {
  const { t, lang, services, faqs } = useI18n()
  const [open, setOpen] = useState(0)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const sent = status === 'sent'
  // When the form appeared — bots submit far faster than a person can type.
  const startedAt = useRef(Date.now())

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, lang, elapsed: Date.now() - startedAt.current }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.ok) throw new Error(json.error || res.statusText)
      form.reset()
      startedAt.current = Date.now()
      setStatus('sent')
    } catch (err) {
      console.error('Contact form failed:', err)
      setStatus('error')
    }
  }

  return (
    <div className="theme-dark" data-theme-dark>
      <Seo title={t('seo.contactTitle')} description={t('seo.contactDesc')} />
      <Header rule={false} />
      <main className="page contact">
        <section className="container contact-hero">
          <RevealText key={`title-${lang}`} as="h1" className="contact-title" text={t('contact.title')} delay={0.4} stagger={0.04} />
          <FadeUp as="p" className="contact-lede" delay={0.7}>
            {t('contact.lede1')}
            <br />
            {t('contact.lede2')}
          </FadeUp>
        </section>

        <section className="container form-section">
          <RevealText key={`form-${lang}`} as="h2" className="form-title" text={t('contact.formTitle')} />
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                className="form-sent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <p>{t('contact.sent1')}</p>
                <p>
                  {t('contact.sent2')}{' '}
                  <a href={`mailto:${SITE.email}`} dir="ltr">
                    {SITE.email}
                  </a>
                </p>
                <button className="btn-light" onClick={() => setStatus('idle')}>
                  {t('contact.back')}
                </button>
              </motion.div>
            ) : (
              <motion.form key={`form-${lang}`} className="project-form" onSubmit={onSubmit} exit={{ opacity: 0, y: -20 }}>
                <FadeUp className="field">
                  <label htmlFor="name">{t('contact.name')}</label>
                  <input id="name" name="name" required dir="auto" placeholder={t('contact.namePh')} autoComplete="name" />
                </FadeUp>
                <FadeUp className="field" delay={0.05}>
                  <label htmlFor="email">{t('contact.email')}</label>
                  <input id="email" name="email" type="email" required dir="ltr" placeholder={t('contact.emailPh')} autoComplete="email" />
                </FadeUp>
                <FadeUp className="field" delay={0.1}>
                  <label htmlFor="services">{t('contact.services')}</label>
                  <select id="services" name="services" required defaultValue="">
                    <option value="" disabled>
                      {t('contact.servicesPh')}
                    </option>
                    {services.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                    <option>{t('contact.interior')}</option>
                    <option>{t('contact.other')}</option>
                  </select>
                </FadeUp>
                <FadeUp className="field" delay={0.15}>
                  <label htmlFor="budget">{t('contact.budget')}</label>
                  <select id="budget" name="budget" required defaultValue="">
                    <option value="" disabled>
                      {t('contact.budgetPh')}
                    </option>
                    {t('contact.budgets').map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </FadeUp>
                <FadeUp className="field field-full" delay={0.2}>
                  <label htmlFor="message">{t('contact.message')}</label>
                  <textarea id="message" name="message" rows={7} dir="auto" placeholder={t('contact.messagePh')} />
                </FadeUp>
                {/* Honeypot: invisible to people and screen readers, but bots fill it in. */}
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="bs_hp_url">Leave this field empty</label>
                  <input id="bs_hp_url" type="text" name="bs_hp_url" tabIndex={-1} autoComplete="new-password" defaultValue="" />
                </div>
                {status === 'error' && (
                  <p className="form-error field-full" role="alert">
                    {t('contact.error')}{' '}
                    <a href={`mailto:${SITE.email}`} dir="ltr">
                      {SITE.email}
                    </a>
                  </p>
                )}
                <FadeUp className="field-full" delay={0.25}>
                  <button
                    type="submit"
                    className="btn-light"
                    data-cursor={t('cursor.send')}
                    disabled={status === 'sending'}
                    aria-busy={status === 'sending'}
                  >
                    {status === 'sending' ? t('contact.sending') : t('contact.submit')}
                  </button>
                </FadeUp>
              </motion.form>
            )}
          </AnimatePresence>
        </section>

        <section className="container faq">
          <RevealText key={`faq-${lang}`} as="h2" className="section-label" text={t('contact.faq')} />
          <ul className="faq-list">
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <FadeUp as="li" key={`${lang}-${i}`} className="faq-item" delay={i * 0.05}>
                  <button
                    className="faq-q"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    data-cursor={isOpen ? t('cursor.close') : t('cursor.open')}
                  >
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
