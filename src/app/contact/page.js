import ContactView from "./ContactView"
import { siteOpenGraph } from "@/lib/seo"

export const metadata = {
  title: 'Contacto',
  description: '¿Tienes un proyecto en mente o quieres colaborar? Contáctate con Samuel Arandia, desarrollador full stack en Santiago de Chile.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    ...siteOpenGraph,
    title: 'Contacto | Samuel Arandia',
    description: '¿Tienes un proyecto en mente o quieres colaborar? Contáctate con Samuel Arandia.',
    url: '/contact',
  },
}

export default function Page() {
  return <ContactView />
}
