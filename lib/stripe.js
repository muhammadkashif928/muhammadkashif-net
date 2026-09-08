import Stripe from 'stripe'

/**
 * Server-side Stripe client.
 *
 * Built lazily so a missing STRIPE_SECRET_KEY is a 503 on the checkout route
 * rather than a crash at import time — the rest of the site keeps working
 * even if payments are not configured yet.
 */
let client = null

export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) return null
  if (!client) {
    client = new Stripe(process.env.STRIPE_SECRET_KEY, {
      appInfo: { name: 'muhammadkashif.net', url: 'https://muhammadkashif.net' },
    })
  }
  return client
}

export function stripeConfigured() {
  return Boolean(process.env.STRIPE_SECRET_KEY && process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
}
