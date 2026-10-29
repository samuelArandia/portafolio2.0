// Next replaces (not merges) openGraph per route, so every page spreads this
// base to keep the site name, locale and share image.
export const siteOpenGraph = {
  siteName: 'Samuel Arandia',
  locale: 'es_CL',
  type: 'website',
  images: [
    {
      url: '/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Samuel Arandia — Desarrollador full stack',
    },
  ],
}
