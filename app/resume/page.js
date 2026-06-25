import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Resume & CV | Muhammad Kashif — AI-Powered Amazon Brand Designer',
  description: 'Professional resume and CV of Muhammad Kashif — AI-Powered Amazon Brand Designer & Creative Specialist with 8+ years of experience. Based in Kuching, Sarawak, Malaysia.',
}

const skills = [
  { label: 'AI Concept Art',        pct: 91 },
  { label: 'Brand Identity',        pct: 80 },
  { label: 'High-End Retouching',   pct: 79 },
  { label: 'Competitor Analysis',   pct: 59 },
  { label: 'Infographic Design',    pct: 58 },
  { label: 'A+ Content Strategy',   pct: 51 },
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

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="PROFESSIONAL RESUME & CV"
          title={<>RESUME<br />& CV</>}
          subtitle="AI-Powered Amazon Brand Designer · Creative Specialist · Kuching, Sarawak, Malaysia"
        />

        {/* Download bar */}
        <div className="border-b" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-mono text-xs" style={{ color: 'var(--b-muted)' }}>
              Download a copy of my professional documents in PDF format.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/Muhammad-Kashif-Resume.pdf"
                download
                className="font-bebas text-sm tracking-widest px-6 py-3 border-2 flex items-center gap-2 transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--b-text)', color: 'var(--b-bg)', borderColor: 'var(--b-text)', boxShadow: '3px 3px 0px var(--b-border)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                DOWNLOAD RESUME
              </a>
              <a
                href="/Muhammad-Kashif-CV.pdf"
                download
                className="font-bebas text-sm tracking-widest px-6 py-3 border-2 flex items-center gap-2 transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: 'transparent', color: 'var(--b-text)', borderColor: 'var(--b-border)', boxShadow: '3px 3px 0px var(--b-border)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>

        {/* Resume content */}
        <div style={{ backgroundColor: 'var(--b-bg)' }}>
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-[1fr_300px] gap-16">

              {/* ── LEFT COLUMN ── */}
              <div>

                {/* Header */}
                <div className="mb-12 pb-10 border-b" style={{ borderColor: 'var(--b-border)' }}>
                  <h1 className="font-bebas tracking-[0.08em] leading-none mb-2" style={{ fontSize: '2.8rem', color: 'var(--b-text)' }}>
                    MUHAMMAD KASHIF
                  </h1>
                  <p className="font-mono text-xs tracking-widest mb-5" style={{ color: 'var(--b-muted)' }}>
                    AI-POWERED AMAZON BRAND DESIGNER · CREATIVE SPECIALIST
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2">
                    {[
                      { icon: '✉', val: 'info@muhammadkashif.net' },
                      { icon: '📱', val: '+60 179152084' },
                      { icon: '🌐', val: 'muhammadkashif.net' },
                      { icon: '📍', val: 'Kuching, Sarawak, Malaysia' },
                    ].map((c) => (
                      <p key={c.val} className="font-mono text-xs flex items-center gap-2" style={{ color: 'var(--b-muted)' }}>
                        <span>{c.icon}</span>{c.val}
                      </p>
                    ))}
                  </div>

                  {/* Digital Nomad badge */}
                  <div className="mt-5 inline-flex items-center gap-2 border px-4 py-2" style={{ borderColor: 'var(--b-border)' }}>
                    <span className="font-mono text-[9px] tracking-[0.25em]" style={{ color: 'var(--b-text)' }}>
                      ✈ MALAYSIAN APPROVED DIGITAL NOMAD
                    </span>
                  </div>
                </div>

                {/* Career Objective */}
                <div className="mb-12">
                  <h2 className="font-bebas text-2xl tracking-widest mb-5" style={{ color: 'var(--b-text)' }}>CAREER OBJECTIVE</h2>
                  <p className="font-mono text-sm leading-[1.9]" style={{ color: 'var(--b-muted)' }}>
                    Results-driven Amazon Brand Designer with <strong style={{ color: 'var(--b-text)' }}>8+ years of experience</strong> helping
                    U.S. private-label sellers dominate their categories through premium visual storytelling
                    and data-led design strategy. I combine deep e-commerce expertise with advanced
                    generative AI tools to deliver <strong style={{ color: 'var(--b-text)' }}>8K-resolution assets</strong>, scroll-stopping Main
                    Images, and high-converting A+ Content — transforming everyday products into trusted,
                    market-leading brands.
                  </p>
                </div>

                {/* Work Experience */}
                <div className="mb-12">
                  <h2 className="font-bebas text-2xl tracking-widest mb-8" style={{ color: 'var(--b-text)' }}>WORK EXPERIENCE</h2>
                  <div className="flex flex-col gap-10">
                    {experience.map((exp, i) => (
                      <div key={i} className="border-l-2 pl-6" style={{ borderColor: 'var(--b-border)' }}>
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <h3 className="font-bebas text-xl tracking-wide" style={{ color: 'var(--b-text)' }}>{exp.role}</h3>
                          <span className="font-mono text-[10px] px-3 py-1 border" style={{ borderColor: 'var(--b-border)', color: 'var(--b-muted)' }}>{exp.period}</span>
                        </div>
                        <p className="font-mono text-xs tracking-widest mb-4" style={{ color: 'var(--b-muted)' }}>{exp.company}</p>

                        <ul className="flex flex-col gap-2 mb-5">
                          {exp.points.map((p, j) => (
                            <li key={j} className="font-mono text-xs leading-relaxed flex gap-2" style={{ color: 'var(--b-muted)' }}>
                              <span className="shrink-0 mt-0.5" style={{ color: 'var(--b-text)' }}>▸</span> {p}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((t) => (
                            <span key={t} className="font-mono text-[9px] tracking-widest px-2 py-1 border" style={{ borderColor: 'var(--b-border)', color: 'var(--b-text)', backgroundColor: 'var(--b-subtle)' }}>{t}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h2 className="font-bebas text-2xl tracking-widest mb-8" style={{ color: 'var(--b-text)' }}>TOOLS & SOFTWARE</h2>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {toolGroups.map((cat) => (
                      <div key={cat.category}>
                        <h3 className="font-mono text-[9px] tracking-widest mb-3" style={{ color: 'var(--b-muted)' }}>{cat.category.toUpperCase()}</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.items.map((item) => (
                            <span key={item} className="font-mono text-[9px] tracking-widest px-2 py-1 border" style={{ borderColor: 'var(--b-border)', color: 'var(--b-text)' }}>{item}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── RIGHT SIDEBAR ── */}
              <aside className="flex flex-col gap-6">

                {/* Stats */}
                <div className="border-2 p-6" style={{ borderColor: 'var(--b-border)' }}>
                  <h3 className="font-bebas text-lg tracking-widest mb-5" style={{ color: 'var(--b-text)' }}>KEY NUMBERS</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {stats.map((s) => (
                      <div key={s.label} className="border p-4 text-center" style={{ borderColor: 'var(--b-border)' }}>
                        <div className="font-bebas text-3xl leading-none" style={{ color: 'var(--b-text)' }}>{s.num}</div>
                        <div className="font-mono text-[8px] tracking-widest mt-1 leading-relaxed" style={{ color: 'var(--b-muted)' }}>{s.label.toUpperCase()}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="border-2 p-6" style={{ borderColor: 'var(--b-border)' }}>
                  <h3 className="font-bebas text-lg tracking-widest mb-6" style={{ color: 'var(--b-text)' }}>CORE SKILLS</h3>
                  <div className="flex flex-col gap-4">
                    {skills.map((s) => (
                      <div key={s.label}>
                        <div className="flex justify-between mb-1.5">
                          <span className="font-mono text-[9px] tracking-widest" style={{ color: 'var(--b-text)' }}>{s.label.toUpperCase()}</span>
                          <span className="font-bebas text-sm" style={{ color: 'var(--b-muted)' }}>{s.pct}%</span>
                        </div>
                        <div className="h-1 relative" style={{ backgroundColor: 'var(--b-subtle)', border: '1px solid var(--b-border)' }}>
                          <div className="h-full" style={{ width: `${s.pct}%`, backgroundColor: 'var(--b-text)' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="border-2 p-6" style={{ borderColor: 'var(--b-border)' }}>
                  <h3 className="font-bebas text-lg tracking-widest mb-5" style={{ color: 'var(--b-text)' }}>LANGUAGES</h3>
                  <div className="flex flex-col gap-4">
                    {languages.map((l) => (
                      <div key={l.lang} className="flex items-center justify-between">
                        <span className="font-mono text-xs" style={{ color: 'var(--b-text)' }}>{l.lang}</span>
                        <div className="flex gap-1">
                          {Array(5).fill(0).map((_, i) => (
                            <div key={i} className="w-2.5 h-2.5 border" style={{ borderColor: 'var(--b-border)', backgroundColor: i < l.level ? 'var(--b-text)' : 'transparent' }} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div className="border-2 p-6" style={{ borderColor: 'var(--b-border)' }}>
                  <h3 className="font-bebas text-lg tracking-widest mb-5" style={{ color: 'var(--b-text)' }}>FIND ME ON</h3>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: 'Upwork',    detail: 'Top Rated Freelancer',  href: 'https://www.upwork.com/freelancers/~016edc19243e405472' },
                      { name: 'LinkedIn',  detail: 'Connect with me',       href: 'https://www.linkedin.com/in/muhammad-kashif-228554243' },
                      { name: 'Fiverr',    detail: 'Verified Seller',       href: '#' },
                      { name: 'Instagram', detail: '@muhamadkashif928',     href: 'https://instagram.com/muhamadkashif928' },
                    ].map((p) => (
                      <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                        className="flex justify-between items-center py-2 border-b transition-colors"
                        style={{ borderColor: 'var(--b-border)', color: 'var(--b-text)' }}
                      >
                        <span className="font-mono text-xs tracking-widest">{p.name}</span>
                        <span className="font-mono text-[9px]" style={{ color: 'var(--b-muted)' }}>{p.detail} ↗</span>
                      </a>
                    ))}
                  </div>
                </div>

              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
