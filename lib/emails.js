/**
 * Transactional email templates — brand-matched to muhammadkashif.net.
 *
 * Two emails per enquiry:
 *   1. notificationEmail — to me, triage-first, readable on a phone.
 *   2. autoReplyEmail    — to the prospect, instantly, doing real work:
 *                          sets the reply window, proves the work, and asks
 *                          the three things that let me quote without a
 *                          round-trip.
 */
import { siteConfig, absoluteUrl } from './seo'

const BLACK = '#0a0a0a'
const ACCENT = '#e8e800'
const CREAM = '#f5f5f0'
const MUTED = '#888888'

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const shell = (inner) => `
<div style="font-family:Arial,Helvetica,sans-serif;background:${CREAM};padding:24px 12px;">
  <div style="max-width:600px;margin:0 auto;">
    ${inner}
  </div>
</div>`

const header = (kicker, sub) => `
<div style="background:${BLACK};padding:26px 32px;">
  <h1 style="font-family:'Arial Black',Arial,sans-serif;color:${ACCENT};margin:0;font-size:22px;letter-spacing:4px;">
    ${esc(kicker)}
  </h1>
  <p style="color:${CREAM};margin:6px 0 0;font-size:11px;letter-spacing:2px;opacity:0.55;">
    ${esc(sub)}
  </p>
</div>`

const footer = `
<div style="padding:20px 32px;text-align:center;">
  <p style="font-size:11px;color:#999;margin:0;line-height:1.7;">
    Muhammad Kashif — Amazon Brand Designer<br>
    <a href="${siteConfig.url}" style="color:#666;">muhammadkashif.net</a>
    &nbsp;·&nbsp;
    <a href="mailto:${siteConfig.email}" style="color:#666;">${siteConfig.email}</a>
  </p>
</div>`

// ── 1. Notification to me ───────────────────────────────────────────────────

