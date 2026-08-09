import ContactView from "./ContactView"

export const metadata = {
  title: 'Contacto',
  description: '¿Tienes un proyecto en mente o quieres colaborar? Contáctate con Samuel Arandia, desarrollador de software en Santiago de Chile.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contacto | Samuel Arandia',
    description: '¿Tienes un proyecto en mente o quieres colaborar? Contáctate con Samuel Arandia.',
    url: '/contact',
  },
}

export default function Page() {
  return <ContactView />
}
