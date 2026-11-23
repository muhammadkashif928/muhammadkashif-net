// Designer Trends Inc. — company website case study, in the Lumora design.
// Content lives in data/case-studies/designer-trends-inc-website.js.
import LxShell from '@/components/lx/LxShell'
import { DeviceFrames } from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext } from '@/components/lx/Case'
import {
  results, meta, heroDevices, pages, phones, introParagraphs, features,
} from '@/data/case-studies/designer-trends-inc-website'

export default function DesignerTrendsIncWebsiteCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Designer Trends Inc. — Website"
          eyebrow="Website design & development · Footwear & leather care group"
          lines={['Designer Trends Inc.', 'Company Website']}
          lead="A fully custom company website for the group behind Eagle, Leather Hero, Fiammé and ToeArmor — designed and coded from scratch to present the brands and bring in wholesale and distribution partners."
          meta={[
            ['Client', meta.client],
            ['Platform', meta.platform],
            ['Scope', meta.scope],
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

        <CaseBlock eyebrow="Inside pages" title="Brands and company story" lead="The Brands page gives each label its own section and store link; the About page covers the history, people and values a retailer wants to see first. Click a screen to scroll the full page.">
          <div className="rv"><DeviceFrames items={pages} /></div>
        </CaseBlock>

        <CaseBlock eyebrow="On a phone" title="Built for the thumb" lead="Every section has its own mobile layout — not a squeezed desktop. Tap the screen to scroll the full homepage.">
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
                <p className="eyebrow eyebrow--light">Need a website for your company?</p>
                <h2>A company site that works as hard as your brands.</h2>
                <p>Designed and built from scratch — fast, mobile-first and made to bring in the right enquiries.</p>
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
