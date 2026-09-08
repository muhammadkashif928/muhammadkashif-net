import Image from 'next/image'

/**
 * Full-bleed brand banner built around the MK mark.
 *
 * Runs on the inverted (`--b-*`) palette so it reads as a hard break between
 * the sections either side of it, in both themes. The oversized mark behind
 * the copy is decorative — the visible mark sits in the left column.
 */
export default function BrandBanner({
  id = 'brand-banner',
  eyebrow = 'LEATHER · SHOE CARE · FOOTWEAR',
  title = <>BUILT TO WIN<br />THE CLICK</>,
  body = 'Eight years designing Amazon listings for leather care, shoe care and footwear brands — including Angelus, Eagle Shoe Care, Leather Hero and Lincoln. Every image is built to be judged at thumbnail size and to survive the scroll.',
  primary = { label: 'BOOK A SERVICE', href: '/services/' },
  secondary = { label: 'SEE THE WORK', href: '/my-portfolio/' },
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-b"
      style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}
    >
      {/* Oversized watermark mark — bleeds off the right edge */}
      <div
        className="absolute -right-16 sm:-right-10 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{ opacity: 0.05 }}
      >
        <Image
          src="/images/logo-mark.png"
          alt=""
          width={943}
          height={512}
          className="logo-mark-static w-[36rem] sm:w-[46rem] lg:w-[58rem] max-w-none h-auto"
        />
      </div>

      {/* Corner rules, echoing the hero */}
      <div className="absolute top-0 left-0 w-24 sm:w-40 h-px" style={{ backgroundColor: 'var(--b-text)', opacity: 0.35 }} />
      <div className="absolute top-0 left-0 w-px h-24 sm:h-40" style={{ backgroundColor: 'var(--b-text)', opacity: 0.35 }} />
      <div className="absolute bottom-0 right-0 w-24 sm:w-40 h-px" style={{ backgroundColor: 'var(--b-text)', opacity: 0.35 }} />
      <div className="absolute bottom-0 right-0 w-px h-24 sm:h-40" style={{ backgroundColor: 'var(--b-text)', opacity: 0.35 }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">

        {/* Mark, framed */}
        <div className="shrink-0">
          <div
            className="inline-flex items-center justify-center p-6 sm:p-8 border-2"
            style={{ borderColor: 'var(--b-text)', boxShadow: '8px 8px 0px var(--b-border)' }}
          >
            <Image
              src="/images/logo-mark.png"
              alt="Muhammad Kashif monogram"
              width={943}
              height={512}
              className="logo-mark-b w-32 sm:w-44 lg:w-52 h-auto"
            />
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.35em] mb-4" style={{ color: 'var(--b-muted)' }}>
            ▶ {eyebrow}
          </p>

          <h2 className="font-bebas leading-none mb-5" style={{ fontSize: 'clamp(2.5rem,6.5vw,5rem)', color: 'var(--b-text)' }}>
            {title}
          </h2>

          <p className="font-mono text-sm sm:text-base leading-relaxed max-w-xl mb-8" style={{ color: 'var(--b-muted)' }}>
            {body}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href={primary.href}
              className="btn-brutal font-bebas text-base sm:text-lg tracking-widest px-7 sm:px-9 py-3 border-2"
              style={{ backgroundColor: 'var(--b-text)', color: 'var(--b-bg)', borderColor: 'var(--b-text)', boxShadow: '4px 4px 0px var(--b-border)' }}
            >
              {primary.label}
            </a>
            <a
              href={secondary.href}
              className="btn-brutal font-bebas text-base sm:text-lg tracking-widest px-7 sm:px-9 py-3 border-2"
              style={{ backgroundColor: 'transparent', color: 'var(--b-text)', borderColor: 'var(--b-border)', boxShadow: '4px 4px 0px var(--b-border)' }}
            >
              {secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
