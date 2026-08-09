import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CaseStudyResults from '@/components/CaseStudyResults'
import {
  results,
  showPendingState,
  meta,
  sibling,
  mainPrimary,
  mainAlt,
  beforeAfter,
  galleryImages,
  contextParagraphs,
  beforeAfterIntro,
  beforeAfterCaption,
  mainImageParagraphs,
} from '@/data/case-studies/leather-hero-purse'

export default function LeatherHeroPurseCaseStudy() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── 1. HERO ─────────────────────────────────────────────── */}
        <section className="pt-24" style={{ backgroundColor: 'var(--a-bg)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <Link
              href="/my-portfolio/"
              className="font-mono text-xs tracking-widest mb-8 inline-block underline-anim"
              style={{ color: 'var(--a-muted)' }}
            >
              ← BACK TO PORTFOLIO
            </Link>

            <div className="grid lg:grid-cols-[1fr_minmax(0,480px)] gap-10 lg:gap-16 items-start">
              <div>
                <p className="font-mono text-xs tracking-[0.35em] mb-4" style={{ color: 'var(--a-muted)' }}>
                  ▶ AMAZON LISTING DESIGN · LEATHER CARE — HANDBAGS &amp; PURSES
                </p>
                <h1
                  className="font-bebas leading-none"
                  style={{ fontSize: 'clamp(2.75rem,8vw,6rem)', color: 'var(--a-text)' }}
                >
                  LEATHER HERO
                  <br />
                  <span style={{ WebkitTextStroke: '2px var(--a-text)', color: 'transparent' }}>
                    PURSE CARE KIT
                  </span>
                </h1>
                <p
                  className="font-mono text-sm sm:text-base leading-relaxed mt-6 max-w-xl"
                  style={{ color: 'var(--a-muted)' }}
                >
                  Leather Hero’s second product — a purse cleaner &amp; conditioner kit — given
                  the same proof-first treatment as the Furniture Salve, this time on leather.
                </p>

                <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6 mt-10 pt-8 border-t" style={{ borderColor: 'var(--a-border)' }}>
                  {[
                    ['CLIENT', meta.client],
                    ['PRODUCT', meta.product],
                    ['CATEGORY', meta.category],
                    ['MARKETPLACE', meta.marketplace],
                    ['SCOPE', meta.scope],
                    ['PUBLISHED', meta.published],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-mono text-[10px] tracking-[0.3em]" style={{ color: 'var(--a-muted)' }}>
                        {label}
                      </dt>
                      <dd className="font-mono text-xs mt-2 leading-relaxed" style={{ color: 'var(--a-text)' }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Feature asset — the primary main image */}
              <div
                className="relative w-full border-2"
                style={{ aspectRatio: '1 / 1', borderColor: 'var(--a-border)' }}
              >
                <Image
                  src={mainPrimary.src}
                  alt={mainPrimary.alt}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. THE CONTEXT ──────────────────────────────────────── */}
        <section className="border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>
              ▶ THE CONTEXT
            </p>
            <h2
              className="font-bebas leading-none mb-10 sm:mb-14"
              style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--b-text)' }}
            >
              SECOND PRODUCT,
              <br />
              <span style={{ WebkitTextStroke: '2px var(--b-text)', color: 'transparent' }}>SAME BRAND</span>
            </h2>
            <div className="max-w-2xl space-y-6">
              <p className="font-mono text-sm sm:text-base leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                This is the second Leather Hero listing in this portfolio. The first was the{' '}
                <Link
                  href={sibling.path}
                  className="underline-anim font-bold"
                  style={{ color: 'var(--b-text)' }}
                >
                  Furniture Salve
                </Link>{' '}
                — a ten-image set built around proving that a restoration product actually
                restores. That set did its job, and the client came back with a second product
                to give the same treatment.
              </p>
              <p className="font-mono text-sm sm:text-base leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                {contextParagraphs[1]}
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. BEFORE / AFTER ───────────────────────────────────── */}
        <section className="border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>
              ▶ BEFORE / AFTER
            </p>
            <h2
              className="font-bebas leading-none mb-4"
              style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--b-text)' }}
            >
              THE BAG,
              <br />
              RESTORED
            </h2>
            <p className="font-mono text-sm sm:text-base leading-relaxed mb-10 sm:mb-12 max-w-2xl" style={{ color: 'var(--b-muted)' }}>
              {beforeAfterIntro}
            </p>

            <figure className="m-0">
              <div
                className="relative w-full border-2 mx-auto"
                style={{
                  aspectRatio: `${beforeAfter.width} / ${beforeAfter.height}`,
                  maxWidth: '760px',
                  borderColor: 'var(--b-text)',
                  boxShadow: '8px 8px 0px var(--b-border)',
                }}
              >
                <Image
                  src={beforeAfter.src}
                  alt={beforeAfter.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 760px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className="font-mono text-xs sm:text-sm leading-relaxed mt-6 max-w-2xl mx-auto"
                style={{ color: 'var(--b-muted)' }}
              >
                {beforeAfterCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── 4. THE MAIN IMAGE ───────────────────────────────────── */}
        <section className="border-t" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>
              ▶ THE MAIN IMAGE
            </p>
            <h2
              className="font-bebas leading-none mb-3"
              style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--a-text)' }}
            >
              TWO FRAMES,
              <br />
              ONE DECISION
            </h2>
            <p className="font-mono text-xs tracking-[0.2em] mb-12" style={{ color: 'var(--a-muted)' }}>
              THE CRAFT STORY FOR THIS SET
            </p>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {[
                { img: mainPrimary, tag: 'PRIMARY', note: 'Leads with the bag — context wins the click.' },
                { img: mainAlt, tag: 'ALTERNATE', note: 'Kit only — maximum clarity, second slot / A-B challenger.' },
              ].map(({ img, tag, note }) => (
                <figure key={tag} className="m-0">
                  <div
                    className="relative w-full border-2"
                    style={{
                      aspectRatio: '1 / 1',
                      borderColor: tag === 'PRIMARY' ? 'var(--a-text)' : 'var(--a-border)',
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                    />
                    <span
                      className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] px-2 py-1 border"
                      style={{
                        backgroundColor: 'var(--a-bg)',
                        color: 'var(--a-text)',
                        borderColor: tag === 'PRIMARY' ? 'var(--a-text)' : 'var(--a-border)',
                      }}
                    >
                      {tag}
                    </span>
                  </div>
                  <figcaption className="font-mono text-xs mt-4 leading-relaxed" style={{ color: 'var(--a-muted)' }}>
                    {note}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="max-w-2xl space-y-6 mt-12 sm:mt-16">
              {mainImageParagraphs.map((p, i) => (
                <p key={i} className="font-mono text-sm sm:text-base leading-relaxed" style={{ color: 'var(--a-muted)' }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. THE SET ──────────────────────────────────────────── */}
        <section className="border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>
              ▶ THE SET
            </p>
            <h2
              className="font-bebas leading-none mb-3"
              style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--b-text)' }}
            >
              EIGHT IMAGES,
              <br />
              EIGHT JOBS
            </h2>
            <p className="font-mono text-xs sm:text-sm leading-relaxed mb-10 sm:mb-14 max-w-2xl" style={{ color: 'var(--b-muted)' }}>
              Every slot in a listing is a question the buyer has not asked out loud yet. Here is
              what each of the eight is for.
            </p>

            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 list-none p-0">
              {galleryImages.map((img) => (
                <li
                  key={img.src}
                  className="border-2 overflow-hidden flex flex-col"
                  style={{
                    borderColor: img.feature ? 'var(--b-text)' : 'var(--b-border)',
                    boxShadow: img.feature ? '6px 6px 0px var(--b-text)' : '4px 4px 0px var(--b-border)',
                  }}
                >
                  <div className="relative w-full" style={{ aspectRatio: '1 / 1', backgroundColor: 'var(--b-subtle)' }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    {img.feature && (
                      <span
                        className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.2em] px-2 py-1 border"
                        style={{ backgroundColor: 'var(--b-bg)', color: 'var(--b-text)', borderColor: 'var(--b-text)' }}
                      >
                        ★ MAIN
                      </span>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 border-t flex-1" style={{ borderColor: 'var(--b-border)' }}>
                    <p className="font-mono text-[10px] tracking-[0.2em] mb-3" style={{ color: 'var(--b-text)' }}>
                      {img.slot}
                    </p>
                    <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                      {img.caption}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 6. RESULTS ──────────────────────────────────────────── */}
        <CaseStudyResults results={results} showPending={showPendingState} />

        {/* ── 7. CTA ──────────────────────────────────────────────── */}
        <section className="border-t" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>
                ▶ NEXT
              </p>
              <h2
                className="font-bebas leading-none"
                style={{ fontSize: 'clamp(2.25rem,6vw,4.5rem)', color: 'var(--a-text)' }}
              >
                SELLING LEATHER CARE
                <br />
                OR FOOTWEAR ON AMAZON?
              </h2>
              <p className="font-mono text-sm sm:text-base leading-relaxed mt-6 max-w-xl" style={{ color: 'var(--a-muted)' }}>
                The same treatment — proof over claims, objections answered slot by slot.
              </p>
              <div className="mt-8 sm:mt-10">
                <a
                  href="/contact-me/"
                  className="btn-brutal font-bebas tracking-widest border-2 inline-block w-full sm:w-auto text-center text-lg sm:text-xl px-8 py-4"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-inv)',
                    borderColor: 'var(--accent)',
                    boxShadow: '4px 4px 0px var(--a-muted)',
                  }}
                >
                  START A PROJECT →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
