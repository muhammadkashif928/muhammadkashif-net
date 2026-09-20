import Image from 'next/image'

const startingPoints = [
  { number: '01', title: 'Launching a product?', copy: 'Start with a complete visual story, from the main image to your brand store.', href: '/order/full-listing-design/', label: 'Explore the full package' },
  { number: '02', title: 'Getting overlooked?', copy: 'Give shoppers a clearer reason to click with stronger main images and infographics.', href: '/order/main-image-optimization/', label: 'Improve your first impression' },
  { number: '03', title: 'Ready to build your brand?', copy: 'Bring your catalog together with A+ Content, a Brand Story and a cohesive storefront.', href: '/order/amazon-brand-store/', label: 'Build your brand presence' },
]
const categories = [
  { image: 'beauty', title: 'Beauty & personal care', copy: 'Texture, ingredients and the details that build trust.', alt: 'Skincare and fragrance concept products on a peach studio background' },
  { image: 'home', title: 'Home & everyday essentials', copy: 'Show the scale, materials and everyday possibilities.', alt: 'Ceramic mug, water bottle and kitchen utensils in a sage studio setting' },
  { image: 'electronics', title: 'Tech, fashion & lifestyle', copy: 'Make features clear and help shoppers picture the fit.', alt: 'Headphones, a portable speaker and a sneaker on pale stone plinths' },
]
const questions = [
  ['Do you work with my product category?', 'Yes. I welcome brands across beauty, home, electronics, fashion, wellness, pet supplies and beyond. The visual approach is tailored to your product, audience and marketplace.'],
  ['What should I send to get started?', 'Send your product link or ASIN, current photos, brand assets and the goal for your project. If you are launching, share the product details and any available photography.'],
  ['Can you work with my existing product photos?', 'Yes. I can assess your photos for retouching, compositing and AI-assisted lifestyle work. If new photography is needed, we will clarify that before the design work begins.'],
  ['What does a project cost?', 'Service prices and starting scopes are listed above. Each order page explains its deliverables, revision allowance and estimated turnaround. Additional products or work are quoted separately.'],
  ['How do you use AI-generated images?', 'AI can help create environments, props and creative concepts. Product details must remain accurate, and the final visuals are reviewed against your references. The category artwork on this page is illustrative concept work.'],
  ['Will I work directly with you?', 'Yes. You work directly with Muhammad Kashif on the brief, design direction, feedback and final handoff.'],
]

export function StartingPoints() {
  return <section className="growth-section growth-start" aria-labelledby="start-title"><div className="studio-wrap">
    <div className="growth-section-head"><div><p className="studio-eyebrow">A CLEAR NEXT STEP</p><h2 id="start-title" className="studio-heading">Where does your brand<br /><em>go from here?</em></h2></div><p className="studio-lead">Choose the challenge. I’ll help shape the visuals.</p></div>
    <div className="growth-three-grid">{startingPoints.map(item => <a className="growth-start-card" href={item.href} key={item.number}><span className="growth-number">{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><span className="growth-card-link">{item.label} ↗</span></a>)}</div>
  </div></section>
}

export function ProductCategories() {
  return <section id="categories" className="growth-section growth-categories" aria-labelledby="categories-title"><div className="studio-wrap">
    <div className="growth-section-head"><div><p className="studio-eyebrow">ONE DESIGN PARTNER. EVERY KIND OF PRODUCT.</p><h2 id="categories-title" className="studio-heading">Your category.<br /><em>A fresh perspective.</em></h2></div><a className="studio-text-link" href="/contact-me/">Tell me about your product ↗</a></div>
    <div className="growth-three-grid">{categories.map(item => <article className="growth-category-card" key={item.image}><Image src={`/images/category-${item.image}-v1.webp`} alt={item.alt} width={960} height={640} sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw" /><div><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}</div>
    <div className="growth-category-note"><p>Also welcoming health &amp; wellness, pet supplies, food, sports, toys and more.</p><span>AI-generated category concepts</span></div>
  </div></section>
}

export function DesignProcess() {
  return <section id="process" className="growth-section" aria-labelledby="process-title"><div className="studio-wrap">
    <div className="growth-section-head"><div><p className="studio-eyebrow">FROM BRIEF TO READY-TO-UPLOAD</p><h2 id="process-title" className="studio-heading">Good design.<br /><em>A straightforward process.</em></h2></div><a className="studio-button" href="/contact-me/">Discuss your project ↗</a></div>
    <ol className="growth-three-grid growth-process">{[
      ['Discover', 'We review your product, competitors and customer questions. Then agree on the scope and creative direction.'],
      ['Design & refine', 'I build the images and content as a coherent set. Your feedback shapes the agreed revision rounds.'],
      ['Deliver & launch', 'Receive your final assets sized for the agreed placements, ready for your listing or brand store.'],
    ].map(([title, copy], index) => <li key={title}><span className="growth-step">{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
  </div></section>
}

export function HomeFAQ() {
  return <section id="questions" className="growth-section growth-faq" aria-labelledby="faq-title"><div className="studio-wrap growth-faq-grid"><div><p className="studio-eyebrow">BEFORE WE START</p><h2 id="faq-title" className="studio-heading">A few things<br /><em>you might ask.</em></h2><p className="studio-lead">Something else on your mind?</p><a className="studio-text-link" href="/contact-me/">Ask me directly ↗</a></div><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
}
