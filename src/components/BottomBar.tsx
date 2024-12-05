import { motion, AnimatePresence } from "framer-motion";
import { pricingPlans } from "@/data/pricing";
import { addons } from "@/data/addons";
import { useEffect, useState } from "react";

interface BottomBarProps {
  selectedPackage: string;
  selectedAddons: string[];
}

export const BottomBar = ({ selectedPackage, selectedAddons }: BottomBarProps) => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  const selectedPlan = pricingPlans.find(p => p.name === selectedPackage);
  const totalAddonsPrice = selectedAddons.reduce((total, addonName) => {
    const addon = addons.find(a => a.name === addonName);
    return total + (addon?.price || 0);
  }, 0);
  const totalPrice = (selectedPlan?.price || 0) + totalAddonsPrice;

  if (!selectedPackage && selectedAddons.length === 0 || isContactVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-accent/10 shadow-lg z-50"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-primary/60">
                {selectedAddons.length} complemento{selectedAddons.length !== 1 ? 's' : ''} seleccionado{selectedAddons.length !== 1 ? 's' : ''}
              </span>
              {selectedPackage && (
                <>
                  <span className="text-primary/60">•</span>
                  <span className="text-sm text-primary/60">
                    Paquete: {selectedPackage}
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-sm text-primary/60">Total:</span>
              <span className="ml-2 text-lg font-bold">${totalPrice.toLocaleString()} MXN</span>
            </div>
            <motion.a
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent text-black px-6 py-2 rounded-lg font-medium cursor-pointer"
            >
              Continuar
            </motion.a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
