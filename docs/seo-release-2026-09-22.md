# Search and content release — September 22, 2026

Implemented:
- Permanent 1600×900 WebP covers and descriptive alt text for the two newest posts.
- Five original category-specific articles with illustrations, explanatory figures,
  FAQs, official references, related articles and relevant service links.
- A finite automated queue: at most one release after each 24-hour interval.
- Unique search titles and descriptions for all six service landing pages.
- Service schema with catalog-backed pricing, visible FAQs and breadcrumb schema.
- Substantive category-neutral service explanations and crawlable guide links.
- Article author profile links, language/category schema, large-image previews.
- Sitemap image entries and blog last-modified updates on publication.
- One consistent robots rule group so named bots cannot bypass admin/API exclusions.
- Removed an inaccurate Upwork alumni affiliation and an unsupported site-search action.
- Corrected generic social imagery and removed guessed photograph dimensions.
- Retained Google verification file, canonical URLs and WordPress redirects.
- Explicit IndexNow workflow dispatch after automated publication and HTTP failure checks.

Current primary guidance consulted:
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://sell.amazon.com/blog/product-photos
- https://sell.amazon.com/tools/a-content
- https://advertising.amazon.com/library/guides/stores-best-practices
- https://advertising.amazon.com/resources/ad-specs/stores
- https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows

Limits: search rankings and indexing are controlled by search engines. Search Console
ownership, sitemap submission status, query performance and index coverage cannot be
verified through the local verification file alone. No ranking, traffic or conversion
result is claimed. GitHub scheduled jobs may be delayed; publication will never be
forced early to compensate. The workflow publishes five prepared posts and then stops.
