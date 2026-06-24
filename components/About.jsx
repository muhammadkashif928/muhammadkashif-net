const skills = [
  { label: 'Competitor Analysis', pct: 95 },
  { label: 'High-End Retouching', pct: 85 },
  { label: 'A+ Content Strategy', pct: 90 },
  { label: 'Brand Identity', pct: 91 },
  { label: 'AI Concept Art', pct: 90 },
  { label: 'Infographic Design', pct: 70 },
]

export default function About() {
  return (
    <section id="about" className="bg-[#f5f5f0] py-24 border-t-2 border-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <p className="font-mono text-xs tracking-[0.3em] text-[#0a0a0a]/40 mb-2">
          ▶ WHO I AM
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <h2 className="font-bebas text-[clamp(3rem,7vw,5rem)] leading-none text-[#0a0a0a] mb-8">
              TRACK
              <br />
              <span style={{ WebkitTextStroke: '2px #0a0a0a', color: 'transparent' }}>RECORD</span>
            </h2>

            <p className="font-mono text-sm text-[#0a0a0a]/70 leading-relaxed mb-6">
              I am Muhammad Kashif, a Strategic Brand Developer for Amazon Sellers.
              With over <strong className="text-[#0a0a0a]">8 years of experience</strong>, I go beyond simple design to manage the
              entire visual lifecycle of U.S.-based brands.
            </p>
            <p className="font-mono text-sm text-[#0a0a0a]/70 leading-relaxed mb-6">
              I have successfully optimized main images and infographics for
              hundreds of products and crafted high-converting A+ Content
              strategies that dominate their categories.
            </p>
            <p className="font-mono text-sm text-[#0a0a0a]/70 leading-relaxed">
              My approach blends traditional design mastery with cutting-edge AI,
              transforming standard product photography into stunning 8K assets
              that establish instant trust and drive sales.
            </p>

            {/* Company badge */}
            <div className="mt-10 border-2 border-[#0a0a0a] p-5 shadow-brutal card-3d inline-block">
              <p className="font-bebas text-xl tracking-widest text-[#0a0a0a]">
                Designer Trends INC
              </p>
              <p className="font-mono text-xs tracking-widest text-[#0a0a0a]/50 mt-1">
                Creative Designer Specialist
              </p>
              <p className="font-mono text-xs text-[#0a0a0a]/60 mt-3 leading-relaxed max-w-xs">
                Directed visual brand strategy for 7+ major brands including
                Angelus, Tarrago, Eagle Shoe Care, Leather Hero & more.
              </p>
            </div>
          </div>

          {/* Right: Skills */}
          <div>
            <h3 className="font-bebas text-2xl tracking-widest text-[#0a0a0a] mb-8">
              SPECIALIZED SKILLS
            </h3>

            <div className="flex flex-col gap-6">
              {skills.map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-xs tracking-widest text-[#0a0a0a]">
                      {s.label.toUpperCase()}
                    </span>
                    <span className="font-bebas text-lg text-[#0a0a0a]">
                      {s.pct}%
                    </span>
                  </div>
                  {/* Track */}
                  <div className="h-3 bg-[#0a0a0a]/10 border border-[#0a0a0a]/20 relative overflow-hidden">
                    <div
                      className="h-full bg-[#0a0a0a] relative"
                      style={{ width: `${s.pct}%` }}
                    >
                      {/* Stripe pattern */}
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(45deg, #f5f5f0 0, #f5f5f0 2px, transparent 2px, transparent 8px)',
                        }}
                      />
                    </div>
                    {/* Accent dot at end */}
                    <div
                      className="absolute top-0 h-full w-3 bg-[#e8e800]"
                      style={{ left: `calc(${s.pct}% - 6px)` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
