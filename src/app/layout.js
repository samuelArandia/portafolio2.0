import './globals.css'
import { inter, jetbrainsMono } from '@/lib/fonts'
import { themeInitScript } from '@/lib/themeScript'
import { siteOpenGraph } from '@/lib/seo'

const siteUrl = 'https://samuelarandia.com'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Samuel Arandia',
  url: siteUrl,
  image: `${siteUrl}/perfil.png`,
  jobTitle: 'Desarrollador full stack',
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
    default: 'Samuel Arandia | Desarrollador full stack',
    template: '%s | Samuel Arandia',
  },
  description: 'Portafolio de Samuel Arandia, desarrollador full stack en Santiago de Chile. Especializado en desarrollo web con React, Next.js, Vue.js y más.',
  keywords: ['desarrollador full stack', 'software', 'portafolio', 'React', 'Next.js', 'Vue.js', 'Java', 'Spring Boot', 'Santiago', 'Chile'],
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
    ...siteOpenGraph,
    title: 'Samuel Arandia | Desarrollador full stack',
    description: 'Portafolio de Samuel Arandia, desarrollador full stack en Santiago de Chile.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Arandia | Desarrollador full stack',
    description: 'Portafolio de Samuel Arandia, desarrollador full stack en Santiago de Chile.',
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
    // data-theme is set by themeInitScript before hydration
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
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
