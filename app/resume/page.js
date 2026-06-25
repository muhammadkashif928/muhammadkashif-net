import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Resume | Muhammad Kashif — Amazon Brand Designer',
  description: 'Professional resume of Muhammad Kashif — Amazon Brand Designer, AI Visual Specialist, and A+ Content Strategist with 8+ years of experience.',
}

const skills = [
  { label: 'Competitor Analysis',   pct: 95 },
  { label: 'High-End Retouching',   pct: 85 },
  { label: 'A+ Content Strategy',   pct: 90 },
  { label: 'Brand Identity',        pct: 91 },
  { label: 'AI Concept Art',        pct: 90 },
  { label: 'Infographic Design',    pct: 70 },
]

const experience = [
  {
    role: 'Creative Designer Specialist',
    company: 'Designer Trends INC',
    period: '2016 – Present',
    location: 'Remote',
    points: [
      'Directed visual brand strategy for 7+ major U.S. Amazon brands including Angelus, Tarrago, Eagle Shoe Care, and Leather Hero',
      'Produced 200+ optimized product listings with measurable improvements in click-through and conversion rates',
      'Developed full A+ Content modules — brand stories, comparison charts, and lifestyle infographic systems',
      'Led competitor analysis workflows identifying visual gaps that informed winning listing strategies',
    ],
  },
  {
    role: 'Freelance Amazon Brand Designer',
    company: 'Upwork & Fiverr',
    period: '2019 – Present',
    location: 'Remote',
    points: [
      'Maintained Top Rated status on Upwork with consistent 5-star ratings from U.S. clients',
      'Delivered 100+ product photography retouching projects — main images, lifestyle shots, and hero composites',
      'Integrated generative AI tools (Midjourney, Stable Diffusion, Adobe Firefly) into production workflow',
      'Consulted on listing launch strategy for new private label sellers entering competitive Amazon categories',
    ],
  },
]

