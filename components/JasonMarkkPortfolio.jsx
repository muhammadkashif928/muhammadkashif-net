// Jason Markk Repel — AI + Photoshop lifestyle composite case study, in the Lumora design.
import LxShell from '@/components/lx/LxShell'
import Gallery from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseText, CaseBlock, CaseSteps, CaseNext } from '@/components/lx/Case'

const BEFORE = { src: '/1768694862919.jpeg', width: 607, height: 1440, alt: 'Before — the Jason Markk Repel spray as a clean white-background product shot', slot: 'Before — clean product shot', caption: 'Standard white-background product image. Clear and Amazon-compliant — but no story.' }
const AFTER = { src: '/1768694867521.jpeg', width: 1536, height: 1536, alt: 'After — the Jason Markk Repel spray with a white HOKA sneaker composited behind it', slot: 'After — AI + Photoshop lifestyle composite', caption: 'A HOKA sneaker prop composited behind the spray bottle using AI generation and Photoshop retouching. Context creates desire.' }
const COMPARE = { src: '/1768694869921.jpeg', width: 1536, height: 1536, alt: 'Before and after comparison card for the Jason Markk Repel spray', slot: 'Before vs after — comparison card', caption: 'Left is clarity, right is story. The after image tells buyers exactly how the product fits into their life.' }

const approach = [
  { n: '01', title: 'Analyse the use case', body: 'Jason Markk Repel is a shoe and sneaker protector. The target buyer is a sneakerhead or footwear enthusiast, so a sneaker prop was the obvious, contextually relevant choice.' },
  { n: '02', title: 'Generate the prop with AI', body: 'A HOKA sneaker in matching white and neutral tones was generated with AI image tools, sized and positioned to work with the spray bottle.' },
  { n: '03', title: 'Composite in Photoshop', body: 'The sneaker was composited behind the product — depth, shadow and lighting adjusted so both feel photographed together.' },
  { n: '04', title: 'Refine & balance', body: 'Final colour grading, shadow softening and edge refinement keep the product the focal point while the prop adds context without distraction.' },
]

export default function JasonMarkkPortfolio() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Jason Markk — Repel Spray"
          eyebrow="AI + Photoshop · Lifestyle composite · Image optimisation"
          lines={['Jason Markk Repel', 'Lifestyle composite']}
          lead="Left or right — which makes you click Buy? A standard product shot turned into a lifestyle visual that instantly shows what the product is for and how it fits into the buyer's life."
          meta={[
            ['Product', 'Jason Markk Repel spray'],
            ['Prop', 'HOKA sneaker (AI-generated)'],
            ['Technique', 'Lifestyle composite'],
            ['Software', 'AI + Adobe Photoshop'],
            ['Published', 'Jun 27, 2026'],
          ]}
          image={{ src: '/images/lx/work/jason-markk-repel.webp', alt: 'Jason Markk Repel spray beside a white sneaker on a dark surface', width: 1536, height: 1024 }}
        />

        <CaseBlock eyebrow="Before vs after" title="Which one makes you click Buy?" lead="Context creates desire. The left is clarity; the right is a story. Tap any image to enlarge.">
          <div className="rv"><Gallery images={[COMPARE]} columns={1} showCaptions={false} aspect="1 / 1" className="gal--wide" /></div>
          <div className="rv" style={{ marginTop: '1.5rem' }}><Gallery images={[BEFORE, AFTER]} columns={2} aspect="1 / 1" className="gal--contain" /></div>
        </CaseBlock>

        <CaseBlock eyebrow="The process" title="AI + Photoshop compositing">
          <CaseSteps items={approach} />
        </CaseBlock>

        <CaseText eyebrow="The write-up" title="Context creates desire">
          <p>The original Jason Markk Repel image is a technically correct product shot — clean white background, good centring, label readable. It does its job. But it does not <em>sell</em>.</p>
          <p>The buyer looking at a sneaker protector spray already owns sneakers they care about. The moment you show the product beside a pair of premium sneakers, you are not just showing them what they are buying — you are showing them the outcome. The shoe they love, protected. That is desire, not clarity.</p>
          <h2>Why AI + Photoshop is the right tool</h2>
          <p>Traditional lifestyle compositing would mean sourcing a physical prop, arranging a studio shoot and reshooting the product in context — expensive, slow and inflexible. AI generation for the prop and Photoshop for the composite gives you:</p>
          <ul>
            <li><strong>Speed</strong> — prop generation and compositing in a fraction of the time of a studio shoot</li>
            <li><strong>Control</strong> — exact colour, tone and angle chosen to complement the product</li>
            <li><strong>Cost efficiency</strong> — no studio, no photographer, no physical prop required</li>
            <li><strong>Flexibility</strong> — any number of prop variants, easy to A/B test</li>
          </ul>
          <h2>Is AI becoming essential for product retouching?</h2>
          <p>AI is not replacing the designer — it is removing the friction between concept and execution. The judgement of <em>what prop to use</em>, <em>where to position it</em>, <em>how to light it</em> and <em>how to make it feel real</em> is still the designer’s work. AI just means you can test and iterate ten times faster.</p>
          <p>For product image optimisation in 2026, AI generation combined with professional Photoshop compositing is not a shortcut — it is the new professional standard.</p>
        </CaseText>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Want lifestyle composites?</p>
                <h2>Context creates desire. Let’s build yours.</h2>
                <p>Story-driven visuals with AI + Photoshop — faster and more cost-effective than a studio shoot.</p>
              </div>
              <div className="ccta__actions">
                <Pill variant="light" arrow="up-right" data-go="contact" data-service="Lifestyle composite">Start a project</Pill>
                <Pill variant="outline" arrow={null} href="/services/product-infographics/" className="pill--on-dark">See the services</Pill>
              </div>
            </div>
          </div>
        </section>

        <CaseNext current="jason-markk-lifestyle-composite" />
      </main>
    </LxShell>
  )
}
