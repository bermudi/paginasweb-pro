import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Básico",
    price: "7500",
    description: "Perfecto para pequeños negocios",
    features: [
      "Sitio web de hasta 5 páginas",
      "Diseño responsive",
      "Formulario de contacto",
      "SEO básico",
    ],
  },
  {
    name: "Profesional",
    price: "20,000",
    description: "Ideal para negocios en crecimiento",
    features: [
      "Sitio web de hasta 10 páginas",
      "Diseño responsive premium",
      "CMS integrado",
      "SEO avanzado",
      "Soporte por 3 meses",
    ],
  },
  {
    name: "Empresarial",
    price: "50,000",
    description: "Para empresas que buscan lo mejor",
    features: [
      "Sitio web ilimitado",
      "Diseño personalizado",
      "CMS a la medida",
      "SEO profesional",
      "Soporte prioritario 6 meses",
      "Integraciones personalizadas",
    ],
  },
];

export const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block">
            Precios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes que se adaptan a ti</h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
            Elige el plan que mejor se ajuste a tus necesidades y comienza a crear tu presencia en línea.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-primary/80 mb-4">{plan.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-primary/60 ml-2">/proyecto</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-primary/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto w-full bg-accent hover:bg-accent/90 text-black py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Empezar ahora
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};