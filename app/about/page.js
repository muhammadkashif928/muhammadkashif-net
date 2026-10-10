import LxShell from '@/components/lx/LxShell'
import JsonLd from '@/components/JsonLd'
import { Icon, Pill } from '@/components/lx/Icons'
import { Reviews, PageHero, SecHead } from '@/components/lx/Sections'
import { createMetadata, getBreadcrumbJsonLd, absoluteUrl, siteConfig } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'About Muhammad Kashif — E-commerce Creative Designer for Amazon & Shopify',
  description: 'Muhammad Kashif is an e-commerce creative designer based in Kuching, Malaysia, with 8+ years of experience and 200+ projects completed: Amazon listing images, A+ Content and Brand Stores, Shopify store design, and brand and digital design for sellers worldwide.',
  path: '/about/',
  keywords: [
    'about Muhammad Kashif',
    'Amazon designer Malaysia',
    'Amazon brand designer Kuching',
    'who is Muhammad Kashif',
    'Muhammad Kashif Amazon designer portfolio',
    'best Amazon brand designer Malaysia',
    'hire Amazon designer',
  ],
})

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.url}/#person`,
  name: 'Muhammad Kashif',
  givenName: 'Muhammad',
  familyName: 'Kashif',
  url: siteConfig.url,
  image: absoluteUrl(siteConfig.defaultImage),
  jobTitle: 'E-commerce Creative Designer',
  description: 'Muhammad Kashif is an e-commerce creative designer with 8+ years of experience: Amazon listing images, A+ Content and Brand Stores, Shopify store design, and brand and digital design for sellers worldwide.',
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kuching',
    addressRegion: 'Sarawak',
    addressCountry: 'MY',
  },
  sameAs: siteConfig.sameAs,
  knowsAbout: [
    'Amazon A+ Content Design', 'Amazon Listing Optimization', 'Product Infographics',
    'Brand Identity Design', 'Packaging Design', 'AI Product Lifestyle Images',
    'Product Image Optimization', 'E-commerce Product Photography',
    'Private Label Brand Strategy', 'Shopify Store Design', 'WordPress Websites', 'Video Editing', 'Ad Design', 'Adobe Photoshop', 'Adobe Illustrator',
    'Blender 3D Rendering', 'Midjourney AI', 'Amazon Seller Central', '3D Product Visualization',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Master’s degree in Chemistry', recognizedBy: { '@type': 'CollegeOrUniversity', name: 'University of Agriculture, Faisalabad' } },
    { '@type': 'EducationalOccupationalCredential', name: '8+ Years Amazon Brand Design Experience' },
    { '@type': 'EducationalOccupationalCredential', name: '200+ Completed Client Projects' },
  ],
  worksFor: { '@type': 'Organization', name: 'Designer Trends Inc' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Agriculture, Faisalabad' },
}

const VALUES = [
  ['chat', 'Research first', 'Competitor listings, customer reviews and the questions buyers keep asking come before any design decision.'],
  ['logo', 'One job per image', 'Each image or page section gets one job, in the order a buyer thinks — on Amazon, on a storefront, in a campaign.'],
  ['check', 'AI for production, not decisions', 'AI handles cleanup, backgrounds, variations and early concepts. Design decisions, brand accuracy and final quality stay with me.'],
]

// The working method, in the words of the LinkedIn profile
const APPROACH = [
  ['Who I work with', 'p', 'Private-label and Amazon brands, DTC brands selling through their own stores, and the e-commerce and Amazon agencies that support them — selling in the US, UK and Canada.'],
  ['Problems I understand', 'ul', [
    'A listing has seconds to answer the buyer’s real questions: does it work, will it suit my use, what’s included, is it worth the price',
    'Claims a shopper can’t verify get skipped; visible proof gets considered',
    'A brand looks smaller than it is when its listing, A+ Content, storefront and packaging don’t match',
    'Marketplace creative has rules, and good design works inside them',
  ]],
  ['What I design', 'ul', [
    'Amazon listing images: main images, product infographics and full image sets',
    'A+ Content, Brand Story and Amazon Brand Stores',
    'Shopify and e-commerce store design, and WordPress websites',
    'Product visualization, image editing and high-end retouching',
    'Brand, packaging and digital marketing creative',
    'Product video and content edits',
  ]],
  ['Open to', 'p', 'Contract and retainer work with e-commerce brands and agencies, and selected projects where creative quality affects how a product sells.'],
]

