import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Disclaimer | Muhammad Kashif',
  description: 'Disclaimer for muhammadkashif.net covering portfolio results, Amazon affiliation, external links, AI-generated content, advertising, and information accuracy.',
  path: '/disclaimer/',
  keywords: ['disclaimer', 'Amazon affiliation disclaimer', 'AI-generated content disclaimer'],
})

const sections = [
  {
    title: '1. General Disclaimer',
    content: `The information contained on this website (muhammadkashif.net) is for general informational and portfolio purposes only. While we strive to keep all information accurate, complete, and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.

Any reliance you place on such information is strictly at your own risk. In no event will Muhammad Kashif be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from your use of this website.`,
  },
  {
    title: '2. Portfolio and Case Studies',
    content: `The portfolio work, case studies, and design samples displayed on this website are shown for demonstration purposes to illustrate the quality and range of our design services.

- All portfolio work belongs to the respective clients and brands unless otherwise stated
- Results shown (e.g., improvements in click-through rate or conversion rate) are based on specific client projects and individual market conditions
- Past results do not guarantee similar outcomes for future projects
- The display of brand names and logos does not constitute an endorsement by those brands

We have received permission from clients to showcase their work. If you are a brand owner and have concerns about content displayed, please contact us at info@muhammadkashif.net.`,
  },
  {
    title: '3. No Professional Advice',
    content: `The content on this website, including blog articles, service descriptions, and any other written material, is provided for general informational purposes only and should not be construed as professional business, legal, financial, or marketing advice.

While our blog posts discuss Amazon selling strategies, design principles, and e-commerce best practices, these are general educational resources and not professional consultancy. Amazon marketplace conditions, algorithms, and policies change frequently. Always verify current Amazon policies and guidelines through official Amazon resources.

For professional advice specific to your business situation, we recommend consulting qualified professionals in the relevant field.`,
  },
  {
    title: '4. Amazon Affiliation Disclaimer',
    content: `Muhammad Kashif is an independent Amazon brand design specialist and is not employed by, affiliated with, endorsed by, or sponsored by Amazon.com, Inc. or any of its subsidiaries.

"Amazon", "Amazon Seller Central", "A+ Content", and related terms are trademarks of Amazon.com, Inc. Use of these terms is for descriptive purposes only to accurately describe the services offered.

Results achieved for clients on the Amazon marketplace depend on many factors beyond design, including product quality, pricing, competition, advertising spend, and market demand. Design services alone do not guarantee sales performance.`,
  },
  {
    title: '5. Advertising Disclosure',
    content: `This website may display third-party advertisements served by Google AdSense and other advertising networks.

**Important disclosures:**
- Advertisements are clearly identified and separate from editorial content
- We do not personally endorse any product or service advertised through automated advertising networks
- Ad content is determined by the advertising platform based on website content and/or visitor browsing history
- We receive compensation when visitors click on certain ads

You have the right to opt out of personalised advertising. Visit Google's Ad Settings at https://adssettings.google.com to manage your preferences.

This disclosure is made in compliance with the Federal Trade Commission (FTC) guidelines and Google AdSense program policies.`,
  },
  {
    title: '6. External Links Disclaimer',
    content: `This website contains links to third-party websites including but not limited to Upwork, Fiverr, LinkedIn, Amazon, and other external resources. These links are provided for your convenience and reference.

We have no control over the content, privacy practices, or availability of these external sites. The inclusion of any link does not imply our endorsement of the linked website or any association with its operators.

We are not responsible for any content, products, or services available on or through any third-party website. Linking to an external website does not constitute our recommendation or approval of that site.`,
  },
  {
    title: '7. AI-Generated Content',
    content: `Some of the visual design work showcased on this website and some lifestyle imagery may have been created using or enhanced with artificial intelligence tools including but not limited to Midjourney, Stable Diffusion, Adobe Firefly, and other generative AI platforms.

Where AI tools are used:
- Final outputs are reviewed, refined, and quality-controlled by our professional designers
- AI-generated imagery is used ethically and in compliance with each platform's terms of service
- We do not knowingly use AI-generated content that replicates specific individuals, brands, or copyrighted materials without appropriate rights

The use of AI tools is disclosed in our services descriptions and does not diminish the quality or effectiveness of the final deliverables.`,
  },
  {
    title: '8. Copyright and Intellectual Property',
    content: `All original content on this website — including written articles, design concepts, and visual assets created by Muhammad Kashif — is protected by copyright.

If you believe any content on this website infringes your intellectual property rights, please contact us immediately at info@muhammadkashif.net with:
- Identification of the copyrighted work you claim has been infringed
- Identification of the infringing material on our website
- Your contact information

We take intellectual property rights seriously and will respond to valid claims promptly.`,
  },
  {
    title: '9. Accuracy of Information',
    content: `We make reasonable efforts to ensure the information on this website is accurate and current. However:

- Statistics, market data, and industry figures cited in blog posts are sourced from publicly available information and may become outdated
- Amazon policies, fees, and guidelines change frequently; always verify with Amazon's official documentation
- Service descriptions and pricing may be updated without prior notice; contact us for current rates
- The information on this website should not be used as the sole basis for any business decisions`,
  },
  {
    title: '10. Changes to This Disclaimer',
    content: `We reserve the right to modify this Disclaimer at any time without prior notice. Changes take effect immediately upon posting. Continued use of this website after any changes constitutes your acceptance of the updated Disclaimer.

We encourage you to review this Disclaimer periodically.`,
  },
  {
    title: '11. Contact',
    content: `If you have any questions or concerns about this Disclaimer, please contact us:

Muhammad Kashif
Email: info@muhammadkashif.net
Location: Kuching, Sarawak, Malaysia
WhatsApp: +92 342 4625 844`,
  },
]

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="LEGAL"
          title={<>DISCLAIMER</>}
          subtitle="Last updated: June 2025"
        />

        <div className="py-20" style={{ backgroundColor: 'var(--b-bg)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="border-2 p-8 mb-8" style={{ borderColor: 'var(--b-border)', backgroundColor: 'var(--b-subtle)' }}>
              <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                Please read this Disclaimer carefully. By using muhammadkashif.net, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer. If you do not agree, please discontinue use of this Website.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {sections.map((section, i) => (
                <div key={i} className="border-t pt-10" style={{ borderColor: 'var(--b-border)' }}>
                  <h2 className="font-bebas text-2xl tracking-wide mb-5" style={{ color: 'var(--b-text)' }}>{section.title}</h2>
                  <div className="font-mono text-sm leading-[1.9]" style={{ color: 'var(--b-muted)' }}>
                    {section.content.split('\n').map((line, j) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <p key={j} className="font-bold mt-4 mb-2" style={{ color: 'var(--b-text)' }}>{line.replace(/\*\*/g, '')}</p>
                      }
                      if (line.startsWith('- ')) {
                        return <p key={j} className="flex gap-2 ml-4"><span>→</span>{line.slice(2)}</p>
                      }
                      if (line === '') return <br key={j} />
                      return <p key={j} className="mb-2">{line}</p>
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
