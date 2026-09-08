/**
 * Order helpers — validation and persistence for paid service bookings.
 *
 * Same contract as lib/leads.js: nothing here throws into the request path.
 * A missing table or a cold Neon branch must never stop a customer paying,
 * so every DB call is best-effort and the Stripe PaymentIntent metadata
 * carries enough detail to reconstruct the order from the dashboard alone.
 *
 * Create the table once in the Neon console:
 *
 *   CREATE TABLE IF NOT EXISTS orders (
 *     id                BIGSERIAL PRIMARY KEY,
 *     payment_intent_id TEXT UNIQUE NOT NULL,
 *     service_slug      TEXT NOT NULL,
 *     service_title     TEXT NOT NULL,
 *     amount_cents      INT  NOT NULL,
 *     currency          TEXT NOT NULL DEFAULT 'usd',
 *     status            TEXT NOT NULL DEFAULT 'pending',
 *     name              TEXT NOT NULL,
 *     email             TEXT NOT NULL,
 *     details           JSONB,
 *     country           TEXT,
 *     city              TEXT,
 *     referrer          TEXT,
 *     utm_source        TEXT,
 *     utm_medium        TEXT,
 *     utm_campaign      TEXT,
 *     ip                TEXT,
 *     created_at        TIMESTAMPTZ DEFAULT NOW(),
 *     paid_at           TIMESTAMPTZ
 *   );
 *   CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders (created_at DESC);
 *   CREATE INDEX IF NOT EXISTS orders_email_idx      ON orders (email);
 */
import { sql } from '@vercel/postgres'
import { getService, orderFields } from '@/data/services'

const MAX_FIELD = 2000

/** CR/LF strip so nothing a customer types can inject email headers. */
const stripCrlf = (s) => String(s).replace(/[\r\n]+/g, ' ').trim()

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || '').trim())

/**
 * Validate an order payload against the catalog definition of its service.
 * Returns { error } or { service, name, email, details }.
 */
export function validateOrder(body) {
  const { serviceSlug, name, email, details } = body || {}

  const service = getService(serviceSlug)
  if (!service) return { error: 'Unknown service.' }

  const cleanName = stripCrlf(name || '')
  if (cleanName.length < 2 || cleanName.length > 100)
    return { error: 'Please enter your full name.' }

  const cleanEmail = stripCrlf(email || '').toLowerCase()
  if (!isEmail(cleanEmail)) return { error: 'Please enter a valid email address.' }

  const src = details && typeof details === 'object' ? details : {}
  const clean = {}

  for (const field of orderFields(service)) {
    const raw = src[field.name]
    const value = typeof raw === 'string' ? raw.trim().slice(0, MAX_FIELD) : ''

    if (field.required && !value)
      return { error: `“${field.label}” is required.` }

    // A select may only hold one of its own options — never free text.
    if (value && field.type === 'select' && !field.options.includes(value))
      return { error: `Please choose a valid option for “${field.label}”.` }

    if (value) clean[field.name] = field.type === 'textarea' ? value : stripCrlf(value)
  }

  return { service, name: cleanName, email: cleanEmail, details: clean }
}

/**
 * Stripe caps metadata at 50 keys × 500 chars. Send the compact identifying
 * fields so an order is readable in the dashboard (and reconstructable in the
 * notification email) even when the database is unreachable.
 */
export function toStripeMetadata({ service, name, email, details, attribution = {} }) {
  const meta = {
    service_slug: service.slug,
    service_title: service.title,
    customer_name: name.slice(0, 200),
    customer_email: email.slice(0, 200),
  }
  for (const [k, v] of Object.entries(details)) {
    if (v) meta[`d_${k}`.slice(0, 40)] = String(v).slice(0, 450)
  }
  // enrichLead() returns camelCase; keep the same names in Stripe metadata.
  for (const k of ['referrer', 'landingPath', 'utmSource', 'utmMedium', 'utmCampaign']) {
    if (attribution[k]) meta[k] = String(attribution[k]).slice(0, 450)
  }
  return meta
}

/** Best-effort insert. Returns true when the row landed. */
export async function saveOrder(order) {
  try {
    await sql`
      INSERT INTO orders (
        payment_intent_id, service_slug, service_title, amount_cents, currency,
        status, name, email, details, country, city, referrer,
        utm_source, utm_medium, utm_campaign, ip
      ) VALUES (
        ${order.paymentIntentId}, ${order.serviceSlug}, ${order.serviceTitle},
        ${order.amountCents}, ${order.currency}, ${order.status}, ${order.name},
        ${order.email}, ${JSON.stringify(order.details || {})}, ${order.country || null},
        ${order.city || null}, ${order.referrer || null}, ${order.utm_source || null},
        ${order.utm_medium || null}, ${order.utm_campaign || null}, ${order.ip || null}
      )
      ON CONFLICT (payment_intent_id) DO UPDATE
        SET details = EXCLUDED.details, amount_cents = EXCLUDED.amount_cents
    `
    return true
  } catch (err) {
    console.error('saveOrder skipped:', err.message)
    return false
  }
}

/**
 * Mark an order paid. Returns 'updated' the first time, 'noop' if it was
 * already paid (Stripe retries webhooks), or null when storage is down.
 */
export async function markOrderPaid(paymentIntentId) {
  try {
    const { rows } = await sql`
      UPDATE orders SET status = 'paid', paid_at = NOW()
      WHERE payment_intent_id = ${paymentIntentId} AND status <> 'paid'
      RETURNING id
    `
    return rows.length ? 'updated' : 'noop'
  } catch (err) {
    console.error('markOrderPaid skipped:', err.message)
    return null
  }
}

export async function getOrder(paymentIntentId) {
  try {
    const { rows } = await sql`
      SELECT * FROM orders WHERE payment_intent_id = ${paymentIntentId} LIMIT 1
    `
    return rows[0] || null
  } catch {
    return null
  }
}

export function formatAmount(cents, currency = 'usd') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    maximumFractionDigits: 0,
  }).format(cents / 100)
}
