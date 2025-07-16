import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden"
      aria-label="Introducción principal"
      role="banner"
    >
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-muted" />

      {/* Círculos decorativos 
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-primary"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-accent"
        />
      </div> Círculos decorativos */}

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12 flex flex-col lg:flex-row items-center gap-12 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/10">
        {/* Contenido de texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block">
            Desarrollo web Profesional
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Creando Experiencias Digitales
            <br /> con Propósito
          </h1>
          <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto lg:mx-0 mb-8">
            Creo sitios web personalizados que ayudan a las empresas a lograr sus objetivos a través de
            prácticas modernas de diseño y desarrollo. Cada proyecto es único, por eso creamos propuestas a medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-lg font-medium"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Ver proyectos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent rounded-lg font-medium"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Obtener Cotización Gratuita
            </motion.button>
          </div>
        </motion.div>

        {/* Sección de imagen */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl" />
            <img
              src="images/hero03.webp"
              alt="Espacio de trabajo de desarrollo web profesional con múltiples pantallas y equipo moderno"
              className="rounded-2xl shadow-xl w-full object-cover"
              style={{ maxHeight: "600px" }}
              loading="eager"
              width="800"
              height="600"
            />
          </div>
        </motion.div>
      </div>

      {/* Tarjeta con efecto de vidrio Tarjeta con efecto de vidrio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-8 left-0 right-0 mx-auto glass px-6 py-4 rounded-xl w-max"
      >
        <div className="flex items-center justify-center">
          <p className="text-sm font-medium text-center">🚀 Arduamente trabajando en proyectos emocionantes</p>
        </div>
      </motion.div>

    </section>
  );
};