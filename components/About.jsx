import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="studio-about">
      <div className="studio-wrap studio-about-grid">
        <figure className="studio-portrait"><Image src="/images/kashif-portrait-ivory-v1.webp" alt="Muhammad Kashif wearing a denim jacket, cream cap and sunglasses" width={800} height={1000} sizes="(min-width: 900px) 40vw, 100vw" /><figcaption>MUHAMMAD KASHIF / DESIGNER &amp; CREATIVE PARTNER</figcaption></figure>
        <div>
          <p className="studio-eyebrow">THE PERSON BEHIND THE PIXELS</p>
          <h2 className="studio-heading">Your products.<br /><em>My kind of detail.</em></h2>
          <p className="studio-lead">I’m Kashif, an Amazon brand designer with 8+ years of experience helping products across categories look their best.</p>
          <p className="studio-lead">From everyday essentials to premium launches, I bring hands-on design craft and AI-assisted retouching to every image, every detail, every launch.</p>
          <div className="studio-skill-tags"><span>Listing design</span><span>A+ content</span><span>Brand stores</span><span>Product retouching</span></div>
          <a className="studio-text-link" href="/contact-me/">Let’s make something worth a closer look ↗</a>
        </div>
      </div>
    </section>
  )
}
