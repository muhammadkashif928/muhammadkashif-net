// One-time database setup endpoint — WILL BE DELETED AFTER USE
import { sql } from '@vercel/postgres'

const SECRET = 'mk-setup-2026'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  if (searchParams.get('secret') !== SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS comments (
        id         BIGSERIAL PRIMARY KEY,
        post_slug  TEXT NOT NULL,
        name       TEXT NOT NULL,
        email      TEXT,
        message    TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `

    const { rows } = await sql`SELECT COUNT(*) AS count FROM comments`
    return Response.json({
      success: true,
      message: 'comments table created successfully',
      existing_rows: rows[0].count,
    })
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}
