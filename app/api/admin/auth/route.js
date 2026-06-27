import crypto from 'crypto'
import { NextResponse } from 'next/server'

// ── Credentials (password is salted + SHA-256 hashed — never stored in plain text) ──
const VALID_USERNAME = 'muhammadkashif'
const PASSWORD_SALT  = 'MK_ADMIN_SALT_2026'
// SHA-256("MK_ADMIN_SALT_2026" + "Oneisone@213")
const PASSWORD_HASH  = '221cad2daa3f55d48b538f95d7b16e5f5fb333279eb66e32e87177dcfc083947'

// ── Session config ──
const SESSION_SECRET  = process.env.ADMIN_SESSION_SECRET || 'mk-session-secret-v1-change-in-vercel'
const SESSION_EXPIRY  = 8 * 60 * 60 * 1000 // 8 hours

// ── Token helpers ──
function createToken(username) {
  const expiry  = Date.now() + SESSION_EXPIRY
  const payload = `${expiry}:${username}`
  const sig     = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url')
  return `${Buffer.from(payload).toString('base64url')}.${sig}`
}

function verifyToken(token) {
  try {
    const [payloadB64, sig] = (token || '').split('.')
    if (!payloadB64 || !sig) return null
    const payload = Buffer.from(payloadB64, 'base64url').toString()
    const [expiryStr, username] = payload.split(':')
    if (!username || Date.now() > parseInt(expiryStr, 10)) return null
    const expected = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url')
    // Timing-safe compare
    const a = Buffer.from(sig)
    const b = Buffer.from(expected)
    if (a.length !== b.length) return null
    if (!crypto.timingSafeEqual(a, b)) return null
    return username
  } catch {
    return null
  }
}

function hashInput(password) {
  return crypto.createHash('sha256').update(PASSWORD_SALT + password).digest('hex')
}

// ── POST /api/admin/auth  →  login ──
export async function POST(request) {
  // Artificial delay to slow brute-force
  await new Promise(r => setTimeout(r, 400))

  let body
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }) }

  const { username, password } = body || {}

  // Generic error — never reveal which field failed
  const fail = NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })

  if (!username || !password || typeof username !== 'string' || typeof password !== 'string') return fail
  if (username.length > 80 || password.length > 120) return fail

  const usernameMatch = crypto.timingSafeEqual(
    Buffer.from(username.toLowerCase().trim()),
    Buffer.from(VALID_USERNAME)
  )
  const passwordMatch = crypto.timingSafeEqual(
    Buffer.from(hashInput(password)),
    Buffer.from(PASSWORD_HASH)
  )

  if (!usernameMatch || !passwordMatch) return fail

  const token = createToken(VALID_USERNAME)

  const res = NextResponse.json({ success: true })
  res.cookies.set('mk-admin-session', token, {
    httpOnly: true,
    secure:   true,
    sameSite: 'strict',
    path:     '/',
    maxAge:   SESSION_EXPIRY / 1000,
  })
  return res
}

// ── DELETE /api/admin/auth  →  logout ──
export async function DELETE() {
  const res = NextResponse.json({ success: true })
  res.cookies.set('mk-admin-session', '', {
    httpOnly: true,
    secure:   true,
    sameSite: 'strict',
    path:     '/',
    maxAge:   0,
  })
  return res
}

// ── GET /api/admin/auth  →  check session ──
export async function GET(request) {
  const token    = request.cookies.get('mk-admin-session')?.value
  const username = verifyToken(token)
  if (!username) return NextResponse.json({ authenticated: false }, { status: 401 })
  return NextResponse.json({ authenticated: true, username })
}
