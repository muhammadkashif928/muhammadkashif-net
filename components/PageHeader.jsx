export default function PageHeader({ label, title, subtitle }) {
  return (
    <div className="pt-[4.5rem]" style={{ backgroundColor: 'var(--a-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="font-mono text-[10px] tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>
          ▶ {label}
        </p>
        <h1 className="font-bebas leading-none" style={{ fontSize: 'clamp(3.5rem,9vw,7rem)', color: 'var(--a-text)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="font-mono text-sm mt-6 max-w-xl" style={{ color: 'var(--a-muted)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
