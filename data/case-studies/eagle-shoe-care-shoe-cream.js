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
  client: 'Eagle Shoe Care',
  product: 'Premium Shoe Cream — Black, with Applicator Brush & Buffing Cloth',
  category: 'Shoe Care — Leather Cream & Polish',
  marketplace: 'Amazon US',
  scope: 'Full Listing Set — 10 Images',
  published: 'Nov 22, 2026',
  publishedISO: '2026-11-22',
  slug: 'eagle-shoe-care-shoe-cream',
  path: '/portfolio/eagle-shoe-care-shoe-cream/',
}

const DIR = '/case-studies/eagle-shoe-care-shoe-cream'
const sq = (name) => ({ src: `${DIR}/${name}.jpg`, width: 3000, height: 3000 })

// The two main-image candidates.
export const mainPrimary = {
  ...sq('01-main'),
  alt: 'Eagle Premium Shoe Cream main image — an open glass jar of black cream, the gold and black lid leaning against it, a wooden applicator brush and a folded buffing cloth on white',
}

export const mainAlt = {
  ...sq('01-main-alt'),
  alt: 'Eagle Premium Shoe Cream alternate main image — the lid standing upright in front of the jar, the brush in the foreground and the cloth folded behind, on white',
}

// The before/after — used as the page's social share image.
export const shareImage = {
  ...sq('03-before-after'),
  alt: 'Before and after, scuff coverage — a pair of black cap-toe boots, the left toe scratched and dull, the right toe smooth and shining',
}

// The full set, in buyer reading order. `caption` = the slot's job.
export const galleryImages = [
  {
    ...mainPrimary,
    slot: 'MAIN — PRIMARY',
    caption:
      'Wins the click and answers “what do I get?” Jar, brush and cloth together on white, with the open jar showing the cream itself — not just a closed tin.',
    feature: true,
  },
  {
    ...mainAlt,
    slot: 'MAIN — ALTERNATE',
    caption:
      'The same three pieces with the lid standing face-on, so “Shoe Cream” and “Black” read bigger at thumbnail size. Kept as the A/B challenger.',
  },
  {
    ...sq('02-whats-in-the-box'),
    slot: 'WHAT’S IN THE BOX',
    alt: 'What’s in the box — black shoe cream, a precision applicator brush and a buffing cloth on a dark wooden surface, each labelled with an arrow',
    caption:
      'Turns the bundle into a list. Three arrows, three names, on dark wood — so the buyer knows the brush and cloth are included and that nothing else is needed.',
  },
  {
    ...shareImage,
    slot: 'BEFORE / AFTER',
    caption:
      'The proof slot. One pair of boots, same light, same angle: scratched and dull on the left, covered and shining on the right. The result is shown, not claimed.',
  },
  {
    ...sq('04-deep-nourishment'),
    slot: 'CONDITIONS THE LEATHER',
    alt: 'Deep nourishment, conditions and restores leather — a hand working cream into a black boot with the brush, with a close-up circle of the leather grain',
    caption:
      'Answers “is it just colour?” The brush in use plus a close-up circle of the grain shows the cream working into the leather, not sitting on top of it.',
  },
  {
    ...sq('05-benefits'),
    slot: 'BENEFITS',
    alt: 'Shoe cream and polish benefits — colour restoration, high gloss, scuff coverage and long-lasting care, each with an icon, beside a boot being polished',
    caption:
      'Four reasons in one scan: colour, gloss, scuffs and longevity. Each has its own icon so a buyer skimming on a phone gets the point without reading the copy.',
  },
  {
    ...sq('06-buff-to-shine'),
    slot: 'STEP — BUFF TO SHINE',
    alt: 'Buff to shine — a hand buffing a black lace-up boot with the cloth on a wooden table',
    caption:
      'The finish. A hand buffing a boot with the included cloth shows the last step of the routine and the shine the buyer is paying for.',
  },
  {
    ...sq('07-versatile-use'),
    slot: 'VERSATILE USE',
    alt: 'Versatile use, safe for all leather goods — a black tote, messenger bag, leather jacket, belt, wallet, key fob and boots',
    caption:
      'Widens the use case. Bags, a jacket, a belt and a wallet next to the boots tell the buyer one jar covers more than one pair of shoes.',
  },
  {
    ...sq('08-buffing-cloth'),
    slot: 'THE BUFFING CLOTH',
    alt: 'Buff to shine — two hands pulling the cloth across a black oxford on a shoeshine box, with icons for super soft, lint free and reusable and durable',
    caption:
      'Sells the extra. The cloth gets its own slot — soft, lint free, reusable — so it reads as a real tool and not a throw-in.',
  },
  {
    ...sq('09-lifestyle'),
    slot: 'LIFESTYLE',
    alt: 'A hand-shine in progress — the cloth pulled across a black oxford on a wooden shoeshine box, with the open jar and brush beside it',
    caption:
      'Closes on the ritual. The same shoeshine scene with the jar and brush in frame and no text — the image a buyer remembers when they compare listings.',
  },
]

export const mainImageParagraphs = [
  'Shoe cream is a commodity on Amazon. Most listings show a closed tin on white, and the buyer cannot tell one from the next. This one has three things to sell: the cream, the brush and the cloth.',
  'Both main images open the jar, so the buyer sees the cream itself. The first leans the lid against the jar and spreads the cloth out behind; the second stands the lid face-on, with the brush in front.',
  'The call: lead with the open jar and all three pieces in view. The bundle is the reason to pick this listing over a bare tin, so it has to be visible at thumbnail size. The face-on lid stays as the A/B challenger.',
]
