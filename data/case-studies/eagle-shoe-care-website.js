// ═══════════════════════════════════════════════════════════════════
// ── RESULTS ── Edit here when Eagle Shoe Care sends performance data.
// `null` renders nothing at all (default, recommended).
// ═══════════════════════════════════════════════════════════════════
export const results = null

// When the client responds, replace the line above with this shape.
// Every field is optional — pass only what you actually have.
//
// export const results = {
//   metrics: [
//     { label: 'Wholesale applications', value: '+00%', timeframe: '90 days post-launch' },
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
  client: 'Eagle Shoe Care',
  platform: 'Shopify — fully custom theme',
  category: 'Shoe & Leather Care — Shopify Store',
  scope: 'Design + development — retail store and B2B wholesale',
  liveUrl: 'https://www.eagleshoecare.com/',
  liveLabel: 'eagleshoecare.com',
  languages: 'Liquid, HTML, CSS, JavaScript',
  stack: 'Shopify (custom “Eagle” theme), Shopify Forms',
  published: 'Nov 20, 2026',
  publishedISO: '2026-11-20',
  slug: 'eagle-shoe-care-website',
  path: '/portfolio/eagle-shoe-care-website/',
}

const DIR = '/case-studies/eagle-shoe-care-website'

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
  alt: 'Eagle Shoe Care homepage — “Premium care. Built to last.” beside a leather care kit, a tin of mink oil and a black leather boot',
}

export const heroDevices = [
  {
    ...desktop('home', 8348, 'Eagle Shoe Care homepage on desktop — hero, best sellers, clean / protect / preserve, before and after, product finder, wholesale panel and care guides'),
    url: meta.liveLabel,
    tag: 'Desktop',
  },
]

export const phones = [
  { ...phone('home', 10537, 'Eagle Shoe Care homepage on a phone — the same sections stacked for one-thumb scrolling'), tag: 'Homepage on a phone' },
]

export const wholesaleDevices = [
  {
    ...desktop('wholesale', 3975, 'Eagle Shoe Care wholesale page — the application form beside the trade terms: one case minimum, free freight over $5,000 and approval in one business day'),
    url: `${meta.liveLabel}/pages/wholesale`,
    tag: 'Wholesale application',
  },
]

export const introParagraphs = [
  'Eagle Shoe Care is a Chicago brand with a wide range of leather, suede and sneaker care. It has two kinds of customer: people who buy a tin of mink oil, and shops that buy it by the case.',
  'The store serves both. I designed and built the theme from scratch on Shopify — no bought template — so shoppers find the right product and buy it on Amazon, and retailers apply for a wholesale account, sign in and order at their own pricing.',
]

export const wholesaleParagraphs = [
  'Wholesale is not a hidden link in the footer. It has its own button in the header, the main call to action in the hero and a full “Stock Eagle” panel on the homepage.',
  'The application page puts the terms next to the form, so a buyer knows the minimum order, freight and shipping rules before filling anything in. Approved accounts sign in to see their pricing and place orders.',
]

export const features = [
  { title: 'Custom Shopify theme', text: 'Designed and coded from scratch for Eagle — not a theme store template — so every section fits the brand and the range.' },
  { title: 'B2B wholesale built in', text: 'An application form with resale certificate upload, trade terms beside it, and a wholesale sign-in for approved accounts to see pricing and order.' },
  { title: 'Buy on Amazon', text: 'Retail products link straight to their Amazon listing, so shoppers get Prime delivery and Eagle keeps one place to fulfil orders.' },
  { title: 'Product finder', text: 'Two questions — what are you caring for, and what do you need to do — point the shopper to the right product.' },
  { title: 'Before and after sliders', text: 'Drag-to-compare photos show the result on a real shoe before the shopper reads a word.' },
  { title: 'Shop by job and category', text: 'Around 80 products in 20 collections, grouped the way people think: clean, protect, preserve, kits and best sellers.' },
  { title: 'Catalog and free sample kit', text: 'A browsable catalog page and a sample kit request form, so a shop can try the products before it places a case order.' },
  { title: 'Care guides and video', text: 'A blog of how-to guides and a “see it in action” video section that answer the questions buyers search for.' },
  { title: 'Responsive on every screen', text: 'Each section has its own phone layout, with a slide-out menu and stacked product cards — not a squeezed desktop.' },
]
