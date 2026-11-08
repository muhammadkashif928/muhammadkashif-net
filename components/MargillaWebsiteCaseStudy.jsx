// Margilla — SaaS website case study, in the Lumora design.
// Content lives in data/case-studies/margilla-website.js.
import LxShell from '@/components/lx/LxShell'
import { DeviceFrames } from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext } from '@/components/lx/Case'
import {
  results, meta, heroDevices, phones, introParagraphs, features,
} from '@/data/case-studies/margilla-website'

export default function MargillaWebsiteCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Margilla — Website"
          eyebrow="Website design & development · SaaS — TikTok Shop analytics"
          lines={['Margilla', 'SaaS Website']}
          lead="The website for a profit analytics tool built for TikTok Shop sellers — designed and coded from scratch to show the real dashboard, put the price up front and turn visitors into sign-ups."
          meta={[
            ['Client', meta.client],
            ['Platform', meta.platform],
            ['Scope', meta.scope],
            ['Live site', <a key="live" href={meta.liveUrl} target="_blank" rel="noopener noreferrer" className="alink"><span>{meta.liveLabel}</span></a>],
            ['Languages', meta.languages],
            ['Built with', meta.stack],
            ['Published', meta.published],
          ]}
        />

        <CaseBlock eyebrow="The site" title="The homepage, top to bottom">
          <div className="prose rv" style={{ marginBottom: '3rem' }}>
            {introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="rv"><DeviceFrames items={heroDevices} full /></div>
          <div className="rv" style={{ marginTop: '2rem' }}>
            <Pill variant="dark" arrow="up-right" href={meta.liveUrl} external>Visit the live site</Pill>
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="On a phone" title="Built for the thumb" lead="Sellers check TikTok Shop on their phones, so every section — dashboard screens included — has its own mobile layout. Tap the screen to scroll the full homepage.">
          <div className="rv"><DeviceFrames items={phones} /></div>
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
                <p className="eyebrow eyebrow--light">Launching a SaaS or app?</p>
                <h2>A website that shows the product and sells the plan.</h2>
                <p>Designed and built from scratch — fast, mobile-first and built around your real product.</p>
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
