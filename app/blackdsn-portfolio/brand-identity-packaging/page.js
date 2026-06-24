import PortfolioLayout from '@/components/PortfolioLayout'

export const metadata = {
  title: 'Brand Identity & Packaging | Muhammad Kashif Portfolio',
  description: 'End-to-end brand identity and packaging design for a private label brand entering a competitive Amazon market.',
}

export default function BrandIdentityPackaging() {
  return (
    <PortfolioLayout
      title="Brand Identity & Packaging"
      tag="BRAND IDENTITY"
      service="Brand Identity"
      industry="Ecommerce"
      published="January 8th 2022"
      coverImage="/images/portfolio-3.webp"
      images={[]}
    >
      <h2>About the Project</h2>
      <p>
        This project involved creating a complete brand identity system and packaging design for a private label product launching on Amazon. The goal was to make the brand feel established, trustworthy, and premium from day one.
      </p>

      <h2>What was delivered</h2>
      <p>
        Logo design with primary and secondary variations, brand color palette and typography system, product packaging design including box, label, and insert card, Amazon storefront banner and brand imagery, and a brand guidelines document.
      </p>

      <h2>Approach</h2>
      <p>
        The design direction was informed by a thorough competitor analysis to identify visual gaps in the market. By understanding what competitors were doing, we were able to position this brand distinctly and create packaging that stands out on Amazon search results pages.
      </p>
      <p>
        <strong>Service:</strong> Brand Identity<br/>
        <strong>Industry:</strong> Ecommerce<br/>
        <strong>Published:</strong> January 8th 2022
      </p>
    </PortfolioLayout>
  )
}
