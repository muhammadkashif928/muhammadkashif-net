// Names-only client strip — the leather/footwear proof, surfaced high on the page.
// No logos (per brand agreement); confirmed clients only.
const clients = ['ANGELUS', 'EAGLE SHOE CARE', 'LEATHER HERO', 'LINCOLN']

export default function ClientStrip() {
  return (
    <section className="border-t border-b" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <p className="font-mono text-xs tracking-[0.35em] text-center mb-7 sm:mb-9" style={{ color: 'var(--a-muted)' }}>
          ▶ TRUSTED BY LEATHER, SHOE CARE &amp; FOOTWEAR BRANDS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-14">
          {clients.map((c) => (
            <span
              key={c}
              className="font-bebas tracking-widest leading-none"
              style={{ fontSize: 'clamp(1.4rem,4vw,2.6rem)', color: 'var(--a-text)' }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
