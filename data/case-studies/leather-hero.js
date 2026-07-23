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
//     { label: 'Sessions to Sale', value: '0.0x', timeframe: 'vs. previous set' },
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
  product: 'Furniture Salve, 5oz — 3-Piece Kit',
  category: 'Leather & Wood Furniture Care',
  marketplace: 'Amazon US',
  scope: '10-Image Listing Set',
  published: 'Jul 24, 2026',
  publishedISO: '2026-07-24',
  slug: 'leather-hero-furniture-salve',
  path: '/blackdsn-portfolio/leather-hero-furniture-salve/',
}

const BEFORE_DIR = '/case-studies/leather-hero/before'
const AFTER_DIR = '/case-studies/leather-hero/after'

// The 4 images the listing originally ran.
export const beforeImages = [
  {
    src: `${BEFORE_DIR}/01-main-old.jpg`,
    width: 3000,
    height: 3000,
    alt: 'Original Leather Hero Furniture Salve main image — tin, applicator brush and buffing pad on a white background',
    label: 'Original 1',
  },
  {
    src: `${BEFORE_DIR}/02-restores-old.jpg`,
    width: 3000,
    height: 3000,
    alt: 'Original second image — "Restores Leather & Wood Back to Life" headline over a dark brown gradient',
    label: 'Original 2',
  },
  {
    src: `${BEFORE_DIR}/03-kit-old.jpg`,
    width: 3000,
    height: 3000,
    alt: 'Original third image — "Everything You Need in One Kit" with the brush, salve and buffing pad labelled',
    label: 'Original 3',
  },
  {
    src: `${BEFORE_DIR}/04-repair-old.jpg`,
    width: 3000,
    height: 3000,
    alt: 'Original fourth image — "Repair · Restore · Protect" with a five-point benefit list on a brown gradient',
    label: 'Original 4',
  },
]

// The redesigned 10-slot set. `caption` explains the strategic job of the slot.
export const afterImages = [
  {
    src: `${AFTER_DIR}/01-main.jpg`,
    width: 3000,
    height: 3000,
    slot: 'SLOT 1 — MAIN',
    alt: 'Redesigned main image — Leather Hero Furniture Salve tin, wooden applicator brush and mesh buffing pad on a pure white background',
    caption:
      'Wins the click and nothing else. Pure white per Amazon policy, with the three kit pieces angled so the tin face, the brush and the pad all still read at thumbnail size. The buyer’s only job here is to recognise what it is and register that there’s more than one thing in the box.',
  },
  {
    src: `${AFTER_DIR}/02-formula.jpg`,
    width: 3000,
    height: 3000,
    slot: 'SLOT 2 — WHAT IT DOES',
    alt: 'Redesigned second image — "3-in-1 Formula: Polish, Condition, Restore" with six benefit icons arranged around the open salve tin on a wooden table',
    caption:
      'Six benefits arranged around the open tin, so you can see the actual texture of the product while you read what it claims to do. The “3-in-1” headline carries the value argument this category is usually too shy to make: one purchase, three jobs.',
  },
  {
    src: `${AFTER_DIR}/03-penetration.jpg`,
    width: 2429,
    height: 2441,
    slot: 'SLOT 3 — DOES IT REALLY WORK?',
    alt: 'Redesigned third image — salve being applied to a brown leather sofa cushion with a magnified cut-away inset showing the product travelling down into the leather grain',
    caption:
      'The strongest asset in the set. Instead of repeating “deep conditioning,” the cut-away shows the salve moving down into the leather grain while the brush is still on the cushion. Turns an unverifiable adjective into a mechanism the buyer can inspect.',
    feature: true,
  },
  {
    src: `${AFTER_DIR}/04-kit.jpg`,
    width: 3000,
    height: 3000,
    slot: 'SLOT 4 — WHAT’S IN THE BOX',
    alt: 'Redesigned fourth image — "Complete 3-Piece Kit" listing the 5oz salve, premium applicator brush and soft buffing pad',
    caption:
      'Kills the “do I need to buy a brush too?” hesitation before it forms. Naming the three pieces as text beside the image means the answer survives even when the image is viewed small.',
  },
  {
    src: `${AFTER_DIR}/05-wood-table.jpg`,
    width: 3000,
    height: 3000,
    slot: 'SLOT 5 — PROOF, PART ONE',
    alt: 'Redesigned fifth image — split before and after of a scratched wooden table top restored to a deep even finish',
    caption:
      'The image the original set never had. A scratched table top split down the middle — same light, same angle, finish the only variable. This is the frame where a claim becomes evidence.',
  },
  {
    src: `${AFTER_DIR}/06-wood-rail.jpg`,
    width: 3000,
    height: 3000,
    slot: 'SLOT 6 — PROOF, PART TWO',
    alt: 'Redesigned sixth image — split before and after of a dried-out wooden chair rail restored to a rich grain',
    caption:
      'A second before-and-after, different object and different damage: dried-out wear rather than scratches. One proof frame can be luck. Two on different surfaces reads as a product that works.',
  },
  {
    src: `${AFTER_DIR}/07-multisurface.jpg`,
    width: 3000,
    height: 3000,
    slot: 'SLOT 7 — WHERE ELSE CAN I USE IT?',
    alt: 'Redesigned seventh image — four-panel multi-surface grid showing a leather sofa, dining table, leather handbag and wooden cabinetry with the product at the centre',
    caption:
      'Four rooms in one frame — leather sofa, dining table, handbag, cabinetry. Every extra surface raises what the same 5oz tin is worth, and one of those four panels is likely to be the exact thing the buyer was worried about.',
  },
  {
    src: `${AFTER_DIR}/08-ingredients.jpg`,
    width: 3000,
    height: 3000,
    slot: 'SLOT 8 — IS IT SAFE ON MY FURNITURE?',
    alt: 'Redesigned eighth image — "Natural Oil & Wax Blend" showing honeycomb, olive oil and olives beside the open tin, with no-silicones, no-toxins and no-sticky-residue badges',
    caption:
      'Beeswax and oil shown as ingredients rather than described as them, plus the three exclusions buyers actually search for: no silicones, no toxins, no sticky residue. Answers “what will this do to my leather?” head-on.',
  },
  {
    src: `${AFTER_DIR}/09-longlasting.jpg`,
    width: 3000,
    height: 3000,
    slot: 'SLOT 9 — THE ASPIRATION',
    alt: 'Redesigned ninth image — a restored brown Chesterfield leather sofa in a dark panelled room under a "Long-Lasting" headline',
    caption:
      'No callouts, no icons — a restored Chesterfield in a room the buyer would like to own. After eight slots of argument, this one exists purely to let them picture the outcome in their own space.',
  },
  {
    src: `${AFTER_DIR}/10-howto.jpg`,
    width: 3000,
    height: 3000,
    slot: 'SLOT 10 — HOW HARD IS THIS?',
    alt: 'Redesigned tenth image — "Pro Results in 3 Simple Steps" showing apply with brush, let salve absorb, and buff with pad',
    caption:
      'Apply, absorb, buff. Three panels, three verbs, real hands. Effort is the last objection standing by this point, and showing the whole job as three steps removes it.',
  },
]

