export default function PageHeader({ label, title, subtitle }) {
  return (
    <div className="pt-16 sm:pt-[4.5rem]" style={{ backgroundColor: 'var(--a-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>
          ▶ {label}
        </p>
        <h1 className="font-bebas leading-none" style={{ fontSize: 'clamp(3rem,9vw,7rem)', color: 'var(--a-text)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="font-mono text-sm sm:text-base mt-5 sm:mt-6 max-w-xl leading-relaxed" style={{ color: 'var(--a-muted)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
