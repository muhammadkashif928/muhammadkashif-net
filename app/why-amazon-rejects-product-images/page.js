import BlogLayout from '@/components/BlogLayout'
import BlogStructuredData from '@/components/BlogStructuredData'
import { getBlogPost } from '@/data/blog'
import { createMetadata } from '@/lib/seo'

const post = getBlogPost('why-amazon-rejects-product-images')

export const metadata = createMetadata({
  title: `${post.title} | Muhammad Kashif`,
  description: post.excerpt,
  path: `/${post.slug}/`,
  image: post.image,
  imageAlt: post.imageAlt,
  keywords: post.tags,
  type: 'article',
  publishedTime: post.publishedAt,
  modifiedTime: post.updatedAt,
})

export default function WhyAmazonRejectsProductImages() {
  return (
    <>
      <BlogStructuredData post={post} />
      <BlogLayout
        title={post.title}
        category={post.category}
        date={post.date}
        image={post.image}
        imageAlt={post.imageAlt}
        tags={post.tags}
        slug={post.slug}
      >
        <p>
          A rejected main image stalls a listing at the worst possible time — usually right before a launch date or a planned ad campaign. Most rejections trace back to a small set of repeat offenders, and almost all of them are avoidable with a quick check before upload rather than a scramble after the fact.
        </p>

        <h2>Watermarks, Logos, and Promotional Text</h2>
        <p>
          Any text overlay, brand logo, "Best Seller" badge, discount callout, or promotional graphic added on top of the main image violates Amazon's policy. The main image is meant to show only the product and, where relevant, its packaging — nothing added on top of the photo itself. This is the single most common rejection reason for new sellers who are used to designing for social media or their own website, where badges and callouts are normal.
        </p>

        <h2>Non-White or Inconsistent Backgrounds</h2>
        <p>
          The main image background must be pure white — RGB 255, 255, 255, not an off-white, cream, or gradient that looks white to the eye but fails Amazon's automated check. A background shot on a slightly gray or beige surface, or one with visible shadow gradients bleeding color into the white, is a frequent and frustrating rejection because it often looks fine on a laptop screen and only gets flagged after upload.
        </p>

        <h2>Props, Hands, and Accessories Not Included in the Purchase</h2>
        <p>
          A hand holding the product, a prop styled next to it, or an accessory shown in the frame that is not actually included in the sale can trigger rejection or, worse, get approved but then flagged later for misrepresenting the product. Props and human context belong in side images and lifestyle shots, not the main image.
        </p>

        <h2>Image Too Small or Product Too Small in Frame</h2>
        <p>
          Images under 1000 pixels on the longest side fail the zoom-feature threshold, and images where the product fills less than roughly 85% of the frame read as unprofessional even when they technically pass automated checks. Both are simple to catch with a quick pixel-dimension and crop review before submission.
        </p>

        <h2>Misrepresenting Color, Size, or Included Contents</h2>
        <p>
          An image showing a different color than what ships, a scale that makes the product look larger or smaller than it is, or bundle contents that do not match what the buyer actually receives is a policy violation even if it passes the initial automated review — this is the category most likely to resurface later as a manual enforcement action or a review-driven complaint, not just an upload-time rejection.
        </p>

        <h2>Fixing a Rejection Without Repeating It</h2>
        <p>
          Read the specific reason Amazon lists in the rejection notice rather than guessing — it usually names the exact policy clause. Fix only that issue, re-check the image against the full checklist (not just the flagged item), and resubmit. Resubmitting a corrected image without checking the rest of the checklist is how sellers end up in a second or third rejection cycle for a different reason than the first.
        </p>

        <h2>Frequently Asked Questions</h2>
        {post.faqs.map((item) => (
          <div key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}

        <h2>Conclusion</h2>
        <p>
          Nearly every image rejection falls into one of five categories: overlays and badges, background purity, unauthorized props, size or dimension failures, and inaccurate representation. Checking a new image against all five before upload, not just the one most obviously relevant to your product, is the fastest way to keep a launch on schedule.
        </p>
      </BlogLayout>
    </>
  )
}
