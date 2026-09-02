/**
 * Lead helpers — enrichment, scoring and persistence.
 *
 * Nothing here throws into the request path: every DB call is best-effort so
 * a missing table or a cold Neon branch can never cost a lead the email send.
 */
import { sql } from '@vercel/postgres'

// Marketplaces we design for, in the order we want them matched.
const MARKET_HINTS = [
  { re: /\bamazon\.com\b|\bamazon us\b|\bus marketplace\b/i, market: 'Amazon US' },
  { re: /\bamazon\.co\.uk\b|\bamazon uk\b/i, market: 'Amazon UK' },
  { re: /\bamazon\.ca\b|\bamazon canada\b/i, market: 'Amazon CA' },
  { re: /\bamazon\b/i, market: 'Amazon (unspecified)' },
  { re: /\bshopify\b/i, market: 'Shopify' },
  { re: /\bwalmart\b/i, market: 'Walmart' },
  { re: /\betsy\b/i, market: 'Etsy' },
]

// Services, so the notification says what they actually asked for.
const SERVICE_HINTS = [
  { re: /\ba\+\s*content\b|\ba plus content\b|\benhanced brand content\b|\bebc\b/i, service: 'A+ Content' },
  { re: /\bmain image\b|\bhero image\b|\bwhite background\b/i, service: 'Main Image' },
  { re: /\binfographic/i, service: 'Infographics' },
  { re: /\bbrand store\b|\bstorefront\b/i, service: 'Brand Store' },
  { re: /\bbrand story\b/i, service: 'Brand Story' },
  { re: /\bfull listing\b|\bfull package\b|\bcomplete listing\b|\blisting set\b/i, service: 'Full Listing Set' },
  { re: /\bpackaging\b|\blogo\b|\bbrand identity\b/i, service: 'Brand Identity / Packaging' },
]

// The niche. A match here means the lead is squarely in his specialism.
const NICHE_RE = /\bleather\b|\bshoe care\b|\bsneaker\b|\bfootwear\b|\bboot\b|\bsuede\b|\bpolish\b|\bconditioner\b/i

// A pasted ASIN or Amazon URL is the strongest buying signal there is.
const ASIN_RE = /\b(B0[A-Z0-9]{8})\b/
const AMAZON_URL_RE = /https?:\/\/(?:www\.)?(?:amazon\.[a-z.]{2,6}|amzn\.to)\/\S+/i

// Countries worth flagging as priority markets.
const PRIORITY_COUNTRIES = new Set(['US', 'CA', 'GB', 'AU'])

/**
 * Read whatever the platform and the client can tell us about where this
 * enquiry came from. Never throws.
 */
export function enrichLead(request, body = {}) {
  const h = (name) => request.headers.get(name) || null

  const country = h('x-vercel-ip-country')
  const region = h('x-vercel-ip-country-region')
  const city = h('x-vercel-ip-city')
  const timezone = h('x-vercel-ip-timezone')

  const clean = (v, max = 300) =>
    typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : null

  return {
    country,
    region,
    city: city ? decodeURIComponent(city) : null,
    timezone,
    isPriorityMarket: country ? PRIORITY_COUNTRIES.has(country) : false,
    referrer: clean(body.referrer, 500),
    landingPath: clean(body.landingPath, 300),
    pagePath: clean(body.pagePath, 300),
    utmSource: clean(body.utmSource, 120),
    utmMedium: clean(body.utmMedium, 120),
    utmCampaign: clean(body.utmCampaign, 160),
    utmTerm: clean(body.utmTerm, 160),
    userAgent: clean(h('user-agent'), 400),
  }
}

/**
 * Score a lead 0-100 and explain the score, so the notification email can be
 * triaged from a phone without opening anything.
 */
export function scoreLead({ message = '', enrichment = {} }) {
  const reasons = []
  let score = 0

  const asin = message.match(ASIN_RE)?.[1] || null
  const amazonUrl = message.match(AMAZON_URL_RE)?.[0] || null

  if (asin || amazonUrl) {
    score += 30
    reasons.push(asin ? `ASIN supplied (${asin})` : 'Amazon listing URL supplied')
  }

  if (NICHE_RE.test(message)) {
    score += 25
    reasons.push('In-niche: leather / shoe care / footwear')
  }

  if (enrichment.isPriorityMarket) {
    score += 20
    reasons.push(`Priority market (${enrichment.country})`)
  }

  const service = SERVICE_HINTS.find((s) => s.re.test(message))?.service || null
  if (service) {
    score += 10
    reasons.push(`Named a service: ${service}`)
  }

  const market = MARKET_HINTS.find((m) => m.re.test(message))?.market || null
  if (market) {
    score += 5
    reasons.push(`Marketplace: ${market}`)
  }

  // A considered message beats a two-line "how much?"
  const words = message.trim().split(/\s+/).length
  if (words >= 60) { score += 10; reasons.push('Detailed brief (60+ words)') }
  else if (words >= 25) { score += 5; reasons.push('Reasonable detail') }

  if (enrichment.utmSource) {
    score += 5
    reasons.push(`Campaign: ${enrichment.utmSource}${enrichment.utmCampaign ? ` / ${enrichment.utmCampaign}` : ''}`)
  }

  score = Math.min(100, score)
  const tier = score >= 60 ? 'HOT' : score >= 30 ? 'WARM' : 'COLD'

  return { score, tier, reasons, asin, amazonUrl, service, market }
}

/**
 * Persist the lead. Best-effort: returns null and swallows every error so a
 * database problem can never break the contact form.
 */
export async function saveLead(lead) {
  try {
    const { rows } = await sql`
      INSERT INTO leads (
        name, email, message, score, tier, service, market, asin,
        country, region, city, timezone,
        referrer, landing_path, page_path,
        utm_source, utm_medium, utm_campaign, utm_term,
        ip, user_agent
      ) VALUES (
        ${lead.name}, ${lead.email}, ${lead.message}, ${lead.score}, ${lead.tier},
        ${lead.service}, ${lead.market}, ${lead.asin},
        ${lead.country}, ${lead.region}, ${lead.city}, ${lead.timezone},
        ${lead.referrer}, ${lead.landingPath}, ${lead.pagePath},
        ${lead.utmSource}, ${lead.utmMedium}, ${lead.utmCampaign}, ${lead.utmTerm},
        ${lead.ip}, ${lead.userAgent}
      )
      RETURNING id, created_at
    `
    return rows[0] || null
  } catch (err) {
    console.error('[leads] save skipped:', err.message)
    return null
  }
}

/**
 * How many enquiries this address has sent before. Used only to label the
 * notification ("returning enquirer"); failure is silent.
 */
export async function countPreviousLeads(email) {
  try {
    const { rows } = await sql`SELECT COUNT(*)::int AS n FROM leads WHERE email = ${email}`
    return rows[0]?.n ?? 0
  } catch {
    return 0
  }
}
