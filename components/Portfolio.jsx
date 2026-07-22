import { portfolioProjects } from '@/data/portfolio'

// Always shows the 3 newest projects (first 3 in portfolioProjects array)
const projects = portfolioProjects.slice(0, 3)

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>▶ CASE STUDIES</p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-5">
          <h2 className="font-bebas leading-none" style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--b-text)' }}>
            HIGH-CONVERTING
            <br />
            VISUALS THAT
            <br />
            <span style={{ WebkitTextStroke: '2px var(--b-text)', color: 'transparent' }}>DRIVE SALES</span>
          </h2>
          <a
            href="/my-portfolio/"
            className="font-mono text-sm tracking-widest pb-1 transition-all self-start"
            style={{ color: 'var(--b-text)', borderBottom: '1px solid var(--b-text)' }}
          >
            VIEW ALL WORK →
          </a>
        </div>

        {/* 3 latest projects — 1 col mobile, 3 col desktop */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((p) => (
            <a
              key={p.slug}
              href={`/blackdsn-portfolio/${p.slug}/`}
              className="group border-2 overflow-hidden block card-lift"
              style={{ borderColor: 'var(--b-border)', backgroundColor: 'var(--b-bg)', boxShadow: '4px 4px 0px var(--b-border)' }}
            >
              <div className="h-48 sm:h-56 overflow-hidden relative" style={{ backgroundColor: 'var(--b-subtle)' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  width="1200"
                  height="900"
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  style={{ filter: 'grayscale(20%)' }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(8,8,8,0.75)' }}
                >
                  <span className="font-bebas text-sm tracking-widest border px-4 py-2" style={{ color: 'var(--a-text)', borderColor: 'var(--a-border)' }}>
                    VIEW CASE STUDY →
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-xs px-2 py-1 border" style={{ backgroundColor: 'var(--b-bg)', color: 'var(--b-text)', borderColor: 'var(--b-border)' }}>
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 border-t" style={{ borderColor: 'var(--b-border)' }}>
                <h3 className="font-bebas text-lg sm:text-xl tracking-widest mb-2" style={{ color: 'var(--b-text)' }}>{p.title}</h3>
                <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--b-muted)' }}>{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
