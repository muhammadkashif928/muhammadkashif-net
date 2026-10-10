/**
 * Shopify store design packages — shown on /services/shopify-store-design/.
 *
 * These are quoted projects, not Stripe checkout items: each package starts with a
 * short scoping conversation (the contact pop-up), then an invoice. That is why they
 * live here and not in data/services.js, whose prices Stripe charges directly.
 */

export const shopifyService = {
  slug: 'shopify-store-design',
  num: '07',
  title: 'Shopify Store Design',
  fromUsd: 500,
  unit: 'per store',
  brief: 'A storefront that answers the same buyer questions your listing does.',
}

export const shopifyPackages = [
  {
    id: 'starter',
    name: 'Starter',
    priceUsd: 500,
    from: false,
    fit: 'New brands launching a small catalog',
    includes: [
      'Premium theme setup & configuration',
      'Brand styling — colours, fonts, logo',
      '5 core pages built',
      'Up to 25 products uploaded',
      'Payments & shipping configured',
      'Mobile responsive QA',
      'Basic SEO setup',
    ],
    revisions: '1 revision',
    turnaround: '1–2 weeks',
  },
  {
    id: 'growth',
    name: 'Growth',
    priceUsd: 1400,
    from: false,
    featured: true,
    fit: 'Established brands needing a custom storefront',
    includes: [
      'Everything in Starter, plus:',
      'Custom product detail page design',
      '3 custom sections built to spec',
      'Collection filtering & sorting',
      'Up to 100 products structured',
      'App integrations — reviews, email',
      'Speed optimization pass',
    ],
    revisions: '2 revisions',
    turnaround: '2–4 weeks',
  },
  {
    id: 'b2b',
    name: 'B2B / Wholesale',
    priceUsd: 3000,
    from: true,
    fit: 'Selling retail and wholesale from one store',
    includes: [
      'Everything in Growth, plus:',
      'Wholesale registration & approval flow',
      'Customer tagging & tiered pricing',
      'Gated wholesale catalog',
      'Minimum order & case-pack rules',
      'Quote request / bulk order form',
      'Up to 500 products with B2B pricing',
      'Staff training walkthrough',
    ],
    revisions: '3 revisions',
    turnaround: '4–6 weeks',
  },
]

export const shopifyFaqs = [
  ['Which package fits my brand?', 'Starter suits a new brand launching a small catalog on a premium theme. Growth is for an established brand that needs custom product pages, sections and filtering. B2B / Wholesale is for selling retail and wholesale from one store, with gated pricing, approval and case-pack rules.'],
  ['What if my catalog is bigger than the package covers?', 'Each package lists how many products it includes (25, 100 or 500). A larger catalog or extra custom work is quoted separately before work begins — never added to the bill afterwards.'],
  ['How do revisions and timelines work?', 'Starter includes 1 revision and takes 1–2 weeks, Growth 2 revisions over 2–4 weeks, and B2B / Wholesale 3 revisions over 4–6 weeks. The clock starts once the scope is agreed and your brand assets are in.'],
  ['Can you design my Amazon listing as well?', 'Yes — that is most of my work. A storefront and an Amazon listing answer the same buyer questions, so one designer keeps the brand consistent across both. See the Amazon services for main images, infographics, A+ Content and Brand Stores.'],
  ['How do we get started?', 'Send a short message about your brand, catalog size and timeline, or book a 10-minute call. I will confirm the right package and the exact scope before you pay anything.'],
]
