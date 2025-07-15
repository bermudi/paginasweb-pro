import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
}

interface ContactProps {}

export const Contact = ({}: ContactProps = {}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
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
          message: `Message:
${formData.message}`,
          subject: `New Project Request`,
          replyTo: formData.email,
          honeypot: formData.honeypot,
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "", honeypot: "" });
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

  const handleWhatsAppClick = () => {
    const message = `Hola, mi nombre es ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}

Mensaje:
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+524428908205?text=${encodedMessage}`, '_blank');
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
    <section 
      id="contact" 
      className="section-padding"
      aria-label="Formulario de contacto"
    >
      <div className="max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block" role="text">
            Contáctame
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo lo antes posible.
          </p>
        </motion.header>



        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
          aria-label="Formulario de contacto"
          role="form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border bg-white/50"
                placeholder="Tu nombre"
                required
                aria-required="true"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border bg-white/50"
                placeholder="Tu número de teléfono"
                aria-label="Tu número de teléfono"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-white/50"
              placeholder="tu@correo.com"
              required
              aria-required="true"
              autoComplete="email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-white/50 h-32"
              placeholder="Cuéntame más sobre tu proyecto y cualquier requisito específico"
              required
              aria-required="true"
            ></textarea>
          </div>
          <motion.div className="flex gap-2 md:gap-4 mt-8">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-black/90 transition-colors"
            >
              <Send className="w-5 h-5" />
              Enviar Mensaje
            </motion.button>
            <motion.button
              type="button"
              onClick={handleWhatsAppClick}
              className="aspect-square md:aspect-auto md:flex-1 bg-green-500 text-white p-3 md:px-6 md:py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="hidden md:inline">Enviar Whatsapp</span>
            </motion.button>
            <motion.a
              href="tel:+524428908205"
              className="aspect-square md:aspect-auto md:flex-1 bg-blue-500 text-white p-3 md:px-6 md:py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden md:inline">Llamar</span>
            </motion.a>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};
