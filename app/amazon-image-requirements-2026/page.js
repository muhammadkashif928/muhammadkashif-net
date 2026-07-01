import BlogLayout from '@/components/BlogLayout'
import BlogStructuredData from '@/components/BlogStructuredData'
import { getBlogPost } from '@/data/blog'
import { createMetadata } from '@/lib/seo'

const post = getBlogPost('amazon-image-requirements-2026')

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

export default function AmazonImageRequirements2026() {
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
          Every seller runs into the same problem at some point: an image gets rejected, or looks blurry after upload, and the actual specification is scattered across several Seller Central help pages. This is the reference version — the numbers that matter, in one place.
        </p>

        <h2>Main Image Requirements</h2>
        <p>
          The main image must sit on a pure white background (RGB 255, 255, 255), show only the product being sold with no props, text, watermarks, or badges, and fill at least 85% of the image frame. The longest side must be at least 1000 pixels for Amazon's zoom-on-hover feature to activate — without that minimum, shoppers cannot zoom in on the product at all, which measurably hurts conversion on detail-sensitive categories.
        </p>
        <p>
          For sharp zoom quality on modern high-resolution phone screens, aim higher than the minimum: 2000 pixels or more on the longest side is a safer practical target than the bare 1000px floor.
        </p>

        <h2>File Format and Color Mode</h2>
        <p>
          JPEG, TIFF, PNG, and GIF are all technically accepted, but JPEG is the practical standard for product photography because it keeps file sizes reasonable without the transparency handling issues PNG can cause if the background is not perfectly white. Color mode must be RGB — CMYK files, common in print-design workflows, will upload but display with shifted, dull colors on screen and should always be converted before submission.
        </p>

        <h2>Side Images and Infographics</h2>
        <p>
          Side images (positions 2 through 7 or more, depending on category) have more creative freedom than the main image. Lifestyle scenes, infographic overlays, comparison charts, and size references are all allowed here, as long as they still accurately represent the product. The same 1000px minimum and RGB requirement apply across every image slot, not just the main image.
        </p>

        <h2>Variation Images and Swatches</h2>
        <p>
          For listings with color or size variations, each child ASIN needs its own accurately colored main image — a shared or reused image across noticeably different variants is a common cause of buyer confusion and return-rate problems. Swatch thumbnails should be simple, well-lit crops that make the color difference obvious at a glance.
        </p>

        <h2>What Gets Flagged Most Often</h2>
        <p>
          In practice, the most common technical rejections are images under the 1000px zoom threshold, off-white or gradient backgrounds that fail the pure-white check, and promotional text or logos baked into the main image. All three are avoidable with a pre-upload checklist rather than discovered after a listing goes live.
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
          Amazon's image specs are not complicated once they are in one place: RGB color, JPEG format, pure white background for the main image, and at least 1000px — ideally 2000px or more — on the longest side. Building this checklist into your pre-upload workflow prevents most rejection cycles before they start.
        </p>
      </BlogLayout>
    </>
  )
}
