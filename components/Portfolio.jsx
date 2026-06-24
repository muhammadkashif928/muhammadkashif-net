const projects = [
  {
    id: 1, tag: 'A+ CONTENT',    title: 'PREMIUM A+ CONTENT',
    desc: 'Full Amazon listing optimization including side images, A+ content modules, and conversion-focused layout strategy.',
    img: '/images/portfolio-1.webp',
  },
  {
    id: 2, tag: 'RETOUCHING',    title: 'AI & CREATIVE RETOUCHING',
    desc: '3D product visualization using Blender & Photoshop. Photorealistic rendering with lifestyle integration.',
    img: '/images/portfolio-2.jpg',
  },
  {
    id: 3, tag: 'BRAND IDENTITY', title: 'BRAND IDENTITY & PACKAGING',
    desc: 'End-to-end packaging design and brand identity system for a private label brand entering a competitive market.',
    img: '/images/portfolio-3.webp',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-[10px] tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>▶ CASE STUDIES</p>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <h2 className="font-bebas leading-none" style={{ fontSize: 'clamp(3rem,7vw,5rem)', color: 'var(--b-text)' }}>
            HIGH-CONVERTING
            <br />
            VISUALS THAT
            <br />
            <span style={{ WebkitTextStroke: '2px var(--b-text)', color: 'transparent' }}>DRIVE SALES</span>
          </h2>
          <a
            href="/my-portfolio/"
            className="font-mono text-xs tracking-widest pb-1 transition-all self-start md:self-auto"
            style={{ color: 'var(--b-text)', borderBottom: '1px solid var(--b-text)' }}
          >
            VIEW ALL WORK →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.id}
              href={`/blackdsn-portfolio/${['premium-a-content','ai-creative-retouching','brand-identity-packaging'][p.id-1]}/`}
              className="group border-2 overflow-hidden block card-lift"
              style={{
                borderColor: 'var(--b-border)',
                backgroundColor: 'var(--b-bg)',
                boxShadow: '4px 4px 0px var(--b-border)',
              }}
            >
              {/* Image with overlay */}
              <div className="h-56 overflow-hidden relative" style={{ backgroundColor: 'var(--b-subtle)' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  style={{ filter: 'grayscale(20%)' }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(8,8,8,0.75)' }}
                >
                  <span className="font-bebas text-sm tracking-widest border px-4 py-2" style={{ color: 'var(--a-text)', borderColor: 'var(--a-border)' }}>
                    VIEW CASE STUDY →
                  </span>
                </div>
                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[9px] tracking-widest px-2 py-1 border" style={{ backgroundColor: 'var(--b-bg)', color: 'var(--b-text)', borderColor: 'var(--b-border)' }}>
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border-t" style={{ borderColor: 'var(--b-border)' }}>
                <h3 className="font-bebas text-xl tracking-widest mb-2" style={{ color: 'var(--b-text)' }}>{p.title}</h3>
                <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--b-muted)' }}>{p.desc}</p>
                <div className="mt-5 flex items-center gap-2 font-mono text-[10px] tracking-widest font-bold" style={{ color: 'var(--b-text)' }}>
                  VIEW CASE <span className="group-hover:translate-x-1.5 transition-transform inline-block">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
