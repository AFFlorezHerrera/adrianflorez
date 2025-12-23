import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Adrian",
  lastName: "Flórez",
  name: `Adrian Flórez`,
  role: "Analista de datos",
  avatar: "/images/avatar.jpg",
  email: "felo990@gmail.com",
  location: "America/Bogota", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Español"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Mantente en contacto conmigo para conocer mas de mi trabajo</>,
  description: <>Suscribete a mi red de contactos para estar actualizado</>,
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
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Sitio web de portfolio que muestra mi trabajo como ${person.role}`,
  headline: <>Transformando datos en decisiones</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Adrian</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Proyectos
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
   Soy Ingeniero Agrónomo y analista de datos, con experiencia en producción, investigación aplicada y gestión de proyectos. He participado activamente en grupos de investigación de Colciencias avalados por la Universidad Nacional de Colombia, lo que me ha permitido fortalecer mi pensamiento crítico, la rigurosidad científica y la capacidad de trabajo en equipo multidisciplinario
</>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre mi",
  title: `${person.name}`,
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
        Adrian Flórez es un ingeniero Agrónomo y analista de datos, con experiencia en producción, investigación aplicada y gestión de proyectos, con partición activa en grupos de investigación de Colciencias avalados por la Universidad Nacional de Colombia, lo que ha permitido fortalecer el pensamiento crítico, la rigurosidad científica y la capacidad de trabajo en equipo multidisciplinario., Me apasiona la investigación, el análisis, evaluación, organización e implementación de proyectos con impacto en la sociedad, la economía y las comunidades; ademas poseo buena capacidad para las relaciones públicas y la comunicación.  
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia de trabajo",
    experiences: [
      {
        company: "Reforestadora DAGES",
        timeframe: "02/2025 - Presente",
        role: "Ingeniero analista de datos",
        achievements: [
          <>
            análisis de inventarios forestales a gran escala, construyendo modelos de datos y procesos de depuración que permitieron identificar zonas con 40% menos desarrollo productivo.
          </>,
          <>
            Analizar y gestionar datos para la toma de decisiones en la plantación.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Universidad Nacional de Colombia",
        timeframe: "2019 - Presente",
        role: "Ingeniero investigador",
        achievements: [
          <>
            Investigador de cultivos enfocado en análisis de datos, pensamiento crítico y trabajo colaborativo, transformando información experimental en insights accionables para la toma de decisiones y mejora continua
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
        description: <>Ingenieria agronómica.</>,
      },
      {
        name: "Soy Henry",
        description: <>Analista de datos</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades técnicas",
    skills: [
      {
        title: "Phyton",
        description: (
          <>Análisis, limpieza y automatización de datos con Python usando pandas, numpy y visualización para decisiones informadas.</>
        ),
        tags: [
          {
            name: "Phyton",
            icon: "phyton",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "PowerBI",
        description: (
          <>Diseño de dashboards interactivos con modelado de datos, DAX, visualizaciones claras y transformación de datos con Powerquery.</>
        ),
        tags: [
          {
            name: "PowerBi",
            icon: "powerbi",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "SQL",
        description: (
          <>Consulta, transformación y análisis de datos para generar insights confiables y accionables.</>
        ),
        tags: [
          {
            name: "SQL",
            icon: "sql",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
