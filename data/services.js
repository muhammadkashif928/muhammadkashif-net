/**
 * Service catalog — the single source of truth for what can be bought.
 *
 * `priceUsd` is what Stripe charges, in whole US dollars. The payment API
 * converts it to cents itself and never reads an amount off the request
 * body, so editing a number here is the only way to change what a customer
 * actually pays. Anything the browser sends about price is ignored.
 *
 * `fromPrice` only changes the label ("FROM $1,200" vs "$350"). Both charge
 * the listed amount up front; anything beyond base scope is invoiced after
 * the discovery call.
 */

// Questions every order asks, whatever the service.
export const baseFields = [
  { name: 'brand',       label: 'Brand name',            type: 'text',   required: true,  placeholder: 'e.g. Eagle Shoe Care' },
  { name: 'marketplace', label: 'Marketplace',           type: 'select', required: true,  options: ['Amazon US', 'Amazon UK', 'Amazon CA', 'Amazon EU', 'Amazon AU', 'Shopify', 'Walmart', 'Other'] },
  { name: 'category',    label: 'Product category',      type: 'select', required: true,  options: ['Leather care', 'Shoe care', 'Footwear', 'Leather goods / accessories', 'Beauty / personal care', 'Home', 'Other'] },
  { name: 'listingUrl',  label: 'ASIN or listing URL',   type: 'text',   required: false, placeholder: 'B0XXXXXXXX or https://amazon.com/dp/...', help: 'Leave blank if the product has not launched yet.' },
  { name: 'deadline',    label: 'Target delivery date',  type: 'date',   required: false },
  { name: 'assetsUrl',   label: 'Link to your photos / brand assets', type: 'text', required: false, placeholder: 'Google Drive, Dropbox or WeTransfer link' },
  { name: 'notes',       label: 'Anything else I should know', type: 'textarea', required: false, placeholder: 'Competitors you want to beat, features to highlight, brand guidelines...' },
]

