import AboutView from "./AboutView"
import { siteOpenGraph } from "@/lib/seo"

export const metadata = {
  title: 'Sobre mí',
  description: 'Conoce a Samuel Arandia: desarrollador full stack en Santiago de Chile e Ingeniero en Computación e Informática. Experiencia, formación y proyectos.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    ...siteOpenGraph,
    title: 'Sobre mí | Samuel Arandia',
    description: 'Conoce a Samuel Arandia: desarrollador full stack en Santiago de Chile e Ingeniero en Computación e Informática.',
    url: '/about',
  },
}

export default function Page() {
  return <AboutView />
}
