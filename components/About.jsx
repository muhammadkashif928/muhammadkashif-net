const skills = [
  'Main Image Optimization',
  'A+ Content & Enhanced Brand Content',
  'Product Infographics',
  'Amazon Brand Story',
  'Amazon Brand Store',
  'Leather & Footwear Listing Design',
]

export default function About() {
  return (
    <section id="about" className="border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)', padding: '4rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>▶ WHO I AM</p>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* ── BIO ── */}
          <div>
            <h2 className="font-bebas leading-none mb-8 sm:mb-10" style={{ fontSize: 'clamp(2.8rem,7vw,5rem)', color: 'var(--b-text)' }}>
              TRACK
              <br />
              <span style={{ WebkitTextStroke: '2px var(--b-text)', color: 'transparent' }}>RECORD</span>
            </h2>

            <p className="font-mono text-sm sm:text-base leading-relaxed mb-5" style={{ color: 'var(--b-muted)' }}>
              I am Muhammad Kashif, an Amazon brand designer with a specialty most
              designers can&apos;t claim: <strong style={{ color: 'var(--b-text)' }}>leather care, shoe care,
              and footwear brands</strong>. Over <strong style={{ color: 'var(--b-text)' }}>8+ years</strong> I&apos;ve
              handled the full visual lifecycle for names like Angelus, Eagle Shoe
              Care, Leather Hero, and Lincoln.
            </p>
            <p className="font-mono text-sm sm:text-base leading-relaxed mb-5" style={{ color: 'var(--b-muted)' }}>
              From main images and infographics to full A+ Content, I&apos;ve optimized
              listings for hundreds of products — built to win the click in search
              and convert browsers into buyers.
            </p>
            <p className="font-mono text-sm sm:text-base leading-relaxed" style={{ color: 'var(--b-muted)' }}>
              My process pairs hands-on design craft with AI-assisted retouching to
              turn ordinary product photos into premium listing visuals that earn
              trust at a glance.
            </p>

            {/* Company badge */}
            <div className="mt-8 sm:mt-10 p-5 sm:p-6 border-2 card-lift inline-block w-full sm:w-auto" style={{ borderColor: 'var(--b-border)', boxShadow: '4px 4px 0px var(--b-border)' }}>
              <p className="font-bebas text-xl sm:text-2xl tracking-widest" style={{ color: 'var(--b-text)' }}>Designer Trends INC</p>
              <p className="font-mono text-xs tracking-widest mt-1" style={{ color: 'var(--b-muted)' }}>Creative Designer Specialist · 2018 – Present</p>
            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 border-t" style={{ borderColor: 'var(--b-border)' }}>
              {[
                { num: '8+',   label: 'Years\nExperience' },
                { num: '200+', label: 'Products\nOptimised' },
                { num: '50+',  label: 'Freelance\nClients' },
              ].map((s, i) => (
                <div key={s.label} className="py-5" style={{ borderRight: i < 2 ? '1px solid var(--b-border)' : 'none', paddingLeft: i > 0 ? '1rem' : 0, paddingRight: i < 2 ? '1rem' : 0 }}>
                  <div className="font-bebas leading-none" style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', color: 'var(--b-text)' }}>{s.num}</div>
                  <div className="font-mono text-xs tracking-widest mt-1 whitespace-pre-line leading-relaxed" style={{ color: 'var(--b-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SPECIALIZATIONS ── */}
          <div>
            <h3 className="font-bebas text-2xl sm:text-3xl tracking-widest mb-8 sm:mb-10" style={{ color: 'var(--b-text)' }}>WHAT I SPECIALIZE IN</h3>

            <div className="flex flex-col border-t" style={{ borderColor: 'var(--b-border)' }}>
              {skills.map((s, i) => (
                <div key={s} className="flex items-center gap-4 py-4 border-b" style={{ borderColor: 'var(--b-border)' }}>
                  <span className="font-bebas text-lg shrink-0" style={{ color: 'var(--b-muted)', minWidth: '2.5rem' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-mono text-xs sm:text-sm tracking-widest" style={{ color: 'var(--b-text)' }}>{s.toUpperCase()}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-10 sm:mt-12 p-5 sm:p-6 border-l-2" style={{ borderColor: 'var(--b-text)', backgroundColor: 'var(--b-subtle)' }}>
              <p className="font-mono text-sm sm:text-base leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                &quot;Sellers in leather and footwear don&apos;t need louder graphics — they
                need visuals that signal quality and answer the buyer&apos;s doubts.
                That&apos;s what I design, image by image.&quot;
              </p>
              <p className="font-mono text-xs tracking-widest mt-4" style={{ color: 'var(--b-text)' }}>— MUHAMMAD KASHIF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
