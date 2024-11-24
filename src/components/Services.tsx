import { motion } from "framer-motion";
import { Code, Laptop, Globe } from "lucide-react";

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Custom Development",
    description:
      "Tailored web solutions built from scratch to meet your specific needs",
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Responsive Design",
    description:
      "Beautiful, functional websites that work perfectly on all devices",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "E-commerce Solutions",
    description:
      "Online stores with secure payment processing and inventory management",
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
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
            Professional web development services tailored to your needs, with a
            focus on performance and user experience.
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