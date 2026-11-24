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
  product: '3-Piece Saddle Soap Kit — Premium Saddle Soap, Horsehair Brush & Microfiber Cloth',
  category: 'Shoe Care — Saddle Soap',
  format: '9:16 vertical, 5 slides',
  scope: 'Lifestyle Carousel — 5 Slides',
  published: 'Nov 25, 2026',
  publishedISO: '2026-11-25',
  slug: 'eagle-saddle-soap-kit-carousel',
  path: '/portfolio/eagle-saddle-soap-kit-carousel/',
}

const DIR = '/case-studies/eagle-saddle-soap-kit-carousel'
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
  alt: 'Two tan leather work boots on a wooden bench — a dusty, scuffed boot labelled before beside a clean, conditioned boot labelled after',
}

// The carousel, in swipe order. `slot` = the slide's job.
export const slides = [
  {
    ...slide('01-cover'),
    slot: '01 — THE HOOK',
    alt: '3-Piece Saddle Soap Kit, deep clean your boots — a dirty boot labelled before beside a clean boot labelled after, with the Eagle Premium Saddle Soap tin, a horsehair brush and a grey microfiber cloth in front',
    caption:
      'Opens on the result. One dirty boot and one clean boot side by side, with all three pieces of the kit laid out underneath so the buyer sees what they get in the first frame.',
  },
  {
    ...slide('02-step-brush'),
    slot: '02 — STEP 1, BRUSH',
    alt: 'Step 1, brush off the dirt — a hand sweeping dust off the toe of a dirty boot with the horsehair brush',
    caption:
      'Starts dry. The dust coming off the toe shows why the brush is in the kit, and the three-dot tracker tells the buyer the routine is short.',
  },
  {
    ...slide('03-step-scrub'),
    slot: '03 — STEP 2, SCRUB',
    alt: 'Step 2, scrub with saddle soap — the brush working a white lather into the toe of the boot, with the open Eagle saddle soap tin on the cloth behind it',
    caption:
      'The product at work. The open tin sits in the frame while the lather builds on the leather, and one line of copy covers the detail people miss: use a damp brush.',
  },
  {
    ...slide('04-step-wipe'),
    slot: '04 — STEP 3, WIPE',
    alt: 'Step 3, wipe it clean — a hand wiping foam off the boot with the grey microfiber cloth, showing clean tan leather underneath',
    caption:
      'The first clean leather. The cloth takes the foam off and the colour of the boot changes under it, so the third piece of the kit earns its place too.',
  },
  {
    ...slide('05-result'),
    slot: '05 — THE RESULT',
    alt: 'The result, clean and conditioned — a pair of clean tan leather boots on the bench with the foamy brush lying in front',
    caption:
      'Ends on the pair. Both boots clean, the used brush still in the frame, and only three words of copy. This is the slide that gets saved.',
  },
]

export const introParagraphs = [
  'Saddle soap is an old product that many buyers have heard of and never used. A tin on a white background does not tell them what it does, how to use it, or why this one comes with a brush and a cloth.',
  'The carousel answers all three in five vertical slides: the before-and-after with the full kit, then one slide for each piece of the kit — brush, soap, cloth — and the finished pair. Three steps for a three-piece kit, so every item is shown doing its job.',
  'Everything happens on one boot, on one workbench, in the same light. The dirt, the lather and the clean leather are the same boot at each stage, so the result at the end reads as the outcome of the steps the buyer just swiped through.',
]
