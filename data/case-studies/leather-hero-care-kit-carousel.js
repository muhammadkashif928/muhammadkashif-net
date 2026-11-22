// ═══════════════════════════════════════════════════════════════════
// ── RESULTS ── Edit here when Leather Hero sends performance data.
// `null` renders nothing at all (default, recommended).
// ═══════════════════════════════════════════════════════════════════
export const results = null

// Set to true to show the "Performance data pending" placeholder instead of
// rendering nothing. Only has an effect while `results` above is null.
export const showPendingState = false

// ═══════════════════════════════════════════════════════════════════
// Case study content below — no need to touch for a metrics update.
// ═══════════════════════════════════════════════════════════════════

export const meta = {
  client: 'Leather Hero',
  product: 'Premium Leather Care Kit — Cleaner, Conditioner, Applicator Pad & Microfiber Towel',
  category: 'Leather Care — Cleaner & Conditioner',
  format: '9:16 vertical, 7 slides',
  scope: 'Lifestyle Carousel — 7 Slides',
  published: 'Nov 23, 2026',
  publishedISO: '2026-11-23',
  slug: 'leather-hero-care-kit-carousel',
  path: '/portfolio/leather-hero-care-kit-carousel/',
}

const DIR = '/case-studies/leather-hero-care-kit-carousel'
const slide = (name) => ({
  src: `${DIR}/${name}.jpg`,
  thumb: `${DIR}/${name}-720.webp`,
  width: 1449,
  height: 2576,
})

export const shareImage = {
  src: `${DIR}/share.jpg`,
  width: 1200,
  height: 800,
  alt: 'Leather Hero Premium Leather Care Kit — the cleaner, conditioner, box, applicator pad and towel on a beige leather car seat',
}

// The carousel, in swipe order. `slot` = the slide's job.
export const slides = [
  {
    ...slide('01-cover'),
    slot: '01 — THE HOOK',
    alt: 'Clean & Condition, 2-step leather care — the Leather Hero cleaner and conditioner lying on a beige leather car seat with a grey towel and applicator pad, and pills for furniture, car seats, purses and shoes',
    caption:
      'Names the promise in three words and shows both bottles on the surface they are made for. The pills at the bottom answer “will it work on mine?” before the buyer swipes.',
  },
  {
    ...slide('02-whats-inside'),
    slot: '02 — WHAT’S INSIDE',
    alt: 'Everything you need — the Premium Leather Care Kit box with the cleaner, conditioner, applicator pad and microfiber towel, and a four-item checklist',
    caption:
      'Turns the kit into a checklist. The box, both bottles, the pad and the towel in one frame, with four ticks so nothing reads as an extra purchase.',
  },
  {
    ...slide('03-step-spray'),
    slot: '03 — STEP 1, SPRAY',
    alt: 'Step 1, spray it on — a hand spraying Leather Cleaner onto a dirty beige car seat',
    caption:
      'Starts the routine on a seat that is visibly dirty. The step pill and the four-dot tracker tell the buyer how far through the routine they are.',
  },
  {
    ...slide('04-step-wipe'),
    slot: '04 — STEP 2, WIPE',
    alt: 'Step 2, wipe it clean — a hand wiping the seat with the grey microfiber towel, an arrow showing the clean stripe left behind',
    caption:
      'The first visible result. The arrow follows the clean stripe the towel leaves, so the cleaner earns its place before the conditioner appears.',
  },
  {
    ...slide('05-step-condition'),
    slot: '05 — STEP 3, CONDITION',
    alt: 'Step 3, apply conditioner — conditioner poured onto the grey applicator pad over a clean seat',
    caption:
      'Switches bottles on a now-clean seat. Showing the pour and how much to use answers the “how much do I put on?” question before it is asked.',
  },
  {
    ...slide('06-step-massage'),
    slot: '06 — STEP 4, MASSAGE',
    alt: 'Step 4, massage it in — a hand working the applicator pad over the seat in circles, with a circular arrow',
    caption:
      'Finishes the routine. The circular arrow shows the motion, and the faint cream trail shows the conditioner going into the leather.',
  },
  {
    ...slide('07-before-after'),
    slot: '07 — BEFORE / AFTER',
    alt: 'Before and after — one beige car seat split down the middle, stained and dull on the left, clean on the right',
    caption:
      'Ends on the proof. One seat, split down the middle, with no copy beyond “before” and “after” — the slide a buyer screenshots and sends to someone.',
  },
]

export const introParagraphs = [
  'A cleaner and a conditioner sold together is an easy product to undersell. Shown side by side on white, they look like two bottles. The buyer has to work out on their own that one comes before the other, and why they need both.',
  'The carousel tells it as a routine instead. Seven vertical slides, all on the same beige car seat: the promise, what is in the box, four steps, then the result. Each step has its own slide, a numbered pill and a tracker, so the buyer always knows where they are.',
  'The car seat is the thread. Every slide uses the same seat in the same light, from dirty to clean, so the before-and-after at the end reads as the result of the four steps the buyer just swiped through, not a stock comparison.',
]
