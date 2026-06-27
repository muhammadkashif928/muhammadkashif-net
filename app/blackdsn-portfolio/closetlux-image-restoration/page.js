import ClosetluxPortfolio from '@/components/ClosetluxPortfolio'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Closetlux Image Restoration — Luxury Product Photo Enhancement | Muhammad Kashif',
  description:
    'Before and after image restoration portfolio for Closetlux Oud Faizi Extrait de Parfum by Shahid Anwar. Flat grey render transformed into a premium white-background commercial visual with sharper details, luxury lighting, and professional finish — ready for Amazon, Shopify, LinkedIn Ads, and luxury brand marketing.',
  path: '/blackdsn-portfolio/closetlux-image-restoration/',
  image: '/1779399082204.jpeg',
  imageAlt: 'Closetlux Oud Faizi perfume bottle — before and after luxury image restoration by Muhammad Kashif',
  keywords: [
    'luxury product image restoration',
    'perfume bottle photo retouching',
    'Closetlux image restoration',
    'product render enhancement Photoshop',
    'luxury brand product photography',
    'Amazon product image optimization',
    'before after product photo editing',
    'premium product visual enhancement',
    'fragrance product photography retouching',
    'e-commerce luxury product image',
  ],
})

export default function ClosetluxImageRestorationPage() {
  return <ClosetluxPortfolio />
}
