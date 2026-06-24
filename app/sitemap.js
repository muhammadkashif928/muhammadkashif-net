export default function sitemap() {
  const baseUrl = 'https://muhammadkashif.net'

  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/my-portfolio/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/contact-me/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    // Portfolio
    { url: `${baseUrl}/blackdsn-portfolio/premium-a-content/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/blackdsn-portfolio/ai-creative-retouching/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/blackdsn-portfolio/brand-identity-packaging/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    // Blog posts — exact URLs matching WordPress
    { url: `${baseUrl}/what-is-a-content/`, lastModified: new Date('2024-03-19'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/what-is-website/`, lastModified: new Date('2024-03-19'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/what-is-product-infographics/`, lastModified: new Date('2024-03-19'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/why-white-background-is-so-important-for-main-image-of-product/`, lastModified: new Date('2024-03-19'), changeFrequency: 'yearly', priority: 0.7 },
  ]
}
