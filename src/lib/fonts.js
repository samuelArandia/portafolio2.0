import { Inter, JetBrains_Mono } from 'next/font/google'

// Shared by the app router layout and the pages router 404.
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
