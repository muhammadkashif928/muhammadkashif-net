// Leather Hero — brand website case study, in the Lumora design.
// Content lives in data/case-studies/leather-hero-website.js.
import LxShell from '@/components/lx/LxShell'
import { DeviceFrames } from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext, SOFTWARE } from '@/components/lx/Case'
import {
  results, meta, heroDevices, pages, phones, introParagraphs, features,
} from '@/data/case-studies/leather-hero-website'

export default function LeatherHeroWebsiteCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Leather Hero — Website"
          eyebrow="Website design & development · Leather care brand"
          lines={['Leather Hero', 'Brand Website']}
          lead="A fully custom website for a leather-care brand that sells on Amazon — 89 pages designed and coded from scratch, where every product ends in one tracked Buy at Amazon button."
          meta={[
            ['Client', meta.client],
            ['Platform', meta.platform],
            ['Scope', meta.scope],
            ['Live site', <a key="live" href={meta.liveUrl} target="_blank" rel="noopener noreferrer" className="alink"><span>{meta.liveLabel}</span></a>],
            ['Software', SOFTWARE],
            ['Published', meta.published],
          ]}
        />

        <CaseBlock eyebrow="The site" title="One build, every screen">
          <div className="rv"><DeviceFrames items={heroDevices} className="devs--hero" /></div>
          <div className="prose rv" style={{ marginTop: '3rem' }}>
            {introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="rv" style={{ marginTop: '2rem' }}>
            <Pill variant="dark" arrow="up-right" href={meta.liveUrl} external>Visit the live site</Pill>
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="Key pages" title="Six pages, six jobs" lead="Every page type has one job in the buyer’s path to Amazon. Tap any page to scroll through all of it.">
          <div className="rv"><DeviceFrames items={pages} className="devs--pages" /></div>
        </CaseBlock>

        <CaseBlock eyebrow="On a phone" title="Built for the thumb" lead="Most visits come from a phone, so every section has its own mobile layout — not a squeezed desktop. Tap a screen to scroll the full page.">
          <div className="rv"><DeviceFrames items={phones} className="devs--phones" /></div>
        </CaseBlock>

        <CaseBlock eyebrow="Under the hood" title="What is built in">
          <ul className="feats rv">
            {features.map(f => <li key={f.title}><h3>{f.title}</h3><p>{f.text}</p></li>)}
          </ul>
        </CaseBlock>

        <CaseResults results={results} />

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Selling on Amazon without a home of your own?</p>
                <h2>A brand website that sends buyers to the right listing.</h2>
                <p>Designed and built from scratch — fast, mobile-first and tracked, so you can see which pages sell.</p>
              </div>
              <div className="ccta__actions">
                <Pill variant="light" arrow="up-right" data-go="contact" data-service="Website Design & Development">Start a project</Pill>
                <Pill variant="outline" arrow={null} href="/services/" className="pill--on-dark">See services</Pill>
              </div>
            </div>
          </div>
        </section>

        <CaseNext current={meta.slug} />
      </main>
    </LxShell>
  )
}
