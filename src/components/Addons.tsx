import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Check, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { addons, categories, type Addon } from "../data/addons";
import { removeAccents } from "@/utils/text"; // Updated import path

const ITEMS_PER_PAGE = 6;

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

  useEffect(() => {
    onAddonsChange?.(selectedAddons);
  }, [selectedAddons, onAddonsChange]);

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
    <section id={id} ref={sectionRef} className="py-16 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block">
            Complementos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personaliza tu solución
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
            Añade funcionalidades específicas para crear la solución perfecta para tu negocio
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar complementos..."
              value={searchQuery}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="relative">
            <select
              value={selectedCategory || ""}
              onChange={(e) => {
                handleCategoryChange(e.target.value || null);
              }}
              className="appearance-none w-full md:w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent pr-10"
            >
              <option value="">Todas las categorías</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {filteredAddons.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-primary/60">No se encontraron complementos que coincidan con tu búsqueda.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {paginatedAddons.map((addon) => (
                  <motion.div
                    key={addon.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="glass rounded-xl p-6 relative overflow-hidden"
                  >
                    <div className="mb-4">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10">
                        {addon.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{addon.name}</h3>
                    <p className="text-primary/80 mb-4">{addon.description}</p>
                    <div className="flex items-baseline mb-4">
                      <span className="text-2xl font-bold">${addon.price.toLocaleString()}</span>
                      <span className="text-primary/60 ml-2">/complemento</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {addon.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-primary/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      onClick={() => handleAddonToggle(addon.name)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 ${
                        selectedAddons.includes(addon.name)
                          ? 'bg-accent text-black'
                          : 'bg-primary text-white hover:bg-primary/90'
                      }`}
                    >
                      {selectedAddons.includes(addon.name) ? (
                        <>
                          <Check className="w-4 h-4" />
                          Seleccionado
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          Agregar
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center items-center gap-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm">
                  Página {currentPage} de {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
