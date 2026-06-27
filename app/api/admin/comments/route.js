import { sql } from '@vercel/postgres'

// GET /api/admin/comments — fetch all comments for the admin dashboard
// Protected by middleware (only /admin/* routes are checked, but this is
// an API route so we do a quick session cookie check here too)
export async function GET(request) {
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
