import './globals.css'

export const metadata = {
  title: 'Samuel Arandia | Desarrollador de Software',
  description: 'Portafolio de Samuel Arandia, desarrollador de software en Santiago de Chile. Especializado en desarrollo web con React, Next.js, Vue.js y más.',
  keywords: ['desarrollador', 'software', 'portafolio', 'React', 'Next.js', 'Vue.js', 'Santiago', 'Chile'],
  authors: [{ name: 'Samuel Arandia' }],
  openGraph: {
    title: 'Samuel Arandia | Desarrollador de Software',
    description: 'Portafolio de Samuel Arandia, desarrollador de software en Santiago de Chile.',
    url: 'https://samuelarandia.vercel.app',
    siteName: 'Samuel Arandia',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Arandia | Desarrollador de Software',
    description: 'Portafolio de Samuel Arandia, desarrollador de software en Santiago de Chile.',
  },
  icons: {
    icon: '/logo.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
