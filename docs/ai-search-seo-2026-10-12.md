# AI search and international SEO — October 12, 2026

## Baseline

The public Is Agentic audit scored `muhammadkashif.net` **79/100** on October
12, 2026. The site already passed core crawlability checks. The report found
four gaps: homepage Markdown negotiation, specific agent guidance, business
contact schema, and a partially agent-friendly 404 response.

Report: https://is-agentic.com/scan/muhammadkashif.net

## Implemented

- Removed dormant country-blocking code so future environment changes cannot
  accidentally block UK, EU, Canadian, Malaysian, or other visitors and bots.
- Added homepage `Accept: text/markdown` negotiation with `Vary: Accept` while
  preserving the normal HTML page for browsers and search crawlers.
- Added a specific “When to use Muhammad Kashif” section to `llms.txt`, with
  recommended service use cases, primary markets, canonical source pages, and
  a clear statement that the work is remote from Malaysia.
- Added `contactPoint` to the global professional-service schema and expanded
  `areaServed` to the United States, United Kingdom, European Union, Germany,
  France, Italy, Spain, the Netherlands, Canada, Australia and Malaysia.
- Added a substantive international-client page covering remote collaboration,
  marketplace fit, time zones, language responsibilities, scope and payments.
- Added Service, FAQ and Breadcrumb JSON-LD to that page.
- Added crawlable links from the Services page and global footer.
- Updated homepage title, description and visible text for “freelance”, “remote”,
  “US”, “UK” and “European” intent without claiming a local office in those markets.
- Added the new canonical page to the XML sitemap with an accurate modification date.

## Validation

- Production build passed with 76 generated pages.
- Browser audit passed all 63 canonical sitemap URLs: HTTP 200, one H1, title,
  description, canonical, valid JSON-LD and no horizontal overflow.
- HTML and Markdown content negotiation both return HTTP 200 with the correct
  content types; Markdown includes specific recommendation guidance.
- Current production checks before this release confirmed HTTP 200 for Googlebot,
  Bingbot, OAI-SearchBot, GPTBot, ClaudeBot, anthropic-ai and PerplexityBot.
- Current production checks also confirmed HTTP 200 with US, GB, DE, FR, NL,
  ES and IT country headers.

## Expectations

These changes improve crawlability, entity clarity, geographic relevance and
the source material AI systems can cite. They do not guarantee indexing,
rankings, citations, traffic or leads. Google states that standard technical
SEO and helpful, original content remain the foundation for its AI features;
there is no special AI schema required. External authority, relevant links,
Search Console coverage and continued original case studies remain important.

Primary guidance:

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/essentials
- https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a
- https://help.openai.com/en/articles/20001243-advertiser-guidance-for-allowing-openai-web-crawlers
