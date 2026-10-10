import LxShell from '@/components/lx/LxShell'
import { Icon, Pill } from '@/components/lx/Icons'
import { PageHero } from '@/components/lx/Sections'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Resume & CV | Muhammad Kashif — E-commerce Creative Designer',
  description: 'Resume and CV of Muhammad Kashif, e-commerce creative designer: Amazon listing images, A+ Content and Brand Stores, Shopify store design, and brand and digital design. 8+ years of experience, based in Kuching, Sarawak, Malaysia.',
  path: '/resume/',
  keywords: ['Muhammad Kashif resume', 'e-commerce creative designer CV', 'Amazon designer CV', 'Shopify designer CV'],
})

const skills = [
  { label: 'E-commerce Design' },
  { label: 'Amazon A+ Content' },
  { label: 'Amazon Brand Store' },
  { label: 'Shopify' },
  { label: 'Brand Design' },
  { label: 'Packaging Design' },
  { label: 'Competitive Analysis' },
  { label: 'High-End Retouching' },
  { label: 'Video Editing' },
]

const experience = [
  {
    role: 'Creative Designer / Digital Operations Specialist',
    company: 'Designer Trends Inc. — Full-time · Remote, United States',
    period: 'Oct 2022 – Present',
    tags: ['Competitive Analysis', 'Packaging Design', 'A+ Content', 'Main Image Strategy', 'E-commerce'],
    points: [
      'Permanent, full-time remote role. Joined in October 2022 as Remote Administrative and Creative Design Specialist; now Creative Designer / Digital Operations Specialist.',
      'Directed full visual strategy for 7+ leather & shoe care brands incl. Angelus, Tarrago, Eagle Shoe Care, Leather Hero, Lincoln, Silver & Fiamme across Amazon US.',
      'Engineered Main Image overhauls using psychological CTR triggers, achieving measurable uplift in click-through rates across 200+ product SKUs.',
      'Designed A+ Content & Enhanced Brand Content (EBC) that reduced customer objections and increased average order values.',
      'Produced 8K lifestyle composites using AI-powered retouching, and built complete e-commerce websites for heritage brands.',
    ],
  },
  {
    role: 'Account Manager',
    company: 'Orbit Click Inc. — Contract',
    period: 'Jan 2022 – Jan 2025',
    tags: ['Account Management', 'Private Label', 'E-commerce'],
    points: [
      'Managed e-commerce account operations for a US-focused private-label business under a performance-based contract arrangement.',
    ],
  },
  {
    role: 'Senior Sales Account Manager',
    company: 'ONE LUXE USA — Part-time · Remote, Florida, US',
    period: 'Apr 2024 – Jul 2024',
    tags: ['E-commerce', 'Sales Accounts'],
    points: [
      'Part-time remote sales account role in e-commerce.',
    ],
  },
  {
    role: 'Amazon Account Manager | Graphic Designer',
    company: 'Supreme Commerce',
    period: 'Feb 2021 – Jan 2022',
    tags: ['Amazon', 'Graphic Design', 'Account Management'],
    points: [
      'Combined Amazon account management with graphic design for e-commerce clients.',
    ],
  },
  {
    role: 'Amazon Brand & Graphic Designer',
    company: 'Freelance — Upwork & Fiverr',
    period: '2016 – 2018',
    tags: ['Upwork', 'Fiverr', 'Product Photography', 'Packaging Design'],
    points: [
      'Delivered end-to-end Amazon listing design for 50+ private-label clients across health, beauty, home goods & lifestyle categories.',
      'Maintained Top-Rated status on Upwork with consistent 5-star reviews for speed, quality, and strategic communication.',
      'Specialised in product photo retouching, infographic systems, logo design & packaging artwork for brand launches.',
    ],
  },
]

const toolGroups = [
  { category: 'Design',    items: ['Photoshop', 'Illustrator', 'Figma', 'Lightroom', 'After Effects'] },
  { category: 'AI Tools',  items: ['Midjourney', 'DALL·E', 'Stable Diffusion', 'ComfyUI', 'ChatGPT', 'Claude AI'] },
  { category: 'Platform',  items: ['Amazon Seller Central', 'Shopify', 'WordPress', 'Upwork', 'Fiverr'] },
]

const languages = [
  { lang: 'English', level: 4 },
  { lang: 'Urdu',    level: 5 },
  { lang: 'Punjabi', level: 5 },
]

const stats = [
  { num: '8+',   label: 'Years Experience' },
  { num: '7+',   label: 'Major Brands Managed' },
  { num: '200+', label: 'Products Optimised' },
  { num: '50+',  label: 'Freelance Clients' },
]

const contact = [
  { icon: 'mail', label: 'info@muhammadkashif.net', href: 'mailto:info@muhammadkashif.net' },
  { icon: 'chat', label: '+60 17-915 2084', href: 'https://wa.me/60179152084', external: true },
  { icon: 'globe', label: 'muhammadkashif.net', href: '/' },
  { icon: 'pin', label: 'Kuching, Sarawak, Malaysia' },
]

