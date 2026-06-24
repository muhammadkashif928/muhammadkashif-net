import PortfolioLayout from '@/components/PortfolioLayout'

export const metadata = {
  title: 'AI & Creative Retouching | Muhammad Kashif Portfolio',
  description: 'Advanced 3D product visualization and AI-powered retouching using Blender and Photoshop.',
}

export default function AiCreativeRetouching() {
  return (
    <PortfolioLayout
      title="AI & Creative Retouching"
      tag="RETOUCHING"
      service="Product Infographics"
      industry="Ecommerce"
      published="January 8th 2022"
      coverImage="/images/portfolio-2.jpg"
      images={[]}
    >
      <h2>About the Project</h2>
      <p>
        This project was done using Blender & Photoshop by Muhammad Kashif. The goal was to create photorealistic 3D product renders that could be used across Amazon listings and marketing materials without the need for an expensive studio photoshoot.
      </p>

      <h2>What was delivered</h2>
      <p>
        Full 3D product model created in Blender with photorealistic rendering and studio lighting setup. Multiple angles and color variants were produced along with lifestyle composite images created in Photoshop — all in high-resolution files ready for Amazon and print.
      </p>

      <h2>Process</h2>
      <p>
        The process began with creating a detailed 3D model of the product, matching exact dimensions and materials. Lighting was carefully set up to mimic natural studio conditions. Final compositing was done in Photoshop to add lifestyle backgrounds and finishing touches.
      </p>
      <p>
        <strong>Service:</strong> Product Infographics<br/>
        <strong>Industry:</strong> Ecommerce<br/>
        <strong>Published:</strong> January 8th 2022
      </p>
    </PortfolioLayout>
  )
}
