import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-muted" />
      
      {/* Decorative circles */}
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
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block">
            Available for Projects
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Crafting Digital Experiences
            <br /> with Purpose
          </h1>
          <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto lg:mx-0 mb-8">
            I create custom websites that help businesses achieve their goals through
            modern design and development practices.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white rounded-lg font-medium"
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl" />
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Coding workspace"
              className="rounded-2xl shadow-xl w-full object-cover"
              style={{ maxHeight: "600px" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Glass effect card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 glass px-6 py-4 rounded-xl"
      >
        <p className="text-sm font-medium">🚀 Currently working on exciting projects</p>
      </motion.div>
    </section>
  );
};