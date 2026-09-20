import Image from 'next/image'
// Prices are USD and project-based, never per-hour and never per-image.
// Per-image pricing invites a comparison against $50 marketplace sellers on
// asset count, which is the one comparison this work always loses — the value
// is in deciding what each slot has to do, not in how many files ship.
//
// The catalog lives in data/services.js because the checkout API charges from
// it. Keeping the displayed price and the charged price in one place is the
// point: two copies would eventually disagree, and the disagreement would be
// about money.
import { services, priceLabel } from '@/data/services'

const serviceVisuals = [
  { image: '/1776985426943-960.webp', alt: 'Yara fragrance main product image', description: 'A crisp, confident first impression in search results.' },
  { image: '/case-studies/leather-hero/after/03-penetration.jpg', alt: 'Leather care product benefit infographic', description: 'Show the benefits. Answer the buying questions.' },
  { image: '/images/blog-a-content.png', alt: 'A+ content design example', description: 'Build a richer product story, one module at a time.' },
  { image: '/images/portfolio-3.webp', alt: 'Brand identity and packaging design', description: 'Connect your products with a memorable brand story.' },
  { image: '/images/blog-website.jpg', alt: 'Brand website design example', description: 'Give your collection a considered home on Amazon.' },
  { image: '/case-studies/leather-hero/after/04-kit.jpg', alt: 'Complete Leather Hero product kit presentation', description: 'One cohesive visual direction for your full listing.' },
]

export default function Services() {
  return (
    <section id="services" className="border-t" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="font-mono text-[13px] tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>▶ WHAT I DELIVER</p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
          <h2 className="font-bebas leading-none" style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--a-text)' }}>
            DESIGN, AT EVERY TOUCHPOINT.
          </h2>
          <p className="font-mono text-sm max-w-xs" style={{ color: 'var(--a-muted)' }}>
            From the first click to your full brand story. Pick the support your product needs.
          </p>
        </div>

        {/* Grid — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l" style={{ borderColor: 'var(--a-border)' }}>
          {services.map((s, index) => (
            <div
              key={s.num}
              className="group border-b border-r relative overflow-hidden flex flex-col transition-all duration-200"
              style={{ borderColor: 'var(--a-border)' }}
            >
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ backgroundColor: 'var(--accent)', opacity: 0.06 }} />
              <span className="absolute top-4 right-5 font-bebas select-none" style={{ fontSize: '4rem', color: 'var(--a-subtle)', lineHeight: 1 }}>{s.num}</span>

              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                <Image src={serviceVisuals[index].image} alt={serviceVisuals[index].alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="relative z-10 flex flex-col flex-1 p-6">
                <div className="w-6 h-px mb-5 sm:mb-6 transition-all duration-200 group-hover:w-12" style={{ backgroundColor: 'var(--accent)' }} />
                <h3 className="font-bebas text-lg sm:text-xl tracking-widest mb-2 leading-tight" style={{ color: 'var(--a-text)' }}>{s.title}</h3>
                <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                  <span className="font-bebas text-xl sm:text-2xl tracking-wider" style={{ color: 'var(--accent)' }}>{priceLabel(s)}</span>
                  <span className="font-mono text-xs" style={{ color: 'var(--a-muted)' }}>{s.unit}</span>
                </div>
                <p className="font-mono text-sm leading-relaxed mb-6" style={{ color: 'var(--a-muted)' }}>{serviceVisuals[index].description}</p>

                {/* mt-auto so every card's buttons sit on the same line, however
                    long the description runs. */}
                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={`/services/${s.slug}/`}
                    className="btn-brutal font-bebas text-sm tracking-widest px-5 py-2.5 border-2"
                    style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-inv)', borderColor: 'var(--accent)', boxShadow: '3px 3px 0px var(--a-subtle)' }}
                  >
                    VIEW SERVICE →
                  </a>
                  <a
                    href="/contact-me/"
                    className="font-mono text-[11px] tracking-widest underline underline-offset-4"
                    style={{ color: 'var(--a-muted)' }}
                  >
                    ASK FIRST
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <details className="mt-6 font-mono text-xs leading-relaxed" style={{ color: 'var(--a-muted)' }}>
          <summary className="cursor-pointer py-3">Project scope, revisions &amp; payment details</summary>
          <p className="max-w-3xl pb-3">Prices in USD, per project. Includes competitor analysis, the revision allowance on your order page and Seller Central-ready files. A “from” price covers the scope on its order page. Larger catalogs and additional work are quoted separately before work begins, never charged automatically. Card payments are handled by Stripe.</p>
        </details>

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
