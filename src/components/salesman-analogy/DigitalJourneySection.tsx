import React from 'react';
import { motion } from 'framer-motion';
import VanAnimation from './VanAnimation';

export const DigitalJourneySection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-8 shadow-lg border border-white/20"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">El Viaje Digital</h3>
      </div>
      <p className="text-primary/80 mb-6 leading-relaxed">
        Imagina que entras a una agencia de autos. Estás emocionado por los diseños elegantes, los motores potentes y la promesa de un viaje suave. Firmas los papeles, te entregan las llaves y estás listo para salir a la carretera.
      </p>
      <p className="text-primary/80 mb-6 leading-relaxed">
        Pero luego, te volteas hacia el vendedor y le dices: "Entonces... ¿tú me vas a llevar a todos lados, verdad?" Suena gracioso, pero esto pasa a menudo en el desarrollo web. Los clientes piden un sitio web hecho a medida, pero a veces esperan que el desarrollador no solo construya el "coche", sino que también lo conduzca y lo mantenga por ellos.
      </p>
      <VanAnimation />
    </motion.div>
  );
};