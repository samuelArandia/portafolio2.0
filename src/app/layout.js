import './globals.css'

export const metadata = {
  title: 'Samuel Arandia',
  description: 'Mi porfolio personal',
  icons: {
    icon: '/src/app/assets/1.svg',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
