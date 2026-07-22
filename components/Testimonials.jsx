const testimonials = [
  { name: 'Neoray Azour',  platform: 'Upwork',  project: 'Amazon Product',  stars: 5, quote: 'He completed the work in a professional and quick manner! Thank you so much, I will be working with you on future projects.' },
  { name: 'Adrian Jallad', platform: 'Upwork',  project: 'Amazon Listing',  stars: 5, quote: 'This is now my second time working with this guy. He went past my expectations and beyond!' },
  { name: 'Ciro Rossi',    platform: 'Fiverr',  project: 'Design Quality',  stars: 5, quote: 'Excellent job!!! Good communication. He was always willing to help me. He has good knowledge on Amazon. Super recommended!!!' },
  { name: 'John Bie',      platform: 'Upwork',  project: 'Amazon Product',  stars: 5, quote: 'Timely done! Clean execution, no back-and-forth needed. Will return for next batch.' },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array(count).fill(0).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--accent)' }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>▶ SOCIAL PROOF</p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-14">
          <h2 className="font-bebas leading-none" style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--a-text)' }}>
            TRUSTED BY
            <br />
            GLOBAL SELLERS
          </h2>
          {/* Rating summary */}
          <div className="flex items-center gap-4 border px-5 py-4 self-start sm:self-auto" style={{ borderColor: 'var(--a-border)' }}>
            <div>
              <div className="font-bebas text-4xl sm:text-5xl leading-none" style={{ color: 'var(--a-text)' }}>5.0</div>
              <Stars count={5} />
              <div className="font-mono text-xs tracking-widest" style={{ color: 'var(--a-muted)' }}>AVERAGE RATING</div>
            </div>
            <div className="w-px h-14" style={{ backgroundColor: 'var(--a-border)' }} />
            <div>
              <div className="font-bebas text-4xl sm:text-5xl leading-none" style={{ color: 'var(--a-text)' }}>50+</div>
              <div className="font-mono text-xs tracking-widest mt-1" style={{ color: 'var(--a-muted)' }}>HAPPY CLIENTS</div>
            </div>
          </div>
        </div>

        {/* 1-col mobile, 2-col sm, 3-col lg */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 border flex flex-col card-lift-inv"
              style={{
                borderColor: i === 0 ? 'var(--accent)' : 'var(--a-border)',
                backgroundColor: i === 0 ? 'var(--accent)' : 'transparent',
              }}
            >
              <Stars count={t.stars} />
              <p className="font-mono text-sm sm:text-base leading-[1.9] flex-1" style={{ color: i === 0 ? 'var(--accent-inv)' : 'var(--a-muted)' }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t" style={{ borderColor: i === 0 ? 'rgba(8,8,8,0.15)' : 'var(--a-border)' }}>
                <div className="w-10 h-10 border-2 flex items-center justify-center font-bebas text-lg shrink-0"
                  style={{ borderColor: i === 0 ? 'var(--accent-inv)' : 'var(--a-muted)', color: i === 0 ? 'var(--accent-inv)' : 'var(--a-muted)' }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bebas text-sm tracking-widest leading-none" style={{ color: i === 0 ? 'var(--accent-inv)' : 'var(--a-text)' }}>{t.name}</p>
                  <p className="font-mono text-xs mt-1" style={{ color: i === 0 ? 'rgba(8,8,8,0.55)' : 'var(--a-muted)' }}>{t.platform} · {t.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
