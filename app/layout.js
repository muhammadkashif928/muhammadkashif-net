import './globals.css'

export const metadata = {
  title: 'Muhammad Kashif — Amazon Brand Designer',
  description: 'I turn Amazon Private Label products into Premium Brands using advanced AI-Powered Design & Strategic A+ Content.',
  keywords: 'Amazon A+ Content, product photography, infographics, brand identity, Amazon listing optimization',
  openGraph: {
    title: 'Muhammad Kashif — Amazon Brand Designer',
    description: 'From Ordinary Listing to Premium Brand.',
    url: 'https://muhammadkashif.net',
    siteName: 'Muhammad Kashif',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise">
        {children}
      </body>
    </html>
  )
}
