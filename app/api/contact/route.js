import nodemailer from 'nodemailer'

// ── Hostinger SMTP — direct, no third-party service ──────────────────────
// Add these two env vars in Vercel → Settings → Environment Variables:
//   SMTP_USER = info@muhammadkashif.net
//   SMTP_PASS = (your Hostinger email password)
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

  const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const cleanName    = stripCrlf(name.trim())
  const cleanEmail    = stripCrlf(email.trim().toLowerCase())
  const cleanMessage  = message.trim()
  const safeName      = escapeHtml(cleanName)

  try {
    const transporter = createTransport()

    await transporter.sendMail({
      from:     `"Muhammad Kashif Website" <${process.env.SMTP_USER}>`,
      to:       process.env.SMTP_USER, // send to yourself
      replyTo:  `"${cleanName}" <${cleanEmail}>`,
      subject:  `New enquiry from ${cleanName} — muhammadkashif.net`,
      text: [
        `Name:    ${cleanName}`,
        `Email:   ${cleanEmail}`,
        ``,
        `Message:`,
        cleanMessage,
        ``,
        `---`,
        `Sent via muhammadkashif.net contact form`,
        `IP: ${ip}`,
      ].join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f5f5f0;padding:0;">
          <div style="background:#0a0a0a;padding:24px 32px;">
            <h1 style="font-family:'Arial Black',sans-serif;color:#e8e800;margin:0;font-size:22px;letter-spacing:4px;">
              NEW ENQUIRY
            </h1>
            <p style="color:#f5f5f0;margin:4px 0 0;font-size:11px;letter-spacing:2px;opacity:0.5;">
              MUHAMMADKASHIF.NET
            </p>
          </div>
          <div style="padding:32px;background:#fff;border:2px solid #0a0a0a;border-top:none;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="font-size:10px;letter-spacing:2px;color:#888;padding:8px 0 4px;text-transform:uppercase;">Name</td>
                <td style="font-size:15px;font-weight:700;color:#0a0a0a;padding:8px 0 4px;">${safeName}</td>
              </tr>
              <tr>
                <td style="font-size:10px;letter-spacing:2px;color:#888;padding:4px 0 12px;text-transform:uppercase;">Email</td>
                <td style="padding:4px 0 12px;">
                  <a href="mailto:${cleanEmail}" style="color:#0a0a0a;font-size:14px;">${cleanEmail}</a>
                </td>
              </tr>
            </table>
            <div style="background:#f5f5f0;border-left:4px solid #e8e800;padding:16px 20px;margin-top:8px;">
              <p style="font-size:10px;letter-spacing:2px;color:#888;text-transform:uppercase;margin:0 0 10px;">Message</p>
              <p style="font-size:14px;line-height:1.7;color:#0a0a0a;margin:0;white-space:pre-wrap;">${cleanMessage.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</p>
            </div>
            <div style="margin-top:24px;padding-top:16px;border-top:1px solid #eee;">
              <a href="mailto:${cleanEmail}?subject=Re: Your enquiry — Muhammad Kashif"
                 style="display:inline-block;background:#0a0a0a;color:#e8e800;text-decoration:none;padding:12px 24px;font-size:12px;letter-spacing:2px;font-weight:700;">
                REPLY TO ${safeName.toUpperCase()} →
              </a>
            </div>
          </div>
          <div style="padding:16px 32px;text-align:center;">
            <p style="font-size:11px;color:#999;margin:0;">Sent from muhammadkashif.net contact form</p>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Email send failed:', err.message)
    return Response.json(
      { error: 'Failed to send message. Please email me directly at info@muhammadkashif.net' },
      { status: 500 }
    )
  }
}
