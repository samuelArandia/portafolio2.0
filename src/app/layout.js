import './globals.css'

export const metadata = {
  title: 'Samuel Arandia',
  description: 'Mi porfolio personal',
  icons: {
    icon: '/logo.icon',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
