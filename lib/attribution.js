/**
 * First-touch attribution, client side.
 *
 * Captures where a visitor came from on their FIRST page of the session and
 * keeps it for the whole session, so a lead that lands on a blog post and
 * converts three pages later is still credited to the blog post — not to /.
 *
 * Session-scoped on purpose: no cross-visit tracking, no cookie, nothing
 * that leaves the browser until the visitor chooses to submit the form.
 */

const KEY = 'mk_attr_v1'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

function read() {
  try {
    const raw = sessionStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

/**
 * Record first touch if we haven't already. Safe to call on every page view.
 */
export function captureAttribution() {
  if (typeof window === 'undefined') return null
  if (read()) return read()

  try {
    const params = new URLSearchParams(window.location.search)
    const utm = {}
    for (const k of UTM_KEYS) {
      const v = params.get(k)
      if (v) utm[k] = v.slice(0, 160)
    }

    // gclid / fbclid imply paid even when utm tags are missing.
    if (!utm.utm_source) {
      if (params.get('gclid')) { utm.utm_source = 'google'; utm.utm_medium = 'cpc' }
      else if (params.get('fbclid')) { utm.utm_source = 'facebook'; utm.utm_medium = 'social' }
    }

    const ref = document.referrer || ''
    const sameHost = ref && new URL(ref, window.location.href).hostname === window.location.hostname

    const data = {
      landingPath: window.location.pathname + window.location.search.slice(0, 200),
      referrer: sameHost ? null : (ref ? ref.slice(0, 500) : null),
      ...utm,
    }

    sessionStorage.setItem(KEY, JSON.stringify(data))
    return data
  } catch {
    return null
  }
}

/**
 * Attribution payload for the contact form. Always returns a plain object.
 */
export function getAttribution() {
  if (typeof window === 'undefined') return {}
  const a = read() || captureAttribution() || {}

  return {
    landingPath: a.landingPath || null,
    pagePath: window.location.pathname,
    referrer: a.referrer || null,
    utmSource: a.utm_source || null,
    utmMedium: a.utm_medium || null,
    utmCampaign: a.utm_campaign || null,
    utmTerm: a.utm_term || null,
  }
}
