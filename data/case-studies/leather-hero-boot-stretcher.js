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
  product: 'Heavy-Duty Boot Stretcher — Calf & Shaft',
  category: 'Footwear Care — Boot Stretchers',
  marketplace: 'Amazon US',
  scope: '9-Image Listing Set',
  published: 'Oct 29, 2026',
  publishedISO: '2026-10-29',
  slug: 'leather-hero-boot-stretcher',
  path: '/portfolio/leather-hero-boot-stretcher/',
}

// Sibling case studies — the earlier Leather Hero products.
export const siblings = [
  { title: 'Furniture Salve', path: '/portfolio/leather-hero-furniture-salve/' },
  { title: 'Purse Care Kit', path: '/portfolio/leather-hero-purse-care-kit/' },
]

const DIR = '/case-studies/leather-hero-boot-stretcher'

// The two main-image variants. A (stretcher alone) is the chosen primary.
export const mainPrimary = {
  src: `${DIR}/01-main.jpg`,
  width: 3000,
  height: 3000,
  alt: 'Leather Hero boot stretcher main image — a steel calf and shaft stretcher with a T-handle and a kraft “Extra Heavy Duty” tag on a white background',
}

export const mainAlt = {
  src: `${DIR}/01-main-alt.jpg`,
  width: 3000,
  height: 3000,
  alt: 'Leather Hero boot stretcher alternate main image — the steel stretcher standing beside a tooled brown cowboy boot on a white background',
}

// The centerpiece before/after — a single pre-composed side-by-side frame.
export const beforeAfter = {
  src: `${DIR}/05-before-after.jpg`,
  width: 3000,
  height: 3000,
  alt: 'Customizable fit — the same tooled cowboy boot shaft shown before and after stretching, the opening visibly wider on the right',
}

// The full 9-image set, in buyer reading order. `caption` = the slot's job.
export const galleryImages = [
  {
    src: `${DIR}/01-main.jpg`,
    width: 3000,
    height: 3000,
    slot: 'MAIN — PRIMARY',
    alt: 'Leather Hero boot stretcher main image — a steel calf and shaft stretcher with a T-handle and a kraft “Extra Heavy Duty” tag on a white background',
    caption:
      'Wins the click. The stretcher alone on pure white, standing upright so the T-handle, screw and twin paddles all read at thumbnail size. The kraft tag does one job: say “heavy duty” before the buyer has read a word of the title.',
    feature: true,
  },
  {
    src: `${DIR}/01-main-alt.jpg`,
    width: 3000,
    height: 3000,
    slot: 'MAIN — ALTERNATE',
    alt: 'Leather Hero boot stretcher alternate main image — the steel stretcher standing beside a tooled brown cowboy boot on a white background',
    caption:
      'The same tool beside a cowboy boot. Kept as the second slot and A/B challenger: it answers “how big is it?” and “what is it for?” at a glance, for the shopper who does not recognise a boot stretcher on sight.',
  },
  {
    src: `${DIR}/02-calf-shaft.jpg`,
    width: 3000,
    height: 3000,
    slot: 'CALF & SHAFT',
    alt: 'Stretches calf and shaft — the stretcher inserted into a tooled cowboy boot on a wood floor, with arrows showing the shaft widening and a no-damage icon for stitching and lining',
    caption:
      'Names the problem the tool solves — a tight calf — and shows it working inside the boot, arrows pushing the shaft outward. The second line heads off the first fear: will it tear my stitching or lining?',
  },
  {
    src: `${DIR}/03-dual-action.jpg`,
    width: 3000,
    height: 3000,
    slot: 'DUAL STRETCHING ACTION',
    alt: 'Dual stretching action — the stretcher on a wood background with two close-up callouts explaining upper mode for boot shafts and lower mode for the instep',
    caption:
      'The feature slot. Two zoomed callouts explain the upper and lower plate modes, so one tool reads as two — shaft and instep — and the buyer sees more value than the photo alone suggests.',
  },
  {
    src: `${DIR}/04-easy-twist.jpg`,
    width: 3000,
    height: 3000,
    slot: 'EASY TWIST ADJUSTMENT',
    alt: 'Easy twist adjustment — a hand turning the T-handle of the stretcher inside a tooled boot, with a rotation arrow and an inset of a zip-up lace boot',
    caption:
      'Answers “is it hard to use?” with a hand on the handle and a rotation arrow — insert, turn, expand. The inset of a zip-up lace boot quietly widens the audience beyond cowboy boots.',
  },
  {
    src: `${DIR}/05-before-after.jpg`,
    width: 3000,
    height: 3000,
    slot: 'BEFORE / AFTER',
    alt: 'Customizable fit — the same tooled cowboy boot shaft shown before and after stretching, the opening visibly wider on the right',
    caption:
      'The proof slot. The same tooled shaft side by side — narrow on the left, visibly opened on the right — with the tooling intact on both. It turns “stretches the shaft” from a claim into something the buyer can measure by eye.',
  },
  {
    src: `${DIR}/06-comfort.jpg`,
    width: 3000,
    height: 3000,
    slot: 'NO RUBBING',
    alt: 'No rubbing, perfect fit — boots worn on a road with three callouts for tight legs, ankle pain and uneasy feet',
    caption:
      'Sells the outcome, not the tool. Boots worn on the road, with the three pains a tight boot causes — tight legs, ankle pain, uneasy feet — named so the buyer recognises their own reason for searching.',
  },
  {
    src: `${DIR}/07-all-boots.jpg`,
    width: 3000,
    height: 3000,
    slot: 'MADE FOR ALL BOOTS',
    alt: 'Made for all tall shaft boots — four boots in a row on a wood floor: cowboy, western, work and hiking',
    caption:
      'Raises what the tool is worth. Cowboy, western, work and hiking boots in one row says it is not a single-boot purchase — the buyer with a closet of boots sees a reason to buy for all of them.',
  },
  {
    src: `${DIR}/08-heavy-duty.jpg`,
    width: 3000,
    height: 3000,
    slot: 'HEAVY-DUTY BUILD',
    alt: '40 lb heavy-duty industrial strength — the steel stretcher resting on folded leather hides beside a gold “Stretch Guaranteed” seal',
    caption:
      'Closes on trust. The stretcher on raw leather hides with a 40 lb strength claim and a “Stretch Guaranteed” seal — the last reassurance for a buyer comparing it against cheaper plastic stretchers.',
  },
]

