import LxShell from '@/components/lx/LxShell'
import JsonLd from '@/components/JsonLd'
import { Icon, Pill } from '@/components/lx/Icons'
import { Reviews, PageHero, SecHead } from '@/components/lx/Sections'
import { createMetadata, getBreadcrumbJsonLd, absoluteUrl, siteConfig } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'About Muhammad Kashif — Amazon Brand Designer & A+ Content Specialist',
  description: 'Muhammad Kashif is an Amazon Brand Designer based in Kuching, Malaysia with 8+ years of experience and 200+ projects completed. He specializes in A+ Content, product infographics, brand identity, packaging, and AI-powered product photography for private label sellers worldwide.',
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
  jobTitle: 'Amazon Brand Designer & A+ Content Specialist',
  description: 'Muhammad Kashif is an Amazon Brand Designer with 8+ years of experience helping private label sellers worldwide create high-converting listing visuals, A+ Content, brand identity, packaging, and AI-powered product photography.',
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
    'Private Label Brand Strategy', 'Adobe Photoshop', 'Adobe Illustrator',
    'Blender 3D Rendering', 'Midjourney AI', 'Amazon Seller Central', '3D Product Visualization',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: '8+ Years Amazon Brand Design Experience' },
    { '@type': 'EducationalOccupationalCredential', name: '200+ Completed Client Projects' },
  ],
  worksFor: { '@type': 'Organization', name: 'Designer Trends INC' },
}

const VALUES = [
  ['chat', 'Direct collaboration', 'Talk to the designer doing the work, from your first brief to final delivery.'],
  ['logo', 'Product-first thinking', 'The visuals start with what your product does and what your customer needs to understand.'],
  ['check', 'Craft with a purpose', 'Retouching, composition and AI-assisted imagery serve the story, with careful attention to product accuracy.'],
]

const EXPERIENCE = [
  {
    years: '2018 — Now',
    org: 'Designer Trends Inc. — U.S. brand portfolio',
    role: 'Creative Designer Specialist & Brand Strategist',
    points: [
      'Direct the full visual strategy for 7+ leather and shoe care brands on Amazon US, including Angelus, Tarrago, Eagle Shoe Care, Leather Hero, Lincoln, Silver and Fiamme.',
      'Main image overhauls built on click-through psychology, with measurable CTR uplift across 200+ product SKUs.',
      'A+ Content and Enhanced Brand Content that reduce customer objections and lift average order value.',
      '8K lifestyle composites with AI-powered retouching, replacing costly studio shoots without losing quality.',
      'Complete e-commerce websites for heritage brands, keeping their premium positioning.',
    ],
    tags: ['A+ Content', 'Main Image Strategy', '8K Retouching', 'Brand Identity', 'E-commerce'],
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
  ['Core skills', ['AI concept art', 'Brand identity', 'High-end retouching', 'Competitor analysis', 'Infographic design', 'A+ strategy']],
  ['Platforms & languages', ['Amazon Seller Central', 'Upwork', 'Fiverr', 'English', 'Urdu', 'Punjabi']],
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
          lead="I'm Kashif — an Amazon brand designer with 8+ years of experience helping products across categories look their best. From everyday essentials to premium launches, I bring hands-on design craft and AI-assisted retouching to every image."
          aside={
            <figure className="portrait">
              <img src="/images/kashif-portrait-ivory-v1.webp" alt="Muhammad Kashif in a denim jacket, cream cap and sunglasses" decoding="async" width="800" height="1000" />
              <figcaption className="about__status">Available for new projects</figcaption>
            </figure>
          }
        >
          <div className="chips rv" data-gate="" style={{ '--ry': '12px', '--rd': '700ms', marginTop: 0 }}>
            <span>Listing design</span><span>A+ Content</span><span>Brand stores</span><span>Product retouching</span>
          </div>
        </PageHero>

        <section className="section">
          <div className="shell section__in">
            <div className="rv" style={{ '--ry': '10px', marginBottom: '1.5rem' }}><span className="eyebrow">Designer &amp; creative partner</span></div>
            <h2 className="statement words">I help U.S. private-label sellers lead their categories with premium visual storytelling and data-led design <span className="muted">— pairing deep e-commerce experience with generative AI to deliver scroll-stopping main images and high-converting A+ Content.</span></h2>
            <ul className="vals">
              {VALUES.map(([icon, title, text], i) => (
                <li key={title} className="rv" style={{ '--rd': `${i * 120}ms` }}>
                  <div className="val"><span className="val__ic"><Icon name={icon} /></span><h3>{title}</h3><p>{text}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="shell section__in section__in--tight">
            <SecHead eyebrow="Experience" title="Eight years, one focus.">
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
                  <li key={label} className="rv stat" style={{ '--rd': `${i * 90}ms` }}><div className="stat__num"><span data-count={n}>0</span>+</div><p className="stat__lbl">{label}</p></li>
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

