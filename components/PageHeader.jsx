import Image from 'next/image'

export default function PageHeader({ label, title, subtitle, image, imageAlt = '', imageCaption, primary, secondary }) {
  return (
    <header className="page-intro">
      <div className={`studio-wrap ${image ? 'page-intro-grid' : ''}`}>
        <div>
          <a href="/" className="page-breadcrumb">Home / <span>{label}</span></a>
          <p className="studio-eyebrow">{label}</p>
          <h1>{title}</h1>
          {subtitle && <p className="studio-lead">{subtitle}</p>}
          {(primary || secondary) && <div className="studio-actions">
            {primary && <a className="studio-button" href={primary.href}>{primary.label} ↗</a>}
            {secondary && <a className="studio-text-link" href={secondary.href}>{secondary.label} →</a>}
          </div>}
        </div>
        {image && <figure className="page-intro-art"><Image src={image} alt={imageAlt} width={1200} height={800} priority sizes="(min-width: 900px) 45vw, 100vw" />{imageCaption && <figcaption>{imageCaption}</figcaption>}</figure>}
      </div>
    </header>
  )
}