const profiles = [
  { label: 'Upwork', note: 'Top Rated freelancer', href: 'https://www.upwork.com/freelancers/~016edc19243e405472' },
  { label: 'LinkedIn', note: 'Connect with me', href: 'https://www.linkedin.com/in/muhammadkashif928/' },
  { label: 'Instagram', note: '@muhammadkashif928', href: 'https://instagram.com/muhammadkashif928' },
]

export default function ResumePage() {
  return (
    <LxShell>
      <main id="main-content">
        <PageHero
          watermark="RESUME"
          crumb={[{ label: 'Resume' }]}
          lines={['Resume & CV.', 'Eight years in e-commerce.']}
          lead="E-commerce creative designer — Amazon listing images, A+ Content and Brand Stores, Shopify store design, and brand and digital design. A Malaysian approved digital nomad, working remotely with brands in the US, UK and Canada."
          aside={
            <div className="dl-stack">
              <Pill variant="dark" arrow="download" href="/Muhammad-Kashif-Resume.pdf" external>Download resume</Pill>
              <Pill variant="outline" arrow="download" href="/Muhammad-Kashif-CV.pdf" external>Download CV</Pill>
            </div>
          }
        />

        <section className="section">
          <div className="shell section__in">
            <div className="cv">
              <div className="cv__main">
                <div className="cv__id rv">
                  <h2>Muhammad Kashif</h2>
                  <p>E-commerce Creative Designer · Amazon · Shopify · Brand &amp; Digital</p>
                  <ul className="cv__contact">
                    {contact.map(c => (
                      <li key={c.label}>
                        <Icon name={c.icon} />
                        {c.href ? <a href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}>{c.label}</a> : <span>{c.label}</span>}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cv__block rv">
                  <p className="eyebrow">Career objective</p>
                  <p className="cv__lead">E-commerce creative designer with 8+ years of experience designing how brands and their products are presented online: Amazon listing images, A+ Content and Brand Stores, Shopify storefronts, and the brand and marketing creative around them. Every project starts with research — competitor listings, customer reviews and the questions buyers keep asking — and AI handles production work while design decisions, brand accuracy and final quality stay with me. Open to contract and retainer work with e-commerce brands and agencies.</p>
                </div>

                <div className="cv__block">
                  <p className="eyebrow rv">Work experience</p>
                  <ol className="xp">
                    {experience.map(x => (
                      <li key={x.period} className="rv">
                        <div className="xp__when"><span className="xp__years">{x.period.replace('–', '—')}</span><span className="xp__org">{x.company}</span></div>
                        <div>
                          <h3 className="xp__role">{x.role.replace(' | ', ' & ')}</h3>
                          <ul className="bul">{x.points.map(pt => <li key={pt}>{pt}</li>)}</ul>
                          <div className="chips">{x.tags.map(t => <span key={t}>{t}</span>)}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="cv__block rv">
                  <p className="eyebrow">Tools &amp; software</p>
                  <div className="cv__tools">
                    {toolGroups.map(g => (
                      <div key={g.category}>
                        <h3>{g.category}</h3>
                        <div className="chips">{g.items.map(t => <span key={t}>{t}</span>)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="cv__side">
                <div className="aside-card aside-card--dark rv">
                  <p className="eyebrow eyebrow--light">Key numbers</p>
                  <ul className="cv__stats">
                    {stats.map(s => <li key={s.label}><strong>{s.num}</strong><span>{s.label}</span></li>)}
                  </ul>
                </div>
                <div className="aside-card rv">
                  <p className="eyebrow">Core skills</p>
                  <div className="chips">{skills.map(s => <span key={s.label}>{s.label}</span>)}</div>
                </div>
                <div className="aside-card rv">
                  <p className="eyebrow">Education</p>
                  <p className="cv__edu">Master’s degree in Chemistry<span>University of Agriculture, Faisalabad</span></p>
                </div>
                <div className="aside-card rv">
                  <p className="eyebrow">Languages</p>
                  <ul className="cv__langs">
                    {languages.map(l => (
                      <li key={l.lang}>
                        <span>{l.lang}</span>
                        <span className="cv__dots" aria-label={`${l.level} out of 5`}>
                          {[1, 2, 3, 4, 5].map(n => <i key={n} className={n <= l.level ? 'on' : undefined} />)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aside-card rv">
                  <p className="eyebrow">Find me on</p>
                  <ul className="cv__profiles">
                    {profiles.map(p => (
                      <li key={p.label}><a href={p.href} target="_blank" rel="noopener"><strong>{p.label}</strong><span>{p.note}</span><Icon name="arrow-ur" /></a></li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </LxShell>
  )
}

