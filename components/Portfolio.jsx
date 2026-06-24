const projects = [
  {
    id: 1,
    tag: 'A+ CONTENT',
    title: 'PREMIUM A+ CONTENT',
    desc: 'Full Amazon listing optimization including side images, A+ content modules, and conversion-focused layout strategy.',
    img: '/images/portfolio-1.webp',
  },
  {
    id: 2,
    tag: 'RETOUCHING',
    title: 'AI & CREATIVE RETOUCHING',
    desc: '3D product visualization created using Blender & Photoshop. Photorealistic rendering with lifestyle integration.',
    img: '/images/portfolio-2.jpg',
  },
  {
    id: 3,
    tag: 'BRAND IDENTITY',
    title: 'BRAND IDENTITY & PACKAGING',
    desc: 'End-to-end packaging design and brand identity system for a private label brand entering a competitive market.',
    img: '/images/portfolio-3.webp',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f5f5f0] py-24 border-t-2 border-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-[#0a0a0a]/40 mb-2">
          ▶ CASE STUDIES
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-bebas text-[clamp(3rem,7vw,5rem)] leading-none text-[#0a0a0a]">
            HIGH-CONVERTING
            <br />
            VISUALS THAT
            <br />
            <span className="text-[#e8e800] [-webkit-text-stroke:2px_#0a0a0a]">DRIVE SALES</span>
          </h2>
          <a
            href="https://muhammadkashif.net/my-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest text-[#0a0a0a] border-b-2 border-[#0a0a0a] pb-1 hover:border-[#e8e800] hover:text-[#0a0a0a]/70 transition-all self-start md:self-auto"
          >
            VIEW ALL WORK →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group border-2 border-[#0a0a0a] bg-white shadow-brutal hover:shadow-brutal-xl hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="h-52 bg-[#0a0a0a]/10 overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] tracking-widest bg-[#e8e800] text-[#0a0a0a] px-2 py-1 border border-[#0a0a0a]">
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border-t-2 border-[#0a0a0a]">
                <h3 className="font-bebas text-xl tracking-widest text-[#0a0a0a] mb-3">
                  {p.title}
                </h3>
                <p className="font-mono text-xs text-[#0a0a0a]/60 leading-relaxed">
                  {p.desc}
                </p>
                <div className="mt-5 flex items-center gap-2 font-mono text-xs tracking-widest text-[#0a0a0a] group-hover:text-[#0a0a0a] font-bold">
                  VIEW CASE
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
