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

const about: About = {
  path: "/about",
  label: "Sobre mi",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Actualmente me encuentro en un proceso de transición profesional hacia el mundo de la tecnología, donde podre poner en practica mis competencias en <Text as="span" size="xl" weight="strong">Excel avanzado, Power BI, SQL Server, Python </Text>
y el uso de IA para optimizar análisis y procesos. 
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia laboral",
    experiences: [
      {
        company: "Reforestadora DAGES SAS",
        timeframe: "02/2025 - Actualidad",
        role: "ingeniero / analista de datos",
        achievements: [
          <>
            análisis de inventarios forestales a gran escala, construyendo modelos de datos y procesos de depuración que permitieron identificar zonas con 40% menos desarrollo productivo.
          </>,
          <>
            Analizar y gestionar datos para la toma de decisiones en la plantación de pino.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Pino Caribe",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Universidad Nacional de Colombia",
        timeframe: "05/2019 - Actualidad",
        role: "Ingeniero investigador",
        achievements: [
          <>
            Investigador de cultivos enfocado en análisis de datos, pensamiento crítico y trabajo colaborativo, transformando información experimental en insights accionables para la toma de decisiones y mejora continua.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Estudios",
    institutions: [
      {
        name: "Universidad Nacional de Colombia",
        description: <>Ingeniero agrónomo.</>,
      },
      {
        name: "Soy Henry",
        description: <>Analista de datos. </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "habilidades tecnicas",
    skills: [
      {
        title: "Excel avanzado, Python, SQL, Power BI, R, Trello y clickup ",
        },
        ],
      },
    ],
};

const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Projectos – ${person.name}`,
  description: `Proyectos de análisis de datos por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, work };
