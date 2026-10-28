// Ordered NEWEST → OLDEST.
// Portfolio.jsx (homepage) automatically shows the first 3.
// my-portfolio/page.js shows all of them.
// To feature a new project on the homepage, add it to the TOP of this array.
// Entries with `imgWidths` have -{w}.webp and -960.jpg files derived from
// `img` (see P-1 audit fix); the homepage renders those as srcset. Generate
// the derivatives before adding imgWidths to a new entry.


// Case study URL for a project. Newer entries can set an explicit `path`;
// everything else falls back to the legacy /blackdsn-portfolio/ prefix.
export function projectHref(project) {
  return project.path ?? `/blackdsn-portfolio/${project.slug}/`
}

export const portfolioProjects = [
  {
    slug: 'leather-hero-restoration-kit',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/leather-hero-restoration-kit/',
    tag: 'AMAZON LISTING SET',
    title: 'Leather Hero — Restoration Kit',
    desc: 'Leather Hero’s fourth product — a six-piece clean, restore and protect kit for black leather. An eleven-image set built on bag and sofa before-and-afters and a three-step routine.',
    img: '/case-studies/leather-hero-restoration-kit/03-sofa-before-after.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Oct 29, 2026',
    software: ['Claude', 'ChatGPT', 'Gemini', 'Photoshop', 'Lightroom'],
  },
  {
    slug: 'disposable-foot-socks',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/disposable-foot-socks/',
    tag: 'AMAZON LISTING SET',
    title: 'Disposable Foot Socks',
    desc: 'A 144-count box of disposable try-on socks. A full ten-image listing set — three main-image candidates plus infographics for stretch, hygiene, breathability, uses, fit and value.',
    img: '/case-studies/disposable-foot-socks/01-main-dispense.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Oct 29, 2026',
    software: ['Claude', 'ChatGPT', 'Gemini', 'Photoshop', 'Lightroom'],
  },
  {
    slug: 'leather-hero-boot-stretcher',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/leather-hero-boot-stretcher/',
    tag: 'AMAZON LISTING SET',
    title: 'Leather Hero — Boot Stretcher',
    desc: 'Leather Hero’s third product, and the first tool rather than a formula — a heavy-duty calf & shaft boot stretcher. A nine-image infographic set built around mechanism, fit and a tooled cowboy boot shown before and after stretching.',
    img: '/case-studies/leather-hero-boot-stretcher/05-before-after.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Oct 29, 2026',
    software: ['Claude', 'ChatGPT', 'Gemini', 'Photoshop', 'Lightroom'],
  },
  {
    slug: 'leather-hero-purse-care-kit',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/leather-hero-purse-care-kit/',
    tag: 'AMAZON LISTING SET',
    title: 'Leather Hero — Purse Care Kit',
    desc: 'Leather Hero’s second product — a purse cleaner & conditioner kit. An eight-image set focused on main-image craft and a leather bag before-and-after that proves the kit restores and extends leather life.',
    img: '/case-studies/leather-hero-purse/04-before-after.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Aug 9, 2026',
    software: ['Claude', 'ChatGPT', 'Gemini', 'Photoshop', 'Lightroom'],
  },
  {
    slug: 'leather-hero-furniture-salve',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/leather-hero-furniture-salve/',
    tag: 'AMAZON LISTING SET',
    title: 'Leather Hero — Furniture Salve',
    desc: 'A leather & wood furniture care listing running four near-identical images, rebuilt into a full ten-image set led by before-and-after proof, real furniture settings, and a cross-section that shows the salve penetrating the leather.',
    img: '/case-studies/leather-hero/after/03-penetration.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Jul 24, 2026',
    software: ['Claude', 'ChatGPT', 'Gemini', 'Photoshop', 'Lightroom'],
  },
  {
    slug: 'yara-lattafa-amazon-main-image',
    tag: 'AMAZON MAIN IMAGE',
    title: 'Yara by Lattafa — Amazon Main Image',
    desc: 'Raw casual shots of the Yara Lattafa EDP redesigned into a scroll-stopping Amazon main image — no studio, no complex setup. AI + Photoshop workflow covering shape clarity, lighting, and CTR optimisation.',
    img: '/1776985426943.jpeg',
    imgWidths: [320, 480, 640, 960],
    date: 'Jun 27, 2026',
    software: ['Claude', 'ChatGPT', 'Gemini', 'Photoshop', 'Lightroom'],
  },
  {
    slug: 'jason-markk-lifestyle-composite',
    tag: 'LIFESTYLE COMPOSITE',
    title: 'Jason Markk Repel — Lifestyle Composite',
    desc: 'Jason Markk Shoe & Sneaker Protector Repel Spray transformed with AI prop generation + Photoshop compositing. A HOKA sneaker added as contextual prop — context creates desire.',
    img: '/1768694867521.jpeg',
    date: 'Jun 27, 2026',
    software: ['Claude', 'ChatGPT', 'Gemini', 'Photoshop', 'Lightroom'],
  },
]
