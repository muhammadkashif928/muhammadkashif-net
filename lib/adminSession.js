import crypto from 'crypto'

// No fallback secret on purpose: if ADMIN_SESSION_SECRET is unset, every
// token operation below fails closed instead of signing/verifying with a
// value that's sitting in the (public) source repo.
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET

export function isSessionConfigured() {
  return Boolean(SESSION_SECRET)
}

export function createToken(username, expiryMs) {
  if (!SESSION_SECRET) throw new Error('ADMIN_SESSION_SECRET not configured')
  const expiry  = Date.now() + expiryMs
  const payload = `${expiry}:${username}`
  const sig     = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url')
  return `${Buffer.from(payload).toString('base64url')}.${sig}`
}

export function verifyToken(token) {
  if (!SESSION_SECRET) return null
  try {
    const [payloadB64, sig] = (token || '').split('.')
    if (!payloadB64 || !sig) return null
    const payload = Buffer.from(payloadB64, 'base64url').toString()
    const [expiryStr, username] = payload.split(':')
    if (!username || Date.now() > parseInt(expiryStr, 10)) return null
    const expected = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url')
    const a = Buffer.from(sig)
    const b = Buffer.from(expected)
    if (a.length !== b.length) return null
    if (!crypto.timingSafeEqual(a, b)) return null
    return username
  } catch {
    return null
  }
}

export function getSessionUsername(request) {
  const token = request.cookies.get('mk-admin-session')?.value
  return verifyToken(token)
}
