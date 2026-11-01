// ═══════════════════════════════════════════════════════════════════
// ── RESULTS ── Edit here when Fiamme sends performance data.
// `null` renders nothing at all (default, recommended).
// ═══════════════════════════════════════════════════════════════════
export const results = null

// When the client responds, replace the line above with this shape.
// Every field is optional — pass only what you actually have.
//
// export const results = {
//   metrics: [
//     { label: 'Store Visits', value: '+00%', timeframe: '90 days post-launch' },
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
  client: 'Fiamme',
  product: 'Suede & Nubuck Kit — 3-Piece Set',
  category: 'Leather Care — Suede & Nubuck',
  marketplace: 'Amazon US',
  scope: 'Amazon Brand Store — 7 Modules',
  published: 'Nov 1, 2026',
  publishedISO: '2026-11-01',
  slug: 'fiamme-brand-store',
  path: '/portfolio/fiamme-brand-store/',
}

const DIR = '/case-studies/fiamme-brand-store'

// The whole store page, banner to last module, as one tall image.
export const fullPage = {
  src: `${DIR}/00-full-page.jpg`,
  thumb: `${DIR}/00-full-page-1800.webp`,
  width: 2423,
  height: 6403,
  tall: true, // the viewer shows it full width and scrolls instead of fitting it to the screen
  slot: 'THE FULL STORE PAGE',
  alt: 'The complete Fiamme Amazon Brand Store page — banner, hero, kit contents, why Fiamme, three steps, suede favourites and a portable-kit lifestyle module',
}

// The hero module — used as the page's social share image.
export const shareImage = {
  src: `${DIR}/02-hero.jpg`,
  width: 2357,
  height: 1163,
  alt: 'Fiamme Suede & Nubuck Kit hero — the carded three-piece kit on dark wood beside four gold benefit icons and a Shop Now button',
}

// Every module, top to bottom. `caption` = the module's job.
export const modules = [
  {
    src: `${DIR}/01-banner.jpg`,
    thumb: `${DIR}/01-banner-1200.webp`,
    width: 2423,
    height: 480,
    slot: '01 — STORE BANNER',
    alt: 'Fiamme Luxury Leather Care store banner — the script logo on black leather beside a gold zip and embossed Greek-key pattern',
    caption:
      'Sets the price tier before a product is shown. Black leather, a gold zip and the script logo say “luxury leather care” — so a three-piece brush kit is read as an accessory to good shoes, not a commodity.',
  },
  {
    ...shareImage,
    thumb: `${DIR}/02-hero-1200.webp`,
    slot: '02 — HERO',
    caption:
      'The product and the promise in one frame. The carded kit on dark wood, four gold icons — cleaning, gentle, restores nap, all colours — and one Shop Now. Everything a skimmer needs if they read nothing else.',
  },
  {
    src: `${DIR}/03-kit.jpg`,
    thumb: `${DIR}/03-kit-1200.webp`,
    width: 2357,
    height: 922,
    slot: '03 — WHAT’S IN THE KIT',
    alt: 'The complete 3-piece cleaning kit — nylon brush, brass brush and suede eraser, each with a one-line job',
    caption:
      'Answers “what do I get?” out of the packaging. Nylon brush, brass brush, suede eraser — each on its own with a one-line job, so the buyer knows which tool does what before it arrives.',
  },
  {
    src: `${DIR}/04-why.jpg`,
    thumb: `${DIR}/04-why-1200.webp`,
    width: 2357,
    height: 1169,
    slot: '04 — WHY FIAMME',
    alt: 'Why choose Fiamme — the kit tucked in a canvas weekend bag beside four reasons: premium materials, safe and effective, versatile use, built to last',
    caption:
      'The comparison module. A lifestyle half — the tools tucked in a weekend bag — next to four reasons, so the claims sit beside a picture of the product being owned, not just sold.',
  },
  {
    src: `${DIR}/05-steps.jpg`,
    thumb: `${DIR}/05-steps-1200.webp`,
    width: 2357,
    height: 876,
    slot: '05 — THREE STEPS',
    alt: 'Easy to use, three simple steps — erase marks, lift dirt with the brass brush, refine the finish with the nylon brush',
    caption:
      'Removes the fear of ruining suede. Three close-ups — erase, lift, refine — turn the kit into a routine anyone can follow, and quietly show every tool in use.',
  },
  {
    src: `${DIR}/06-uses.jpg`,
    thumb: `${DIR}/06-uses-1200.webp`,
    width: 2357,
    height: 499,
    slot: '06 — PERFECT FOR',
    alt: 'Perfect for all your suede and nubuck favourites — gold line icons for boots, sneakers, jackets, bags, hats and furniture',
    caption:
      'Widens the use case in one strip. Six gold icons — boots to furniture — tell a buyer who came for one pair of shoes that the kit covers everything suede they own.',
  },
  {
    src: `${DIR}/07-compact.jpg`,
    thumb: `${DIR}/07-compact-1200.webp`,
    width: 2357,
    height: 1131,
    slot: '07 — COMPACT & PORTABLE',
    alt: 'Compact, portable, ready anytime — the carded kit on a wooden floor beside a pair of tan suede sneakers',
    caption:
      'Closes on the product again, next to the shoes it is for. A final reason to buy — it travels — and the pack is the last thing the shopper sees before they scroll back up to Shop Now.',
  },
]

export const pageParagraphs = [
  'A brand store has a different job from a listing. The listing answers one buyer’s questions about one product. The store is where a shopper decides whether the brand itself is worth trusting — usually after tapping the brand name on a listing they were already half-sold on.',
  'Fiamme had one hero product: a three-piece suede and nubuck kit. The page had to make a small accessory feel like part of a luxury leather-care line, then walk the shopper from “what is it” to “how do I use it” to “what else is it for”.',
  'The order does that work. Brand first, product second, contents third, then proof, routine and range — and a closing module that puts the pack back on screen. Every module is built to read on its own on a phone, where most store visits happen.',
]