const EXPERIENCE = [
  {
    years: 'Oct 2022 — Now',
    org: 'Designer Trends Inc. — full-time, remote (United States)',
    role: 'Creative Designer / Digital Operations Specialist',
    points: [
      'Permanent, full-time remote role. Joined in October 2022 as Remote Administrative and Creative Design Specialist; now Creative Designer / Digital Operations Specialist.',
      'Direct the visual strategy for 7+ leather and shoe care brands on Amazon US, including Angelus, Tarrago, Eagle Shoe Care, Leather Hero, Lincoln, Silver and Fiamme.',
      'Main image overhauls built on click-through psychology, with measurable CTR uplift across 200+ product SKUs.',
      'A+ Content and Enhanced Brand Content that reduce customer objections and lift average order value.',
      '8K lifestyle composites with AI-powered retouching, replacing costly studio shoots without losing quality.',
      'Complete e-commerce websites for heritage brands, keeping their premium positioning.',
    ],
    tags: ['Competitive Analysis', 'Packaging Design', 'A+ Content', 'Main Image Strategy', 'E-commerce'],
  },
  {
    years: 'Jan 2022 — Jan 2025',
    org: 'Orbit Click Inc. — contract',
    role: 'Account Manager',
    points: [
      'Managed e-commerce account operations for a US-focused private-label business under a performance-based contract arrangement.',
    ],
    tags: ['Account Management', 'Private Label', 'E-commerce'],
  },
  {
    years: 'Apr 2024 — Jul 2024',
    org: 'ONE LUXE USA — part-time, remote (Florida, US)',
    role: 'Senior Sales Account Manager',
    points: [
      'Part-time remote sales account role in e-commerce, for a business based in Florida, US.',
    ],
    tags: ['E-commerce', 'Sales Accounts'],
  },
  {
    years: 'Feb 2021 — Jan 2022',
    org: 'Supreme Commerce',
    role: 'Amazon Account Manager & Graphic Designer',
    points: [
      'Combined Amazon account management with graphic design for e-commerce clients.',
    ],
    tags: ['Amazon', 'Graphic Design', 'Account Management'],
  },
  {
    years: '2016 — 2018',
    org: 'Freelance — Upwork & Fiverr',
    role: 'Amazon Brand & Graphic Designer',
    points: [
      'End-to-end Amazon listing design for 50+ private-label clients across health, beauty, home goods and lifestyle.',
      'Top Rated status on Upwork, with consistent 5-star reviews for speed, quality and clear communication.',
      'Product photo retouching, infographic systems, logo design and packaging artwork for brand launches.',
    ],
    tags: ['Upwork', 'Fiverr', 'Product Photography', 'Packaging Design'],
  },
]

const TOOLS = [
  ['Design', ['Photoshop', 'Illustrator', 'Figma', 'Lightroom', 'After Effects']],
  ['AI tools', ['Midjourney', 'DALL·E', 'Stable Diffusion', 'ComfyUI', 'ChatGPT', 'Claude']],
  ['Core skills', ['E-commerce design', 'Amazon A+ Content', 'Amazon Brand Store', 'Shopify', 'Brand design', 'Packaging design', 'Ad design', 'Web design', 'Video editing', 'High-end retouching', 'Competitor analysis']],
  ['Platforms & languages', ['Amazon Seller Central', 'Shopify', 'WordPress', 'Upwork', 'Fiverr', 'English', 'Urdu', 'Punjabi']],
]

