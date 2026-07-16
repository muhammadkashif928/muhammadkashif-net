/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // ── Legacy WordPress media: images moved from /wp-content/uploads/ to /uploads/
      {
        source: '/wp-content/uploads/:path*',
        destination: '/uploads/:path*',
        permanent: true,
      },

      // ── Legacy Rank Math / WordPress sitemaps → Next.js sitemap
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/wp-sitemap.xml', destination: '/sitemap.xml', permanent: true },
      {
        source: '/:type(post|page|category|product|product_cat|tag|author)-sitemap:num(\\d*).xml',
        destination: '/sitemap.xml',
        permanent: true,
      },

      // ── WordPress taxonomy & archive URLs → blog index
      { source: '/category/:path*', destination: '/blog/', permanent: true },
      { source: '/tag/:path*', destination: '/blog/', permanent: true },
      { source: '/author/:path*', destination: '/about/', permanent: true },

      // ── RSS / Atom feeds (WP served these on every post and archive)
      { source: '/feed', destination: '/blog/', permanent: true },
      { source: '/comments/feed', destination: '/blog/', permanent: true },
      { source: '/:path*/feed', destination: '/blog/', permanent: true },

      // ── WooCommerce leftovers from the old store
      { source: '/shop/:path*', destination: '/my-portfolio/', permanent: true },
      { source: '/product/:path*', destination: '/my-portfolio/', permanent: true },
      { source: '/product-category/:path*', destination: '/my-portfolio/', permanent: true },
      { source: '/product-tag/:path*', destination: '/my-portfolio/', permanent: true },
      { source: '/cart', destination: '/', permanent: true },
      { source: '/checkout', destination: '/', permanent: true },
      { source: '/my-account/:path*', destination: '/contact-me/', permanent: true },

      // ── Old WP page slugs that have a new home
      { source: '/home', destination: '/', permanent: true },
      { source: '/portfolio', destination: '/my-portfolio/', permanent: true },
      { source: '/contact', destination: '/contact-me/', permanent: true },
      { source: '/about-me', destination: '/about/', permanent: true },
    ]
  },
}

module.exports = nextConfig
