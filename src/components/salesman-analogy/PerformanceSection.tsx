import React from 'react';
import { motion } from 'framer-motion';
import CarAnimation from './CarAnimation';

export const PerformanceSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-8 shadow-lg border border-white/20"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Nuestra Ruta al Éxito</h3>
      </div>
      <p className="text-primary/80 mb-6 leading-relaxed">
        Para evitar confusiones, definamos claramente nuestros roles y aseguremos que tu viaje digital sea tan emocionante como lo imaginaste al "entrar a la agencia". Tu sitio web debe funcionar como un automóvil deportivo perfectamente afinado: rápido, receptivo y confiable.
      </p>
      <p className="text-primary/80 mb-6 leading-relaxed">
        Así como esperas que tu coche arranque cada vez y funcione sin problemas, tus clientes esperan que tu sitio web cargue rápidamente y funcione a la perfección en todos los dispositivos. Estamos aquí para construir el "coche" de tus sueños y enseñarte a conducirlo, o conducirlo por ti si esa es tu preferencia.
      </p>
      <div className="car-container relative h-60 overflow-hidden rounded-lg bg-gradient-to-b from-emerald-200 to-emerald-100 mt-6">
        <CarAnimation />
      </div>
    </motion.div>
  );
};