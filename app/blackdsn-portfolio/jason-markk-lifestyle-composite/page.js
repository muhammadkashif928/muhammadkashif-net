import JasonMarkkPortfolio from '@/components/JasonMarkkPortfolio'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Jason Markk Repel Spray — AI + Photoshop Lifestyle Composite | Muhammad Kashif',
  description:
    'Product image optimization case study: Jason Markk Shoe & Sneaker Protector Repel Spray transformed from a plain product shot into a lifestyle composite using AI prop generation and Photoshop compositing. A HOKA sneaker was added as a contextual prop to tell the product story — context creates desire.',
  path: '/blackdsn-portfolio/jason-markk-lifestyle-composite/',
  image: '/1768694869921.jpeg',
  imageAlt: 'Jason Markk Repel Spray before and after — AI + Photoshop lifestyle composite with HOKA sneaker prop',
  keywords: [
    'product lifestyle composite Photoshop',
    'AI product image compositing',
    'Jason Markk product image optimization',
    'sneaker protector product photography',
    'Amazon lifestyle product image',
    'AI Photoshop product retouching',
    'before after product image optimization',
    'context creates desire product marketing',
    'lifestyle image compositing service',
    'AI prop generation product photography',
  ],
})

export default function JasonMarkkLifeStyleCompositePage() {
  return <JasonMarkkPortfolio />
}
