// Vercel serverless function: sends the contact-form brief through Hostinger SMTP.
//
// Required environment variables (Vercel → Project → Settings → Environment Variables):
//   SMTP_USER  the Hostinger mailbox, e.g. support@blueismstudio.com
//   SMTP_PASS  that mailbox's password
// Optional:
//   SMTP_HOST  default smtp.hostinger.com
//   SMTP_PORT  default 465 (SSL); use 587 for STARTTLS
//   MAIL_TO    where briefs are delivered, default SMTP_USER
import nodemailer from 'nodemailer'

const LIMITS = { name: 120, email: 200, services: 120, budget: 60, message: 5000, lang: 5 }
const MIN_FILL_MS = 3000

const trap = (res, reason) => {
  console.warn(`contact: spam blocked (${reason})`)
  return res.status(200).json({ ok: true })
}
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const clean = (v, max) => String(v ?? '').replace(/\r/g, '').trim().slice(0, max)
const oneLine = (v) => v.replace(/\n+/g, ' ')
const esc = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'method_not_allowed' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      body = {}
    }
  }
  body = body || {}

  // Spam traps. Bots get a fake success so they don't learn to adapt.
  //  1. Honeypot: a hidden field real visitors never see or fill.
  //  2. Timing: the page reports how long the form was open; a person can't
  //     fill it in under MIN_FILL_MS, and direct POSTs by bots omit it.
  const elapsed = Number(body.elapsed)
  if (String(body.bs_hp_url ?? '').trim() !== '') return trap(res, 'honeypot')
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) return trap(res, 'too_fast')

  const name = oneLine(clean(body.name, LIMITS.name))
  const email = oneLine(clean(body.email, LIMITS.email))
  const services = oneLine(clean(body.services, LIMITS.services))
  const budget = oneLine(clean(body.budget, LIMITS.budget))
  const message = clean(body.message, LIMITS.message)
  const lang = oneLine(clean(body.lang, LIMITS.lang))

  if (!name || !EMAIL_RE.test(email) || !services || !budget) {
    return res.status(400).json({ ok: false, error: 'invalid' })
  }

  const { SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_USER || !SMTP_PASS) {
    console.error('contact: SMTP_USER / SMTP_PASS are not set')
    return res.status(500).json({ ok: false, error: 'not_configured' })
  }
  const port = Number(process.env.SMTP_PORT || 465)
  const to = process.env.MAIL_TO || SMTP_USER

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Service', services],
    ['Budget', budget],
    ['Language', lang || '—'],
  ]
  const text = [...rows.map(([k, v]) => `${k}: ${v}`), '', message || '(no message)'].join('\n')
  const html = `
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 16px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`,
        )
        .join('')}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:20px">${esc(message || '(no message)')}</p>`

  try {
    await transporter.sendMail({
      // Hostinger only relays mail sent from the authenticated mailbox.
      from: { name: 'Blueism Studio Website', address: SMTP_USER },
      to,
      replyTo: { name, address: email },
      subject: `New project — ${services} — ${name}`,
      text,
      html,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('contact: send failed', err)
    return res.status(502).json({ ok: false, error: 'send_failed' })
  }
}