const tools = [
  { category: 'Design', items: ['Adobe Photoshop', 'Adobe Illustrator', 'Blender 3D', 'Adobe InDesign'] },
  { category: 'AI Tools', items: ['Midjourney', 'Stable Diffusion', 'Adobe Firefly', 'ChatGPT / Claude'] },
  { category: 'Amazon', items: ['Seller Central', 'Helium 10', 'Jungle Scout', 'A+ Content Manager'] },
  { category: 'Other', items: ['Canva Pro', 'Figma', 'Microsoft Office', 'Google Workspace'] },
]

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="PROFESSIONAL RESUME"
          title={<>RESUME &<br />CV</>}
          subtitle="8+ years of proven results in Amazon brand design, A+ content strategy, and AI-powered visual production."
        />

        {/* Download bar */}
        <div className="border-b" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-mono text-xs" style={{ color: 'var(--b-muted)' }}>
              Download a copy of my full CV in PDF format.
            </p>
            <a
              href="/Muhammad-Kashif-CV.pdf"
              download
              className="font-bebas text-base tracking-widest px-8 py-3 border-2 flex items-center gap-3 transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--b-text)', color: 'var(--b-bg)', borderColor: 'var(--b-text)', boxShadow: '4px 4px 0px var(--b-border)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              DOWNLOAD CV (PDF)
            </a>
          </div>
        </div>

        {/* Resume body */}
        <div style={{ backgroundColor: 'var(--b-bg)' }}>
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-[1fr_320px] gap-16">

              {/* Left: Experience */}
              <div>
                {/* Header */}
                <div className="mb-12 pb-10 border-b" style={{ borderColor: 'var(--b-border)' }}>
                  <h1 className="font-bebas tracking-[0.08em] mb-1" style={{ fontSize: '2.5rem', color: 'var(--b-text)' }}>MUHAMMAD KASHIF</h1>
                  <p className="font-mono text-sm tracking-widest mb-4" style={{ color: 'var(--b-muted)' }}>AMAZON BRAND DESIGNER · AI VISUAL SPECIALIST · A+ CONTENT STRATEGIST</p>
                  <div className="flex flex-wrap gap-5">
                    {[
                      { label: 'info@muhammadkashif.net' },
                      { label: 'Kuching, Sarawak, Malaysia' },
                      { label: '+92 342 4625 844' },
                    ].map((c) => (
                      <span key={c.label} className="font-mono text-xs" style={{ color: 'var(--b-muted)' }}>{c.label}</span>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <section className="mb-12">
                  <h2 className="font-bebas text-2xl tracking-widest mb-8" style={{ color: 'var(--b-text)' }}>WORK EXPERIENCE</h2>
                  <div className="flex flex-col gap-10">
                    {experience.map((exp, i) => (
                      <div key={i} className="border-l-2 pl-6" style={{ borderColor: 'var(--b-border)' }}>
                        <div className="flex flex-wrap justify-between gap-2 mb-1">
                          <h3 className="font-bebas text-xl tracking-wide" style={{ color: 'var(--b-text)' }}>{exp.role}</h3>
                          <span className="font-mono text-xs" style={{ color: 'var(--b-muted)' }}>{exp.period}</span>
                        </div>
                        <p className="font-mono text-xs tracking-widest mb-4" style={{ color: 'var(--b-muted)' }}>{exp.company} · {exp.location}</p>
                        <ul className="flex flex-col gap-2">
                          {exp.points.map((p, j) => (
                            <li key={j} className="font-mono text-xs leading-relaxed flex gap-2" style={{ color: 'var(--b-muted)' }}>
                              <span style={{ color: 'var(--b-text)' }}>→</span> {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Tools */}
                <section>
                  <h2 className="font-bebas text-2xl tracking-widest mb-8" style={{ color: 'var(--b-text)' }}>TOOLS & SOFTWARE</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {tools.map((cat) => (
                      <div key={cat.category}>
                        <h3 className="font-mono text-[10px] tracking-widest mb-3" style={{ color: 'var(--b-muted)' }}>{cat.category.toUpperCase()}</h3>
                        <div className="flex flex-wrap gap-2">
                          {cat.items.map((item) => (
                            <span key={item} className="font-mono text-[10px] tracking-widest px-3 py-1.5 border" style={{ borderColor: 'var(--b-border)', color: 'var(--b-text)' }}>{item}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right sidebar: Skills + Stats */}
              <aside className="flex flex-col gap-8">
                {/* Skills */}
                <div className="border-2 p-6" style={{ borderColor: 'var(--b-border)' }}>
                  <h3 className="font-bebas text-xl tracking-widest mb-6" style={{ color: 'var(--b-text)' }}>EXPERTISE</h3>
                  <div className="flex flex-col gap-5">
                    {skills.map((s) => (
                      <div key={s.label}>
                        <div className="flex justify-between mb-2">
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

                {/* Stats */}
                <div className="border-2 p-6" style={{ borderColor: 'var(--b-border)' }}>
                  <h3 className="font-bebas text-xl tracking-widest mb-6" style={{ color: 'var(--b-text)' }}>BY THE NUMBERS</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { num: '8+', label: 'Years Experience' },
                      { num: '200+', label: 'Projects Delivered' },
                      { num: '7+', label: 'Major Brands' },
                      { num: '5.0', label: 'Upwork Rating' },
                    ].map((s) => (
                      <div key={s.label} className="border p-4 text-center" style={{ borderColor: 'var(--b-border)' }}>
                        <div className="font-bebas text-3xl" style={{ color: 'var(--b-text)' }}>{s.num}</div>
                        <div className="font-mono text-[9px] tracking-widest mt-1" style={{ color: 'var(--b-muted)' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div className="border-2 p-6" style={{ borderColor: 'var(--b-border)' }}>
                  <h3 className="font-bebas text-xl tracking-widest mb-4" style={{ color: 'var(--b-text)' }}>PLATFORMS</h3>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: 'Upwork', detail: 'Top Rated Freelancer', href: 'https://www.upwork.com/freelancers/~016edc19243e405472' },
                      { name: 'Fiverr', detail: 'Verified Seller', href: '#' },
                      { name: 'LinkedIn', detail: 'Professional Profile', href: 'https://www.linkedin.com/in/muhammad-kashif-228554243' },
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
