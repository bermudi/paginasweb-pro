import React from 'react';
import { motion } from 'framer-motion';

export const WorkflowSection: React.FC = () => {
  // Helper function for reduced motion
  const getTransition = (baseTransition: any) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return { ...baseTransition, duration: 0, repeat: 0 };
    }
    return baseTransition;
  };

  const steps = [
    {
      title: "Consulta y Análisis",
      description: "Como un buen mecánico, primero diagnosticamos tus necesidades exactas antes de proponer soluciones. Entendemos tus objetivos de negocio para crear la solución perfecta.",
      color: "#93c5fd",
      shadowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      title: "Propuesta y Cotización",
      description: "Como elegir el modelo y características de tu vehículo, desarrollamos una propuesta detallada con cronograma y presupuesto transparente.",
      color: "#6ee7b7",
      shadowColor: "rgba(16, 185, 129, 0.3)"
    },
    {
      title: "Desarrollo",
      description: "Como ingenieros construyendo tu vehículo a medida, creamos tu proyecto con las mejores prácticas y tecnologías actuales para un rendimiento óptimo.",
      color: "#c4b5fd",
      shadowColor: "rgba(139, 92, 246, 0.3)"
    },
    {
      title: "Lanzamiento y Soporte",
      description: "Como la entrega de llaves y servicio postventa, lanzamos tu proyecto y brindamos soporte continuo para asegurar su crecimiento y óptimo funcionamiento.",
      color: "#fcd34d",
      shadowColor: "rgba(245, 158, 11, 0.3)"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-8 shadow-lg border border-white/20 mb-12"
    >
      <h3 className="text-3xl font-bold text-gray-900 text-center">
        Cómo Trabajamos:
      </h3>
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Tu Viaje al Éxito Digital
      </h3>

      <p className="text-primary/80 text-center mb-8">
        Un proceso claro y transparente que garantiza resultados excepcionales en cada proyecto, como una ruta bien planificada para tu viaje digital.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={getTransition({
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut"
            })}
            className="glass rounded-xl p-6 border border-white/20 relative overflow-hidden cursor-pointer"
            whileHover={{
              x: 8,
              scale: 1.05,
              boxShadow: `0 8px 20px -4px ${step.shadowColor}`,
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              className="absolute top-0 right-0 w-16 h-16 rounded-full -mr-8 -mt-8 flex items-center justify-center opacity-50"
              style={{ backgroundColor: step.color }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={getTransition({
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              })}
              whileHover={{
                scale: 1.2,
                rotate: 5,
              }}
            />
            <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
            <p className="text-primary/80">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};