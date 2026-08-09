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
  product: 'Purse Cleaner & Conditioner Kit — 4 fl oz each + microfiber cloth & pad',
  category: 'Leather Care — Handbags & Purses',
  marketplace: 'Amazon US',
  scope: '8-Image Listing Set',
  published: 'Aug 9, 2026',
  publishedISO: '2026-08-09',
  slug: 'leather-hero-purse-care-kit',
  path: '/portfolio/leather-hero-purse-care-kit/',
}

// Sibling case study — the first Leather Hero product.
export const sibling = {
  title: 'Leather Hero — Furniture Salve',
  path: '/portfolio/leather-hero-furniture-salve/',
}

const DIR = '/case-studies/leather-hero-purse'

// The two main-image variants. A (with the bag) is the chosen primary.
export const mainPrimary = {
  src: `${DIR}/01-main.jpg`,
  width: 3000,
  height: 3000,
  alt: 'Leather Hero Purse Care Kit main image — cleaner and conditioner bottles, microfiber pad and cloth in front of a tan leather handbag on a white background',
}

export const mainAlt = {
  src: `${DIR}/01-main-alt.jpg`,
  width: 3000,
  height: 3000,
  alt: 'Leather Hero Purse Care Kit alternate main image — cleaner and conditioner bottles beside a microfiber pad and rolled cloth on a white background',
}

// The centerpiece before/after — a single pre-composed split frame.
export const beforeAfter = {
  src: `${DIR}/04-before-after.jpg`,
  width: 3000,
  height: 3000,
  alt: 'Restores and extends leather life — an aged leather crossbody bag split down the middle, cracked and faded on the left, deep and supple on the right after the kit',
}

// The full 8-image set, in buyer reading order. `caption` = the slot's job.
export const galleryImages = [
  {
    src: `${DIR}/01-main.jpg`,
    width: 3000,
    height: 3000,
    slot: 'MAIN — PRIMARY',
    alt: 'Leather Hero Purse Care Kit main image — cleaner and conditioner bottles, microfiber pad and cloth in front of a tan leather handbag on a white background',
    caption:
      'Wins the click. Pure white per Amazon policy, but a finished handbag sits behind the kit so the buyer knows at a glance what this is for — purse care, not generic leather cleaner — while all four pieces still read at thumbnail size.',
    feature: true,
  },
  {
    src: `${DIR}/01-main-alt.jpg`,
    width: 3000,
    height: 3000,
    slot: 'MAIN — ALTERNATE',
    alt: 'Leather Hero Purse Care Kit alternate main image — cleaner and conditioner bottles beside a microfiber pad and rolled cloth on a white background',
    caption:
      'The same kit with the bag removed and the four pieces enlarged. Kept as the second slot and A/B challenger: maximum clarity on exactly what ships, for the buyer who has already decided they want purse care and just wants to count what is in the box.',
  },
  {
    src: `${DIR}/02-cleaner.jpg`,
    width: 3000,
    height: 3000,
    slot: 'DEEP CLEANING',
    alt: 'Deep cleaning formula — the Leather Hero purse cleaner sprayed onto a brown leather handbag with foam lifting grime off the surface',
    caption:
      'Answers “will it actually lift grime?” The cleaner is caught mid-spray with foam lifting off a bag, so the buyer sees the mechanism working instead of reading “deep cleaning” as a claim.',
  },
  {
    src: `${DIR}/03-conditioner.jpg`,
    width: 3000,
    height: 3000,
    slot: 'DEEP CONDITIONING',
    alt: 'Deep conditioning — the Leather Hero purse conditioner worked into a brown leather bag with a microfiber pad, cream visible on the surface',
    caption:
      'The second step, and the second objection: after cleaning, will it dry out? The conditioner is worked into the leather with the pad, cream visible on the surface, under the promise it prevents drying and cracking.',
  },
  {
    src: `${DIR}/04-before-after.jpg`,
    width: 3000,
    height: 3000,
    slot: 'BEFORE / AFTER',
    alt: 'Restores and extends leather life — an aged leather crossbody bag split down the middle, cracked and faded on the left, deep and supple on the right after the kit',
    caption:
      'The proof slot, and the reason the set exists. One aged crossbody, split down the middle — cracked and faded left, deep and supple right. Where the Furniture Salve set proved the range on wood, this proves it on leather.',
  },
  {
    src: `${DIR}/05-accessories.jpg`,
    width: 3000,
    height: 3007,
    slot: 'MICROFIBER ACCESSORIES',
    alt: 'Premium microfiber accessories — a grey waffle-weave cloth and round buffing pad included in the Leather Hero purse kit',
    caption:
      'Kills the “do I need to buy applicators too?” hesitation. The waffle cloth and buffing pad are shown as included, premium items — part of the kit, not an afterthought.',
  },
  {
    src: `${DIR}/06-natural.jpg`,
    width: 3000,
    height: 3000,
    slot: 'NATURAL FORMULA',
    alt: 'Natural formula — the cleaner and conditioner bottles framed by coconut, palm leaves and beeswax, captioned naturally safe, fast and non-greasy',
    caption:
      'For the buyer wary of what they are putting on an expensive bag. Coconut, palm and beeswax framed around the bottles carry “naturally safe, fast, non-greasy” — an ingredient answer to a safety question.',
  },
  {
    src: `${DIR}/07-versatile.jpg`,
    width: 3000,
    height: 3000,
    slot: 'VERSATILE USES',
    alt: 'Versatility meets luxury care — a spread of six leather bags including totes, crossbodies, a red clutch and a patterned satchel',
    caption:
      'Raises what the kit is worth. A spread of totes, crossbodies, clutches and a patterned satchel says one kit covers the whole collection — so the buyer with more than one bag sees more than one reason to buy.',
  },
]

