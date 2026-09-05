'use client'
import Image from 'next/image'
import { beforeImages, afterImages } from '@/data/case-studies/leather-hero'
import { gaEvent } from '@/lib/gtag'

const before = beforeImages[0]
const after = afterImages[0]

/**
 * The work, third on the page, arguing for itself.
 *
 * This started as a drag-to-compare slider. It read badly: both images are
 * square product shots, so a vertical split showed half a tin beside half a
 * brush and looked like one confusing photograph rather than two versions of
 * the same listing. Two panels side by side let each image be seen whole,
 * which is the entire point — you cannot judge a main image you can only see
 * half of.
 */
function Panel({ img, label, tone }) {
  return (
    <figure className="proof-card relative m-0">
      <div className="relative aspect-square">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width: 768px) 44vw, 100vw"
          className="object-contain"
        />
      </div>
      {/* The chip sits on the product's own white background, so it is
          pinned to fixed colours rather than --accent. --accent inverts
          with the theme: in dark mode it resolves to cream, which put a
          cream box on a white card and the label stopped reading as a
          label at all. */}
      <figcaption className={`proof-chip ${tone === 'after' ? 'proof-chip-after' : ''}`}>
        {label}
      </figcaption>
    </figure>
  )
}

export default function HomeProof() {
  return (
    <section
      id="proof"
      className="border-t"
      style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="font-mono text-[13px] tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>
          ▶ BEFORE / AFTER
        </p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-12">
          <h2 className="font-bebas leading-none" style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--a-text)' }}>
            SAME PRODUCT.
            <br />
            SAME AMAZON RULES.
            <br />
            <span style={{ color: 'var(--accent)' }}>DIFFERENT IMAGE.</span>
          </h2>

          <a
            href="/portfolio/leather-hero-furniture-salve/"
            onClick={() => gaEvent('case_study_open', { case_study: 'leather-hero-furniture-salve', location: 'home_proof', transport_type: 'beacon' })}
            className="font-mono text-sm tracking-widest pb-1 transition-all self-start whitespace-nowrap"
            style={{ color: 'var(--a-text)', borderBottom: '1px solid var(--a-text)' }}
          >
            SEE THE FULL SET →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          <Panel img={before} label="ORIGINAL" tone="before" />
          <Panel img={after} label="REDESIGNED" tone="after" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8 mt-6 sm:mt-8">
          <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--a-muted)' }}>
            Nothing here breaks a policy or adds a prop. Same three pieces, same
            white background, same Amazon rules.
          </p>
          <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--a-muted)' }}>
            The tin turns to face the camera, the brush lifts clear of the pad
            instead of crossing it, and every piece gets its own silhouette — so
            the product still reads at the size a shopper actually sees it in
            search results.
          </p>
        </div>
      </div>
    </section>
  )
}