export default function AboutPage() {
  return (
    <LxShell>
      <JsonLd data={[personJsonLd, getBreadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }])]} />
      <main id="main-content">
        <PageHero
          watermark="KASHIF"
          crumb={[{ label: 'About' }]}
          lines={['Your products.', 'My kind of detail.']}
          lead="I'm Kashif — an e-commerce creative designer with 8+ years of experience. Amazon listing images, A+ Content and Brand Stores come first; I also design Shopify stores and the brand and digital work around them, with hands-on craft and AI-assisted retouching in every image."
          aside={
            <figure className="portrait">
              <img src="/images/kashif-portrait-ivory-v1.webp" alt="Muhammad Kashif in a denim jacket, cream cap and sunglasses" decoding="async" width="800" height="1000" />
              <figcaption className="about__status">Available for new projects</figcaption>
            </figure>
          }
        >
          <div className="chips rv" data-gate="" style={{ '--ry': '12px', '--rd': '700ms', marginTop: 0 }}>
            <span>Amazon listing images</span><span>A+ Content &amp; Brand Stores</span><span>Shopify store design</span><span>Brand &amp; digital design</span>
          </div>
        </PageHero>

        <section className="section">
          <div className="shell section__in">
            <div className="rv" style={{ '--ry': '10px', marginBottom: '1.5rem' }}><span className="eyebrow">Designer &amp; creative partner</span></div>
            <h2 className="statement words">I design how e-commerce brands and their products are presented online <span className="muted">— Amazon listings, A+ Content and Brand Stores, Shopify storefronts, and the brand and marketing creative around them.</span></h2>
            <p className="statement__sub rv">Most of my work starts with one question: what does a buyer need to see before they trust this product? The answer decides the order of listing images, the layout of a product page and what a brand asset needs to say.</p>
            <ul className="vals">
              {VALUES.map(([icon, title, text], i) => (
                <li key={title} className="rv" style={{ '--rd': `${i * 120}ms` }}>
                  <div className="val"><span className="val__ic"><Icon name={icon} /></span><h3>{title}</h3><p>{text}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="approach">
          <div className="shell section__in section__in--tight">
            <SecHead eyebrow="How I work" title="Amazon is where my work is deepest." lead="Especially leather care, shoe care and footwear — and the same thinking carries to storefronts, brand assets and campaigns." />
            <ul className="approach">
              {APPROACH.map(([title, kind, body], i) => (
                <li key={title} className="rv" style={{ '--rd': `${(i % 2) * 100}ms` }}>
                  <div className="tool">
                    <h3>{title}</h3>
                    {kind === 'ul' ? <ul className="bul">{body.map(b => <li key={b}>{b}</li>)}</ul> : <p>{body}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <div className="edu rv">
              <p className="eyebrow">Education</p>
              <h3>Master’s degree in Chemistry</h3>
              <p className="edu__org">University of Agriculture, Faisalabad</p>
              <p>It helps when a product’s value depends on how its formula works, and the claim has to stay accurate.</p>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="shell section__in section__in--tight">
            <SecHead eyebrow="Experience" title="Eight years in e-commerce.">
              <div className="dl-row rv" style={{ '--ry': '12px', '--rd': '150ms', marginTop: 0 }}>
                <Pill variant="outline" arrow="download" href="/Muhammad-Kashif-Resume.pdf" external>Resume (PDF)</Pill>
                <Pill variant="outline" arrow="download" href="/Muhammad-Kashif-CV.pdf" external>CV (PDF)</Pill>
              </div>
            </SecHead>
            <ol className="xp">
              {EXPERIENCE.map(x => (
                <li key={x.years} className="rv">
                  <div className="xp__when"><span className="xp__years">{x.years}</span><span className="xp__org">{x.org}</span></div>
                  <div>
                    <h3 className="xp__role">{x.role}</h3>
                    <ul className="bul">{x.points.map(pt => <li key={pt}>{pt}</li>)}</ul>
                    <div className="chips">{x.tags.map(t => <span key={t}>{t}</span>)}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="stats" aria-label="Key numbers">
          <div className="shell stats__in">
            <div className="stats__panel rv">
              <span className="eyebrow eyebrow--light">Key numbers</span>
              <h2 className="stats__h2 lines" data-delay="120">The work behind the portfolio.</h2>
              <ul className="stats__grid">
                {[[8, 'Years of experience'], [7, 'Major brands managed'], [200, 'Products optimised'], [50, 'Freelance clients']].map(([n, label], i) => (
                  <li key={label} className="rv stat" style={{ '--rd': `${i * 90}ms` }}><div className="stat__num" aria-hidden="true"><span data-count={n}>{n}</span>+</div><p className="stat__lbl"><span className="sr-only">{n}+ </span>{label}</p></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <SecHead split={false} eyebrow="Tools & skills" title="Classic craft, AI speed." />
            <ul className="toolset">
              {TOOLS.map(([title, items], i) => (
                <li key={title} className="rv" style={{ '--rd': `${i * 90}ms` }}>
                  <div className="tool"><h3>{title}</h3><div className="chips">{items.map(t => <span key={t}>{t}</span>)}</div></div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="kind-words">
          <div className="shell section__in section__in--tight">
            <SecHead eyebrow="Social proof" title="Good work. Lasting relationships." lead="5.0 average rating from 50+ happy clients on Upwork and Fiverr." />
            <Reviews />
          </div>
        </section>
      </main>
    </LxShell>
  )
}