export function notificationEmail({ lead, scoring, enrichment, previousCount, ip }) {
  const tierColor = scoring.tier === 'HOT' ? '#c81e1e' : scoring.tier === 'WARM' ? '#b06d00' : MUTED
  const place = [enrichment.city, enrichment.region, enrichment.country].filter(Boolean).join(', ') || 'Unknown location'

  const row = (label, value) => value ? `
    <tr>
      <td style="font-size:10px;letter-spacing:2px;color:${MUTED};padding:6px 12px 6px 0;text-transform:uppercase;white-space:nowrap;vertical-align:top;">${esc(label)}</td>
      <td style="font-size:14px;color:${BLACK};padding:6px 0;">${value}</td>
    </tr>` : ''

  const subject = `[${scoring.tier} ${scoring.score}] ${lead.name} — ${scoring.service || 'enquiry'}${enrichment.country ? ` (${enrichment.country})` : ''}`

  const html = shell(`
    ${header('NEW ENQUIRY', 'MUHAMMADKASHIF.NET')}
    <div style="padding:28px 32px;background:#fff;border:2px solid ${BLACK};border-top:none;">

      <div style="display:inline-block;background:${tierColor};color:#fff;font-size:11px;font-weight:700;letter-spacing:2px;padding:6px 12px;margin-bottom:18px;">
        ${scoring.tier} · ${scoring.score}/100
      </div>

      <table style="width:100%;border-collapse:collapse;margin-bottom:18px;">
        ${row('Name', esc(lead.name))}
        ${row('Email', `<a href="mailto:${esc(lead.email)}" style="color:${BLACK};">${esc(lead.email)}</a>`)}
        ${row('From', esc(place))}
        ${row('Their time', enrichment.timezone ? esc(new Date().toLocaleString('en-US', { timeZone: enrichment.timezone, dateStyle: 'medium', timeStyle: 'short' })) : null)}
        ${row('Service', scoring.service ? esc(scoring.service) : null)}
        ${row('Market', scoring.market ? esc(scoring.market) : null)}
        ${row('ASIN', scoring.asin ? `<a href="https://www.amazon.com/dp/${esc(scoring.asin)}" style="color:${BLACK};">${esc(scoring.asin)}</a>` : null)}
        ${row('Listing', scoring.amazonUrl ? `<a href="${esc(scoring.amazonUrl)}" style="color:${BLACK};">Open listing →</a>` : null)}
        ${row('Source', enrichment.utmSource ? esc([enrichment.utmSource, enrichment.utmMedium, enrichment.utmCampaign].filter(Boolean).join(' / ')) : (enrichment.referrer ? esc(enrichment.referrer) : 'Direct'))}
        ${row('Landed on', enrichment.landingPath ? esc(enrichment.landingPath) : null)}
        ${row('History', previousCount > 0 ? `<strong>Returning</strong> — ${previousCount} previous enquir${previousCount === 1 ? 'y' : 'ies'}` : null)}
      </table>

      ${scoring.reasons.length ? `
      <p style="font-size:10px;letter-spacing:2px;color:${MUTED};text-transform:uppercase;margin:0 0 6px;">Why this score</p>
      <p style="font-size:12px;color:#555;margin:0 0 20px;line-height:1.6;">${esc(scoring.reasons.join(' · '))}</p>` : ''}

      <div style="background:${CREAM};border-left:4px solid ${ACCENT};padding:16px 20px;">
        <p style="font-size:10px;letter-spacing:2px;color:${MUTED};text-transform:uppercase;margin:0 0 10px;">Message</p>
        <p style="font-size:14px;line-height:1.7;color:${BLACK};margin:0;white-space:pre-wrap;">${esc(lead.message)}</p>
      </div>

      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #eee;">
        <a href="mailto:${esc(lead.email)}?subject=${encodeURIComponent(`Re: your enquiry — Muhammad Kashif`)}"
           style="display:inline-block;background:${BLACK};color:${ACCENT};text-decoration:none;padding:12px 24px;font-size:12px;letter-spacing:2px;font-weight:700;">
          REPLY TO ${esc(lead.name.toUpperCase())} →
        </a>
        <p style="font-size:11px;color:#aaa;margin:14px 0 0;">
          An auto-reply has already gone to them. IP ${esc(ip)}
        </p>
      </div>
    </div>
    ${footer}
  `)

  const text = [
    `[${scoring.tier} ${scoring.score}/100]`,
    `Name:   ${lead.name}`,
    `Email:  ${lead.email}`,
    `From:   ${place}`,
    scoring.service ? `Service: ${scoring.service}` : null,
    scoring.asin ? `ASIN:   ${scoring.asin}` : null,
    `Source: ${enrichment.utmSource || enrichment.referrer || 'Direct'}`,
    previousCount > 0 ? `History: returning (${previousCount} previous)` : null,
    ``,
    `Message:`,
    lead.message,
    ``,
    `--- muhammadkashif.net contact form · IP ${ip}`,
  ].filter(Boolean).join('\n')

  return { subject, html, text }
}

// ── 2. Instant auto-reply to the prospect ───────────────────────────────────

