import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block">
          Available for Projects
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Crafting Digital Experiences
          <br /> with Purpose
        </h1>
        <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto mb-8">
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
    </section>
  );
};