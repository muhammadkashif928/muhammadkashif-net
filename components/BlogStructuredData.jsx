import JsonLd from '@/components/JsonLd'
import { getArticleJsonLd, getBreadcrumbJsonLd, getFaqJsonLd } from '@/lib/seo'

export default function BlogStructuredData({ post }) {
  return (
    <JsonLd
      data={[
        getArticleJsonLd(post),
        getFaqJsonLd(post.faqs),
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog/' },
          { name: post.title, path: `/${post.slug}/` },
        ]),
      ]}
    />
  )
}
