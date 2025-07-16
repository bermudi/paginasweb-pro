import { motion } from "framer-motion";
import { Monitor, ShoppingCart, Layers, Check } from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Desarrollo Web Personalizado",
    description:
      "Sitios web únicos creados desde cero para satisfacer las necesidades específicas de tu negocio.",
    features: ["Diseño responsive", "Optimización SEO", "Panel de administración"],
    schema: {
      "@type": "Service",
      "name": "Desarrollo Web Personalizado",
      "description": "Sitios web únicos creados desde cero para satisfacer las necesidades específicas de tu negocio"
    }
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Tiendas Online",
    description:
      "E-commerce completos con pasarelas de pago, gestión de inventario y herramientas de marketing.",
    features: ["Pasarelas de pago", "Gestión de productos", "Analytics integrado"],
    schema: {
      "@type": "Service",
      "name": "Tiendas Online",
      "description": "E-commerce completos con pasarelas de pago, gestión de inventario y herramientas de marketing"
    }
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Aplicaciones Web",
    description:
      "Aplicaciones web interactivas y funcionales para optimizar los procesos de tu empresa.",
    features: ["Interfaz intuitiva", "Escalabilidad", "Integración API"],
    schema: {
      "@type": "Service",
      "name": "Aplicaciones Web",
      "description": "Aplicaciones web interactivas y funcionales para optimizar los procesos de tu empresa"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Descubre Nuestro Arsenal Digital!</h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
            Servicios profesionales de desarrollo web adaptados a tus necesidades, con enfoque en el rendimiento y la
            experiencia del usuario. Trabajamos desde la conception hasta el lanzamiento y mantenimiento.
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
              <p className="text-primary/80 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-primary/70">
                    <Check className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block glass rounded-2xl px-8 py-6">
            <h3 className="text-xl font-semibold mb-2">¡También hacemos software de escritorio a la medida!</h3>
            <p className="text-primary/80">¿Necesitas una aplicación de escritorio personalizada? ¡Pregúntanos!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
