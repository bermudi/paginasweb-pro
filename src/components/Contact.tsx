import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block">
            Contáctame
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comienza tu Proyecto
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
            ¿Listo para dar vida a tu visión? Hablemos sobre tu proyecto y creemos algo increíble juntos.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border bg-white/50"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Correo electrónico</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border bg-white/50"
                placeholder="tu@correo.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Mensaje</label>
            <textarea
              className="w-full px-4 py-3 rounded-lg border bg-white/50 h-32"
              placeholder="Cuéntame sobre tu proyecto"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 bg-primary text-white rounded-lg font-medium"
          >
            Enviar Mensaje
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};