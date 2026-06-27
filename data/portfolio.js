// Ordered NEWEST → OLDEST.
// Portfolio.jsx (homepage) automatically shows the first 3.
// my-portfolio/page.js shows all of them.
// To feature a new project on the homepage, add it to the TOP of this array.

const leatherImg = encodeURI('/portfolio/Leather Products/Product 3 (Leather Jacket)/Leather Jacket img 1.png')

export const portfolioProjects = [
  {
    slug: 'yara-lattafa-amazon-main-image',
    tag: 'AMAZON MAIN IMAGE',
    title: 'Yara by Lattafa — Amazon Main Image',
    desc: 'Raw casual shots of the Yara Lattafa EDP redesigned into a scroll-stopping Amazon main image — no studio, no complex setup. AI + Photoshop workflow covering shape clarity, lighting, and CTR optimisation.',
    img: '/1776985426943.jpeg',
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
  {
    slug: 'perfume-oil-bottle-retouching',
    tag: 'PRODUCT RETOUCHING',
    title: 'Perfume Oil Bottle Retouching',
    desc: 'UAE ornate brass & ruby perfume oil bottle transformed from casual uneven photo into a clean, marketplace-ready e-commerce image — white background, straightened perspective, enhanced metalwork detail.',
    img: '/1775606072952.jpeg',
    date: 'Jun 27, 2026',
    software: ['Photoshop'],
  },
  {
    slug: 'closetlux-image-restoration',
    tag: 'IMAGE RESTORATION',
    title: 'Closetlux Image Restoration',
    desc: 'Luxury product render elevated from flat grey background to premium white-background commercial visual — Closetlux Oud Faizi Extrait de Parfum, restored for Amazon, Shopify & high-end brand marketing.',
    img: '/1779399082204.jpeg',
    date: 'Jun 27, 2026',
    software: ['Photoshop'],
  },
  {
    slug: 'leather-items-optimized',
    tag: 'IMAGE OPTIMIZATION',
    title: 'Leather Items Optimized',
    desc: '12 leather products — jackets, bags & biker costumes — transformed from raw photos into 8K ultra-high-definition e-commerce images with full before & after showcase.',
    img: leatherImg,
    date: 'Jun 24, 2026',
    software: ['ChatGPT AI', 'Photoshop'],
  },
  {
    slug: 'brand-identity-packaging',
    tag: 'BRAND IDENTITY',
    title: 'Brand Identity & Packaging',
    desc: 'End-to-end packaging design and brand identity system for a private label brand entering a competitive market.',
    img: '/images/portfolio-3.webp',
    date: 'Jan 8, 2022',
    software: ['Illustrator', 'Photoshop'],
  },
  {
    slug: 'ai-creative-retouching',
    tag: 'RETOUCHING',
    title: 'AI & Creative Retouching',
    desc: '3D product visualization created using Blender & Photoshop. Photorealistic rendering with lifestyle integration.',
    img: '/images/portfolio-2.jpg',
    date: 'Jan 8, 2022',
    software: ['Blender', 'Photoshop'],
  },
  {
    slug: 'premium-a-content',
    tag: 'A+ CONTENT',
    title: 'Premium A+ Content',
    desc: 'Full Amazon listing optimization including side images, A+ content modules, and conversion-focused layout strategy.',
    img: '/images/portfolio-1.webp',
    date: 'Jan 8, 2022',
    software: ['Photoshop', 'Illustrator'],
  },
]
