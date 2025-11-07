import type { Metadata } from 'next'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.artem-antonenko.com'),
  title: 'Artem Antonenko – Engineering Executive | Scale, Delivery, and AI-Enabled Performance',
  description: 'Engineering Executive specializing in organizational scale, delivery excellence, and AI-enabled performance acceleration. Led 500+ professionals across 12 companies, delivering 8× ROI and measurable business impact.',
  keywords: [
    'Engineering Executive',
    'Head of Engineering',
    'CTO',
    'AI Transformation',
    'Delivery Excellence',
    'Organizational Scale',
    'Technical Leadership',
    'Enterprise Engineering',
    'AI Integration',
    'Technology Strategy'
  ],
  authors: [{ name: 'Artem Antonenko' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Artem Antonenko – Engineering Executive | Scale, Delivery, and AI-Enabled Performance',
    description: 'Engineering Executive specializing in organizational scale, delivery excellence, and AI-enabled performance acceleration. Led 500+ professionals across 12 companies, delivering 8× ROI and measurable business impact.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.artem-antonenko.com',
    siteName: 'Artem Antonenko - Engineering Executive Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 800,
        alt: 'Artem Antonenko – Engineering Executive | Scale, Delivery, and AI-Enabled Performance',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artem Antonenko – Engineering Executive | Scale, Delivery, and AI-Enabled Performance',
    description: 'Engineering Executive specializing in organizational scale, delivery excellence, and AI-enabled performance acceleration. 500+ professionals led, 8× ROI.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-987878755"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-987878755');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