export const changes = [
  {
    n: '01',
    title: 'SHOW THE RESULT, DON’T CLAIM IT',
    body: 'Added true before-and-after frames to the set. A scratched table top and a worn rail, framed identically on both sides of the divider, so the finish is the only thing that changes between them. The buyer stops reading a promise and starts judging a result — which is the decision they were trying to make anyway.',
  },
  {
    n: '02',
    title: 'PUT THE PRODUCT IN THE BUYER’S HOME',
    body: 'The flat brown gradients are gone. The tin now sits on a real dining table, beside a Chesterfield sofa, next to a leather handbag and kitchen cabinetry. Same product, but it’s furniture care happening in a house instead of a jar floating in a void — and every background is different enough that the thumbnails stop looking like one image.',
  },
  {
    n: '03',
    title: 'MAKE THE INVISIBLE VISIBLE',
    body: '“Deep conditioning” is a phrase every product in this category uses and every buyer skims. A cut-away magnifier shows the salve running down into the leather’s grain instead of sitting on top of it. The claim becomes something you can look at and check.',
  },
]

export const problemParagraphs = [
  'Leather Hero sells a restoration product. The only question in a buyer’s head is whether it will fix the sofa they’re looking at right now, and the listing never answered it. Four images, all of them claim, none of them evidence. In a category whose entire job is visible change, not one image showed a before and an after.',
  'The second problem was visible from the search results page. All four images sat on the same dark brown gradient, so at thumbnail size they read as one image repeated four times — swiping through them revealed nothing new. Two of the four covered almost the same benefit list, spending a slot on a repeat instead of an objection. And with only four images live, slots that cost nothing to fill were sitting empty.',
  'Nothing showed the product in a home. No sofa, no dining table, no cabinet — nothing that let a buyer look at the picture and see their own furniture in it. A shopper who can’t picture the product in their room doesn’t add it to cart. They keep scrolling.',
]

export const detailParagraphs = [
  'Every leather conditioner on Amazon says “deep conditioning.” It’s on the tin, it’s in the bullets, it’s in the A+ content. Which means it has stopped being information and become noise — the buyer’s eye slides straight past it.',
  'The claim isn’t the problem. The problem is that it describes something happening where nobody can see it. You cannot verify “deep” by looking at a jar of cream.',
  'So I drew it. A magnified cut-away, set inside a real photograph of the salve being brushed onto a leather cushion, showing the product travelling down between the fibres rather than pooling on the surface. The wider shot keeps it honest — this is the product being used, not a diagram in a vacuum — and the inset does the explaining.',
  'It changes what the slot is for. Instead of asking a buyer to trust an adjective, it hands them a mechanism and lets them decide for themselves. That’s the line between an image that decorates a listing and an image that answers an objection — and answering objections is the only reason a listing image exists.',
]
