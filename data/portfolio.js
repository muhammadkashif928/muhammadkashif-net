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
    slug: 'ventara-one-website',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/ventara-one-website/',
    tag: 'WEBSITE DESIGN + DEVELOPMENT',
    title: 'Ventara ONE — Online Store',
    desc: 'A custom-coded online store for groceries and everyday essentials shipped from Chicago — 13 departments, 165 products and Stripe checkout.',
    img: '/case-studies/ventara-one-website/desktop-home-hero.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Nov 24, 2026',
    software: ['HTML', 'CSS', 'JavaScript', 'Stripe', 'Vercel'],
  },
  {
    slug: 'designer-trends-inc-website',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/designer-trends-inc-website/',
    tag: 'WEBSITE DESIGN + DEVELOPMENT',
    title: 'Designer Trends Inc. — Company Website',
    desc: 'A fully custom company website for the group behind Eagle, Leather Hero, Fiammé and ToeArmor — brand portfolio, news and wholesale enquiries, built in Next.js.',
    img: '/case-studies/designer-trends-inc-website/desktop-home-hero.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Nov 24, 2026',
    software: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    slug: 'leather-hero-care-kit-carousel',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/leather-hero-care-kit-carousel/',
    tag: 'LIFESTYLE CAROUSEL',
    title: 'Leather Hero — Leather Care Kit Carousel',
    desc: 'A two-step cleaner and conditioner kit told as a seven-slide 9:16 carousel — one car seat, from dirty to clean, ending on a split-seat before-and-after.',
    img: '/case-studies/leather-hero-care-kit-carousel/share.jpg',
    date: 'Nov 23, 2026',
    software: ['Claude', 'ChatGPT', 'Gemini', 'Photoshop', 'Lightroom'],
  },
  {
    slug: 'eagle-shoe-care-shoe-cream',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/eagle-shoe-care-shoe-cream/',
    tag: 'AMAZON LISTING SET',
    title: 'Eagle Shoe Care — Premium Shoe Cream',
    desc: 'A black carnauba shoe cream sold with its own brush and cloth. A ten-image set and A+ Content for desktop and mobile, built on a scuffed-boot before-and-after.',
    img: '/case-studies/eagle-shoe-care-shoe-cream/03-before-after.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Nov 22, 2026',
    software: ['Claude', 'ChatGPT', 'Gemini', 'Photoshop', 'Lightroom'],
  },
  {
    slug: 'eagle-shoe-care-website',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/eagle-shoe-care-website/',
    tag: 'SHOPIFY STORE + B2B WHOLESALE',
    title: 'Eagle Shoe Care — Shopify Store',
    desc: 'A fully custom Shopify theme for Eagle Shoe Care — a retail store with a product finder and Buy on Amazon buttons, plus a built-in B2B wholesale application and sign-in.',
    img: '/case-studies/eagle-shoe-care-website/desktop-home-hero.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Nov 20, 2026',
    software: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    slug: 'margilla-website',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/margilla-website/',
    tag: 'WEBSITE DESIGN + DEVELOPMENT',
    title: 'Margilla — SaaS Website',
    desc: 'The website for Margilla, a profit analytics tool for TikTok Shop sellers — real dashboard screens, pricing up front, a live demo and a free profit calculator.',
    img: '/case-studies/margilla-website/desktop-home-hero.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Nov 9, 2026',
    software: ['HTML', 'CSS', 'JavaScript', 'React', 'TanStack', 'Tailwind CSS'],
  },
  {
    slug: 'pak-tele-net-website',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/pak-tele-net-website/',
    tag: 'WEBSITE DESIGN + DEVELOPMENT',
    title: 'Pak Tele Net — Fiber Internet Website',
    desc: 'A bilingual English and Urdu website for a fiber internet provider in Burewala — speed packages, a coverage map, WhatsApp-first contact and phone bill payment.',
    img: '/case-studies/pak-tele-net-website/desktop-home-hero.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Nov 9, 2026',
    software: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    slug: 'leather-hero-website',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/leather-hero-website/',
    tag: 'WEBSITE DESIGN + DEVELOPMENT',
    title: 'Leather Hero — Brand Website',
    desc: 'A fully custom 89-page Next.js website for Leather Hero — shop, product pages, categories, search, a 48-post blog and tracked Buy at Amazon buttons.',
    img: '/case-studies/leather-hero-website/desktop-home-hero.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Nov 9, 2026',
    software: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    slug: 'fiamme-brand-store',
    // Lives under /portfolio/ rather than the legacy /blackdsn-portfolio/ prefix.
    path: '/portfolio/fiamme-brand-store/',
    tag: 'AMAZON BRAND STORE',
    title: 'Fiamme — Brand Store',
    desc: 'A seven-module Amazon Brand Store for Fiamme Luxury Leather Care — a three-piece suede and nubuck kit sold brand first, then contents, routine and range.',
    img: '/case-studies/fiamme-brand-store/02-hero.jpg',
    imgWidths: [320, 480, 640, 960],
    date: 'Nov 1, 2026',
    software: ['Claude', 'ChatGPT', 'Gemini', 'Photoshop', 'Lightroom'],
  },
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
