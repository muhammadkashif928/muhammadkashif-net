// Sections shared by more than one Lumora-design page. Prices and scope always come
// from data/services.js, the same catalogue the Stripe checkout charges from.
import { services, priceLabel, onSale, regularLabel, savingsPercent } from '@/data/services'
import { servicePresentation } from '@/data/service-presentation'
import { questions } from '@/data/faqs'
import { Icon, Pill, Stars } from './Icons'

/* ---------- Four featured case studies (dark cards) ---------- */
export const FEATURED = [
  {
    slug: 'yara-lattafa-amazon-main-image',
    href: '/blackdsn-portfolio/yara-lattafa-amazon-main-image/',
    img: '/images/lx/work/yara.webp',
    imgStyle: { '--zoom': 1.3, '--zoom-at': '50% 44%' },
    meta: 'Amazon Main Image — Case study',
    title: 'Yara by Lattafa',
    desc: 'Raw casual shots of the Yara EDP redesigned into a scroll-stopping main image — shape clarity, lighting and CTR in an AI + Photoshop workflow.',
    tags: ['Main Image', 'Retouching', 'AI + Photoshop'],
  },
  {
    slug: 'leather-hero-furniture-salve',
    href: '/portfolio/leather-hero-furniture-salve/',
    img: '/images/lx/work/leather-hero-salve.webp',
    imgStyle: { objectPosition: 'center 20%' },
    meta: 'Amazon Listing Set — Case study',
    title: 'Leather Hero — Furniture Salve',
    desc: 'Four near-identical images rebuilt into a ten-image set led by before-and-after proof, real furniture settings and a cross-section of the salve at work.',
    tags: ['Listing Set', 'Infographics', 'Lifestyle'],
  },
  {
    slug: 'leather-hero-purse-care-kit',
    href: '/portfolio/leather-hero-purse-care-kit/',
    img: '/images/lx/work/leather-hero-purse.webp',
    meta: 'Leather Care — Repeat client',
    title: 'Leather Hero — Purse Care Kit',
    desc: "The brand's second product, given the same proof-first treatment: an eight-image set led by one aged crossbody, restored in a single split frame.",
    tags: ['8-Image Set', 'Before / After', 'Amazon US'],
  },
  {
    slug: 'jason-markk-lifestyle-composite',
    href: '/blackdsn-portfolio/jason-markk-lifestyle-composite/',
    img: '/images/lx/work/jason-markk-repel.webp',
    imgClass: 'pcard__img--inset',
    imgStyle: { '--zoom': 0.74, '--zoom-at': '50% 2%' },
    meta: 'Lifestyle Composite',
    title: 'Jason Markk — Repel Spray',
    desc: 'A clean white product shot turned into a lifestyle composite: an AI-generated sneaker set behind the spray, so the image shows the outcome, not just the bottle.',
    tags: ['Lifestyle Composite', 'AI + Photoshop', 'A/B Variant'],
  },
]

// Which featured case study each service page points to as proof.
export const SERVICE_PROOF = {
  'main-image-optimization': 'yara-lattafa-amazon-main-image',
  'product-infographics': 'leather-hero-furniture-salve',
  'a-plus-content': 'leather-hero-purse-care-kit',
  'amazon-brand-story': 'leather-hero-purse-care-kit',
  'amazon-brand-store': 'leather-hero-furniture-salve',
  'full-listing-design': 'leather-hero-furniture-salve',
}

export function FeaturedCard({ project: p }) {
  return (
    <a className="pcard-link" href={p.href}>
      <article className="pcard">
        <img className={`pcard__img ${p.imgClass || ''}`} src={p.img} alt="" loading="lazy" decoding="async" style={p.imgStyle} />
        <div className="pcard__shade" />
        <div className="pcard__meta"><span>{p.meta}</span><span className="pcard__badge"><Icon name="arrow-ur" /></span></div>
        <div className="pcard__body">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
        </div>
      </article>
    </a>
  )
}

export function FeaturedCards({ exclude } = {}) {
  return (
    <ul className={`cards${exclude ? ' cards--3' : ''}`}>
      {FEATURED.filter(p => p.slug !== exclude).map((p, i) => (
        <li key={p.slug} className="rv" style={{ '--rd': `${i * 90}ms` }}>
          <FeaturedCard project={p} />
        </li>
      ))}
    </ul>
  )
}

