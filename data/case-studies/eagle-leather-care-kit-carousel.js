// ═══════════════════════════════════════════════════════════════════
// ── RESULTS ── Edit here when Eagle Shoe Care sends performance data.
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
  client: 'Eagle Shoe Care',
  product: 'Complete 5-Piece Leather Care Kit — Saddle Soap, Mink Oil, Horsehair Brush, Applicator Pad & Microfiber Cloth',
  category: 'Shoe Care — Leather Boot Care Kit',
  format: '9:16 vertical, 6 slides',
  scope: 'Lifestyle Carousel — 6 Slides',
  published: 'Nov 25, 2026',
  publishedISO: '2026-11-25',
  slug: 'eagle-leather-care-kit-carousel',
  path: '/portfolio/eagle-leather-care-kit-carousel/',
}

const DIR = '/case-studies/eagle-leather-care-kit-carousel'
const slide = (name) => ({
  src: `${DIR}/${name}.jpg`,
  thumb: `${DIR}/${name}-720.webp`,
  width: 1080,
  height: 1920,
})

export const shareImage = {
  src: `${DIR}/share.jpg`,
  width: 1200,
  height: 800,
  alt: 'Two black western boots on a wooden bench — a grey, dusty boot labelled before beside a deep black, conditioned boot labelled after',
}

// The carousel, in swipe order. `slot` = the slide's job.
export const slides = [
  {
    ...slide('01-cover'),
    slot: '01 — THE HOOK',
    alt: 'Revive your boots, complete 5-piece leather care kit — a faded grey western boot labelled before beside a deep black boot labelled after, with the Eagle Leather Care Kit box, mink oil tin, brush and microfiber cloth in front',
    caption:
      'Opens on the gap between the two boots. The faded one and the restored one stand side by side, with the kit box and its pieces underneath so the cause of the difference is in the same frame.',
  },
  {
    ...slide('02-step-brush'),
    slot: '02 — STEP 1, BRUSH',
    alt: 'Step 1, brush off dirt — a hand sweeping dust off the toe of a dusty black western boot with the horsehair brush',
    caption:
      'Starts dry, on the boot at its worst. The headline moves to the left so the tall boot shaft can fill the frame, and the four-dot tracker sets up the length of the routine.',
  },
  {
    ...slide('03-step-lather'),
    slot: '03 — STEP 2, LATHER',
    alt: 'Step 2, lather it up — the brush working saddle soap into a thick white lather on the toe of the boot, with the open Eagle saddle soap tin on the cloth behind',
    caption:
      'The first product. The open saddle soap tin sits behind the boot while the lather covers the toe, so the buyer links the tin to the cleaning step.',
  },
  {
    ...slide('04-step-wipe'),
    slot: '04 — STEP 3, WIPE',
    alt: 'Step 3, wipe clean — a hand wiping lather off the boot with the grey microfiber cloth, showing black leather underneath',
    caption:
      'The turn. The shaft is already black again and the cloth is clearing the last of the foam from the toe, so the change from grey to black happens in front of the buyer.',
  },
  {
    ...slide('05-step-mink-oil'),
    slot: '05 — STEP 4, MINK OIL',
    alt: 'Step 4, apply mink oil — a hand rubbing mink oil into the side of the boot with the round applicator pad, an arrow showing the motion, and the open Eagle Mink Oil tin in front',
    caption:
      'The second product, and the reason this is a kit and not a soap. The arrow shows the motion and the open tin shows how little is needed.',
  },
  {
    ...slide('06-result'),
    slot: '06 — THE RESULT',
    alt: 'Back to life, cleaned, conditioned, protected — a pair of deep black western boots on the bench with the Eagle Leather Care Kit box in front',
    caption:
      'Ends on the pair with the box. Three words sum up what the four steps did, and the box is the last thing the buyer sees before they decide.',
  },
]

export const introParagraphs = [
  'A five-piece kit is hard to sell in one picture. Laid out flat it is a box, two tins, a brush, a pad and a cloth, and the buyer has to guess which piece does what and in what order.',
  'The carousel gives every piece a job. Six vertical slides on one western boot: the before-and-after with the kit, four numbered steps — brush, lather, wipe, mink oil — and the finished pair. Saddle soap cleans in the middle of the routine and mink oil protects at the end, so both tins are shown doing different work.',
  'The boot does the convincing. It starts grey and dusty, turns black as the lather is wiped away, and ends with a soft shine after the mink oil. The same boot, bench and light run through all six slides, so the last frame reads as the result of the steps before it.',
]
