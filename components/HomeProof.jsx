'use client'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import { beforeImages, afterImages } from '@/data/case-studies/leather-hero'
import { gaEvent } from '@/lib/gtag'

/**
 * The single most persuasive object on the site, put where it can do work.
 *
 * The slider already existed but only appeared inside a case study, three
 * clicks from the homepage. A visitor deciding whether this person can design
 * had to take that on trust for two full screens. Now it is the third thing
 * they see, and it argues for itself.
 *
 * Images come straight from the case-study data — same source, same alt text,
 * nothing duplicated or re-described.
 */
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

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-14">
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

        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-8 lg:gap-12 items-start">
          <BeforeAfterSlider
            before={beforeImages[0]}
            after={afterImages[0]}
            beforeLabel="ORIGINAL"
            afterLabel="REDESIGNED"
            sizes="(min-width: 1024px) 820px, 100vw"
          />

          <div className="lg:pt-2">
            <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--a-muted)' }}>
              Nothing here breaks a policy or adds a prop. The tin turns to face
              the camera, the brush lifts clear of the pad instead of crossing it,
              and every piece gets its own silhouette — so the product still reads
              at the size a shopper actually sees it in search results.
            </p>
            <p className="font-mono text-sm leading-relaxed mt-4" style={{ color: 'var(--a-muted)' }}>
              Drag the handle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
