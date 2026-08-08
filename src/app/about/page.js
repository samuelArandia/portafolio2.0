import AboutView from "./AboutView"

export const metadata = {
  title: 'Sobre mí',
  description: 'Conoce a Samuel Arandia: desarrollador de software en Santiago de Chile, estudiante de Ingeniería en Computación e Informática, autodidacta y enfocado en construir buenos productos web.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Sobre mí | Samuel Arandia',
    description: 'Conoce a Samuel Arandia: desarrollador de software en Santiago de Chile, estudiante de Ingeniería en Computación e Informática.',
    url: '/about',
  },
}

export default function Page() {
  return <AboutView />
}
