import { motion } from "framer-motion";
import { Code, Laptop, Globe, Check } from "lucide-react";

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Desarrollo personalizado",
    description:
      "Soluciones web a medida, creadas desde cero para satisfacer tus necesidades específicas",
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Diseño receptivo",
    description:
      "Sitios web hermosos y funcionales que funcionan perfectamente en todos los dispositivos",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Soluciones de comercio electrónico",
    description:
      "Tiendas online con procesamiento seguro de pagos y gestión de inventario",
  },
];

export const Services = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que ofrezco</h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
            Servicios profesionales de desarrollo web adaptados a tus necesidades, con enfoque en el rendimiento y la experiencia del usuario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <div className="mb-6 inline-block p-3 bg-accent rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-primary/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