/* ---------- Services list ---------- */
const shortDesc = {
  'main-image-optimization': 'A crisp, confident first impression in search results.',
  'product-infographics': 'Show the benefits. Answer the buying questions.',
  'a-plus-content': 'Build a richer product story, one module at a time.',
  'amazon-brand-story': 'Connect your products with a memorable brand story.',
  'amazon-brand-store': 'Give your collection a considered home on Amazon.',
  'full-listing-design': 'One cohesive visual direction for your full listing.',
}

/* Price with the regular price struck through while a sale is on */
export function PriceText({ service: s }) {
  return <>{priceLabel(s)}{onSale(s) && <> <s className="was-inline">{regularLabel(s)}</s></>}</>
}

export function serviceName(s) {
  // data/services.js titles are upper-case for the old design; the presentation file has the display form.
  const t = servicePresentation[s.slug]?.title || s.title
  return t.replace(/^(\w)/, c => c.toUpperCase()).replace(/\b(image|optimization|infographics|listing|design)\b/g, w => w[0].toUpperCase() + w.slice(1))
}

export function ServiceRows({ hrefFor = s => `/services/${s.slug}/` }) {
  return (
    <ul className="srows">
      {services.map((s, i) => (
        <li key={s.slug} className="rv" style={{ '--rd': `${i * 80}ms` }}>
          <a className="srow-link" href={hrefFor(s)}>
            <div className="srow">
              <span className="srow__idx">{s.num}</span>
              <h3>{serviceName(s)}</h3>
              <p>{shortDesc[s.slug] || servicePresentation[s.slug]?.brief}</p>
              <span className="srow__price">
                {onSale(s) && <span className="was"><s>{regularLabel(s)}</s><em className="sale-chip">−{savingsPercent(s)}%</em></span>}
                {priceLabel(s)}<small>{s.unit}</small>
              </span>
              <span className="srow__badge"><Icon name="arrow-ur" /></span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}

/* ---------- One service in full: price, turnaround, fit, deliverables, order ---------- */
export function ServiceDetail({ service: s, feature = false, headingLevel: H = 'h3', showDetailsLink = true }) {
  const p = servicePresentation[s.slug] || {}
  return (
    <article className={`svc${feature ? ' svc--feature' : ''} rv`} id={s.slug}>
      <div className="svc__side">
        {feature && <span className="svc__flag">Everything, one direction</span>}
        <span className="svc__idx">{s.num}</span>
        <H className="svc__title">{serviceName(s)}</H>
        {onSale(s) && <span className="sale-flag">Sale · save {savingsPercent(s)}%</span>}
        <p className="svc__price"><strong>{priceLabel(s)}</strong>{onSale(s) && <s className="svc__was">{regularLabel(s)}</s>}<span>{s.unit}</span></p>
        <span className="svc__time">{s.turnaround}</span>
      </div>
      <div className="svc__body">
        {p.fit && <p className="svc__fit"><small>The right fit</small>{p.fit}</p>}
        <ul className="checks">
          {s.deliverables.map(d => <li key={d}><Icon name="check" />{d}</li>)}
        </ul>
        {s.fromPrice && <p className="svc__fine">The starting price covers the listed scope. Additional work is quoted separately before it begins.</p>}
        <div className="svc__order">
          <Pill variant={feature ? 'light' : 'dark'} arrow="up-right" href={`/order/${s.slug}/`}>Order · {priceLabel(s)}</Pill>
          {showDetailsLink && <a className="svc__ask" href={`/services/${s.slug}/`}>Details &amp; examples</a>}
          <button type="button" className="svc__ask" data-go="contact" data-service={serviceName(s)} style={{ background: 'none', border: 0, cursor: 'pointer', padding: 0 }}>Ask first</button>
        </div>
      </div>
    </article>
  )
}

/* ---------- FAQ ---------- */
export function Faq({ items = questions }) {
  return (
    <div className="faq rv" style={{ '--ry': '20px' }}>
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}<Icon name="plus" /></summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}

/* ---------- Process ---------- */
export const STEPS = [
  ['Discover', 'We review your product, competitors and customer questions. Then agree on the scope and creative direction.'],
  ['Design & refine', 'I build the images and content as a coherent set. Your feedback shapes the agreed revision rounds.'],
  ['Deliver & launch', 'Receive your final assets sized for the agreed placements, ready for your listing or brand store.'],
]

export function Steps() {
  return (
    <ol className="steps">
      {STEPS.map(([title, text], i) => (
        <li key={title} className="rv" style={{ '--rd': `${i * 120}ms` }}>
          <div className="step"><span className="step__n">{i + 1}</span><h3>{title}</h3><p>{text}</p></div>
        </li>
      ))}
    </ol>
  )
}

/* ---------- Reviews ---------- */
export const REVIEWS = [
  { name: 'Neoray Azour', role: 'Upwork · Amazon Product', quote: 'He completed the work in a professional and quick manner! Thank you so much, I will be working with you on future projects.' },
  { name: 'Adrian Jallad', role: 'Upwork · Amazon Listing', quote: 'This is now my second time working with this guy. He went past my expectations and beyond!' },
  { name: 'Ciro Rossi', role: 'Fiverr · Design Quality', quote: 'Excellent job!!! Good communication. He was always willing to help me. He has good knowledge on Amazon. Super recommended!!!' },
  { name: 'John Bie', role: 'Upwork · Amazon Product', quote: 'Timely done! Clean execution, no back-and-forth needed. Will return for next batch.' },
]

export function Reviews() {
  return (
    <ul className="reviews">
      {REVIEWS.map((r, i) => (
        <li key={r.name} className="rv" style={{ '--rd': `${(i % 2) * 90}ms` }}>
          <figure className="review">
            <div>
              <div className="review__stars" aria-label="5 stars"><Stars /></div>
              <blockquote>“{r.quote}”</blockquote>
            </div>
            <figcaption className="review__who">
              <span className="review__av" aria-hidden="true">{r.name[0]}</span>
              <span className="review__meta"><strong>{r.name}</strong><span className="review__role">{r.role}</span></span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}

/* ---------- Page hero for inner pages ---------- */
export function PageHero({ watermark, crumb, lines, lead, aside, children }) {
  return (
    <section className="phero">
      <div className="phero__wm rv" data-gate="" aria-hidden="true">{watermark}</div>
      <div className="shell phero__in">
        <div className="phero__main">
          <nav className="phero__crumbs rv" data-gate="" style={{ '--ry': '10px', '--rd': '200ms' }} aria-label="Breadcrumb">
            <a href="/">Home</a>
            {crumb.map((c, i) => (
              <span key={c.label} style={{ display: 'contents' }}>
                <span aria-hidden="true">/</span>
                {c.href && i < crumb.length - 1 ? <a href={c.href}>{c.label}</a> : <span>{c.label}</span>}
              </span>
            ))}
          </nav>
          <h1 className="phero__h1 lines" data-gate="" data-delay="250" data-stagger="120" data-lines={lines.join('|')}>
            {lines.map((l, i) => <span key={l}>{l}{i < lines.length - 1 && <br />}</span>)}
          </h1>
          {lead && <p className="phero__lead rv" data-gate="" style={{ '--ry': '12px', '--rd': '600ms' }}>{lead}</p>}
          {children}
        </div>
        {aside && <aside className="phero__aside rv" data-gate="" style={{ '--ry': '16px', '--rs': 0.96, '--rd': '450ms' }}>{aside}</aside>}
      </div>
    </section>
  )
}

export function Facts({ items }) {
  return (
    <ul className="facts">
      {items.map(([k, v]) => <li key={k}><span className="k">{k}</span><span className="v">{v}</span></li>)}
    </ul>
  )
}

export function SecHead({ eyebrow, title, lead, split = true, pill, children }) {
  return (
    <div className={`sec-head${split ? ' sec-head--split' : ''}`}>
      <div>
        <div className="rv" style={{ '--ry': '10px' }}><span className={`eyebrow${pill ? ' eyebrow--pill' : ''}`}>{eyebrow}</span></div>
        <h2 className="sec-h2 lines" data-delay="120" style={{ marginTop: '1.25rem' }}>{title}</h2>
      </div>
      {lead && <p className="sec-lead rv" style={{ '--ry': '12px', '--rd': '150ms' }}>{lead}</p>}
      {children}
    </div>
  )
}
