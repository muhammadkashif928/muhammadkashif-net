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
    slug: 'leather-hero-purse-care-kit',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/leather-hero-purse-care-kit/',
    tag: 'AMAZON LISTING SET',
    title: 'Leather Hero — Purse Care Kit',
    desc: 'Leather Hero’s second product — a purse cleaner & conditioner kit. An eight-image set focused on main-image craft and a leather bag before-and-after that proves the kit restores and extends leather life.',
    img: '/case-studies/leather-hero-purse/04-before-after.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Aug 9, 2026',
    software: ['Photoshop', 'Illustrator'],
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
    software: ['Photoshop', 'Illustrator'],
  },
  {
    slug: 'yara-lattafa-amazon-main-image',
    tag: 'AMAZON MAIN IMAGE',
    title: 'Yara by Lattafa — Amazon Main Image',
    desc: 'Raw casual shots of the Yara Lattafa EDP redesigned into a scroll-stopping Amazon main image — no studio, no complex setup. AI + Photoshop workflow covering shape clarity, lighting, and CTR optimisation.',
    img: '/1776985426943.jpeg',
    imgWidths: [320, 480, 640, 960],
    date: 'Jun 27, 2026',
    software: ['AI', 'Photoshop'],
  },
  {
    slug: 'jason-markk-lifestyle-composite',
    tag: 'LIFESTYLE COMPOSITE',
    title: 'Jason Markk Repel — Lifestyle Composite',
    desc: 'Jason Markk Shoe & Sneaker Protector Repel Spray transformed with AI prop generation + Photoshop compositing. A HOKA sneaker added as contextual prop — context creates desire.',
    img: '/1768694867521.jpeg',
    date: 'Jun 27, 2026',
    software: ['AI Generation', 'Photoshop'],
  },
]
