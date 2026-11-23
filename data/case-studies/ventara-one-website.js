// ═══════════════════════════════════════════════════════════════════
// ── RESULTS ── Edit here when performance data is available.
// `null` renders nothing at all (default, recommended).
// ═══════════════════════════════════════════════════════════════════
export const results = null

// When there is data, replace the line above with this shape.
// Every field is optional — pass only what you actually have.
//
// export const results = {
//   metrics: [
//     { label: 'Orders', value: '+00%', timeframe: '90 days post-launch' },
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
  client: 'Ventara ONE (Ventara Mart)',
  platform: 'Custom-coded online store, hosted on Vercel',
  category: 'Groceries & Everyday Essentials — Online Store',
  scope: 'Design + development — 13 departments, 165 products',
  liveUrl: 'https://www.ventaraone.com/',
  liveLabel: 'ventaraone.com',
  languages: 'HTML, CSS, JavaScript',
  stack: 'Custom storefront · Stripe checkout · hosted on Vercel',
  published: 'Nov 24, 2026',
  publishedISO: '2026-11-24',
  slug: 'ventara-one-website',
  path: '/portfolio/ventara-one-website/',
}

const DIR = '/case-studies/ventara-one-website'

// A full-page screenshot: `src` is the whole page (opens in the viewer and
// scrolls), `thumb` is the first screen, `full` the whole page at display size.
const desktop = (name, height, alt) => ({
  img: { src: `${DIR}/desktop-${name}.jpg`, width: 1440, height, alt, tall: true },
  thumb: `${DIR}/desktop-${name}-top.webp`,
  kind: 'desktop',
})

// The homepage — used as the page's social share image.
export const shareImage = {
  src: `${DIR}/desktop-home-hero.jpg`,
  width: 1440,
  height: 900,
  alt: 'Ventara Mart homepage — “Your pantry, stocked and delivered.” hero slide beside deals and gifting tiles, under a free-shipping bar',
}

export const heroDevices = [
  {
    ...desktop('home', 6078, 'Ventara Mart homepage on desktop — hero slider, shop by category, trending products, featured edits, popular departments, store promise and help centre'),
    full: `${DIR}/desktop-home-full.webp`,
    url: meta.liveLabel,
    tag: 'Desktop',
  },
]

export const pages = [
  { ...desktop('category', 3148, 'Ventara Mart Grocery & Pantry department — photo header, product count, sort menu and a grid of pantry products with add-to-cart buttons'), url: `${meta.liveLabel}/categories/grocery-pantry`, tag: 'Department' },
  { ...desktop('product', 2527, 'Ventara Mart product page for a HexClad cookware set — price, bulky-item delivery note, quantity, Add to cart and Buy it now'), url: `${meta.liveLabel}/products/hexclad-7-piece-cookware-set`, tag: 'Product' },
]

export const phones = [
  {
    img: {
      src: `${DIR}/mobile-home.jpg`, width: 468, height: 10710, tall: true, phone: true,
      alt: 'Ventara Mart homepage on a phone — the same sections stacked for one-thumb shopping',
    },
    thumb: `${DIR}/mobile-home-top.webp`,
    kind: 'phone',
    tag: 'Homepage on a phone',
  },
]

export const introParagraphs = [
  'Ventara Mart is an online store for groceries and everyday essentials, shipped from a Chicago-area warehouse. One shop carries pantry staples — rice, atta, daal, spices and tea — next to home, tech, beauty and lifestyle products.',
  'The store is designed and coded from scratch, with no marketplace theme or page builder. The job was to make a wide catalogue feel easy: find a department in one tap, trust the price and the delivery terms, and check out without friction.',
]

export const features = [
  { title: 'Custom-coded storefront', text: 'Design and code written for this store — no theme, no page builder. Hosted on Vercel, so pages load fast and stay up.' },
  { title: '13 departments, one navigation', text: 'A category bar, an all-categories menu and a search box sit on every page, so any of the 165 products is a tap or two away.' },
  { title: 'Stripe checkout', text: 'Secure card payments with Visa, Mastercard and Amex, plus Apple Pay and Google Pay, and a “Buy it now” shortcut on product pages.' },
  { title: 'Shipping rules shown up front', text: 'Free shipping over $250 runs in the top bar, and bulky items show their delivery fee on the product page — before the cart.' },
  { title: 'A homepage that sells by department', text: 'A hero slider, shop-by-category tiles, trending tabs and featured edits give each department its own way in.' },
  { title: 'Product pages built for a quick yes', text: 'Price, delivery terms, quantity and both buy buttons sit beside the photo, with the description and details below.' },
  { title: 'Help and trust built in', text: 'A help-centre FAQ, a 30-day returns policy, customer accounts with order tracking, and a contact form that also takes wholesale and bulk enquiries.' },
  { title: 'Responsive on every screen', text: 'Each section has its own phone layout, with a sticky header, search and a swipeable category bar.' },
]
