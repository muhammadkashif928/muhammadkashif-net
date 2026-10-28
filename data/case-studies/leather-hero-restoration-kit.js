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
//     { label: 'Conversion Rate', value: '+00%', timeframe: '90 days post-launch' },
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
  product: 'Leather Restoration Complete Kit — Black, 6-Piece',
  category: 'Leather Care — Furniture Restoration',
  marketplace: 'Amazon US',
  scope: 'Full Listing Set — 11 Images',
  published: 'Oct 29, 2026',
  publishedISO: '2026-10-29',
  slug: 'leather-hero-restoration-kit',
  path: '/portfolio/leather-hero-restoration-kit/',
}

const DIR = '/case-studies/leather-hero-restoration-kit'

// The two main-image candidates. The spread-out kit is the chosen primary.
export const mainPrimary = {
  src: `${DIR}/01-main.jpg`,
  width: 3000,
  height: 3000,
  alt: 'Leather Hero Leather Restoration Complete Kit main image — box, foam cleaner, black color restorer, mink oil tin, three sponges, cloth, brush and gloves laid out on white',
}

export const mainAlt = {
  src: `${DIR}/01-main-alt.jpg`,
  width: 3000,
  height: 3000,
  alt: 'Leather Hero Leather Restoration Kit alternate main image — the same six pieces grouped tightly in front of the box on white',
}

// The sofa before/after — used as the page's social share image.
export const shareImage = {
  src: `${DIR}/03-sofa-before-after.jpg`,
  width: 3000,
  height: 3000,
  alt: 'Revive worn leather — a black leather sofa, cracked and faded on the left, restored to deep black on the right',
}

// The full set, in buyer reading order. `caption` = the slot's job.
export const galleryImages = [
  {
    ...mainPrimary,
    slot: 'MAIN — PRIMARY',
    caption:
      'Wins the click and answers “what do I get?” Every piece of the six-piece kit laid out with space around it, so the buyer can count the contents at thumbnail size.',
    feature: true,
  },
  {
    ...mainAlt,
    slot: 'MAIN — ALTERNATE',
    caption:
      'The same kit grouped tighter, so the labels read bigger. Kept as the A/B challenger: more presence on the search page, at the cost of pieces overlapping.',
  },
  {
    src: `${DIR}/02-bag-before-after.jpg`,
    width: 3000,
    height: 3000,
    slot: 'BEFORE / AFTER — BAG',
    alt: 'Bring black leather back to life — a black tote bag, scuffed and faded on the left, restored on the right',
    caption:
      'The proof slot. One tote split down the middle — scuffed and greyed on the left, deep black on the right — so “restores colour” is something the buyer sees, not reads.',
  },
  {
    ...shareImage,
    slot: 'BEFORE / AFTER — SOFA',
    caption:
      'The same proof at furniture scale. A cracked sofa restored to deep black shows the kit is not just for small accessories — it handles the big job most buyers actually have.',
  },
  {
    src: `${DIR}/04-everyday-wear.jpg`,
    width: 3000,
    height: 3000,
    slot: 'FIXES EVERYDAY WEAR',
    alt: 'Fixes everyday leather wear — six close-up panels of scuffs, scratches, UV fading, cracking, worn bolsters and pigment loss',
    caption:
      'Lets the buyer find their own problem. Six close-ups — scuffs, scratches, fading, cracking, worn bolsters, pigment loss — so whatever is wrong with their leather, it is on the list.',
  },
  {
    src: `${DIR}/05-clean.jpg`,
    width: 3000,
    height: 3000,
    slot: 'STEP 1 — CLEAN',
    alt: 'Deep cleaning foam action — a hand pumping foam cleaner onto a worn black leather armrest',
    caption:
      'Step one of three. Foam landing on a grimy armrest shows the cleaner is a real prep step, not filler in the box — and why the restorer works better after it.',
  },
  {
    src: `${DIR}/06-restore.jpg`,
    width: 3000,
    height: 3000,
    slot: 'STEP 2 — RESTORE',
    alt: 'Bring back rich color — a hand applying black color restorer with a sponge, leaving a deep black patch on faded leather',
    caption:
      'The hero product at work. A sponge leaving a clean black patch on faded leather gives a live before/after inside one frame, with the jar held up so the buyer knows which piece does it.',
  },
  {
    src: `${DIR}/07-condition.jpg`,
    width: 3000,
    height: 3000,
    slot: 'STEP 3 — CONDITION',
    alt: 'Conditions leather and adds a satin finish — an open mink oil tin beside a hand buffing black leather with a sponge',
    caption:
      'Closes the routine. The open mink oil tin and a satin sheen on the leather answer “will it feel stiff or painted?” — the worry with any colour product.',
  },
  {
    src: `${DIR}/08-furniture.jpg`,
    width: 3000,
    height: 3000,
    slot: 'MADE FOR FURNITURE',
    alt: 'Specially formulated for furniture care — four numbered panels of a black leather sofa, recliner, dining chair and ottoman',
    caption:
      'Widens the use case. Sofa, recliner, dining chair and ottoman tell the buyer one kit covers the whole room, not just the piece that sent them searching.',
  },
  {
    src: `${DIR}/09-tools.jpg`,
    width: 3000,
    height: 3000,
    slot: 'APPLICATION TOOLS',
    alt: 'Complete application tools — three applicator pads, a microfiber cloth, a detail brush and a pair of gloves, each labelled',
    caption:
      'Removes the “what else do I need to buy?” question. Pads, cloth, brush and gloves, each labelled with a count — everything to start the job comes in the box.',
  },
  {
    src: `${DIR}/10-whats-included.jpg`,
    width: 3000,
    height: 3000,
    slot: 'WHAT’S INCLUDED',
    alt: 'What’s included — color restorer, foam cleaner, mink oil, cloth, gloves, brush and three sponges, each labelled with its size or count',
    caption:
      'The checklist to close on. Every item with its size or count, laid out on black, so the buyer comparing kits can line this one up against the rest in one glance.',
  },
]

export const mainImageParagraphs = [
  'A kit is harder to sell in one frame than a single product. The buyer needs to see the whole system, and every extra piece competes for space at thumbnail size.',
  'The first version spreads the six pieces out, each with room around it. The second groups them tightly in front of the box, so the bottles and the tin read bigger.',
  'The call: lead with the spread. In a kit, the count is the value — a buyer who can see the cleaner, the restorer, the mink oil and the tools separately understands what they are paying for before they click. The tighter version stays as the A/B challenger.',
]
