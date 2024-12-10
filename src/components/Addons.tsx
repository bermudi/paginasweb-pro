import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Check, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { addons, categories, type Addon } from "../data/addons";
import { removeAccents } from "@/utils/text"; // Updated import path

const ITEMS_PER_PAGE_LANDSCAPE = 6;
const ITEMS_PER_PAGE_PORTRAIT = 3;

const useOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    const handleChange = (e: MediaQueryListEvent) => setIsPortrait(e.matches);
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isPortrait;
};

interface AddonsProps {
  onAddonsChange?: (addons: string[]) => void;
  id?: string;
}

export const Addons = ({ onAddonsChange, id }: AddonsProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const isPortrait = useOrientation();
  const ITEMS_PER_PAGE = isPortrait ? ITEMS_PER_PAGE_PORTRAIT : ITEMS_PER_PAGE_LANDSCAPE;

  useEffect(() => {
    onAddonsChange?.(selectedAddons);
  }, [selectedAddons, onAddonsChange]);

  useEffect(() => {
    // Reset to first page when orientation changes to prevent empty pages
    setCurrentPage(1);
  }, [isPortrait]);

  const filteredAddons = addons.filter((addon) => {
    const normalizedSearch = removeAccents(searchQuery);
    const normalizedName = removeAccents(addon.name);
    const normalizedDescription = removeAccents(addon.description);

    const matchesSearch = normalizedName.includes(normalizedSearch) ||
      normalizedDescription.includes(normalizedSearch);
    const matchesCategory = !selectedCategory || addon.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredAddons.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedAddons = filteredAddons.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleAddonToggle = (addonName: string) => {
    setSelectedAddons(prev =>
      prev.includes(addonName)
        ? prev.filter(name => name !== addonName)
        : [...prev, addonName]
    );
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCategoryChange = (value: string | null) => {
    setSelectedCategory(value);
    setCurrentPage(1);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className="py-16 bg-card"
      aria-label="Complementos y personalizaciones"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span 
            className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 inline-block"
            role="text"
            aria-label="Sección de complementos"
          >
            Complementos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Personaliza tu solución
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mejora tu sitio web con funcionalidades adicionales que se adaptan a tus necesidades específicas.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              placeholder="Buscar complementos..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Buscar complementos"
            />
          </div>
          <div className="relative">
            <select
              value={selectedCategory || ""}
              onChange={(e) => handleCategoryChange(e.target.value || null)}
              className="appearance-none w-full md:w-48 pl-10 pr-8 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Filtrar por categoría"
            >
              <option value="">Todas las categorías</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
          </div>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          role="listbox"
          aria-label="Lista de complementos disponibles"
          aria-multiselectable="true"
        >
          <AnimatePresence mode="wait">
            {paginatedAddons.map((addon) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                role="option"
                aria-selected={selectedAddons.includes(addon.name)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleAddonToggle(addon.name);
                  }
                }}
                className={`bg-background border border-border rounded-xl p-6 cursor-pointer transition-all hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary ${
                  selectedAddons.includes(addon.name) ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handleAddonToggle(addon.name)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">{addon.name}</h3>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-primary">
                    {selectedAddons.includes(addon.name) && (
                      <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-accent-foreground px-2 py-1 rounded-full bg-accent/10">
                    {addon.category}
                  </span>
                  <span className="font-semibold text-foreground">
                    ${addon.price.toLocaleString()} MXN
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div 
            className="flex justify-center items-center gap-4"
            role="navigation"
            aria-label="Paginación de complementos"
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-input bg-background text-foreground hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <span className="text-muted-foreground">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-input bg-background text-foreground hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Página siguiente"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
