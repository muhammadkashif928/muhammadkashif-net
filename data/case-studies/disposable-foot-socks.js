// ═══════════════════════════════════════════════════════════════════
// ── RESULTS ── Edit here when the client sends performance data.
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
  client: 'Private-label brand',
  product: 'Disposable Foot Socks — 144 Count',
  category: 'Footwear Accessories — Try-On Socks',
  marketplace: 'Amazon US',
  scope: 'Full Listing Set — 10 Images',
  published: 'Oct 29, 2026',
  publishedISO: '2026-10-29',
  slug: 'disposable-foot-socks',
  path: '/portfolio/disposable-foot-socks/',
}

const DIR = '/case-studies/disposable-foot-socks'

// The main-image candidates. The box alone is the chosen primary.
export const mainPrimary = {
  src: `${DIR}/01-main.jpg`,
  width: 3000,
  height: 3000,
  alt: 'Disposable foot socks main image — a red 144-count “Foot Socks” dispenser box with sheer beige socks spilling from the top, on a white background',
}

export const mainAlternates = [
  {
    src: `${DIR}/01-main-worn.jpg`,
    width: 3000,
    height: 3000,
    alt: 'Disposable foot socks alternate main image — the red dispenser box filled with socks beside two feet wearing the sheer beige low-cut socks',
  },
  {
    src: `${DIR}/01-main-dispense.jpg`,
    width: 3000,
    height: 3000,
    alt: 'Disposable foot socks alternate main image — a hand pulling a sheer sock from the red dispenser box like a tissue',
  },
]

// The dispensing frame — used as the page's social share image.
export const shareImage = mainAlternates[1]

// The full set, in buyer reading order. `caption` = the slot's job.
export const galleryImages = [
  {
    ...mainPrimary,
    slot: 'MAIN — PRIMARY',
    caption:
      'Wins the click. The box alone on pure white with a few socks breaking out of the opening — the pack, the count and what is inside, all readable at thumbnail size and nothing in frame that does not ship.',
    feature: true,
  },
  {
    ...mainAlternates[0],
    slot: 'MAIN — WORN',
    caption:
      'Answers “what does it look like on?” A pair of feet in the sheer low-cut socks beside the box shows the product is nearly invisible — the reason a shoe-store or spa buyer wants it.',
  },
  {
    ...mainAlternates[1],
    slot: 'MAIN — DISPENSE',
    caption:
      'Sells the format. A hand pulling one sock from the box like a tissue says “one at a time, no fuss” — the convenience story the box shape is built around.',
  },
  {
    src: `${DIR}/02-stretch.jpg`,
    width: 3000,
    height: 3000,
    slot: 'HIGH ELASTIC STRETCH',
    alt: 'High elastic stretch material — two hands stretching the cuff of a sheer mesh sock wide against a dark background, with an “Adapts to Every Foot” icon',
    caption:
      'Proves the stretch instead of claiming it. Two hands pulling the cuff wide on a dark background make the mesh and the ribbed band the hero — and pre-answer “will it fit my foot?”',
  },
  {
    src: `${DIR}/03-hygiene.jpg`,
    width: 3000,
    height: 3000,
    slot: 'HYGIENE & COMFORT',
    alt: 'Premium hygiene and comfort — a magnifying glass over the fine mesh of the sock fabric, with icons for a protective foot barrier and soft feel',
    caption:
      'The reason to buy. A magnifying glass over the knit turns a thin sock into a deliberate barrier, with two icons naming the benefits: protection between foot and shoe, and a soft feel against skin.',
  },
  {
    src: `${DIR}/04-breathable.jpg`,
    width: 3000,
    height: 3000,
    slot: 'SOFT, BREATHABLE',
    alt: 'Soft, breathable design — a foot in a sheer sock with airflow arrows and moisture particles rising off it, keeping feet dry and comfortable',
    caption:
      'Makes an invisible benefit visible. Airflow arrows and moisture particles lifting off the foot show breathability in one look — the worry anyone has about wearing a sock inside a trial shoe.',
  },
  {
    src: `${DIR}/05-versatile-uses.jpg`,
    width: 3000,
    height: 3000,
    slot: 'VERSATILE USES',
    alt: 'Versatile uses — four numbered panels: trying on sneakers, protecting an apple on the tree, a bare foot at a spa, and a mesh net over hair',
    caption:
      'Widens the audience. Four numbered panels — shoe try-ons, fruit protection, spa and pedicure, hair net — turn a 144-count box from “too many” into a reason to keep one in the house.',
  },
  {
    src: `${DIR}/06-disposable.jpg`,
    width: 3000,
    height: 3000,
    slot: 'DISPOSABLE',
    alt: 'Disposable and eco-friendly — a hand dropping a used sock into a grey bin full of socks, with a recycling icon and biodegradable, recyclable material copy',
    caption:
      'Handles the guilt of single-use. A hand dropping a sock into the bin shows the “use once, throw away” habit, while the recycling mark and material line soften it for the eco-conscious buyer.',
  },
  {
    src: `${DIR}/07-one-size.jpg`,
    width: 3000,
    height: 3000,
    slot: 'ONE SIZE',
    alt: 'One size designed to fit most — two feet in sheer low-cut socks on a white floor, with a “For Both Men & Women” icon',
    caption:
      'Removes the size question. Two feet standing square to camera and a “for both men & women” badge tell a store owner one box covers every customer who walks in.',
  },
  {
    src: `${DIR}/08-value.jpg`,
    width: 3000,
    height: 3000,
    slot: 'VALUE — 144 COUNT',
    alt: 'Great value and assured quality — a large pile of sheer beige socks on white marble under a warm gold backdrop, with a 144 count badge',
    caption:
      'Closes on quantity. A heaped pile of socks under warm gold light makes 144 feel like a lot — the last nudge for a buyer comparing price per pair.',
  },
]

export const contextParagraphs = [
  'Disposable foot socks are a low-attention product. Shoe stores, spas, nail salons and households buy them by the box, and on Amazon most listings look the same: a flat photo of a beige sock and a count.',
  'The brief was a full listing set — main image through to the last secondary — that makes a commodity read as a considered product. That meant showing what the shopper actually worries about: how it looks on, whether it fits, whether it is hygienic and breathable, and whether a box of 144 is worth it.',
]

export const mainImageParagraphs = [
  'A main image has one job: win the click from a page of near-identical results. I built three versions of the same box.',
  'The first shows the box alone, socks spilling from the opening. The second adds a pair of feet wearing the socks. The third has a hand pulling one out like a tissue.',
  'The call: lead with the box alone. Feet and hands are not in the box, and on a main image anything that does not ship invites confusion. The other two are not wasted — they take the next two slots, where “how it looks on” and “how it dispenses” are exactly the questions the buyer asks next.',
]
