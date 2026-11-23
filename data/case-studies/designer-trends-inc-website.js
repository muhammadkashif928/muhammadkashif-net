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
  client: 'Designer Trends Inc.',
  platform: 'Custom Next.js build, hosted on Vercel',
  category: 'Footwear & Leather Care Group — Company Website',
  scope: 'Design + development — 7 pages + 36 articles',
  liveUrl: 'https://www.designertrendsinc.com/',
  liveLabel: 'designertrendsinc.com',
  languages: 'HTML, CSS, JavaScript',
  stack: 'Next.js (React), Tailwind CSS · hosted on Vercel',
  published: 'Nov 24, 2026',
  publishedISO: '2026-11-24',
  slug: 'designer-trends-inc-website',
  path: '/portfolio/designer-trends-inc-website/',
}

const DIR = '/case-studies/designer-trends-inc-website'

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
  alt: 'Designer Trends Inc. homepage — “Preserving quality. Defining trends.” over a glass office building carrying the company logo',
}

export const heroDevices = [
  {
    ...desktop('home', 6940, 'Designer Trends Inc. homepage on desktop — hero, company overview, brand portfolio, purpose and values, brand spotlight, news and contact form'),
    full: `${DIR}/desktop-home-full.webp`,
    url: meta.liveLabel,
    tag: 'Desktop',
  },
]

export const pages = [
  { ...desktop('brands', 5851, 'Designer Trends Inc. Brands page — “A portfolio built on craft” with Eagle, Leather Hero, Fiammé and ToeArmor'), url: `${meta.liveLabel}/brands`, tag: 'Brands' },
  { ...desktop('about', 5257, 'Designer Trends Inc. About page — company story since 2012, history timeline, people and responsible business'), url: `${meta.liveLabel}/about`, tag: 'About' },
]

export const phones = [
  {
    img: {
      src: `${DIR}/mobile-home.jpg`, width: 468, height: 10334, tall: true, phone: true,
      alt: 'Designer Trends Inc. homepage on a phone — the same sections stacked for one-thumb scrolling',
    },
    thumb: `${DIR}/mobile-home-top.webp`,
    kind: 'phone',
    tag: 'Homepage on a phone',
  },
]

export const introParagraphs = [
  'Designer Trends Inc. is the company behind a portfolio of footwear and leather-care brands — Eagle, Leather Hero, Fiammé and ToeArmor. Shoppers meet those brands on marketplaces; retailers, distributors and press need to meet the company behind them.',
  'This is the corporate site built for that audience. It is designed and coded from scratch — no template, no page builder — and it does three jobs: explain who the company is, present each brand with its own character, and turn interested retailers into wholesale and distribution enquiries.',
]

export const features = [
  { title: 'Built from scratch in Next.js', text: 'Custom design and code, no theme or page builder. Hosted on Vercel, so pages load fast and stay up.' },
  { title: 'One home for four brands', text: 'A Brands page and a homepage spotlight give Eagle, Leather Hero, Fiammé and ToeArmor their own story, product range and store link.' },
  { title: 'Wholesale-first calls to action', text: 'An announcement bar, a Retailers link and the contact form all lead to the same goal: a wholesale or distribution application.' },
  { title: 'Enquiries sorted at the form', text: 'The contact form asks for the enquiry type — wholesale, distribution, press or general — and has a built-in spam check.' },
  { title: 'News & Insights', text: 'A 36-article journal of shoe-care and leather-care guides written for search, each tied back to the brands.' },
  { title: 'Company pages that build trust', text: 'About, history, people, responsible business and careers — the pages a retailer checks before opening an account.' },
  { title: 'SEO and privacy foundations', text: 'A full sitemap and clean URLs, plus cookie consent that only loads ads after a visitor accepts.' },
  { title: 'Responsive on every screen', text: 'Each section is laid out separately for phone, tablet and desktop — not just squeezed down.' },
]
