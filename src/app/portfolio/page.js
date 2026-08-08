import PortfolioView from "./PortfolioView"

export const metadata = {
  title: 'Portafolio',
  description: 'Proyectos de desarrollo web realizados por Samuel Arandia: aplicaciones de gestión, e-commerce y más, construidos con React, Vue.js, Next.js y Django.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Portafolio | Samuel Arandia',
    description: 'Proyectos de desarrollo web realizados por Samuel Arandia, construidos con React, Vue.js, Next.js y Django.',
    url: '/portfolio',
  },
}

export default function Page() {
  return <PortfolioView />
}
