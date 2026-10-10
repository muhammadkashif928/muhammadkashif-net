import LxShell from '@/components/lx/LxShell'
import { Icon, Pill, Stars } from '@/components/lx/Icons'
import { FeaturedCards, ServiceRows } from '@/components/lx/Sections'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  // 54 chars — Google shows ~60; keep under to avoid truncation (S-1)
  title: 'Amazon Listing Design & A+ Content for Every Category',
  // 142 chars — Google shows ~155 (S-2)
  description: 'Amazon listing design across all product categories: main images, infographics, A+ Content and Brand Stores that help your brand stand out.',
  path: '/',
  image: '/images/profile.avif',
  imageAlt: 'Muhammad Kashif — Amazon Brand Designer and A+ Content Specialist in Kuching, Malaysia',
})

const HIGHLIGHTS = [
  ['Main images', 'Crafted to convert.'],
  ['Infographics', 'Benefits, made clear.'],
  ['A+ & Brand Stores', 'Designed to last.'],
]
const BRANDS = ['Angelus', 'Eagle Shoe Care', 'Leather Hero', 'Lincoln']

export default function Home() {
  return (
    <LxShell>
      <main id="main-content">

        {/* Hero: black-and-white portrait; the cursor paints in a warm copper-graded version with the gold logo */}
        <section className="hero" id="home">
          <div className="liquid" id="liquid" data-reveal="/images/lx/hero-reveal.jpg" data-reveal-tint="#c4632a" data-reveal-tint-strength="0.82">
            <img src="/images/lx/hero.jpg" alt="Muhammad Kashif in a beige cap, round glasses and a black shirt, resting his chin on his hand" fetchPriority="high" decoding="async" width="2000" height="1333" />
            <canvas aria-hidden="true" />
          </div>
          <div className="hero__vignette" />
          <div className="hero__wm rv" data-gate="" aria-hidden="true">KASHIF</div>

          <div className="shell hero__grid">
            <div className="hero__left">
              <div className="rv" data-gate="" style={{ '--ry': '10px', '--rd': '200ms' }}><span className="eyebrow">Muhammad Kashif · Amazon Brand Designer</span></div>
              <h1 className="hero__h1 lines" data-gate="" data-delay="250" data-stagger="120" data-lines="Make your product|the one|they notice.">Make your product<br />the one<br />they notice.</h1>
              <div className="rating rv" data-gate="" style={{ '--ry': '10px', '--rd': '650ms' }}>
                <span className="rating__stars" aria-label="5 stars"><Stars /></span>
                <span className="rating__txt">200+ products designed</span>
              </div>
              <div className="ctas rv" data-gate="" style={{ '--ry': '10px', '--rd': '750ms' }}>
                <Pill variant="dark" data-go="contact">Get a project quote</Pill>
                <Pill variant="outline" arrow={null} data-go="work">See the work</Pill>
              </div>
            </div>

            <div className="hero__right">
              <div className="hcard-wrap rv" data-gate="" style={{ '--ry': '16px', '--rs': 0.96, '--rd': '400ms' }}>
                <div className="hcard">
                  <div className="hcard__row" data-action="card-next" role="button" tabIndex={0} aria-label="Next highlight">
                    <div className="hcard__tile"><Icon name="logo" /></div>
                    <div className="hcard__panel">
                      <div className="hcard__slot" aria-live="polite">
                        {HIGHLIGHTS.map(([cap, title], i) => (
                          <div key={cap} className={`hcard__item${i === 0 ? ' is-active' : ''}`}><p className="hcard__cap">{cap}</p><p className="hcard__title">{title}</p></div>
                        ))}
                      </div>
                      <div className="hcard__foot">
                        <div className="hcard__dots" aria-hidden="true">{HIGHLIGHTS.map((h, i) => <span key={h[0]} className={i === 0 ? 'is-active' : undefined} />)}</div>
                        <div className="hcard__ctrl">
                          <button type="button" className="prev" data-action="card-prev" aria-label="Previous"><Icon name="arrow" /></button>
                          <button type="button" data-action="card-next" aria-label="Next"><Icon name="arrow" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="partners rv" data-gate="" style={{ '--ry': '14px', '--rd': '550ms' }}>
                <p className="partners__lbl">A few brands I&apos;ve worked with</p>
                <ul>{BRANDS.map(b => <li key={b}><span className="partner"><Icon name="dot" />{b}</span></li>)}</ul>
              </div>
            </div>
          </div>

          <div className="shell hero__status rv" data-gate="">
            <span>8+ years of craft</span>
            <span className="mid">Kuching, Sarawak · working worldwide</span>
            <span className="scroll">Scroll to explore <span aria-hidden="true">↓</span></span>
          </div>
        </section>

        {/* About */}
        <section className="about" id="about">
          <div className="shell about__grid">
            <div className="about__globe">
              <div className="about__orb">
                <Icon name="globe" className="i about__bigglobe" />
                <figure className="about__photo rv">
                  <img src="/images/kashif-portrait-ivory-v1.webp" alt="Muhammad Kashif in a denim jacket, cream cap and sunglasses" loading="lazy" decoding="async" />
                  <figcaption className="about__status">Available for new projects</figcaption>
                </figure>
              </div>
              <span className="eyebrow">The person behind the pixels</span>
              <div className="about__note rv">
                <Icon name="globe" />
                <span>Based in Kuching, Sarawak — working remotely with US, UK &amp; Canada brands.</span>
              </div>
            </div>
            <div className="about__stmt">
              <h2 className="about__h2 words">I&apos;m Kashif, an Amazon brand designer with 8+ years helping products <span className="muted">across every category look their best — with hands-on design craft and AI-assisted retouching in every image.</span></h2>
              <div className="about__foot rv">
                <div>
                  <p className="lbl">Find me online</p>
                  <div className="socials">
                    <a className="soc soc--accent" href="https://www.linkedin.com/in/muhammad-kashif-228554243" target="_blank" rel="noopener" aria-label="LinkedIn"><span className="soc__i">in</span></a>
                    <a className="soc" href="https://instagram.com/muhammadkashif928" target="_blank" rel="noopener" aria-label="Instagram"><span className="soc__i">ig</span></a>
                    <a className="soc" href="https://www.upwork.com/freelancers/~016edc19243e405472" target="_blank" rel="noopener" aria-label="Upwork"><span className="soc__i">up</span></a>
                  </div>
                </div>
                <Pill variant="outline" href="/about/">About me</Pill>
              </div>
            </div>
          </div>
        </section>

        {/* Seen → Clicked → Sold */}
        <section className="band" aria-label="Seen, clicked, sold">
          <ul className="shell">
            <li className="rv" style={{ '--rd': '0ms' }}><div className="tile tile--light">Seen</div></li>
            <li className="rv" style={{ '--rd': '120ms' }}><div className="tile tile--accent">Clicked</div></li>
            <li className="rv" style={{ '--rd': '240ms' }}><div className="tile tile--dark" aria-label="then"><Icon name="arrow" /></div></li>
            <li className="rv" style={{ '--rd': '360ms' }}><div className="tile tile--ghost">Sold</div></li>
          </ul>
        </section>

        {/* Selected work */}
        <section className="works" id="work">
          <div className="shell works__in">
            <div className="works__head">
              <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow eyebrow--pill">Case studies</span></div>
              <h2 className="works__h2 lines" data-delay="120">Selected work</h2>
            </div>
            <FeaturedCards />
            <div className="works__more rv">
              <Pill variant="outline" href="/my-portfolio/">View all work</Pill>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services" id="what-i-deliver">
          <div className="shell services__in">
            <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow">What I deliver</span></div>
            <h2 className="services__h2 lines" data-delay="120">Design at every touchpoint.</h2>
            <ServiceRows />
            <div className="services__more rv">
              <Pill variant="outline" href="/services/">Scope, turnaround &amp; FAQ</Pill>
            </div>
          </div>
        </section>

        {/* Categories (the old navigation links to /#categories) */}
        <section className="section" id="categories">
          <div className="shell section__in section__in--tight section__in--flush">
            <div className="sec-head">
              <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow">One design partner. Every kind of product.</span></div>
              <h2 className="sec-h2 lines" data-delay="120">Your category. A fresh perspective.</h2>
            </div>
          </div>
          <div className="band">
            <ul className="shell">
              <li className="rv" style={{ '--rd': '0ms' }}><div className="tile tile--light">Beauty</div></li>
              <li className="rv" style={{ '--rd': '120ms' }}><div className="tile tile--accent">Home</div></li>
              <li className="rv" style={{ '--rd': '240ms' }}><div className="tile tile--dark">Tech</div></li>
              <li className="rv" style={{ '--rd': '360ms' }}><div className="tile tile--ghost">&amp; more</div></li>
            </ul>
          </div>
        </section>

        {/* Social proof */}
        <section className="stats" id="reviews" aria-label="Social proof">
          <div className="shell stats__in">
            <div className="stats__panel rv">
              <span className="eyebrow eyebrow--light">Social proof</span>
              <h2 className="stats__h2 lines" data-delay="120">Good work. Lasting relationships.</h2>
              <ul className="stats__grid">
                <li className="rv stat" style={{ '--rd': '0ms' }}><div className="stat__num"><span data-count="200">0</span>+</div><p className="stat__lbl">Products designed</p></li>
                <li className="rv stat" style={{ '--rd': '90ms' }}><div className="stat__num"><span data-count="50">0</span>+</div><p className="stat__lbl">Happy clients</p></li>
                <li className="rv stat" style={{ '--rd': '180ms' }}><div className="stat__num"><span data-count="8">0</span>+</div><p className="stat__lbl">Years of craft</p></li>
                <li className="rv stat" style={{ '--rd': '270ms' }}><div className="stat__num"><span data-count="5" data-decimals="1">0.0</span></div><p className="stat__lbl">Average rating</p></li>
              </ul>
              <ul className="quotes">
                <li className="quote rv" style={{ '--rd': '0ms' }}><blockquote><p>“This is now my second time working with this guy. He went past my expectations and beyond!”</p><footer>Adrian Jallad — Upwork · Amazon Listing</footer></blockquote></li>
                <li className="quote rv" style={{ '--rd': '90ms' }}><blockquote><p>“Excellent job!!! Good communication. He was always willing to help me. He has good knowledge on Amazon. Super recommended!!!”</p><footer>Ciro Rossi — Fiverr · Design Quality</footer></blockquote></li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </LxShell>
  )
}