export const contextParagraphs = [
  // The [Furniture Salve] link is rendered by the component so it can be a Next Link.
  'This is the second Leather Hero listing in this portfolio. The first was the Furniture Salve — a ten-image set built around proving that a restoration product actually restores. That set did its job, and the client came back with a second product to give the same treatment.',
  'It is worth saying plainly, because it is the part a single case study cannot show on its own: this is repeat work. A brand that liked the first set enough to hand over the second is the clearest signal the approach holds up. Where the Furniture Salve proved the idea on wood, this kit proves it on leather — same brand, wider range, one consistent visual language across both.',
]

export const beforeAfterIntro =
  'The centerpiece of the set — one aged leather crossbody, cleaned and conditioned, shown as a single split frame.'

export const beforeAfterCaption =
  'Left, the bag as it came in: colour gone flat, grain dried, surface cracking. Right, the same bag after the kit: colour back, grain supple, the metal clasp the only thing unchanged. This is the frame that turns “restores and extends leather life” from a line of copy into something the buyer can check.'

export const mainImageParagraphs = [
  'A main image has one job: win the click from a page of competitors. Everything else in the listing only gets seen if this frame earns the tap — which makes it the frame worth the most time. Here it came down to two versions of the same kit.',
  'The first leads with a finished handbag behind the products. It costs a little room — space the bottles could have filled — but it buys the one thing a cold shopper needs first. At thumbnail size, before a single word is read, the bag says this is for a purse like yours. The four pieces still read; context is what is added.',
  'The second strips the bag out and enlarges the kit on plain white. It is the more literal frame — two bottles, a pad, a cloth, nothing competing — and it answers what exactly do I get with zero ambiguity.',
  'The call: lead with the bag. In a purse-care category the buyer is scanning for their problem, not counting bottles, and the frame that names the problem fastest wins the click. The product-only version is not wasted — it is the ideal second slot, and a clean A/B challenger if the data ever says the context is costing more than it earns.',
]
