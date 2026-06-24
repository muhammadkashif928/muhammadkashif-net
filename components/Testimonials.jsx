const testimonials = [
  {
    name: 'Neoray Azour',
    platform: 'UPWORK CLIENT',
    project: 'Amazon Product',
    quote:
      'He completed the work in a professional and quick manner! Thank you so much, I will be working with you on future projects.',
  },
  {
    name: 'Neoray Azour',
    platform: 'UPWORK CLIENT',
    project: 'Product Design',
    quote:
      'Excellent work, very straightforward and to the point, gets the job done extremely fast and very well. I would 100% recommend working with him.',
  },
  {
    name: 'Adrian Jallad',
    platform: 'UPWORK CLIENT',
    project: 'Amazon Listing',
    quote:
      'This is now my second time working with this guy. He went past my expectations and beyond!',
  },
  {
    name: 'Ciro Rossi',
    platform: 'FIVERR CLIENT',
    project: 'Design Quality',
    quote:
      'Excellent job!!! Good communication. He was always willing to help me. He has good knowledge on Amazon. Super recommended!!!',
  },
  {
    name: 'John Bie',
    platform: 'UPWORK CLIENT',
    project: 'Amazon Product',
    quote: 'Timely done! Clean execution, no back-and-forth needed. Will return for next batch.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0a0a0a] py-24 border-t-2 border-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-[#e8e800] mb-2">
          ▶ SOCIAL PROOF
        </p>
        <h2 className="font-bebas text-[clamp(3rem,7vw,5rem)] leading-none text-[#f5f5f0] mb-16">
          TRUSTED BY
          <br />
          SELLERS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`border-2 p-6 card-3d-inv
                ${i === 0 ? 'border-[#e8e800] bg-[#e8e800]' : 'border-[#f5f5f0]/20 bg-transparent hover:border-[#f5f5f0]/60'}
              `}
            >
              {/* Quote marks */}
              <div className={`font-bebas text-6xl leading-none mb-4 ${i === 0 ? 'text-[#0a0a0a]/30' : 'text-[#f5f5f0]/10'}`}>
                "
              </div>

              <p className={`font-mono text-sm leading-relaxed mb-6 ${i === 0 ? 'text-[#0a0a0a]' : 'text-[#f5f5f0]/70'}`}>
                {t.quote}
              </p>

              <div className="flex items-center gap-3 mt-auto border-t border-current/10 pt-4">
                {/* Avatar placeholder */}
                <div className={`w-10 h-10 border-2 flex items-center justify-center font-bebas text-lg
                  ${i === 0 ? 'border-[#0a0a0a] text-[#0a0a0a]' : 'border-[#f5f5f0]/30 text-[#f5f5f0]/50'}`}>
                  {t.name[0]}
                </div>
                <div>
                  <p className={`font-bebas text-sm tracking-widest ${i === 0 ? 'text-[#0a0a0a]' : 'text-[#f5f5f0]'}`}>
                    {t.name}
                  </p>
                  <p className={`font-mono text-[10px] tracking-widest ${i === 0 ? 'text-[#0a0a0a]/60' : 'text-[#f5f5f0]/40'}`}>
                    {t.platform} · {t.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
