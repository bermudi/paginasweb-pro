import React from 'react';
import { motion } from 'framer-motion';

export const SalesmanAnalogyIntro: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block" role="text">
        Plan de Viaje
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        ¡Planea tu Viaje Web: Construyamos y Conduzcamos Juntos!
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Construir un sitio web es una aventura emocionante, pero para asegurar un viaje sin contratiempos, es esencial tener claridad en los roles y responsabilidades. Piensa en crear un sitio web como comprar el coche de tus sueños.
      </p>
    </motion.div>
  );
};