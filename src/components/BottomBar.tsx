import { motion, AnimatePresence } from "framer-motion";
import { pricingPlans } from "@/data/pricing";
import { addons } from "@/data/addons";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface BottomBarProps {
  selectedPackage: string;
  selectedAddons: string[];
}

export const BottomBar = ({ selectedPackage, selectedAddons }: BottomBarProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Hide bar when scrolling down, show when scrolling up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setIsVisible(true);
      }
      
      // Add shadow when scrolled
      setIsScrolled(currentScrollY > 10);
      lastScrollY = currentScrollY;
    };

    // Hide when contact section is in view
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(false);
        } else if (window.scrollY < window.innerHeight * 0.7) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: '0px 0px -40% 0px'
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  if ((!selectedPackage && selectedAddons.length === 0) || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className={`fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/50 z-50 transition-shadow duration-300 ${
          isScrolled ? 'shadow-2xl' : 'shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
            {/* Selection Summary */}
            <div className="flex-1 w-full sm:w-auto overflow-hidden">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm">
                {selectedPackage && (
                  <div className="flex items-center gap-2 bg-accent/10 px-3 py-1.5 rounded-lg">
                    <span className="font-medium text-foreground/90">{selectedPackage}</span>
                    <span className="text-foreground/60">${selectedPlan?.price.toLocaleString()}</span>
                  </div>
                )}
                
                {selectedAddons.length > 0 && (
                  <div className="flex items-center gap-2 bg-accent/5 px-3 py-1.5 rounded-lg">
                    <span className="text-foreground/80">
                      +{selectedAddons.length} {selectedAddons.length === 1 ? 'complemento' : 'complementos'}
                    </span>
                    {totalAddonsPrice > 0 && (
                      <span className="text-foreground/60">+${totalAddonsPrice.toLocaleString()}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* Total and CTA */}
            <div className="w-full sm:w-auto flex items-center justify-between gap-4">
              <div className="text-right">
                <div className="text-xs text-foreground/60">Total estimado</div>
                <div className="text-lg font-bold text-foreground">${totalPrice.toLocaleString()} MXN</div>
              </div>
              
              <motion.button
                onClick={() => {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    contactElement.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm sm:text-base whitespace-nowrap transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <span>Continuar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
