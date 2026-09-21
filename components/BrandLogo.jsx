export default function BrandLogo({ compact = false, className = '' }) {
  return <span className={`brand-logo ${compact ? 'brand-logo-compact' : ''} ${className}`} aria-label="Muhammad Kashif · Design studio" role="img">
    <svg className="brand-symbol" width="48" height="48" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="18" fill="currentColor" />
      <path d="M13 44V20l10 14 10-14v24m0-11 17-13M33 33l17 11" fill="none" stroke="var(--a-bg)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    {!compact && <span className="brand-wordmark"><span>Muhammad Kashif<span className="brand-period">.</span></span><small>PRODUCT &amp; BRAND DESIGN</small></span>}
  </span>
}
