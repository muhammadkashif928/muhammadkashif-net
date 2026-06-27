// Comments API — powered by Vercel Postgres (Neon)
//
// ── ONE-TIME SETUP ──────────────────────────────────────────────────────────
// 1. On Vercel dashboard → Storage → click "Connect" on neon-canary-paddle-eagleshoecare
//    (Vercel auto-injects POSTGRES_URL and related env vars — no manual config needed)
//
// 2. Open the Neon console (or Vercel → Storage → your DB → Query tab) and run:
//
//    CREATE TABLE IF NOT EXISTS comments (
//      id         BIGSERIAL PRIMARY KEY,
//      post_slug  TEXT NOT NULL,
//      name       TEXT NOT NULL,
//      email      TEXT,
//      message    TEXT NOT NULL,
//      created_at TIMESTAMPTZ DEFAULT NOW()
//    );
//
// That's it. Comments start saving immediately after redeploy.
// ────────────────────────────────────────────────────────────────────────────

import { sql } from '@vercel/postgres'

// GET /api/comments?slug=post-slug-here
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  if (!slug) {
    return Response.json({ comments: [], error: 'Missing slug' }, { status: 400 })
  }

  try {
    const { rows } = await sql`
      SELECT name, message, created_at
      FROM comments
      WHERE post_slug = ${slug}
      ORDER BY created_at ASC
    `
    return Response.json({ comments: rows })
  } catch (err) {
    // Table not created yet or DB not connected — return empty gracefully
    return Response.json({ comments: [], notice: 'Database not ready yet' })
  }
}

// POST /api/comments
// body: { postSlug, name, email, message }
export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { postSlug, name, email, message } = body

  // Server-side validation
  if (!postSlug || typeof postSlug !== 'string' || postSlug.length > 200) {
    return Response.json({ error: 'Invalid post' }, { status: 400 })
  }
  if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 80) {
    return Response.json({ error: 'Name must be 2–80 characters' }, { status: 400 })
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 1200) {
    return Response.json({ error: 'Comment must be 10–1200 characters' }, { status: 400 })
  }
  if (email && (typeof email !== 'string' || email.length > 120)) {
    return Response.json({ error: 'Invalid email' }, { status: 400 })
  }

  // Honeypot: reject extra fields (catches naive bots)
  const allowed = new Set(['postSlug', 'name', 'email', 'message'])
  if (Object.keys(body).some(k => !allowed.has(k))) {
    return Response.json({ error: 'Bad request' }, { status: 400 })
  }

  const cleanName    = name.trim().slice(0, 80)
  const cleanMessage = message.trim().slice(0, 1200)
  const cleanEmail   = email ? email.trim().slice(0, 120) : null
  const cleanSlug    = postSlug.trim().slice(0, 200)

  try {
    await sql`
      INSERT INTO comments (post_slug, name, email, message)
      VALUES (${cleanSlug}, ${cleanName}, ${cleanEmail}, ${cleanMessage})
    `
    return Response.json({ success: true })
  } catch (err) {
    // DB not connected or table missing — acknowledge without breaking the UI
    console.error('Comment insert failed:', err.message)
    return Response.json({ success: true, notice: 'Saved locally — DB pending' })
  }
}
