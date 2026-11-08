// ═══════════════════════════════════════════════════════════════════
// ── RESULTS ── Edit here when Leather Hero sends performance data.
// `null` renders nothing at all (default, recommended).
// ═══════════════════════════════════════════════════════════════════
export const results = null

// When the client responds, replace the line above with this shape.
// Every field is optional — pass only what you actually have.
//
// export const results = {
//   metrics: [
//     { label: 'Amazon clicks from the site', value: '+00%', timeframe: '90 days post-launch' },
//   ],
//   quote: '',
//   attribution: '',
//   attributionRole: '',
// }

// Set to true to show the "Performance data pending" placeholder instead of
// rendering nothing. Only has an effect while `results` above is null.
export const showPendingState = false

// ═══════════════════════════════════════════════════════════════════
// Case study content below — no need to touch for a metrics update.
// ═══════════════════════════════════════════════════════════════════

export const meta = {
  client: 'Leather Hero',
  platform: 'Custom Next.js build, hosted on Vercel',
  category: 'Leather Care — Brand Website',
  scope: 'Design + development — 89 pages',
  liveUrl: 'https://www.leatherherorestorer.com/',
  liveLabel: 'leatherherorestorer.com',
  published: 'Nov 9, 2026',
  publishedISO: '2026-11-09',
  slug: 'leather-hero-website',
  path: '/portfolio/leather-hero-website/',
}

const DIR = '/case-studies/leather-hero-website'

// A full-page screenshot: `src` is the whole page (opens in the viewer and
// scrolls), `thumb` is the first screen, `full` the whole page at display size.
const desktop = (name, height, alt) => ({
  img: { src: `${DIR}/desktop-${name}.jpg`, width: 1440, height, alt, tall: true },
  thumb: `${DIR}/desktop-${name}-top.webp`,
  full: `${DIR}/desktop-${name}-full.webp`,
  kind: 'desktop',
})
const phone = (name, height, alt) => ({
  img: { src: `${DIR}/mobile-${name}.jpg`, width: 468, height, alt, tall: true, phone: true },
  thumb: `${DIR}/mobile-${name}-top.webp`,
  kind: 'phone',
})

// The homepage — used as the page's social share image.
export const shareImage = {
  src: `${DIR}/desktop-home-hero.jpg`,
  width: 1440,
  height: 900,
  alt: 'Leather Hero website homepage — “Premium leather care & restoration products” above a suede protector spray and a suede sneaker',
}

export const heroDevices = [
  {
    ...desktop('home', 7647, 'Leather Hero homepage on desktop — product carousel, shop by category, three-step method, best sellers, blog, FAQ and contact'),
    url: meta.liveLabel,
    tag: 'Desktop',
  },
]

export const phones = [
  { ...phone('home', 13094, 'Leather Hero homepage on a phone — the same sections stacked for one-thumb scrolling'), tag: 'Homepage on a phone' },
]

export const introParagraphs = [
  'Leather Hero sells on Amazon. The brand already had strong listings — I designed four of them — but no home of its own: nowhere to send customers from the packaging, social posts or search, and nowhere to explain the full range.',
  'The site is that home. Every page is designed and coded from scratch — no template, no page builder — and every product ends in one clear action: Buy at Amazon, straight to the right listing, through a tracked link so the brand can see which pages send buyers.',
]

export const features = [
  { title: 'Built from scratch in Next.js', text: 'Custom design and code, no theme or page builder. Hosted on Vercel, so pages load fast and stay up.' },
  { title: 'Buy at Amazon, tracked', text: 'Each product’s button goes straight to its Amazon listing through an Amazon Attribution link, so the brand can see which pages drive sales.' },
  { title: '24 product pages', text: 'Hover-zoom photos, price, badges, details and how-to-use tabs, specifications and a share button on every product.' },
  { title: 'Shop, categories and search', text: 'A full shop grid, seven problem-led categories and a site search, so buyers find the right product in a few taps.' },
  { title: '48-post care journal', text: 'How-to guides written for search — cleaning suede, filling cracks, caring for a purse — each linking to the product it needs.' },
  { title: 'SEO foundations', text: 'Structured data, a full sitemap and clean URLs on all 89 pages, so Google understands the products and the guides.' },
  { title: 'Contact, wholesale and newsletter', text: 'Contact and wholesale forms with a built-in spam check, a newsletter sign-up and cookie consent with settings.' },
  { title: 'Responsive on every screen', text: 'Each section is laid out separately for phone, tablet and desktop — not just squeezed down.' },
]
