import { motion } from "framer-motion";
import { useEffect } from "react";

const projects = [
  {
    title: "Plataforma de comercio electrónico",
    description: "Tienda online moderna con una experiencia de compra fluida",
    image: {
      small: "/images/projects/project-1-400.webp",
      large: "/images/projects/project-1-800.webp"
    },
    link: "https://lasfresas.pages.dev/",
    schema: {
      "@type": "WebSite",
      "name": "Plataforma de comercio electrónico",
      "description": "Tienda online moderna con una experiencia de compra fluida",
      "url": "https://lasfresas.pages.dev/"
    }
  },
  {
    title: "Sitio web de empresa",
    description: "Sitio web corporativo con integración de CMS personalizado",
    image: {
      small: "/images/projects/project-2-400.webp",
      large: "/images/projects/project-2-800.webp"
    },
    link: "https://qroseguro.com/",
    schema: {
      "@type": "WebSite",
      "name": "Sitio web de empresa",
      "description": "Sitio web corporativo con integración de CMS personalizado",
      "url": "https://qroseguro.com/"
    }
  },
  {
    title: "Aplicación web",
    description: "Aplicación web completa con funciones en tiempo real",
    image: {
      small: "/images/projects/project-3-400.webp",
      large: "/images/projects/project-3-800.webp"
    },
    link: "https://respira.bermudi.dev/",
    schema: {
      "@type": "WebApplication",
      "name": "Aplicación web",
      "description": "Aplicación web completa con funciones en tiempo real",
      "url": "https://respira.bermudi.dev/"
    }
  },
];

export const Projects = () => {
  useEffect(() => {
    // Add Schema.org JSON-LD
    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": project.schema
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section 
      id="projects" 
      className="section-padding bg-secondary"
      aria-label="Proyectos destacados"
    >
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span 
            className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 inline-block" 
            role="text"
            aria-label="Sección de proyectos"
          >
            Trabajo destacado
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Proyectos recientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora algunos de mis últimos proyectos de desarrollo web, mostrando un diseño moderno y excelencia técnica.
          </p>
        </motion.header>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Lista de proyectos"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-background rounded-2xl shadow-lg overflow-hidden border border-primary/10"
              role="listitem"
            >
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Ver proyecto: ${project.title}`}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image.small}
                    srcSet={`${project.image.small} 400w, ${project.image.large} 800w`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt={`Captura de pantalla del proyecto ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};