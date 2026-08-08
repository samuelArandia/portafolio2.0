import './globals.css'

const siteUrl = 'https://samuelarandia.com'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Samuel Arandia',
  url: siteUrl,
  image: `${siteUrl}/perfil.png`,
  jobTitle: 'Desarrollador de Software',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santiago',
    addressCountry: 'CL',
  },
  sameAs: [
    'https://github.com/samuelArandia',
    'https://www.linkedin.com/in/samuel-arandia/',
    'https://www.instagram.com/samuel_arandia',
    'https://www.facebook.com/samuel.arandia',
    'https://twitter.com/Arandia_samuel',
  ],
}

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Samuel Arandia | Desarrollador de Software',
    template: '%s | Samuel Arandia',
  },
  description: 'Portafolio de Samuel Arandia, desarrollador de software en Santiago de Chile. Especializado en desarrollo web con React, Next.js, Vue.js y más.',
  keywords: ['desarrollador', 'software', 'portafolio', 'React', 'Next.js', 'Vue.js', 'Santiago', 'Chile'],
  authors: [{ name: 'Samuel Arandia', url: siteUrl }],
  creator: 'Samuel Arandia',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Samuel Arandia | Desarrollador de Software',
    description: 'Portafolio de Samuel Arandia, desarrollador de software en Santiago de Chile.',
    url: siteUrl,
    siteName: 'Samuel Arandia',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Samuel Arandia — Desarrollador de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Arandia | Desarrollador de Software',
    description: 'Portafolio de Samuel Arandia, desarrollador de software en Santiago de Chile.',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
