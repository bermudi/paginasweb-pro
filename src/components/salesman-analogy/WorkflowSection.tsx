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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-8 shadow-lg border border-white/20 mb-12"
    >
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Cómo Trabajamos: Tu Viaje al Éxito Digital
      </h3>

      <p className="text-primary/80 text-center mb-8">
        Un proceso claro y transparente que garantiza resultados excepcionales en cada proyecto, como una ruta bien planificada para tu viaje digital.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 border border-white/20 relative overflow-hidden cursor-pointer"
          whileHover={{
            x: 8,
            scale: 1.05,
            boxShadow: "0 8px 20px -4px rgba(59, 130, 246, 0.3)",
            borderColor: "#93c5fd"
          }}
          transition={getTransition({ duration: 0.3, ease: "easeInOut" })}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            className="absolute top-0 right-0 w-16 h-16 bg-accent rounded-full -mr-8 -mt-8 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
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
          <h4 className="text-xl font-bold text-gray-900 mb-3">Consulta y Análisis</h4>
          <p className="text-primary/80">
            Como un buen mecánico, primero diagnosticamos tus necesidades exactas antes de proponer soluciones. Entendemos tus objetivos de negocio para crear la solución perfecta.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 border border-white/20 relative overflow-hidden cursor-pointer"
          whileHover={{
            x: 8,
            scale: 1.05,
            boxShadow: "0 8px 20px -4px rgba(16, 185, 129, 0.3)",
            borderColor: "#6ee7b7"
          }}
          transition={getTransition({ duration: 0.3, ease: "easeInOut" })}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            className="absolute top-0 right-0 w-16 h-16 bg-accent rounded-full -mr-8 -mt-8 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
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
          <h4 className="text-xl font-bold text-gray-900 mb-3">Propuesta y Cotización</h4>
          <p className="text-primary/80">
            Como elegir el modelo y características de tu vehículo, desarrollamos una propuesta detallada con cronograma y presupuesto transparente.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 border border-white/20 relative overflow-hidden cursor-pointer"
          whileHover={{
            x: 8,
            scale: 1.05,
            boxShadow: "0 8px 20px -4px rgba(139, 92, 246, 0.3)",
            borderColor: "#c4b5fd"
          }}
          transition={getTransition({ duration: 0.3, ease: "easeInOut" })}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            className="absolute top-0 right-0 w-16 h-16 bg-accent rounded-full -mr-8 -mt-8 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
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
          <h4 className="text-xl font-bold text-gray-900 mb-3">Desarrollo</h4>
          <p className="text-primary/80">
            Como ingenieros construyendo tu vehículo a medida, creamos tu proyecto con las mejores prácticas y tecnologías actuales para un rendimiento óptimo.
          </p>
        </motion.div>

        {/* Step 4 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 border border-white/20 relative overflow-hidden cursor-pointer"
          whileHover={{
            x: 8,
            scale: 1.05,
            boxShadow: "0 8px 20px -4px rgba(245, 158, 11, 0.3)",
            borderColor: "#fcd34d"
          }}
          transition={getTransition({ duration: 0.3, ease: "easeInOut" })}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            className="absolute top-0 right-0 w-16 h-16 bg-accent rounded-full -mr-8 -mt-8 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
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
          <h4 className="text-xl font-bold text-gray-900 mb-3">Lanzamiento y Soporte</h4>
          <p className="text-primary/80">
            Como la entrega de llaves y servicio postventa, lanzamos tu proyecto y brindamos soporte continuo para asegurar su crecimiento y óptimo funcionamiento.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};