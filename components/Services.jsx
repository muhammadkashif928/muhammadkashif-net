const services = [
  {
    num: '01',
    title: 'HIGH-END RETOUCHING',
    desc: 'Transform raw product photos into polished, commercial-grade assets. Using Photoshop and AI, I fix lighting, enhance textures, and create stunning lifestyle composites.',
  },
  {
    num: '02',
    title: 'COMPETITOR ANALYSIS',
    desc: 'I audit your top 10 competitors to identify visual weaknesses, then design listing images scientifically engineered to grab more attention and market share.',
  },
  {
    num: '03',
    title: 'MAIN IMAGE STRATEGY',
    desc: "The most important image on Amazon. I design Hero Shots that strictly follow guidelines while using psychological triggers to skyrocket your Click-Through Rate.",
  },
  {
    num: '04',
    title: 'PREMIUM A+ CONTENT',
    desc: 'Design immersive Enhanced Brand Content that tells your brand story, handles customer objections visually, and cross-sells your products to increase AOV.',
  },
  {
    num: '05',
    title: 'BRAND IDENTITY & PACKAGING',
    desc: 'Vector-based packaging, box art, and logos that make your private label feel like an established, trustworthy global brand from day one.',
  },
  {
    num: '06',
    title: 'GENERATIVE AI DESIGN',
    desc: 'Use advanced generative AI to create unlimited lifestyle concepts, props, and backgrounds that would be impossible or too expensive to shoot traditionally.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-24 border-t-2 border-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-[#e8e800] mb-2">
          ▶ WHAT I DELIVER
        </p>
        <h2 className="font-bebas text-[clamp(3rem,7vw,5rem)] leading-none text-[#f5f5f0] mb-16">
          HIGH-CONVERTING
          <br />
          VISUAL STRATEGIES
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`group border border-[#f5f5f0]/10 p-8 relative overflow-hidden cursor-default
                hover:bg-[#e8e800] hover:border-[#e8e800] transition-all duration-200
                ${i < 3 ? 'border-b border-[#f5f5f0]/10' : ''}
              `}
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-6 font-bebas text-7xl text-[#f5f5f0]/5 group-hover:text-[#0a0a0a]/10 select-none transition-colors">
                {s.num}
              </span>

              <div className="relative z-10">
                <div className="w-8 h-0.5 bg-[#e8e800] group-hover:bg-[#0a0a0a] mb-6 transition-colors" />
                <h3 className="font-bebas text-xl tracking-widest text-[#f5f5f0] group-hover:text-[#0a0a0a] mb-4 transition-colors leading-tight">
                  {s.title}
                </h3>
                <p className="font-mono text-xs text-[#f5f5f0]/60 group-hover:text-[#0a0a0a]/70 leading-relaxed transition-colors">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-16 border-2 border-[#f5f5f0] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bebas text-3xl text-[#f5f5f0] tracking-wide">
              READY TO UPGRADE YOUR AMAZON PRESENCE?
            </h3>
            <p className="font-mono text-xs text-[#f5f5f0]/50 mt-1">
              No complex forms. Just one email away.
            </p>
          </div>
          <a
            href="#contact"
            className="font-bebas text-lg tracking-widest px-10 py-3 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] shadow-[4px_4px_0px_#f5f5f0] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_#f5f5f0] transition-all whitespace-nowrap"
          >
            START A PROJECT
          </a>
        </div>
      </div>
    </section>
  )
}
