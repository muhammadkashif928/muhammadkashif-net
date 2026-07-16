export default function robots() {
  return {
    rules: [
      // All crawlers allowed by default; keep admin and API out of the index
      { userAgent: '*', allow: '/', disallow: ['/admin/', '/api/'] },
      // ChatGPT / OpenAI
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      // Google Gemini / Bard
      { userAgent: 'Google-Extended', allow: '/' },
      // Anthropic Claude
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      // Perplexity AI
      { userAgent: 'PerplexityBot', allow: '/' },
      // Microsoft Copilot / Bing
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'BingPreview', allow: '/' },
      // Common Crawl (used by many AI training datasets)
      { userAgent: 'CCBot', allow: '/' },
      // Apple Intelligence
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      // Meta AI
      { userAgent: 'meta-externalagent', allow: '/' },
      // Cohere AI
      { userAgent: 'cohere-ai', allow: '/' },
      // Diffbot (used by many AI knowledge graphs)
      { userAgent: 'Diffbot', allow: '/' },
      // YouBot (You.com AI search)
      { userAgent: 'YouBot', allow: '/' },
    ],
    sitemap: 'https://muhammadkashif.net/sitemap.xml',
    host: 'https://muhammadkashif.net',
  }
}
