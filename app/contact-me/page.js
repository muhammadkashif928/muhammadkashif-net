import LxShell from '@/components/lx/LxShell'
import ContactFields from '@/components/lx/ContactFields'
import { Icon, Pill } from '@/components/lx/Icons'
import { Faq, PageHero, Facts } from '@/components/lx/Sections'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Contact Muhammad Kashif | Hire an E-commerce & Amazon Designer',
  description: "Let's grow your Amazon brand with high-converting main images, product infographics, A+ Content, and Brand Stores — for products across all categories. Contact Muhammad Kashif today.",
  path: '/contact-me/',
  keywords: ['hire Amazon brand designer', 'contact Amazon A+ Content designer', 'Muhammad Kashif contact'],
})

const METHODS = [
  { icon: 'cal', k: 'Book a call', v: 'Listing teardown', s: '10 minutes, no pitch', href: 'https://cal.com/kashifdesign/listing-teardown-call', external: true },
  { icon: 'mail', k: 'Email', v: 'info@muhammadkashif.net', s: 'Best for briefs and files', href: 'mailto:info@muhammadkashif.net' },
  { icon: 'chat', k: 'WhatsApp', v: '+60 17-915 2084', s: 'Quick questions', href: 'https://wa.me/60179152084', external: true },
  { icon: 'briefcase', k: 'Upwork', v: 'Top Rated profile', s: "Hire with Upwork's protection", href: 'https://www.upwork.com/freelancers/~016edc19243e405472', external: true },
]

export default function ContactMe() {
  return (
    <LxShell>
      <main id="main-content">
        <PageHero
          watermark="HELLO"
          crumb={[{ label: 'Contact' }]}
          lines={['Tell me about', 'your product.']}
          lead="Share your product, your goals and what you need designed. I'll help you choose the right scope for your next step. No complex forms — just one message away."
          aside={<Facts items={[
            ['Response', 'Within 24 hours'],
            ['Kuching time', <span key="t" data-clock-time="" suppressHydrationWarning>9:41am</span>],
            ['Working with', 'US, UK, Europe & Canada'],
            ['First call', '10 min, no pitch'],
          ]} />}
        />

        <section className="section">
          <div className="shell section__in">
            <div className="contact__grid">
              <div>
                <div className="rv" style={{ '--ry': '10px', marginBottom: '1.5rem' }}><span className="eyebrow">Choose what suits you</span></div>
                <ul className="cmethods">
                  {METHODS.map((m, i) => (
                    <li key={m.k} className="rv" style={{ '--rd': `${i * 80}ms` }}>
                      <a className="cmethod-link" href={m.href} {...(m.external ? { target: '_blank', rel: 'noopener' } : {})}>
                        <div className="cmethod">
                          <span className="cmethod__ic"><Icon name={m.icon} /></span>
                          <span className="cmethod__txt"><span className="cmethod__k">{m.k}</span><span className="cmethod__v">{m.v}</span><span className="cmethod__s">{m.s}</span></span>
                          <span className="srow__badge"><Icon name="arrow-ur" /></span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="avail rv" style={{ '--ry': '12px' }}>
                  <span><span className="dot" />Available for new projects</span>
                  <span><Icon name="pin" />Kuching, Sarawak, Malaysia</span>
                </div>
              </div>

              <div className="cform rv" data-form-host="">
                <div className="mform-wrap">
                  <div className="modal__head">
                    <span className="modal__kick">Start a project</span>
                    <h2>What are we designing?</h2>
                  </div>
                  <ContactFields location="contact_page" rows={6} placeholder="Your product (link or ASIN), your goals and what you need designed — main image, infographics, A+ Content, Brand Store…" />
                </div>
                <div className="msuccess">
                  <div className="msuccess__badge"><Icon name="logo" /></div>
                  <h2>Request received</h2>
                  <p>Thanks for reaching out — I&apos;ll get back to you within 24 hours.</p>
                  <Pill variant="dark" arrow={null} data-action="form-again">Send another</Pill>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="questions">
          <div className="shell section__in section__in--tight">
            <div className="faq--split">
              <div className="sec-head" style={{ marginBottom: 0 }}>
                <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow">Before we start</span></div>
                <h2 className="sec-h2 lines" data-delay="120">A few things you might ask.</h2>
                <p className="sec-lead rv" style={{ '--ry': '12px', '--rd': '150ms' }}>Prices and scope for every service are on the <a href="/services/" style={{ textDecoration: 'underline', textUnderlineOffset: 3, color: '#111' }}>services page</a>.</p>
              </div>
              <Faq />
            </div>
          </div>
        </section>
      </main>
    </LxShell>
  )
}
