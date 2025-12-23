import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Adrian",
  lastName: "Flórez",
  name: `Adrian Flórez`,
  role: "Data Analyst",
  avatar: "/images/avatar.jpg",
  email: "felo990@gmail.com",
  location: "Bogotá/Colombia", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "Ingles"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AFFlorezHerrera",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/adrianflorez/",
    essential: true,
  },
    {
    name: "Email",
    icon: "email",
    link: `felo990@gmail.com`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transformando datos en decisiones</>,
  featured: {
    display: true,
    title: <>Proyecto destacado: Análisis de inventario</>,
    href: "/AFFlorezHerrera/An-lisis-de-inventario-Clink-Sip",
  },
  subline: (
    <>
    Soy Ingeniero Agrónomo y analista de datos, con experiencia en producción, investigación aplicada y gestión de proyectos. He participado activamente en grupos de investigación de Colciencias avalados por la Universidad Nacional de Colombia, lo que me ha permitido fortalecer mi pensamiento crítico, la rigurosidad científica y la capacidad de trabajo en equipo multidisciplinario.
</>
  ),
};


const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Projectos – ${person.name}`,
  description: `Proyectos de análisis de datos por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, work };
