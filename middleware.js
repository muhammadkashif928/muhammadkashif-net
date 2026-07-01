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

export async function middleware(request) {
  const token = request.cookies.get('mk-admin-session')?.value

  if (!token || !(await isValidSession(token))) {
    const loginUrl = new URL('/admin/login', request.url)
    loginUrl.searchParams.set('from', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/dashboard', '/admin/dashboard/:path*'],
}
