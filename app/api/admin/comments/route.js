import { sql } from '@vercel/postgres'
import { getSessionUsername } from '@/lib/adminSession'

// GET /api/admin/comments — fetch all comments for the admin dashboard
// middleware.js only guards /admin/dashboard, not /api/admin/*, so this
// route must verify the session cookie itself.
export async function GET(request) {
  if (!getSessionUsername(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const limit = Math.min(parseInt(searchParams.get('limit') || '200', 10), 500)

  try {
    const { rows, rowCount } = await sql`
      SELECT id, post_slug, name, email, message, created_at
      FROM comments
      ORDER BY created_at DESC
      LIMIT ${limit}
    `
    // Also get total count
    const { rows: countRows } = await sql`SELECT COUNT(*) AS total FROM comments`
    return Response.json({
      comments: rows || [],
      total: parseInt(countRows[0]?.total || '0', 10),
    })
  } catch (err) {
    // Table not created yet or DB not connected
    return Response.json({ comments: [], total: 0, error: err.message })
  }
}
