import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Addons } from "./Addons";
import { pricingPlans } from "../data/pricing";

interface PricingProps {
  selectedPackage: string;
  onPackageSelect: (packageName: string) => void;
  onAddonsChange: (addons: string[]) => void;
}

export const Pricing = ({ selectedPackage, onPackageSelect, onAddonsChange }: PricingProps) => {
  const handlePackageSelect = (packageName: string) => {
    onPackageSelect(packageName);
    const element = document.getElementById('addons');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Diseño que se adapta a ti</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Elige el diseño base y personalízalo con los complementos que necesites.
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
                className={`glass rounded-2xl p-8 flex flex-col ${selectedPackage === plan.name ? 'ring-2 ring-accent' : ''}`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-primary/80 mb-4">{plan.description}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">${plan.price.toLocaleString()}</span>
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
                  onClick={() => handlePackageSelect(plan.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-auto w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    selectedPackage === plan.name
                      ? 'bg-accent text-black'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {selectedPackage === plan.name ? 'Paquete Seleccionado' : 'Empezar ahora'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Addons id="addons" onAddonsChange={onAddonsChange} />
    </>
  );
};