import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="studio-hero">
      <div className="studio-wrap studio-hero-grid">
        <div className="studio-intro">
          <p className="studio-eyebrow"><span className="availability-dot" /> MUHAMMAD KASHIF · BRAND DESIGNER</p>
          <h1>Great products.<br /> <em>Unmissable</em><br /> first impressions.</h1>
          <p className="studio-lead">Amazon listing design for products of every kind — beauty, home, electronics, fashion and beyond. Thoughtful visuals that turn a closer look into a confident purchase.</p>
          <div className="studio-actions">
            <a className="studio-button" href="/my-portfolio/">Explore my work <span>↗</span></a>
            <a className="studio-text-link" href="/contact-me/">Let’s talk →</a>
          </div>
          <div className="studio-credentials"><span><strong>8+</strong> years of craft</span><span><strong>200+</strong> products designed</span></div>
        </div>
        <figure className="studio-hero-art">
          <Image src="/images/product-categories-v2.webp" alt="Creative concept featuring skincare, headphones, homeware, footwear and fragrance products" width={1440} height={960} priority sizes="(min-width: 900px) 55vw, 100vw" />
          <figcaption><span>PRODUCTS, WITH PRESENCE.</span><span>AI concept / art direction</span></figcaption>
          <a href="#about" className="studio-designer-tag"><Image src="/images/kashif-portrait-ivory-v1.webp" width={48} height={48} alt="" /><span>Designed with intention.<small>Meet Kashif ↗</small></span></a>
        </figure>
      </div>
    </section>
  )
}