export const contextParagraphs = [
  // The sibling names are rendered as links by the component.
  'This is the third Leather Hero listing in this portfolio, after the Furniture Salve and the Purse Care Kit. The first two were care products — a salve and a cleaner-conditioner kit — where the job was proving the formula restores leather.',
  'A boot stretcher is a different kind of sell. It is a steel tool, not a formula, and most shoppers have never held one. So the set leans less on restoration and more on mechanism and fit: what the tool is, how it goes into a boot, what it changes, and which boots it works on. Same brand, same proof-first approach, a different question to answer.',
]

export const beforeAfterIntro =
  'The centerpiece of the set — one tooled cowboy boot shaft, shown before and after stretching in a single side-by-side frame.'

export const beforeAfterCaption =
  'Left, the shaft as it came: a narrow opening that pinches the calf. Right, the same boot after the stretcher: the opening visibly wider, the lining showing, the tooling and stitching untouched. This is the frame that makes “customizable fit” something the buyer can check rather than take on trust.'

export const mainImageParagraphs = [
  'A main image has one job: win the click from a page of competitors. Here it came down to two versions of the same stretcher.',
  'The first shows the tool alone, upright on white, with a kraft “Extra Heavy Duty” tag. Every part of the mechanism — handle, screw, paddles — reads at thumbnail size, and nothing in the frame is something the buyer will not receive.',
  'The second stands the stretcher next to a tooled cowboy boot. It is the faster read for a shopper who does not know what a boot stretcher looks like, and it gives instant scale.',
  'The call: lead with the stretcher alone. The boot is not in the box, and in a main image a prop that is not included invites the “does it come with the boot?” question — the kind of confusion that costs returns and can draw Amazon’s attention. The boot version is not wasted: it is the ideal second slot, where context and scale help without blurring what ships.',
]
