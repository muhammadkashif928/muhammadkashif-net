import crypto from 'crypto'
import { NextResponse } from 'next/server'
import { createToken, verifyToken, isSessionConfigured } from '@/lib/adminSession'

// ── Credentials (password is salted + SHA-256 hashed — never stored in plain text) ──
// Username, salt and hash all come from env vars so the real credentials never
// live in source. Set ADMIN_USERNAME, ADMIN_PASSWORD_SALT and ADMIN_PASSWORD_HASH
// in Vercel → Settings → Environment Variables.
const VALID_USERNAME = process.env.ADMIN_USERNAME
const PASSWORD_SALT  = process.env.ADMIN_PASSWORD_SALT
const PASSWORD_HASH  = process.env.ADMIN_PASSWORD_HASH

// ── Session config ──
const SESSION_EXPIRY  = 8 * 60 * 60 * 1000 // 8 hours

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

  if (!isSessionConfigured() || !VALID_USERNAME || !PASSWORD_SALT || !PASSWORD_HASH) {
    return NextResponse.json({ error: 'Admin login is not configured' }, { status: 500 })
  }

  if (!username || !password || typeof username !== 'string' || typeof password !== 'string') return fail
  if (username.length > 80 || password.length > 120) return fail

  const normalizedUsername = username.toLowerCase().trim()
  const usernameMatch = normalizedUsername.length === VALID_USERNAME.length && crypto.timingSafeEqual(
    Buffer.from(normalizedUsername),
    Buffer.from(VALID_USERNAME)
  )
  const passwordMatch = crypto.timingSafeEqual(
    Buffer.from(hashInput(password)),
    Buffer.from(PASSWORD_HASH)
  )

  if (!usernameMatch || !passwordMatch) return fail

  const token = createToken(VALID_USERNAME, SESSION_EXPIRY)

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