export function autoReplyEmail({ name, scoring }) {
  const first = String(name).trim().split(/\s+/)[0] || 'there'

  // Everything the scorer already worked out from their message. Reflecting
  // this back is the point of the email: it shows the message was read, and
  // it is the difference between "here is a form" and "I am paying
  // attention". An earlier version used `scoring` only to *drop* a question
  // and then went on to ask for the marketplace it had just extracted —
  // which is precisely the round-trip this email claims to save.
  const known = [
    scoring.asin
      ? { label: 'Listing', value: scoring.asin, href: `https://www.amazon.com/dp/${scoring.asin}` }
      : scoring.amazonUrl
        ? { label: 'Listing', value: 'the listing you linked', href: scoring.amazonUrl }
        : null,
    scoring.market ? { label: 'Marketplace', value: scoring.market } : null,
    scoring.service ? { label: 'Work', value: scoring.service } : null,
  ].filter(Boolean)

  // Ask ONLY for what the message did not already tell us.
  const asks = [
    !scoring.asin && !scoring.amazonUrl
      ? 'Your ASIN or listing link — so I can look at what is live right now'
      : null,
    !scoring.market
      ? 'Which marketplace you sell on — US, UK or CA'
      : null,
    'Whether you are Brand Registered — it decides what is available to you',
    'What you want the images to fix: clicks, conversion, returns, or a full rebrand',
  ].filter(Boolean)

  const knownHtml = known.length
    ? `
      <div style="border-left:4px solid ${ACCENT};padding:14px 20px;margin-bottom:24px;background:#fff;border-top:1px solid #eee;border-right:1px solid #eee;border-bottom:1px solid #eee;">
        <p style="font-size:10px;letter-spacing:2px;color:${MUTED};text-transform:uppercase;margin:0 0 10px;">
          What I have picked up so far
        </p>
        <table style="width:100%;border-collapse:collapse;">
          ${known.map((k) => `
          <tr>
            <td style="font-size:12px;color:${MUTED};padding:3px 14px 3px 0;white-space:nowrap;vertical-align:top;">${esc(k.label)}</td>
            <td style="font-size:14px;color:${BLACK};padding:3px 0;">${k.href ? `<a href="${esc(k.href)}" style="color:${BLACK};">${esc(k.value)}</a>` : esc(k.value)}</td>
          </tr>`).join('')}
        </table>
        <p style="font-size:13px;color:#666;margin:12px 0 0;line-height:1.6;">
          I will have looked at this before I reply, so no need to repeat it.
        </p>
      </div>`
    : ''

  const knownText = known.length
    ? ['WHAT I HAVE PICKED UP SO FAR:', ...known.map((k) => `  ${k.label}: ${k.value}`),
       '  (I will have looked at this before I reply — no need to repeat it.)', '']
    : []

  const subject = `Got your message, ${first} — here's what happens next`

  const html = shell(`
    ${header('MESSAGE RECEIVED', 'MUHAMMADKASHIF.NET')}
    <div style="padding:32px;background:#fff;border:2px solid ${BLACK};border-top:none;">

      <p style="font-size:15px;line-height:1.75;color:${BLACK};margin:0 0 18px;">
        Hi ${esc(first)},
      </p>

      <p style="font-size:15px;line-height:1.75;color:#333;margin:0 0 18px;">
        Thanks for reaching out — your message landed with me directly, and I read
        every one myself. You will hear back from me <strong>within one business day</strong>.
      </p>

      <p style="font-size:15px;line-height:1.75;color:#333;margin:0 0 22px;">
        I am based in Malaysia, which usually means my reply arrives while you are
        asleep and is waiting when you start your day.
      </p>

      ${knownHtml}

      <div style="background:${CREAM};border-left:4px solid ${ACCENT};padding:18px 22px;margin-bottom:26px;">
        <p style="font-size:10px;letter-spacing:2px;color:${MUTED};text-transform:uppercase;margin:0 0 12px;">
          ${known.length ? 'The last few things I need' : 'To get you a real quote faster'}
        </p>
        <p style="font-size:14px;line-height:1.7;color:${BLACK};margin:0 0 10px;">
          Reply to this email with:
        </p>
        <ol style="font-size:14px;line-height:1.8;color:#333;margin:0;padding-left:20px;">
          ${asks.map((a) => `<li>${esc(a)}</li>`).join('')}
        </ol>
      </div>

      <p style="font-size:10px;letter-spacing:2px;color:${MUTED};text-transform:uppercase;margin:0 0 12px;">
        While you wait
      </p>

      <table style="width:100%;border-collapse:collapse;margin-bottom:26px;">
        <tr>
          <td style="padding:0 0 12px;">
            <a href="${absoluteUrl('/portfolio/leather-hero-furniture-salve/')}" style="color:${BLACK};font-size:14px;text-decoration:none;border-bottom:1px solid ${ACCENT};">
              Case study: four near-identical images → a ten-image set →
            </a>
            <div style="font-size:13px;color:#666;margin-top:4px;line-height:1.6;">
              How I rebuilt a leather care listing around before-and-after proof.
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:0 0 12px;">
            <a href="${absoluteUrl('/my-portfolio/')}" style="color:${BLACK};font-size:14px;text-decoration:none;border-bottom:1px solid ${ACCENT};">
              Full portfolio →
            </a>
            <div style="font-size:13px;color:#666;margin-top:4px;line-height:1.6;">
              Work for Angelus, Eagle Shoe Care, Leather Hero and Lincoln.
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <a href="${absoluteUrl('/amazon-listing-audit-checklist/')}" style="color:${BLACK};font-size:14px;text-decoration:none;border-bottom:1px solid ${ACCENT};">
              Free: the listing audit checklist I use →
            </a>
            <div style="font-size:13px;color:#666;margin-top:4px;line-height:1.6;">
              Run it on your own listing before we speak.
            </div>
          </td>
        </tr>
      </table>

      <p style="font-size:15px;line-height:1.75;color:#333;margin:0 0 6px;">
        Talk soon,
      </p>
      <p style="font-size:15px;line-height:1.75;color:${BLACK};margin:0;font-weight:700;">
        Muhammad Kashif
      </p>
      <p style="font-size:13px;line-height:1.7;color:#666;margin:2px 0 0;">
        Amazon Brand Designer — leather, shoe care &amp; footwear
      </p>

      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #eee;">
        <a href="https://wa.me/60179152084" style="display:inline-block;background:${BLACK};color:${ACCENT};text-decoration:none;padding:12px 22px;font-size:12px;letter-spacing:2px;font-weight:700;">
          MESSAGE ME ON WHATSAPP →
        </a>
      </div>
    </div>
    ${footer}
  `)

  const text = [
    `Hi ${first},`,
    ``,
    `Thanks for reaching out — your message landed with me directly, and I read every one myself. You will hear back from me within one business day.`,
    ``,
    `I am based in Malaysia, which usually means my reply arrives while you are asleep and is waiting when you start your day.`,
    ``,
    ...knownText,
    known.length
      ? `THE LAST FEW THINGS I NEED — reply to this email with:`
      : `TO GET YOU A REAL QUOTE FASTER — reply to this email with:`,
    ...asks.map((a, i) => `  ${i + 1}. ${a}`),
    ``,
    `WHILE YOU WAIT:`,
    `  Case study — ${absoluteUrl('/portfolio/leather-hero-furniture-salve/')}`,
    `  Portfolio  — ${absoluteUrl('/my-portfolio/')}`,
    `  Checklist  — ${absoluteUrl('/amazon-listing-audit-checklist/')}`,
    ``,
    `Talk soon,`,
    `Muhammad Kashif`,
    `Amazon Brand Designer — leather, shoe care & footwear`,
    `${siteConfig.url} · ${siteConfig.email}`,
  ].join('\n')

  return { subject, html, text }
}

