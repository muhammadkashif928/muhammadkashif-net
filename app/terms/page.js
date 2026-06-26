import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Terms of Service | Muhammad Kashif',
  description: 'Terms of Service for muhammadkashif.net covering website use, intellectual property, third-party links, advertising, and design service engagements.',
  path: '/terms/',
  keywords: ['terms of service', 'muhammadkashif.net terms'],
})

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using the website muhammadkashif.net ("Website"), you accept and agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this Website.

These Terms apply to all visitors, users, and others who access or use the Website.`,
  },
  {
    title: '2. Use of the Website',
    content: `You may use this Website for lawful purposes only. You agree not to:

- Use the Website in any way that violates applicable local, national, or international laws or regulations
- Transmit any unsolicited or unauthorised advertising or promotional material
- Attempt to gain unauthorised access to any portion of the Website or its related systems
- Use the Website to transmit any harmful, offensive, or disruptive content
- Reproduce, duplicate, copy, or exploit any portion of the Website without our express written permission
- Use automated tools, bots, or scrapers to access or extract content from the Website`,
  },
  {
    title: '3. Intellectual Property',
    content: `All content on this Website — including but not limited to text, graphics, logos, images, portfolio work, blog articles, and design concepts — is the exclusive property of Muhammad Kashif or used with the permission of the respective rights holders.

All content is protected by copyright laws and international intellectual property treaties.

**You may not:**
- Copy, reproduce, or republish any content without express written permission
- Use any portfolio images or design work for commercial purposes
- Claim any content on this Website as your own original work

**You may:**
- Share links to this Website on social media or other platforms
- Reference content with proper attribution and a link back to the original page`,
  },
  {
    title: '4. Services and Engagements',
    content: `When you engage our design services through this Website, the following terms apply:

- All project scope, deliverables, timelines, and pricing are agreed upon in writing before work begins
- Payment terms are as specified in the individual project agreement or invoice
- Revision rounds are as specified in each project package; additional revisions may be billed separately
- All final deliverable files remain the property of the client upon full payment
- We retain the right to display completed work in our portfolio unless a non-disclosure agreement specifies otherwise
- We are not responsible for listing performance after delivery; design is one component of overall Amazon success`,
  },
  {
    title: '5. Third-Party Links',
    content: `This Website may contain links to third-party websites including but not limited to Upwork, Fiverr, LinkedIn, and client websites. These links are provided for your convenience and informational purposes only.

We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We strongly advise you to read the terms and privacy policy of any third-party site you visit.`,
  },
  {
    title: '6. Advertising',
    content: `This Website may display advertisements served by Google AdSense and other advertising networks. These ads are clearly distinguished from editorial content.

We are not responsible for the content of advertisements displayed on this Website. The presence of an advertisement does not constitute our endorsement of the advertised product or service.

By using this Website, you acknowledge that advertising is used to support the operation of this Website and agree to the use of advertising cookies as described in our Privacy Policy.`,
  },
  {
    title: '7. Disclaimer of Warranties',
    content: `This Website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied.

We do not warrant that:
- The Website will be uninterrupted, error-free, or secure
- Defects will be corrected
- The Website or the server that makes it available are free of viruses or other harmful components
- The results of using our design services will meet any specific business or financial outcomes

To the fullest extent permitted by law, we disclaim all warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Muhammad Kashif shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, or business opportunities, arising out of or in connection with your use of this Website or our services.

Our total liability for any claims arising from our services shall not exceed the total fees paid by you for the specific project giving rise to the claim.`,
  },
  {
    title: '9. Indemnification',
    content: `You agree to defend, indemnify, and hold harmless Muhammad Kashif and his affiliates, agents, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses arising out of your violation of these Terms of Service or your use of the Website.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of Malaysia. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Malaysia.

If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary such that these Terms will otherwise remain in full force and effect.`,
  },
  {
    title: '11. Changes to Terms',
    content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website after any changes constitutes your acceptance of the new Terms.

We will update the date at the top of this page when changes are made. It is your responsibility to review these Terms periodically.`,
  },
  {
    title: '12. Contact',
    content: `If you have any questions about these Terms of Service, please contact us:

Muhammad Kashif
Email: info@muhammadkashif.net
Location: Kuching, Sarawak, Malaysia`,
  },
]

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="LEGAL"
          title={<>TERMS OF<br />SERVICE</>}
          subtitle="Last updated: June 2025"
        />

        <div className="py-20" style={{ backgroundColor: 'var(--b-bg)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="border-2 p-8 mb-8" style={{ borderColor: 'var(--b-border)', backgroundColor: 'var(--b-subtle)' }}>
              <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                Please read these Terms of Service carefully before using muhammadkashif.net. These terms govern your use of the Website and any services provided. By accessing this Website, you agree to be bound by these terms.
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
