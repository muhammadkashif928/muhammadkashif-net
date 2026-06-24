const services = [
  { num: '01', title: 'HIGH-END RETOUCHING',     desc: 'Transform raw product photos into polished, commercial-grade assets. Using Photoshop and AI, I fix lighting, enhance textures, and create stunning lifestyle composites.' },
  { num: '02', title: 'COMPETITOR ANALYSIS',     desc: 'I audit your top 10 competitors to identify visual weaknesses, then design listing images scientifically engineered to grab more attention and market share.' },
  { num: '03', title: 'MAIN IMAGE STRATEGY',     desc: 'The most important image on Amazon. I design Hero Shots that strictly follow guidelines while using psychological triggers to skyrocket your Click-Through Rate.' },
  { num: '04', title: 'PREMIUM A+ CONTENT',      desc: 'Design immersive Enhanced Brand Content that tells your brand story, handles customer objections visually, and cross-sells your products to increase AOV.' },
  { num: '05', title: 'BRAND IDENTITY & PKG',    desc: 'Vector-based packaging, box art, and logos that make your private label feel like an established, trustworthy global brand from day one.' },
  { num: '06', title: 'GENERATIVE AI DESIGN',    desc: 'Use advanced generative AI to create unlimited lifestyle concepts, props, and backgrounds that would be impossible or too expensive to shoot traditionally.' },
]

export default function Services() {
  return (
    <section id="services" className="py-28 border-t" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-[10px] tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>▶ WHAT I DELIVER</p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="font-bebas leading-none" style={{ fontSize: 'clamp(3rem,7vw,5rem)', color: 'var(--a-text)' }}>
            HIGH-CONVERTING
            <br />
            VISUAL STRATEGIES
          </h2>
          <p className="font-mono text-xs max-w-xs" style={{ color: 'var(--a-muted)' }}>
            Every deliverable is designed to increase your Amazon click-through rate, conversion rate, and brand authority.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l" style={{ borderColor: 'var(--a-border)' }}>
          {services.map((s, i) => (
            <div
              key={s.num}
              className="group p-8 border-b border-r relative overflow-hidden cursor-default transition-all duration-200"
              style={{ borderColor: 'var(--a-border)' }}
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                style={{ backgroundColor: 'var(--accent)', opacity: 0.06 }}
              />

              {/* Number watermark */}
              <span
                className="absolute top-4 right-5 font-bebas select-none transition-opacity duration-200"
                style={{ fontSize: '5rem', color: 'var(--a-subtle)', lineHeight: 1 }}
              >
                {s.num}
              </span>

              <div className="relative z-10">
                <div className="w-6 h-px mb-6 transition-all duration-200 group-hover:w-12" style={{ backgroundColor: 'var(--accent)' }} />
                <h3
                  className="font-bebas text-xl tracking-widest mb-4 leading-tight transition-colors duration-200"
                  style={{ color: 'var(--a-text)' }}
                >
                  {s.title}
                </h3>
                <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--a-muted)' }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-16 p-8 border-2 flex flex-col md:flex-row items-center justify-between gap-6" style={{ borderColor: 'var(--a-border)' }}>
          <div>
            <h3 className="font-bebas text-3xl tracking-wide" style={{ color: 'var(--a-text)' }}>READY TO UPGRADE YOUR AMAZON PRESENCE?</h3>
            <p className="font-mono text-xs mt-1" style={{ color: 'var(--a-muted)' }}>No complex forms. Just one email away.</p>
          </div>
          <a
            href="#contact"
            className="font-bebas text-lg tracking-widest px-10 py-3 border-2 whitespace-nowrap transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--accent-inv)',
              borderColor: 'var(--accent)',
              boxShadow: '4px 4px 0px var(--a-muted)',
            }}
          >
            START A PROJECT
          </a>
        </div>
      </div>
    </section>
  )
}
