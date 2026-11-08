// ═══════════════════════════════════════════════════════════════════
// ── RESULTS ── Edit here when Margilla sends performance data.
// `null` renders nothing at all (default, recommended).
// ═══════════════════════════════════════════════════════════════════
export const results = null

// When the client responds, replace the line above with this shape.
// Every field is optional — pass only what you actually have.
//
// export const results = {
//   metrics: [
//     { label: 'Sign-ups', value: '+00%', timeframe: '90 days post-launch' },
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
  client: 'Margilla',
  platform: 'Custom React web app',
  category: 'SaaS — TikTok Shop profit analytics',
  scope: 'Design + development — 11 public pages',
  liveUrl: 'https://margilla.com/',
  liveLabel: 'margilla.com',
  languages: 'HTML, CSS, JavaScript',
  stack: 'React, TanStack, Tailwind CSS · on Cloudflare',
  published: 'Nov 9, 2026',
  publishedISO: '2026-11-09',
  slug: 'margilla-website',
  path: '/portfolio/margilla-website/',
}

const DIR = '/case-studies/margilla-website'

// The homepage — used as the page's social share image.
export const shareImage = {
  src: `${DIR}/desktop-home-hero.jpg`,
  width: 1440,
  height: 900,
  alt: 'Margilla homepage — “Know what you actually keep.” beside the profit dashboard and a $15-a-month price tag',
}

export const heroDevices = [
  {
    img: {
      src: `${DIR}/desktop-home.jpg`, width: 1440, height: 7528, tall: true,
      alt: 'Margilla homepage on desktop — hero, tracked costs, dashboard tabs, three-step setup, feature rows, toolkit, FAQ and sign-up',
    },
    full: `${DIR}/desktop-home-full.webp`,
    thumb: `${DIR}/desktop-home-hero-960.webp`,
    kind: 'desktop',
    url: meta.liveLabel,
  },
]

export const phones = [
  {
    img: {
      src: `${DIR}/mobile-home.jpg`, width: 468, height: 13838, tall: true, phone: true,
      alt: 'Margilla homepage on a phone — the same sections stacked for one-thumb scrolling',
    },
    thumb: `${DIR}/mobile-home-top.webp`,
    kind: 'phone',
    tag: 'Homepage on a phone',
  },
]

export const introParagraphs = [
  'Margilla is a profit analytics tool for TikTok Shop sellers. It pulls every fee and payout from the shop, subtracts the seller’s real costs and shows what they actually keep — today, this week, this month.',
  'The website has to sell a numbers product to busy sellers. So it leads with the real dashboard, not a mockup, puts the price up front, and walks through every cost the product tracks before asking anyone to sign up.',
]

export const features = [
  { title: 'The real dashboard, in tabs', text: 'Profit tiles, chart, P&L, products & COGS and a sales-by-state map — real screens visitors can switch between on the homepage.' },
  { title: 'Price up front', text: '“Starting at $15 per month” sits on the hero itself, with four plans and monthly or yearly billing on the pricing page.' },
  { title: 'Every cost, named', text: 'A running strip of every fee the product tracks — commission, shipping, refunds, ad spend — so sellers see their own costs listed.' },
  { title: 'Live demo and sign-in', text: 'A demo page to explore the product before paying, plus sign-in and sign-up for the app itself.' },
  { title: 'Free profit calculator', text: 'A TikTok Shop profit calculator and a tools comparison page that bring in sellers from search.' },
  { title: 'Built for search and every screen', text: 'News, guides, language switch, clean URLs and a full sitemap, with a mobile layout for every section.' },
]