export const services = [
  {
    slug: 'main-image-optimization',
    num: '01',
    title: 'MAIN IMAGE OPTIMIZATION',
    priceUsd: 350,
    fromPrice: false,
    unit: 'per product',
    desc: 'Your most important asset. I design and optimize Amazon main images with clean, compliant white backgrounds that maximize click-through rate from search results.',
    turnaround: '2–3 business days',
    deliverables: [
      'One Amazon-compliant main image (pure white RGB 255/255/255)',
      '2000×2000px minimum, ready to upload to Seller Central',
      'Background removal, retouching and lighting correction',
      'Two revision rounds',
    ],
    fields: [
      { name: 'productCount', label: 'How many products?',      type: 'select', required: true, options: ['1', '2', '3', '4', '5+'], help: 'Checkout covers the first product. Additional products are invoiced at the same rate after we confirm scope.' },
      { name: 'hasPhotos',    label: 'Do you have product photos?', type: 'select', required: true, options: ['Yes — studio quality', 'Yes — but they need work', 'No — I need photography guidance'] },
    ],
  },
  {
    slug: 'product-infographics',
    num: '02',
    title: 'PRODUCT INFOGRAPHICS',
    priceUsd: 1200,
    fromPrice: true,
    unit: '7–9 image set',
    desc: 'Benefit-led side images that communicate features, scale, and value at a glance. Each infographic answers a buying question and handles an objection before it costs you the sale.',
    turnaround: '5–7 business days',
    deliverables: [
      'A 7–9 image set designed as one narrative sequence',
      'Benefit-led copy direction for every panel',
      'Scale, usage and comparison visuals',
      'Mobile-legibility checked at Amazon thumbnail size',
      'Two revision rounds',
    ],
    fields: [
      { name: 'imageCount', label: 'How many images do you need?', type: 'select', required: true, options: ['7', '8', '9', 'Not sure — advise me'] },
      { name: 'features',   label: 'Top features to highlight',    type: 'textarea', required: true, placeholder: 'List the 3–5 selling points that matter most to your buyer.' },
    ],
  },
  {
    slug: 'a-plus-content',
    num: '03',
    title: 'A+ CONTENT',
    priceUsd: 950,
    fromPrice: true,
    unit: '5–7 modules',
    desc: 'Immersive A+ Content (Enhanced Brand Content) that tells your brand story, explains value, and handles objections visually to lift conversion and reduce returns.',
    turnaround: '5–7 business days',
    deliverables: [
      '5–7 A+ modules laid out to Amazon spec',
      'Comparison chart and feature modules',
      'All assets sized per module type, upload-ready',
      'Alt text written for every image',
      'Two revision rounds',
    ],
    fields: [
      { name: 'tier',          label: 'Standard or Premium A+?', type: 'select', required: true, options: ['Standard A+', 'Premium A+ (brand registered)', 'Not sure — advise me'] },
      { name: 'brandRegistry', label: 'Are you Brand Registered?', type: 'select', required: true, options: ['Yes', 'No', 'In progress'] },
    ],
  },
  {
    slug: 'amazon-brand-story',
    num: '04',
    title: 'AMAZON BRAND STORY',
    priceUsd: 450,
    fromPrice: false,
    unit: 'cross-sell carousel',
    desc: 'The cross-sell carousel above your A+ Content. I design a Brand Story that builds trust, links your catalog, and keeps shoppers inside your brand instead of clicking to competitors.',
    turnaround: '3–4 business days',
    deliverables: [
      'Full Brand Story carousel (all card types)',
      'Brand logo and background treatment',
      'Cross-sell cards linked to your other ASINs',
      'Two revision rounds',
    ],
    fields: [
      { name: 'asinCount', label: 'How many ASINs to cross-link?', type: 'select', required: true, options: ['1–3', '4–6', '7–10', '10+'] },
    ],
  },
  {
    slug: 'amazon-brand-store',
    num: '05',
    title: 'AMAZON BRAND STORE',
    priceUsd: 1400,
    fromPrice: true,
    unit: 'multi-page',
    desc: 'A custom multi-page Amazon Brand Store (Storefront) that showcases your full catalog, strengthens brand identity, and gives your ads and shoppers a premium destination.',
    turnaround: '7–10 business days',
    deliverables: [
      'Multi-page Storefront design (home + category pages)',
      'Navigation structure and shoppable tiles',
      'Hero banners sized for desktop and mobile',
      'All assets exported to Amazon Store Builder spec',
      'Two revision rounds',
    ],
    fields: [
      { name: 'pageCount',   label: 'How many pages?',        type: 'select', required: true, options: ['2–3', '4–5', '6+', 'Not sure — advise me'] },
      { name: 'productLines', label: 'Product lines to feature', type: 'textarea', required: true, placeholder: 'e.g. Cleaners, Conditioners, Polishes, Accessories' },
    ],
  },
  {
    slug: 'full-listing-design',
    num: '06',
    title: 'FULL LISTING DESIGN',
    priceUsd: 2800,
    fromPrice: true,
    unit: 'everything above',
    desc: 'The complete package — main images, infographics, A+ Content, Brand Story, and Brand Store designed as one cohesive, high-converting system from a single designer.',
    turnaround: '10–14 business days',
    deliverables: [
      'Main image + full 7–9 image gallery set',
      '5–7 module A+ Content',
      'Brand Story cross-sell carousel',
      'Multi-page Brand Store',
      'Competitor analysis before design starts',
      'Three revision rounds across the whole system',
    ],
    fields: [
      { name: 'asinCount', label: 'How many ASINs in this launch?', type: 'select', required: true, options: ['1', '2–3', '4–6', '7+'] },
      { name: 'features',  label: 'What is the product and who buys it?', type: 'textarea', required: true, placeholder: 'Product, buyer, and the competitor you most want to beat.' },
    ],
  },
]

export function getService(slug) {
  return services.find((s) => s.slug === slug) || null
}

/** Display helper — "$350" or "from $1,200", matching the published wording. */
export function priceLabel(service) {
  const amount = `$${service.priceUsd.toLocaleString('en-US')}`
  return service.fromPrice ? `from ${amount}` : amount
}

/** Just the number, for buttons that already say what the action is. */
export function priceAmount(service) {
  return `$${service.priceUsd.toLocaleString('en-US')}`
}

/** Every field an order for this service should collect, in render order. */
export function orderFields(service) {
  return [...baseFields.slice(0, 3), ...(service.fields || []), ...baseFields.slice(3)]
}
