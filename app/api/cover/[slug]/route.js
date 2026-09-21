import { ImageResponse } from 'next/og'
import { getBlogPost } from '@/data/blog'

export const runtime = 'edge'

const SIZE = { width: 1200, height: 630 }

const PAPER = '#faf8f4'
const ACCENT = '#40513d'
const INK = '#252820'
const MUTED = '#6b6b66'

export async function GET(request, { params }) {
  const { slug } = await params

  let post
  try {
    post = getBlogPost(slug)
  } catch {
    post = null
  }
  if (!post) return new Response('Not found', { status: 404 })

  const display = 'sans-serif'
  const len = post.title.length
  const titleSize = len > 78 ? 56 : len > 58 ? 66 : len > 40 ? 76 : 84

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: PAPER,
          padding: '64px 72px',
          position: 'relative',
        }}
      >
        {/* Top rule plus a bracket in the corner. An earlier version used a
            large translucent square here, which ran off the right edge and
            read as an accident rather than a mark. */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, backgroundColor: ACCENT, display: 'flex' }} />
        <div style={{ position: 'absolute', top: 40, right: 40, width: 72, height: 72, borderTop: `3px solid ${ACCENT}`, borderRight: `3px solid ${ACCENT}`, display: 'flex' }} />

        {/* Category */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 10, height: 10, backgroundColor: ACCENT, marginRight: 16, display: 'flex' }} />
          <div style={{ fontSize: 22, letterSpacing: 6, color: MUTED, textTransform: 'uppercase' }}>
            {post.category}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontFamily: display,
            fontSize: titleSize,
            lineHeight: 1.02,
            color: INK,
            letterSpacing: -2,
            maxWidth: 1010,
          }}
        >
          {post.title}
        </div>

        {/* Byline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%', height: 1, backgroundColor: '#deded4', marginBottom: 24, display: 'flex' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: display, fontSize: 40, color: ACCENT, letterSpacing: 2 }}>
                Muhammad Kashif.
              </div>
              <div style={{ fontSize: 20, color: MUTED, letterSpacing: 3, marginTop: 6 }}>
                AMAZON BRAND DESIGNER
              </div>
            </div>
            <div style={{ fontSize: 20, color: MUTED, letterSpacing: 3 }}>
              MUHAMMADKASHIF.NET
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...SIZE,
      headers: {
        // Deliberately NOT immutable. The URL is stable but the image is
        // derived from the post title and the cover design, both of which can
        // change — and `immutable, max-age=31536000` would mean a redesign
        // never reaches anything that had already scraped the URL, social
        // crawlers included, for a year. A short browser TTL with a long
        // shared cache and stale-while-revalidate keeps it cheap while
        // leaving a way to actually ship a change.
        'cache-control': 'public, no-transform, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
      },
    }
  )
}
