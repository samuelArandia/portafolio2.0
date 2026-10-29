import SkillsView from "./SkillsView"
import { siteOpenGraph } from "@/lib/seo"

export const metadata = {
  title: 'Stack',
  description: 'Lenguajes de programación, frameworks y herramientas con las que trabaja Samuel Arandia a diario: JavaScript, React, Vue.js, Next.js, Django, PostgreSQL y más.',
  alternates: {
    canonical: '/skills',
  },
  openGraph: {
    ...siteOpenGraph,
    title: 'Stack | Samuel Arandia',
    description: 'Lenguajes, frameworks y herramientas con las que trabaja Samuel Arandia a diario.',
    url: '/skills',
  },
}

export default function Page() {
  return <SkillsView />
}
