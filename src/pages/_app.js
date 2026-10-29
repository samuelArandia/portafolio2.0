// The app router owns every route except the static-export 404, which Next 13.3
// still renders through the pages router; this gives it the same styles and fonts.
import '@/app/globals.css'
import { inter, jetbrainsMono } from '@/lib/fonts'

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
          --font-mono: ${jetbrainsMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
