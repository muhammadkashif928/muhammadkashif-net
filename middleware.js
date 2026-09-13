import { NextResponse } from 'next/server'

// No fallback secret: if ADMIN_SESSION_SECRET is unset, isValidSession()
// below fails closed rather than verifying against a value that's sitting
// in this (public) source repo.
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET

// Web Crypto API (Edge-compatible) HMAC-SHA256 verify
async function verifyHmac(payload, sigB64url) {
  const enc     = new TextEncoder()
  const keyData = enc.encode(SESSION_SECRET)
  const key     = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['verify'])
  // base64url → bytes
  const padded  = sigB64url.replace(/-/g, '+').replace(/_/g, '/').padEnd(sigB64url.length + (4 - sigB64url.length % 4) % 4, '=')
  const sigBytes = Uint8Array.from(atob(padded), c => c.charCodeAt(0))
  return crypto.subtle.verify('HMAC', key, sigBytes, enc.encode(payload))
}

async function isValidSession(token) {
  if (!SESSION_SECRET) return false
  try {
    const [payloadB64, sig] = (token || '').split('.')
    if (!payloadB64 || !sig) return false
    // base64url decode payload
    const padded  = payloadB64.replace(/-/g, '+').replace(/_/g, '/').padEnd(payloadB64.length + (4 - payloadB64.length % 4) % 4, '=')
    const payload = atob(padded)
    const [expiryStr] = payload.split(':')
    if (Date.now() > parseInt(expiryStr, 10)) return false
    return verifyHmac(payload, sig)
  } catch {
    return false
  }
}

// ─── GEO RESTRICTION ────────────────────────────────────────────────────────
// Serve the site to the United States only. Everything else gets a 403.
//
// Controlled entirely by environment variables so it can be turned off, or the
// country list widened, without touching this file:
//
//   GEO_BYPASS_SECRET    Setting this ENABLES the restriction. It is also the
//                        owner key: visit any page with ?geo-key=<secret> once
//                        and a cookie lets that browser through from anywhere.
//   GEO_ALLOW_COUNTRIES  comma-separated ISO-3166 alpha-2. Defaults to 'US'.
//   GEO_RESTRICT         set to 'off' to disable without removing the secret.
//
// Enforcement is deliberately tied to the bypass key existing. The site is run
// from Malaysia, so a block with no way back in would lock its owner out of
// their own business — including /admin — with a redeploy as the only remedy.
// Requiring the key makes that failure impossible to reach by accident.
//
// Changing a Vercel env var only takes effect on the next deployment, so this
// is not an instant kill switch — redeploy after changing it.

const ALLOWED_COUNTRIES = new Set(
  (process.env.GEO_ALLOW_COUNTRIES || 'US')
    .split(',').map((c) => c.trim().toUpperCase()).filter(Boolean)
)

const BYPASS_SECRET = process.env.GEO_BYPASS_SECRET
const BYPASS_COOKIE = 'mk-geo-ok'

// On when a bypass key exists, unless explicitly switched off.
const GEO_ON = Boolean(BYPASS_SECRET) && process.env.GEO_RESTRICT !== 'off'

/**
 * Paths that must answer no matter where the request originated.
 *
 * The Stripe webhook is Stripe's servers calling ours, not a visitor. Blocking
 * it would let a customer's card be charged while the order is never recorded
 * and no receipt is sent — a silent failure that looks fine from the outside.
 * Stripe delivers from US IPs today, so this would usually pass anyway; the
 * exemption means a change on their side can't quietly cost us paid orders.
 */
function isExemptPath(pathname) {
  return pathname.startsWith('/api/stripe/webhook')
}

function blockedResponse(country) {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Not available in your region</title>
<style>
  :root{color-scheme:light}
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
       background:#f0f0eb;color:#080808;
       font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;padding:24px}
  .box{max-width:34rem;border:2px solid #080808;padding:2.5rem;box-shadow:8px 8px 0 rgba(8,8,8,.16)}
  h1{margin:0 0 1rem;font-size:clamp(1.75rem,6vw,2.75rem);letter-spacing:.02em;line-height:1.05;
     font-family:Haettenschweiler,"Arial Narrow Bold",Impact,sans-serif;text-transform:uppercase}
  p{margin:0 0 1rem;font-size:.9rem;line-height:1.7}
  a{color:#080808}
  .k{font-size:.7rem;letter-spacing:.3em;text-transform:uppercase;opacity:.6;margin-bottom:1rem}
</style></head><body><div class="box">
<div class="k">&#9654; Region restricted</div>
<h1>Not available<br>in your region</h1>
<p>muhammadkashif.net is currently served to visitors in the United States only.</p>
<p>If you are an existing client or want to work together, email
<a href="mailto:info@muhammadkashif.net">info@muhammadkashif.net</a> and I will reply
within one business day.</p>
</div></body></html>`

  return new NextResponse(html, {
    status: 403,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'x-robots-tag': 'noindex',
      'cache-control': 'no-store',
      'x-geo-country': country || 'unknown',
    },
  })
}

/**
 * Returns a response when the request should be refused, or null to continue.
 * A missing country header means local dev or an unknown edge — allowed, since
 * every real Vercel request carries one.
 */
function enforceGeo(request) {
  if (!GEO_ON) return null
  if (isExemptPath(request.nextUrl.pathname)) return null

  // Owner key: ?geo-key=<secret> drops a cookie so later requests pass.
  {
    const supplied = request.nextUrl.searchParams.get('geo-key')
    if (supplied && supplied === BYPASS_SECRET) {
      const url = request.nextUrl.clone()
      url.searchParams.delete('geo-key')
      const res = NextResponse.redirect(url)
      res.cookies.set(BYPASS_COOKIE, BYPASS_SECRET, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
      })
      return res
    }
    if (request.cookies.get(BYPASS_COOKIE)?.value === BYPASS_SECRET) return null
  }

  const country = request.headers.get('x-vercel-ip-country')
  if (!country) return null
  if (ALLOWED_COUNTRIES.has(country.toUpperCase())) return null

  return blockedResponse(country)
}

export async function middleware(request) {
  const blocked = enforceGeo(request)
  if (blocked) return blocked

  // Everything below is the admin gate, which only applies under /admin/dashboard.
  if (!request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    return NextResponse.next()
  }

  const token = request.cookies.get('mk-admin-session')?.value

  if (!token || !(await isValidSession(token))) {
    const loginUrl = new URL('/admin/login', request.url)
    loginUrl.searchParams.set('from', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  // Geo enforcement has to see every page request, so this is no longer scoped
  // to /admin. Static assets, image optimisation and the Next.js internals are
  // excluded — they cost a middleware invocation each and reveal nothing.
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpe?g|gif|webp|avif|svg|ico|txt|xml|json|webmanifest|pdf|css|js|woff2?)$).*)',
  ],
}
