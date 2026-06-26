import LeatherItemsPortfolio from '@/components/LeatherItemsPortfolio'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Leather Items Optimized — Before & After 8K Product Image Portfolio | Muhammad Kashif',
  description:
    'Before and after portfolio showcasing 12 professional leather product image optimizations — jackets, bags, and biker costumes transformed into 8K ultra-high-definition e-commerce images with white backgrounds and photorealistic texture detail.',
  path: '/blackdsn-portfolio/leather-items-optimized/',
  image: '/images/portfolio-2.jpg',
  imageAlt: 'Leather product image optimization before and after — 8K quality product photography retouching',
  keywords: [
    'leather product image optimization',
    'before after leather jacket photo editing',
    'leather bag product photography retouching',
    '8K product image editing',
    'Amazon leather product images',
    'leather jacket background removal',
    'professional leather product photography',
    'e-commerce leather image retouching',
    'biker jacket product photo editing',
    'suede jacket image optimization',
  ],
})

export default function LeatherItemsOptimizedPage() {
  return <LeatherItemsPortfolio />
}
