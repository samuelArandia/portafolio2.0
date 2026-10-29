import Head from 'next/head'
import NotFoundView from '@/components/NotFoundView'

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Página no encontrada | Samuel Arandia</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      <NotFoundView />
    </>
  )
}
