import LxShell from '@/components/lx/LxShell'
import { Icon, Pill } from '@/components/lx/Icons'
import { PageHero } from '@/components/lx/Sections'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Resume & CV | Muhammad Kashif — Amazon Designer for Leather & Footwear Brands',
  description: 'Professional resume and CV of Muhammad Kashif, Amazon brand designer working with brands across product categories, with 8+ years of experience. Based in Kuching, Sarawak, Malaysia.',
  path: '/resume/',
  keywords: ['Muhammad Kashif resume', 'Amazon brand designer CV', 'AI-powered creative specialist'],
})

const skills = [
  { label: 'AI Concept Art' },
  { label: 'Brand Identity' },
  { label: 'High-End Retouching' },
  { label: 'Competitor Analysis' },
  { label: 'Infographic Design' },
  { label: 'A+ Content Strategy' },
]

const experience = [
  {
    role: 'Creative Designer Specialist | Brand Strategist',
    company: 'Designer Trends Inc. — U.S. Brand Portfolio',
    period: '2018 – Present',
    tags: ['A+ Content', 'Main Image Strategy', '8K Retouching', 'Brand Identity', 'E-commerce'],
    points: [
      'Directed full visual strategy for 7+ leather & shoe care brands incl. Angelus, Tarrago, Eagle Shoe Care, Leather Hero, Lincoln, Silver & Fiamme across Amazon US.',
      'Engineered Main Image overhauls using psychological CTR triggers, achieving measurable uplift in click-through rates across 200+ product SKUs.',
      'Designed immersive A+ Content & Enhanced Brand Content (EBC) that reduced customer objections and increased average order values.',
      'Produced 8K lifestyle composites using AI-powered retouching, eliminating expensive studio shoots while exceeding professional quality benchmarks.',
      'Built complete e-commerce websites for heritage brands, maintaining premium positioning in competitive U.S. marketplaces.',
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
  { category: 'Platform',  items: ['Amazon Seller Central', 'Upwork', 'Fiverr'] },
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
  { label: 'LinkedIn', note: 'Connect with me', href: 'https://www.linkedin.com/in/muhammad-kashif-228554243' },
  { label: 'Instagram', note: '@muhammadkashif928', href: 'https://instagram.com/muhammadkashif928' },
]

export default function ResumePage() {
  return (
    <LxShell>
      <main id="main-content">
        <PageHero
          watermark="RESUME"
          crumb={[{ label: 'Resume' }]}
          lines={['Resume & CV.', 'Eight years, one focus.']}
          lead="AI-powered Amazon brand designer and creative specialist — and a Malaysian approved digital nomad, working remotely with brands in the US, UK and Canada."
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
                  <p>AI-Powered Amazon Brand Designer · Creative Specialist</p>
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
                  <p className="cv__lead">Results-driven Amazon Brand Designer with 8+ years of experience helping U.S. private-label sellers dominate their categories through premium visual storytelling and data-led design strategy. I combine deep e-commerce expertise with advanced generative AI tools to deliver 8K-resolution assets, scroll-stopping main images and high-converting A+ Content — transforming everyday products into trusted, market-leading brands.</p>
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

