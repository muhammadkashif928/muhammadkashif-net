const services = [
  { num: '01', title: 'HIGH-END RETOUCHING',     desc: 'Transform raw product photos into polished, commercial-grade assets. Using Photoshop and AI, I fix lighting, enhance textures, and create stunning 8K lifestyle composites.' },
  { num: '02', title: 'COMPETITOR ANALYSIS',     desc: 'I audit your top 10 competitors to identify visual weaknesses, then design listing images scientifically engineered to grab more attention and market share.' },
  { num: '03', title: 'MAIN IMAGE STRATEGY',     desc: 'The most important image on Amazon. I design Hero Shots that strictly follow guidelines while using psychological triggers to skyrocket your Click-Through Rate.' },
  { num: '04', title: 'PREMIUM A+ CONTENT',      desc: 'Design immersive Enhanced Brand Content that tells your brand story, handles customer objections visually, and cross-sells your products to increase AOV.' },
  { num: '05', title: 'BRAND IDENTITY & PKG',    desc: 'Vector-based packaging, box art, and logos that make your private label feel like an established, trustworthy global brand from day one.' },
  { num: '06', title: 'GENERATIVE AI DESIGN',    desc: 'Use advanced generative AI to create unlimited lifestyle concepts, props, and backgrounds that would be impossible or too expensive to shoot traditionally.' },
]

export default function Services() {
  return (
    <section id="services" className="border-t" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>▶ WHAT I DELIVER</p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
          <h2 className="font-bebas leading-none" style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--a-text)' }}>
            HIGH-CONVERTING
            <br />
            VISUAL STRATEGIES
          </h2>
          <p className="font-mono text-sm max-w-xs" style={{ color: 'var(--a-muted)' }}>
            Every deliverable is designed to increase your Amazon click-through rate, conversion rate, and brand authority.
          </p>
        </div>

        {/* Grid — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l" style={{ borderColor: 'var(--a-border)' }}>
          {services.map((s) => (
            <div
              key={s.num}
              className="group p-6 sm:p-8 border-b border-r relative overflow-hidden cursor-default transition-all duration-200"
              style={{ borderColor: 'var(--a-border)' }}
            >
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ backgroundColor: 'var(--accent)', opacity: 0.06 }} />
              <span className="absolute top-4 right-5 font-bebas select-none" style={{ fontSize: '4rem', color: 'var(--a-subtle)', lineHeight: 1 }}>{s.num}</span>

              <div className="relative z-10">
                <div className="w-6 h-px mb-5 sm:mb-6 transition-all duration-200 group-hover:w-12" style={{ backgroundColor: 'var(--accent)' }} />
                <h3 className="font-bebas text-lg sm:text-xl tracking-widest mb-3 sm:mb-4 leading-tight" style={{ color: 'var(--a-text)' }}>{s.title}</h3>
                <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--a-muted)' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-10 sm:mt-16 p-6 sm:p-8 border-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6" style={{ borderColor: 'var(--a-border)' }}>
          <div>
            <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide" style={{ color: 'var(--a-text)' }}>READY TO UPGRADE YOUR AMAZON PRESENCE?</h3>
            <p className="font-mono text-sm mt-1" style={{ color: 'var(--a-muted)' }}>No complex forms. Just one email away.</p>
          </div>
          <a
            href="/contact-me/"
            className="btn-brutal font-bebas text-base sm:text-lg tracking-widest px-8 sm:px-10 py-3 border-2 whitespace-nowrap"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-inv)', borderColor: 'var(--accent)', boxShadow: '4px 4px 0px var(--a-muted)' }}
          >
            START A PROJECT
          </a>
        </div>
      </div>
    </section>
  )
}
