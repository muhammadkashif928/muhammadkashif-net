# Blog publishing

## Active five-article campaign — September 22, 2026

`content/publish-queue.json` is the ordered publication ledger. The five complete
articles live in `content/scheduled/`; their permanent WebP covers live in
`public/images/blog/`. Draft briefs are not Next.js pages and cannot appear on
the blog, related articles, or sitemap before publication.

`.github/workflows/scheduled-posts.yml` checks the queue hourly at minute 37 UTC.
`scripts/publish-queued.mjs` publishes at most one article, and only after at least
24 hours have elapsed since the latest published article. It checks both the
queue ledger and `data/blog.js`, including articles published by other routes.
The hourly check is a retry window, not an hourly publishing schedule. GitHub
may delay or drop scheduled runs; this is a daily cadence, not an exact-to-the-second
service guarantee. A delayed run never publishes several articles to catch up.

The first article is released through a manual workflow dispatch after the initial
code push. Subsequent releases need no local computer or AI subscription. The
workflow stops doing publication work once all five entries have timestamps.
Adding more articles requires writing new briefs and adding queue entries; this
campaign does not generate unlimited future content.

For each due article the workflow:

1. Scaffolds its page and metadata with the actual publication timestamp.
2. Runs the existing content guard (image, links, figure, length, claims).
3. Builds the entire production application.
4. Commits the page, blog index and ledger together to `main` without force-pushing.
5. Explicitly dispatches `indexnow.yml`, because a `GITHUB_TOKEN` push does not
   trigger other GitHub Actions push workflows. The Vercel GitHub integration
   receives the main-branch update and deploys the site.

If scaffolding or the guard fails, the script restores the blog data and removes
only the page it just created. If the build or push fails, nothing is published to
main. The next scheduled run retries from the repository ledger. Both publishing
workflows share the `publish-content` concurrency group. Workflow failures appear
in GitHub Actions; they must be fixed if retries continue to fail.

## Operations

- Inspect: `node scripts/publish-queued.mjs --check`
- Verify cadence and rollback: `node --test scripts/publish-queued.test.mjs`
- Run a due publication: `gh workflow run scheduled-posts.yml --ref main`
- Check runs: `gh run list --workflow scheduled-posts.yml`
- Pause: disable **Publish queued blog posts** in GitHub Actions.

Manual dispatch respects the same 24-hour guard. Do not run the publishing script
against the working tree unless you intend to create and commit the next article.
Use `--check` for inspection.

## Other publishing tools

`publish-content.yml` remains available for separately prepared `content/*`
branches. It checks the current main-branch publication time before merging, so
another writer cannot publish several posts within this campaign's daily window.
Historical documentation referred to a Claude daily task. Its current state is
not verified by this repository; it is not required by the queue. Do not rely on
that external task to release these five articles.

`scripts/generate-post.mjs` is an optional, metered Anthropic API fallback. It is
not used by this campaign and no API key is needed for the scheduled queue.

## Writing and images

Write distinct articles answering a real buyer decision across product categories.
Avoid invented results, unsupported policy claims, and keyword stuffing. Include
at least one explanatory PostFigure, relevant internal links, FAQs, descriptive
image alt text and official sources where platform guidance is referenced.
The layout handles the service link; body copy should be useful on its own.

Use a permanent image in `public/images/blog/` for each new cover. AI-generated
illustrations must be identified as illustrations, not client work or proof of
physical product behavior. Prompts are recorded in `docs/visual-refresh-assets.md`.
The two older dynamic covers were replaced with static WebP images in this release.

The five articles target: kitchen dimensions, skincare texture, electronics
compatibility, pet harness sizing, and multi-category Brand Store navigation.

## Search discovery

Published entries automatically reach the blog index, relevant service-page links,
article schema, and sitemap (including image URLs). IndexNow waits for a public
200 response before submission. Google discovers the sitemap through robots.txt;
the existing Google ownership-verification file remains in place. Search Console
index coverage and ranking data require access to the owner's Search Console account.
No indexing or ranking position is guaranteed by these code changes.
