// Section ids double as URL anchors (/#Portafolio). Keep them stable.
export const navLinks = [
    { id: "Inicio" },
    { id: "Portafolio" },
    { id: "About" },
    { id: "Skills" },
    { id: "Contact" },
];

export const EMAIL = "samuelarandia@gmail.com";
// CV files in public/, one per site language.
export const CV_FILES = {
    es: "/SamuelArandiaEspanol.pdf",
    en: "/SamuelArandiaEnglish.pdf",
};

export const socialMedia = [
    {
        id: "social-media-4",
        name: "LinkedIn",
        handle: "/in/samuel-arandia",
        link: "https://www.linkedin.com/in/samuel-arandia/",
    },
    {
        id: "social-media-5",
        name: "GitHub",
        handle: "@samuelArandia",
        link: "https://github.com/samuelArandia",
    },
    {
        id: "social-media-1",
        name: "Instagram",
        handle: "@samuel_arandia",
        link: "https://www.instagram.com/samuel_arandia",
    },
    {
        id: "social-media-2",
        name: "Facebook",
        handle: "samuel.arandia",
        link: "https://www.facebook.com/samuel.arandia",
    },
    {
        id: "social-media-3",
        name: "X",
        handle: "@Arandia_samuel",
        link: "https://twitter.com/Arandia_samuel",
    },
];

// Order sets the hierarchy: `featured` projects get the large layout.
// Descriptions and roles live in i18n/translations.js under the same id.
export const projects = [
    {
        id: "proyecto-4",
        imageSrc: "/projects/softrent.jpg",
        imageWidth: 1600,
        imageHeight: 842,
        title: "SoftRent",
        subtitle: "SaaS",
        link: "https://softrent.cl",
        technologies: ["Angular", "TypeScript", "Spring Boot", "PostgreSQL"],
        featured: true,
    },
    {
        id: "proyecto-3",
        imageSrc: "/projects/atm.jpg",
        imageWidth: 1600,
        imageHeight: 848,
        title: "ATM Rent",
        subtitle: "ATM Rent",
        link: "https://atmrent.cl",
        technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
        featured: true,
    },
    {
        id: "proyecto-1",
        imageSrc: "/projects/postal.jpg",
        imageWidth: 1600,
        imageHeight: 712,
        title: "PostalExpress",
        subtitle: "Advise SPA",
        link: "https://thor.advise.cl/postal-chile/#/",
        technologies: ["Vue.js", "Go", "Tailwind CSS"],
        featured: true,
    },
    {
        id: "proyecto-2",
        imageSrc: "/projects/sill.jpg",
        imageWidth: 1600,
        imageHeight: 1028,
        title: "Sill",
        subtitle: "Eleva SPA",
        link: "https://center.sill.cl/login",
        technologies: ["Vue.js", "Bootstrap", "Django", "PostgreSQL"],
    },
    {
        id: "proyecto-5",
        imageSrc: "/projects/portafolio.jpg",
        imageWidth: 1600,
        imageHeight: 889,
        title: "Mi Portafolio",
        subtitle: "Personal",
        link: "https://github.com/samuelArandia/portafolio2.0",
        technologies: ["React", "JavaScript", "Tailwind CSS", "Next.js"],
    },
];

export function projectDomain(link) {
    return new URL(link).hostname.replace(/^www\./, "");
}
