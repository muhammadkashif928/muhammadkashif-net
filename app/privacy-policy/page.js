import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Privacy Policy | Muhammad Kashif',
  description: 'Privacy Policy for muhammadkashif.net explaining how personal information is collected, used, protected, and managed.',
  path: '/privacy-policy/',
  keywords: ['privacy policy', 'muhammadkashif.net privacy'],
})

const sections = [
  {
    title: '1. Introduction',
    content: `This Privacy Policy explains how Muhammad Kashif ("we", "us", or "our") collects, uses, and safeguards your personal information when you visit muhammadkashif.net (the "Website"). By using this Website, you agree to the collection and use of information in accordance with this policy.

We are committed to protecting your privacy and complying with applicable data protection laws including Malaysia's Personal Data Protection Act 2010 (PDPA), the General Data Protection Regulation (GDPR) for EU/EEA visitors, and the California Consumer Privacy Act (CCPA) for California residents.`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect the following types of information:

**Information You Provide Directly:**
- Name, email address, and message content submitted through our contact form
- Any other information you voluntarily provide when reaching out to us

**Information Collected Automatically:**
- Browser type, operating system, and device information
- IP address and approximate geographic location
- Pages visited, time spent on pages, and referral sources
- Cookies and similar tracking technologies

**Information from Third Parties:**
- Analytics data from services such as Google Analytics
- Advertising data from Google AdSense (if applicable)`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use collected information for the following purposes:

- To respond to your inquiries and project requests submitted via the contact form
- To improve the Website's content, performance, and user experience
- To analyze website traffic and usage patterns
- To display relevant advertisements through Google AdSense
- To comply with legal obligations
- To detect and prevent fraud or security issues

We will never sell, rent, or trade your personal information to third parties without your explicit consent.`,
  },
  {
    title: '4. Cookies and Tracking Technologies',
    content: `We use cookies and similar technologies to enhance your experience on our Website.

**Types of Cookies We Use:**
- **Essential Cookies:** Necessary for the Website to function properly (e.g., theme preference storage)
- **Analytics Cookies:** Help us understand how visitors interact with our Website
- **Advertising Cookies:** Used by Google AdSense to serve relevant advertisements

**Google AdSense & DoubleClick:**
This Website may use Google AdSense, a third-party advertising service provided by Google LLC. Google may use the DoubleClick DART cookie to serve ads based on your prior visits to our Website and other sites. You may opt out of personalised advertising by visiting Google's Ad Settings at https://adssettings.google.com.

**Managing Cookies:**
Most browsers allow you to control cookies through their settings. Disabling cookies may affect your experience of this Website and other websites you visit.`,
  },
  {
    title: '5. Third-Party Services',
    content: `We use the following third-party services that may collect and process data:

- **Vercel:** Web hosting provider. View Vercel's Privacy Policy at vercel.com/legal/privacy-policy
- **Web3Forms:** Contact form processing. Your form submissions are processed through Web3Forms API. View their Privacy Policy at web3forms.com/privacy
- **Google Fonts:** Font delivery. Google may collect limited usage data when fonts are loaded
- **Google AdSense:** Advertising. Google collects data to serve personalized or contextual ads. View Google's Privacy Policy at policies.google.com/privacy
- **Google Analytics (if enabled):** Website analytics. Collects anonymized data about visitor behaviour

These third-party services have their own privacy policies governing the use of your information.`,
  },
  {
    title: '6. Data Retention',
    content: `We retain your personal data only for as long as necessary to fulfill the purposes described in this policy:

- Contact form submissions are retained for up to 12 months or until the inquiry is resolved
- Analytics data is retained in accordance with the respective service provider's data retention policies
- We will delete your data upon request, except where retention is required by law`,
  },
  {
    title: '7. Your Rights',
    content: `Depending on your location, you may have the following rights regarding your personal data:

- **Right of Access:** Request a copy of the personal data we hold about you
- **Right to Rectification:** Request correction of inaccurate or incomplete data
- **Right to Erasure:** Request deletion of your personal data ("right to be forgotten")
- **Right to Restrict Processing:** Request that we limit the use of your data
- **Right to Data Portability:** Receive your data in a structured, commonly used format
- **Right to Object:** Object to our processing of your data
- **Right to Withdraw Consent:** Withdraw consent at any time where processing is based on consent

To exercise any of these rights, please contact us at info@muhammadkashif.net. We will respond within 30 days.`,
  },
  {
    title: '8. Children\'s Privacy',
    content: `This Website is not directed to children under the age of 13 (or 16 in some jurisdictions). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete such information promptly.`,
  },
  {
    title: '9. Security',
    content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '10. International Data Transfers',
    content: `Your information may be transferred to and processed in countries other than Malaysia. When we transfer data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.`,
  },
  {
    title: '11. Changes to This Privacy Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last Updated" date at the top of this page. Your continued use of the Website after any changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '12. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:

**Muhammad Kashif**
Email: info@muhammadkashif.net
Location: Kuching, Sarawak, Malaysia
WhatsApp: +92 342 4625 844`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="LEGAL"
          title={<>PRIVACY<br />POLICY</>}
          subtitle="Last updated: June 2025"
        />

        <div className="py-20" style={{ backgroundColor: 'var(--b-bg)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="border-2 p-8 mb-8" style={{ borderColor: 'var(--b-border)', backgroundColor: 'var(--b-subtle)' }}>
              <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                This Privacy Policy applies to the website muhammadkashif.net and all content, services, and information available on the site. Please read this policy carefully before using our Website.
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
