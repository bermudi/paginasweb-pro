import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { pricingPlans } from "../data/pricing";
import { addons } from "../data/addons";

interface FormData {
  name: string;
  email: string;
  message: string;
  selectedPackage?: string;
  selectedAddons?: string[];
  honeypot: string;
}

interface ContactProps {
  selectedPackage?: string;
  selectedAddons?: string[];
}

export const Contact = ({ selectedPackage = "", selectedAddons = [] }: ContactProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    selectedPackage,
    selectedAddons,
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessKey: 'ffd6c7c4-cd5e-43f2-a018-bb7b36cd217c',
          name: formData.name,
          email: formData.email,
          message: `${selectedPackage && selectedPackage !== "" ? `
Package: ${selectedPackage}
Price: $${pricingPlans.find(p => p.name === selectedPackage)?.price.toLocaleString()} MXN

${selectedAddons.length > 0 ? `Addons:
${selectedAddons.map(addon => {
  const addonData = addons.find(a => a.name === addon);
  return `- ${addon}: $${addonData?.price.toLocaleString()} MXN`;
}).join('\n')}

` : ''}Total: $${(
  (pricingPlans.find(p => p.name === selectedPackage)?.price || 0) +
  selectedAddons.reduce((total, addonName) => {
    const addon = addons.find(a => a.name === addonName);
    return total + (addon?.price || 0);
  }, 0)
).toLocaleString()} MXN

` : ''}Message:
${formData.message}`,
          subject: `New Project Request - ${selectedPackage}`,
          replyTo: formData.email,
          honeypot: formData.honeypot,
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "", selectedPackage, selectedAddons, honeypot: "" });
        alert("Mensaje enviado con éxito!");
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      alert("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="section-padding">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo lo antes posible.
          </p>
        </motion.div>

        {(selectedPackage && selectedPackage !== "" || selectedAddons.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 rounded-xl bg-accent/5 border border-accent/10"
          >
            <h3 className="text-xl font-semibold mb-4">Tu selección:</h3>
            {selectedPackage && selectedPackage !== "" && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Paquete seleccionado:</span>
                  <span className="font-semibold">
                    ${pricingPlans.find(p => p.name === selectedPackage)?.price.toLocaleString()} MXN
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-sm">
                  {selectedPackage}
                </span>
              </div>
            )}
            {selectedAddons && selectedAddons.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Complementos seleccionados:</span>
                  <span className="font-semibold">
                    ${selectedAddons.reduce((total, addonName) => {
                      const addon = addons.find(a => a.name === addonName);
                      return total + (addon?.price || 0);
                    }, 0).toLocaleString()} MXN
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedAddons.map((addon, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-accent/20 text-sm"
                    >
                      {addon}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {(selectedPackage && selectedPackage !== "" || selectedAddons.length > 0) && (
              <div className="mt-4 pt-4 border-t border-accent/10">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-lg">
                    ${(
                      (pricingPlans.find(p => p.name === selectedPackage)?.price || 0) +
                      selectedAddons.reduce((total, addonName) => {
                        const addon = addons.find(a => a.name === addonName);
                        return total + (addon?.price || 0);
                      }, 0)
                    ).toLocaleString()} MXN
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border bg-white/50"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border bg-white/50"
                placeholder="tu@correo.com"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-white/50 h-32"
              placeholder="Cuéntame más sobre tu proyecto y cualquier requisito específico"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 bg-primary text-white rounded-lg font-medium disabled:opacity-70"
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};
