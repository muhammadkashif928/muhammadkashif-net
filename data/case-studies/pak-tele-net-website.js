// ═══════════════════════════════════════════════════════════════════
// ── RESULTS ── Edit here when Pak Tele Net sends performance data.
// `null` renders nothing at all (default, recommended).
// ═══════════════════════════════════════════════════════════════════
export const results = null

// When the client responds, replace the line above with this shape.
// Every field is optional — pass only what you actually have.
//
// export const results = {
//   metrics: [
//     { label: 'WhatsApp enquiries', value: '+00%', timeframe: '90 days post-launch' },
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
// The live link is deliberately not shown. Account numbers, phone numbers
// and the account holder's name are blurred in the screenshots.
// ═══════════════════════════════════════════════════════════════════

export const meta = {
  client: 'Pak Tele Net Internet',
  platform: 'Custom React web app',
  category: 'Fiber Internet Provider — Website',
  scope: 'Design + development — 5 pages',
  languages: 'HTML, CSS, JavaScript',
  stack: 'React, Tailwind CSS',
  published: 'Nov 9, 2026',
  publishedISO: '2026-11-09',
  slug: 'pak-tele-net-website',
  path: '/portfolio/pak-tele-net-website/',
}

const DIR = '/case-studies/pak-tele-net-website'

// The homepage — used as the page's social share image.
export const shareImage = {
  src: `${DIR}/desktop-home-hero.jpg`,
  width: 1440,
  height: 900,
  alt: 'Pak Tele Net homepage — “Fast. Reliable. Unlimited.” in English and Urdu over glowing orange fiber-optic strands',
}

export const heroDevices = [
  {
    img: {
      src: `${DIR}/desktop-home.jpg`, width: 1440, height: 5748, tall: true,
      alt: 'Pak Tele Net homepage on desktop — hero, speed packages, why fiber, coverage map, three steps, pay bill, FAQ and contact',
    },
    full: `${DIR}/desktop-home-full.webp`,
    thumb: `${DIR}/desktop-home-hero-960.webp`,
    kind: 'desktop',
    url: 'Pak Tele Net — Fiber Internet in Burewala',
  },
]

export const phones = [
  {
    img: {
      src: `${DIR}/mobile-home.jpg`, width: 468, height: 11694, tall: true, phone: true,
      alt: 'Pak Tele Net homepage on a phone — the same sections stacked, with a floating WhatsApp button',
    },
    thumb: `${DIR}/mobile-home-top.webp`,
    kind: 'phone',
    tag: 'Homepage on a phone',
  },
]

export const introParagraphs = [
  'Pak Tele Net is a fiber internet provider in Burewala, covering the city and every village within 20 km. Its customers find it on their phones, ask on WhatsApp and pay through JazzCash or Easypaisa — and many read Urdu more comfortably than English.',
  'The site is built around that. Every key line is in both English and Urdu, every call to action opens WhatsApp or a phone call, and the whole path — pick a speed, check the area, get connected, pay the bill — fits on one homepage.',
]

export const features = [
  { title: 'English and Urdu, side by side', text: 'Headlines carry an Urdu line in Nastaliq script under the English, so every visitor reads the offer in the language they trust.' },
  { title: 'WhatsApp-first contact', text: 'A floating WhatsApp button and “Start step 1 on WhatsApp” — the way local customers already ask for a connection.' },
  { title: 'Packages at a glance', text: 'Ten speed packages from 3 to 100 MB, with the four main ones as cards and the most popular one highlighted.' },
  { title: 'Coverage map', text: 'A live map with the 20 km service radius drawn around Burewala, so people can see their village is covered before they ask.' },
  { title: 'Pay your bill from your phone', text: 'Every wallet and bank account on one card grid — JazzCash, Easypaisa, SadaPay and bank transfer — with a full Pay Bill page behind it.' },
  { title: 'Built for phones and local search', text: 'A mobile-first layout, fast loading and local SEO for searches like “fiber internet Burewala”.' },
]
