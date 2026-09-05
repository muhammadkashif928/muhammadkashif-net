import crypto from 'node:crypto'
import nodemailer from 'nodemailer'
import { scoreLead, saveLead, countPreviousLeads } from '@/lib/leads'
import { bookingEmail } from '@/lib/emails'

// ── Cal.com booking webhook ──────────────────────────────────────────────
//
// A booked call is the hottest lead this site can produce — someone gave up a
// slot on their own calendar, at 2am Kuching time, to look at their listing
// with a stranger. Until this existed that landed in Cal.com and nowhere
// else: not scored, not stored, not sitting alongside the form enquiries.
//
// Required env var in Vercel → Settings → Environment Variables:
//   CAL_WEBHOOK_SECRET = the same secret entered on the Cal.com webhook
//
// Without it this route returns 503 and stores nothing. That is deliberate:
// an unauthenticated endpoint that writes rows and sends mail is a spam
// funnel, so it fails closed rather than open.
// ─────────────────────────────────────────────────────────────────────────

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Attendee timezones that mean a buyer in a market worth prioritising.
const PRIORITY_TZ = /^(America\/|US\/|Canada\/|Europe\/London|Australia\/|Pacific\/Auckland)/

function verify(raw, signature, secret) {
  if (!signature) return false
  const expected = crypto.createHmac('sha256', secret).update(raw).digest('hex')
  const a = Buffer.from(expected)
  const b = Buffer.from(signature.trim().toLowerCase())
  // timingSafeEqual throws on a length mismatch, which is itself a signal
  return a.length === b.length && crypto.timingSafeEqual(a, b)
}

function transport() {
  return nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })
}

// Cal.com nests the useful parts; none of it is guaranteed to be present.
function readBooking(payload = {}) {
  const attendee = payload.attendees?.[0] || {}
  const responses = payload.responses || {}
  const notes =
    payload.additionalNotes ||
    responses.notes?.value ||
    responses.additionalNotes?.value ||
    ''

  return {
    name: attendee.name || payload.responses?.name?.value || 'Unknown',
    email: attendee.email || payload.responses?.email?.value || '',
    timeZone: attendee.timeZone || payload.attendees?.[0]?.timeZone || null,
    notes: typeof notes === 'string' ? notes.slice(0, 4000) : '',
    title: payload.title || payload.eventTitle || 'Call',
    startTime: payload.startTime || null,
    uid: payload.uid || null,
    meetingUrl: payload.metadata?.videoCallUrl || payload.location || null,
    cancellationReason: payload.cancellationReason || null,
  }
}

export async function POST(request) {
  const secret = process.env.CAL_WEBHOOK_SECRET
  if (!secret) {
    console.error('[cal] CAL_WEBHOOK_SECRET is not set — refusing the request')
    return Response.json({ error: 'Webhook not configured' }, { status: 503 })
  }

  const raw = await request.text()
  if (!verify(raw, request.headers.get('x-cal-signature-256'), secret)) {
    return Response.json({ error: 'Bad signature' }, { status: 401 })
  }

  let event
  try { event = JSON.parse(raw) } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Everything below this line came from outside. It is data, never
  // instructions — it is scored, stored and quoted, never acted on.
  const trigger = event.triggerEvent || 'UNKNOWN'
  const b = readBooking(event.payload)

  if (!['BOOKING_CREATED', 'BOOKING_RESCHEDULED', 'BOOKING_CANCELLED'].includes(trigger)) {
    return Response.json({ ok: true, ignored: trigger })
  }

  const cancelled = trigger === 'BOOKING_CANCELLED'

  const scoring = scoreLead({
    message: b.notes,
    enrichment: { isPriorityMarket: PRIORITY_TZ.test(b.timeZone || ''), country: b.timeZone },
  })

  // Booking the call is itself the strongest signal on the site, worth more
  // than anything the notes field can say. Floor it at HOT rather than let a
  // one-line note score it COLD.
  if (!cancelled) {
    scoring.score = Math.min(100, scoring.score + 40)
    scoring.tier = scoring.score >= 60 ? 'HOT' : 'WARM'
    scoring.reasons.unshift('Booked a call — gave up a slot on their calendar')
  }

  let previousCount = 0
  if (b.email) previousCount = await countPreviousLeads(b.email)

  if (!cancelled && b.email) {
    await saveLead({
      name: b.name,
      email: b.email,
      message: `[Booked: ${b.title}${b.startTime ? ` — ${b.startTime}` : ''}]\n\n${b.notes || '(no notes given)'}`,
      score: scoring.score,
      tier: scoring.tier,
      service: scoring.service,
      market: scoring.market,
      asin: scoring.asin,
      country: null,
      region: null,
      city: null,
      timezone: b.timeZone,
      referrer: 'https://cal.com/',
      landingPath: null,
      pagePath: '/book',
      utmSource: 'cal.com',
      utmMedium: 'booking',
      utmCampaign: b.title,
      utmTerm: null,
      ip: null,
      userAgent: null,
    })
  }

  try {
    const mail = bookingEmail({ booking: b, scoring, trigger, previousCount })
    await transport().sendMail({
      from: `"Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: b.email || undefined,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    })
  } catch (err) {
    // The booking already exists in Cal.com; a mail failure must not make
    // Cal.com retry and duplicate the lead row.
    console.error('[cal] notification failed:', err.message)
  }

  return Response.json({ ok: true })
}
