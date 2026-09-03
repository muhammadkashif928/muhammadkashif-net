import { ImageResponse } from 'next/og'
import { getBlogPost } from '@/data/blog'

export const runtime = 'edge'

const SIZE = { width: 1200, height: 630 }

const BLACK = '#0a0a0a'
const ACCENT = '#e8e800'
const CREAM = '#f5f5f0'
const MUTED = '#6b6b66'

// Google Fonts is the only place Bebas lives; fetch it once per instance.
// If it is unreachable the cover still renders in the fallback face rather
// than 500ing — a plain cover beats a broken image.
let bebasPromise = null

function loadBebas() {
  if (!bebasPromise) {
    bebasPromise = (async () => {
      const css = await fetch('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap', {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64)' },
      }).then((r) => r.text())
      const url = css.match(/src:\s*url\(([^)]+)\)/)?.[1]
      if (!url) throw new Error('no font url')
      return fetch(url).then((r) => r.arrayBuffer())
    })().catch(() => null)
  }
  return bebasPromise
}

export async function GET(request, { params }) {
  const { slug } = await params

  let post
  try {
    post = getBlogPost(slug)
  } catch {
    post = null
  }
  if (!post) return new Response('Not found', { status: 404 })

  const bebas = await loadBebas()
  const display = bebas ? 'Bebas' : 'sans-serif'

  // Bebas is condensed, so it takes more characters before it needs to shrink.
  const len = post.title.length
  const titleSize = len > 78 ? 62 : len > 58 ? 74 : len > 40 ? 88 : 104

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: BLACK,
          padding: '64px 72px',
          position: 'relative',
        }}
      >
        {/* Corner block, echoing the site hero */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: 150, height: 150, backgroundColor: ACCENT, opacity: 0.09, display: 'flex' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, backgroundColor: ACCENT, display: 'flex' }} />

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
            color: CREAM,
            letterSpacing: 1,
            textTransform: 'uppercase',
            maxWidth: 1010,
          }}
        >
          {post.title}
        </div>

        {/* Byline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%', height: 1, backgroundColor: '#2a2a26', marginBottom: 24, display: 'flex' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: display, fontSize: 40, color: ACCENT, letterSpacing: 2 }}>
                MUHAMMAD KASHIF
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
      fonts: bebas ? [{ name: 'Bebas', data: bebas, style: 'normal', weight: 400 }] : [],
      headers: {
        // Covers never change once a post is published.
        'cache-control': 'public, immutable, no-transform, max-age=31536000',
      },
    }
  )
}
