import BlogLayout from '@/components/BlogLayout'
import BlogStructuredData from '@/components/BlogStructuredData'
import { getBlogPost } from '@/data/blog'
import { createMetadata } from '@/lib/seo'

const post = getBlogPost('amazon-product-photography-checklist')

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

export default function AmazonProductPhotographyChecklist() {
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
          Product photography is the foundation of an Amazon listing. Even the best infographic design becomes weak if the product photo is blurry, badly lit, cropped too tightly, or inconsistent with the actual item. A reliable checklist keeps the shoot organized and gives the designer clean material to turn into main images, side images, A+ Content, and ads.
        </p>
        <p>
          The goal is not only to make the product look beautiful. The goal is to make it easy to understand. Shoppers need to see what the product is, how big it is, what comes in the box, how it is used, and why it is worth choosing over a competitor.
        </p>

        <h2>Prepare the Product Before the Shoot</h2>
        <p>
          Start by selecting the best physical sample. Remove dust, scratches, stickers, dents, and packaging damage before any photo is taken. If the product has multiple pieces, organize every accessory and confirm what must be included in the listing images.
        </p>
        <p>
          Create a simple shot list before the camera comes out. Include front, side, back, detail, packaging, scale, contents, and use-case shots. This saves time and reduces the chance of missing an important angle that becomes expensive to capture later.
        </p>

        <h2>Get the Main Image Right</h2>
        <p>
          The main image must communicate the product instantly in search results. It should be high-resolution, sharp, evenly lit, and shown on a clean white background. Avoid props, decorative scenes, heavy shadows, or anything that distracts from the item.
        </p>
        <p>
          The product should fill the frame without being clipped. A small product can look weak in search, while an overly tight crop can feel unprofessional. Aim for a balanced crop that makes the product easy to recognize on both desktop and mobile.
        </p>

        <h2>Capture Images for Infographics</h2>
        <p>
          Infographics need more than one pretty photo. They need angles that can support feature callouts, dimensions, materials, compatibility, and use instructions. Take close-up shots of textures, buttons, ingredients, labels, seams, handles, attachments, and any feature that matters to the buyer.
        </p>
        <p>
          Leave negative space around the product in some shots so callouts can be placed cleanly. A designer can always crop tighter, but it is harder to create missing space around an object after the shoot.
        </p>

        <h2>Plan Lifestyle Shots With Purpose</h2>
        <p>
          Lifestyle images should show the product in a believable use environment. Do not choose a scene only because it looks premium. Choose a scene that helps the shopper understand the benefit, scale, audience, or occasion.
        </p>
        <p>
          For example, a kitchen product should show context, hand scale, and ease of use. A skincare product may need clean bathroom or vanity styling. A tool may need process shots. Every lifestyle image should answer a practical buying question.
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
          A strong Amazon photo set starts before editing. Prepare the product, build a shot list, capture a compliant main image, collect detail shots for infographics, and plan lifestyle images around buyer questions. When the raw photography is clean, every design asset becomes more persuasive.
        </p>
      </BlogLayout>
    </>
  )
}
