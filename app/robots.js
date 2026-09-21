export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: ['/', '/api/cover/'], disallow: ['/admin/', '/api/'] }],
    sitemap: 'https://muhammadkashif.net/sitemap.xml',
    host: 'https://muhammadkashif.net',
  }
}
