# Full-site refresh

## Reference and design decisions

Reviewed https://myamazonguy.com/ and https://myamazonguy.com/services/design/ for service discovery, dedicated service pages, examples, category navigation and enquiry paths. Adapted those ideas to Muhammad Kashif’s existing design services, using original copy and generated artwork. Existing client work stays attributed to the actual projects.

## Public page coverage

- Homepage and shared navigation: accessible skip target, readable navigation background, expanded-state mobile menu, direct service links in the footer.
- Services: six new detail routes with examples, defined scope, catalog prices, deliverables and turnaround; detail pages lead to the existing checkout.
- Portfolio: searchable, filterable project library, full-color imagery, consistent case-study layouts and theme-aware legacy galleries.
- Resources: searchable article library, wider article columns, automatic contents navigation, related guides and author attribution.
- About and contact: shorter introductions, portrait placement, direct collaboration details and clear enquiry paths.
- Orders: visual service summaries, return-to-service navigation, clearer preparation instructions and theme-aware payment field styling. Pricing and payment processing logic are unchanged.
- Resume, legal pages, order status and 404: shared reading styles, navigation and accessibility. Policy text and downloadable documents remain unchanged.
- Fixed legacy gallery URLs containing commas and updated scroll reveals so long sections appear when they enter the viewport.

## Validation

Production build passed. Browser sweep covers all 62 sitemap pages, including the six new service pages and six order pages, plus the 404 page. Checks include successful HTTP responses, one H1, the main-content target, default light theme, horizontal overflow, local image responses and browser exceptions. Interaction checks cover blog and portfolio search/reset/filtering, mobile navigation, article contents, contact required fields and dark theme persistence. Desktop, mobile and dark-theme screenshots reviewed for representative layouts. Final results: 62 pages passed, 90 internal links passed, no broken checked images or browser exceptions. Gallery open/next/close, long-page visibility, required order-brief fields and the order status route also passed.

Live payments and external message delivery are not exercised as part of the design checks. No customer orders or messages are created.

Generated artwork paths and final prompts are in `visual-refresh-assets.md`.