// ── 3. Booking notification to me ───────────────────────────────────────────
//
// A booked call arrives already qualified, so this email answers a different
// question from the enquiry one. Not "is this worth replying to" but "what do
// I need to know before I open their listing at 2am".

export function bookingEmail({ booking, scoring, trigger, previousCount = 0 }) {
  const cancelled = trigger === 'BOOKING_CANCELLED'
  const rescheduled = trigger === 'BOOKING_RESCHEDULED'
  const verb = cancelled ? 'CANCELLED' : rescheduled ? 'MOVED' : 'BOOKED'
  const tierColor = cancelled ? MUTED : scoring.tier === 'HOT' ? '#c81e1e' : '#b06d00'

  // Shown in both their timezone and mine — the whole point of the 2am slot
  // is that it is their afternoon, and I want to see both numbers.
  let whenMine = null
  let whenTheirs = null
  if (booking.startTime) {
    const d = new Date(booking.startTime)
    if (!Number.isNaN(d.getTime())) {
      const fmt = (tz) => new Intl.DateTimeFormat('en-GB', {
        weekday: 'short', day: 'numeric', month: 'short',
        hour: '2-digit', minute: '2-digit', timeZone: tz,
      }).format(d)
      whenMine = `${fmt('Asia/Kuching')} (yours)`
      try { whenTheirs = booking.timeZone ? `${fmt(booking.timeZone)} (theirs)` : null } catch { whenTheirs = null }
    }
  }

  const subject = cancelled
    ? `[CANCELLED] ${booking.name} — ${booking.title}`
    : `[${verb} · ${scoring.tier} ${scoring.score}] ${booking.name} — ${whenMine || booking.title}`

  const row = (label, value) => value ? `
    <tr>
      <td style="font-size:10px;letter-spacing:2px;color:${MUTED};padding:6px 12px 6px 0;text-transform:uppercase;white-space:nowrap;vertical-align:top;">${esc(label)}</td>
      <td style="font-size:14px;color:${BLACK};padding:6px 0;">${value}</td>
    </tr>` : ''

  const text = [
    `${verb}: ${booking.title}`,
    whenMine, whenTheirs,
    `Name: ${booking.name}`,
    booking.email ? `Email: ${booking.email}` : null,
    booking.timeZone ? `Timezone: ${booking.timeZone}` : null,
    previousCount > 0 ? `Has contacted you ${previousCount} time(s) before.` : null,
    cancelled ? null : `Score: ${scoring.score} (${scoring.tier})`,
    cancelled ? null : scoring.reasons.map((r) => `  - ${r}`).join('\n'),
    scoring.asin ? `ASIN: ${scoring.asin}` : null,
    booking.cancellationReason ? `Reason given: ${booking.cancellationReason}` : null,
    '',
    'What they wrote:',
    booking.notes || '(nothing)',
  ].filter(Boolean).join('\n')

  const html = shell(`
    ${header(verb, esc(booking.title))}
    <div style="background:#ffffff;padding:26px 32px;">
      ${cancelled ? '' : `
      <div style="display:inline-block;background:${tierColor};color:#fff;font-size:11px;letter-spacing:2px;padding:5px 12px;margin-bottom:18px;">
        ${esc(scoring.tier)} · ${scoring.score}
      </div>`}
      <table style="width:100%;border-collapse:collapse;">
        ${row('When', [whenMine, whenTheirs].filter(Boolean).map(esc).join('<br>'))}
        ${row('Name', esc(booking.name))}
        ${row('Email', booking.email ? `<a href="mailto:${esc(booking.email)}" style="color:${BLACK};">${esc(booking.email)}</a>` : '')}
        ${row('Timezone', esc(booking.timeZone || ''))}
        ${row('Listing', scoring.asin ? `<a href="https://www.amazon.com/dp/${esc(scoring.asin)}" style="color:${BLACK};">${esc(scoring.asin)}</a>` : '')}
        ${row('Seen before', previousCount > 0 ? `${previousCount} previous enquiry(ies)` : '')}
        ${row('Reason', esc(booking.cancellationReason || ''))}
      </table>

      ${cancelled ? '' : `
      <p style="font-size:10px;letter-spacing:2px;color:${MUTED};margin:22px 0 6px;text-transform:uppercase;">Why it scored</p>
      <ul style="margin:0;padding-left:18px;font-size:13px;color:${BLACK};line-height:1.7;">
        ${scoring.reasons.map((r) => `<li>${esc(r)}</li>`).join('')}
      </ul>`}

      <p style="font-size:10px;letter-spacing:2px;color:${MUTED};margin:22px 0 6px;text-transform:uppercase;">What they wrote</p>
      <div style="background:${CREAM};padding:14px 16px;font-size:14px;color:${BLACK};line-height:1.7;white-space:pre-wrap;">${esc(booking.notes || '(nothing)')}</div>
    </div>
    ${footer}
  `)

  return { subject, text, html }
}
