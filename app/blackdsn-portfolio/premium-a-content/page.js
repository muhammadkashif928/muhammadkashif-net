import PortfolioLayout from '@/components/PortfolioLayout'

export const metadata = {
  title: 'Premium A+ Content | Muhammad Kashif Portfolio',
  description: 'Amazon Listing Optimization — full A+ content strategy, infographics, and high-converting listing images.',
}

export default function PremiumAContent() {
  return (
    <PortfolioLayout
      title="Premium A+ Content"
      tag="A+ CONTENT"
      service="Product Infographics"
      industry="Ecommerce"
      published="January 8th 2022"
      coverImage="/images/portfolio-1.webp"
      images={[
        '/images/portfolio-report.jpg',
        '/images/portfolio-leather-report.jpg',
      ]}
    >
      <h2>Amazon Listing Optimization</h2>
      <p>
        At Amazon, there are various things that are needed to take care of. The main and important things are Side Images, Optimized product title, bullet points with high search volume keywords. Other than that there are some other things that are also needed to make a perfect listing.
      </p>
      <p>
        A+ content with attractive style is essential. Once we are done with this, we are ready to do advertising and run campaigns.
      </p>

      <h2>What was delivered</h2>
      <p>
        For this project, I created a complete Amazon listing optimization package including high-converting main hero image with white background, 6 side images with feature callouts and lifestyle shots, and a full A+ Content module with brand story and comparison chart.
      </p>
      <p>
        <strong>Service:</strong> Product Infographics<br/>
        <strong>Industry:</strong> Ecommerce<br/>
        <strong>Published:</strong> January 8th 2022
      </p>
    </PortfolioLayout>
  )
}
