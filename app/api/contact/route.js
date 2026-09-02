import nodemailer from 'nodemailer'
import { enrichLead, scoreLead, saveLead, countPreviousLeads } from '@/lib/leads'
import { notificationEmail, autoReplyEmail } from '@/lib/emails'

// ── Hostinger SMTP — direct, no third-party service ──────────────────────
// Required env vars in Vercel → Settings → Environment Variables:
//   SMTP_USER = info@muhammadkashif.net
//   SMTP_PASS = (Hostinger email password)
//
// Optional — lead storage. Create this once in the Neon console:
//
//   CREATE TABLE IF NOT EXISTS leads (
//     id            BIGSERIAL PRIMARY KEY,
//     name          TEXT NOT NULL,
//     email         TEXT NOT NULL,
//     message       TEXT NOT NULL,
//     score         INT,
//     tier          TEXT,
//     service       TEXT,
//     market        TEXT,
//     asin          TEXT,
//     country       TEXT,
//     region        TEXT,
//     city          TEXT,
//     timezone      TEXT,
//     referrer      TEXT,
//     landing_path  TEXT,
//     page_path     TEXT,
//     utm_source    TEXT,
//     utm_medium    TEXT,
//     utm_campaign  TEXT,
//     utm_term      TEXT,
//     ip            TEXT,
//     user_agent    TEXT,
//     status        TEXT DEFAULT 'new',
//     created_at    TIMESTAMPTZ DEFAULT NOW()
//   );
//   CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
//   CREATE INDEX IF NOT EXISTS leads_email_idx      ON leads (email);
//
// Until that table exists everything still works — storage is skipped silently.
// ─────────────────────────────────────────────────────────────────────────

function createTransport() {
  return nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true, // SSL on port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

// Simple in-request rate limit per IP (resets per serverless invocation)
const recentRequests = new Map()

function isRateLimited(ip) {
  const now = Date.now()
  const record = recentRequests.get(ip)
  if (record && now - record.time < 60_000 && record.count >= 3) return true
  recentRequests.set(ip, { time: now, count: (record?.count || 0) + 1 })
  return false
}

export async function POST(request) {
  // Rate limit
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
  if (isRateLimited(ip)) {
    return Response.json({ error: 'Too many requests. Please wait a minute.' }, { status: 429 })
  }

  let body
  try { body = await request.json() } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { name, email, message, honeypot } = body || {}

  // Honeypot — silent reject if bot filled hidden field
  if (honeypot) return Response.json({ success: true })

  // Validate fields
  if (!name?.trim() || name.trim().length < 2 || name.trim().length > 100)
    return Response.json({ error: 'Please enter a valid name.' }, { status: 400 })
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  if (!message?.trim() || message.trim().length < 10 || message.trim().length > 3000)
    return Response.json({ error: 'Message must be 10–3000 characters.' }, { status: 400 })

  // Check SMTP credentials are configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('SMTP_USER or SMTP_PASS not set in environment variables')
    return Response.json({ error: 'Email service not configured. Please contact me directly at info@muhammadkashif.net' }, { status: 503 })
  }

  // Strip CR/LF so submitted values can't inject extra email headers
  // (nodemailer CVE-class SMTP/header injection — see GHSA-268h-hp4c-crq3)
  const stripCrlf = (s) => s.replace(/[\r\n]+/g, ' ').trim()

  const cleanName    = stripCrlf(name.trim())
  const cleanEmail   = stripCrlf(email.trim().toLowerCase())
  const cleanMessage = message.trim()

  // ── Enrich + score ────────────────────────────────────────────────────
  const enrichment = enrichLead(request, body)
  const scoring = scoreLead({ message: cleanMessage, enrichment })
  const previousCount = await countPreviousLeads(cleanEmail)

  const lead = { name: cleanName, email: cleanEmail, message: cleanMessage }

  try {
    const transporter = createTransport()

    // ── 1. Notify me. This one must succeed. ────────────────────────────
    const notify = notificationEmail({ lead, scoring, enrichment, previousCount, ip })

    await transporter.sendMail({
      from:    `"Muhammad Kashif Website" <${process.env.SMTP_USER}>`,
      to:      process.env.SMTP_USER,
      replyTo: `"${cleanName}" <${cleanEmail}>`,
      subject: notify.subject,
      text:    notify.text,
      html:    notify.html,
    })

    // ── 2. Auto-reply to them. Best effort — never fails the request. ───
    let autoReplySent = false
    try {
      const reply = autoReplyEmail({ name: cleanName, scoring })
      await transporter.sendMail({
        from:    `"Muhammad Kashif" <${process.env.SMTP_USER}>`,
        to:      `"${cleanName}" <${cleanEmail}>`,
        replyTo: process.env.SMTP_USER,
        subject: reply.subject,
        text:    reply.text,
        html:    reply.html,
        headers: { 'X-Auto-Response-Suppress': 'OOF, AutoReply' },
      })
      autoReplySent = true
    } catch (err) {
      console.error('Auto-reply failed (enquiry still delivered):', err.message)
    }

    // ── 3. Store the lead. Best effort. ─────────────────────────────────
    await saveLead({
      ...lead,
      score: scoring.score,
      tier: scoring.tier,
      service: scoring.service,
      market: scoring.market,
      asin: scoring.asin,
      ...enrichment,
      ip,
    })

    return Response.json({ success: true, autoReplySent })
  } catch (err) {
    console.error('Email send failed:', err.message)
    return Response.json(
      { error: 'Failed to send message. Please email me directly at info@muhammadkashif.net' },
      { status: 500 }
    )
  }
}
