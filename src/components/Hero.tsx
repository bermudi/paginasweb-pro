import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section 
      className="min-h-[calc(100vh-80px)] md:min-h-screen flex items-center justify-center pt-24 pb-16 md:py-0 px-4 sm:px-6 relative overflow-hidden"
      aria-label="Introducción principal"
      role="banner"
    >
      {/* Fondo degradado con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-muted/50" />
      
      {/* Contenedor principal con mejor espaciado responsivo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 xl:py-24">
        {/* Grid layout para contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-6"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-medium text-foreground"
            >
              Disponible para Proyectos
            </motion.span>
            
            <div className="space-y-4 md:space-y-6">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="block">Creando Experiencias</span>
                <span className="text-primary">Digitales con Propósito</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Desarrollo sitios web personalizados que ayudan a las empresas a destacar en línea con soluciones modernas, rápidas y centradas en resultados.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 bg-primary text-primary-foreground rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Ver mi trabajo
              </motion.button>
              <motion.a
                href="#contact"
                className="px-6 py-3.5 border border-border rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:bg-accent/50 hover:shadow-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Contáctame
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Sección de imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-full min-h-[320px] md:min-h-[400px] lg:min-h-[500px]"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
              <img
                src="/images/hero03.webp"
                alt="Espacio de trabajo de desarrollo web profesional con múltiples pantallas y equipo moderno"
                className="w-full h-full object-cover object-center"
                loading="eager"
                width={800}
                height={600}
              />
            </div>
            
            {/* Elementos decorativos */}
            <motion.div 
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary/10 blur-3xl -z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-accent/10 blur-3xl -z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Indicador de desplazamiento */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="text-sm text-muted-foreground">Desliza para ver más</span>
        <motion.div 
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-2 bg-muted-foreground/70 rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};