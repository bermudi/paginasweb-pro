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
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Project
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and
            create something amazing together.
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
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border bg-white/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border bg-white/50"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full px-4 py-3 rounded-lg border bg-white/50 h-32"
              placeholder="Tell me about your project"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 bg-primary text-white rounded-lg font-medium"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};