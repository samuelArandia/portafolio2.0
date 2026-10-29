import PortfolioView from "./PortfolioView"
import { siteOpenGraph } from "@/lib/seo"

export const metadata = {
  title: 'Proyectos',
  description: 'Proyectos de desarrollo web realizados por Samuel Arandia: aplicaciones de gestión, e-commerce y más, construidos con React, Vue.js, Next.js y Django.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    ...siteOpenGraph,
    title: 'Proyectos | Samuel Arandia',
    description: 'Proyectos de desarrollo web realizados por Samuel Arandia, construidos con React, Vue.js, Next.js y Django.',
    url: '/portfolio',
  },
}

export default function Page() {
  return <PortfolioView />
}
