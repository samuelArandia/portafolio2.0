import { Html, Head, Main, NextScript } from 'next/document'
import { themeInitScript } from '@/lib/themeScript'

export default function Document() {
  return (
    <Html lang="es" suppressHydrationWarning>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
