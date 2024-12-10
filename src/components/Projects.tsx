import { motion } from "framer-motion";
import { useEffect } from "react";

const projects = [
  {
    title: "Plataforma de comercio electrónico",
    description: "Tienda online moderna con una experiencia de compra fluida",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
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
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
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
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
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
          <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block" role="text">
            Trabajo destacado
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos recientes</h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
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
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              role="listitem"
            >
              <div className="group relative overflow-hidden rounded-2xl glass h-full flex flex-col">
                <a 
                  href={project.link}
                  className="block aspect-video overflow-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver proyecto: ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={`Vista previa del proyecto: ${project.title}`}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="400"
                    height="225"
                  />
                </a>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-primary/80 mb-4">{project.description}</p>
                  <div className="mt-auto">
                    <a
                      href={project.link}
                      className="text-primary font-medium hover:opacity-70 transition-opacity inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver detalles del proyecto: ${project.title}`}
                    >
                      Ver proyecto →
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};