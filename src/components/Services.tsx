import { motion } from "framer-motion";
import { Code, Laptop, Globe, Check } from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Desarrollo personalizado",
    description:
      "Soluciones web a medida, creadas desde cero para satisfacer tus necesidades específicas",
    schema: {
      "@type": "Service",
      "name": "Desarrollo personalizado",
      "description": "Soluciones web a medida, creadas desde cero para satisfacer tus necesidades específicas"
    }
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Diseño receptivo",
    description:
      "Sitios web hermosos y funcionales que funcionan perfectamente en todos los dispositivos",
    schema: {
      "@type": "Service",
      "name": "Diseño receptivo",
      "description": "Sitios web hermosos y funcionales que funcionan perfectamente en todos los dispositivos"
    }
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Soluciones de comercio electrónico",
    description:
      "Tiendas online con procesamiento seguro de pagos y gestión de inventario",
    schema: {
      "@type": "Service",
      "name": "Soluciones de comercio electrónico",
      "description": "Tiendas online con procesamiento seguro de pagos y gestión de inventario"
    }
  },
];

export const Services = () => {
  useEffect(() => {
    // Add Schema.org JSON-LD
    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": service.schema
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
      className="section-padding"
      aria-label="Servicios ofrecidos"
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
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que ofrezco</h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
            Servicios profesionales de desarrollo web adaptados a tus necesidades, con enfoque en el rendimiento y la experiencia del usuario.
          </p>
        </motion.header>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          role="list"
          aria-label="Lista de servicios"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-8"
              role="listitem"
            >
              <div className="mb-6 inline-block p-3 bg-accent rounded-xl" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-primary/80">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
