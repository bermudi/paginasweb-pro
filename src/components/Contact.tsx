import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Loader } from "lucide-react";
import { SubmissionModal } from "./SubmissionModal";

// Define the structure for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  empresa: string;
  tipoProyecto: string;
  presupuesto: string;
  message: string;
  timeline: string;
  honeypot: string; // For spam prevention
}

// Initial state for the form
const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  empresa: "",
  tipoProyecto: "",
  presupuesto: "",
  message: "",
  timeline: "",
  honeypot: "",
};

// Define component properties
interface ContactProps { }

/**
 * A comprehensive and user-friendly contact form component.
 * It includes detailed fields for project inquiries, submission handling to a static form API,
 * and alternative contact methods like WhatsApp and phone calls.
 */
export const Contact = ({ }: ContactProps = {}) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  // Toggle this to test without actually submitting
  const MOCK_MODE = true;

  // Options for form select fields
  const tipoProyectoOptions = [
    { value: "", label: "Selecciona una opción" },
    { value: "sitio-corporativo", label: "Sitio web corporativo" },
    { value: "ecommerce", label: "Tienda online / E-commerce" },
    { value: "aplicacion-web", label: "Aplicación web" },
    { value: "rediseno", label: "Rediseño de sitio existente" },
    { value: "desktop-app", label: "Aplicación de escritorio" },
    { value: "otro", label: "Otro" },
  ];

  const presupuestoOptions = [
    { value: "", label: "Selecciona un rango" },
    { value: "5k-10k", label: "$5,000 - $10,000" },
    { value: "10k-25k", label: "$10,000 - $25,000" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k+", label: "$50,000+" },
    { value: "no-seguro", label: "No estoy seguro" },
  ];

  const timelineOptions = [
    { value: "", label: "Selecciona un tiempo" },
    { value: "asap", label: "Lo antes posible" },
    { value: "1-2-meses", label: "En 1-2 meses" },
    { value: "3-6-meses", label: "En 3-6 meses" },
    { value: "6-meses+", label: "Más de 6 meses" },
    { value: "explorando", label: "Solo estoy explorando" },
  ];

  /**
   * Mock submission for testing
   */
  const mockSubmit = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate random success/failure (80% success rate)
    const shouldSucceed = Math.random() > 0.2;
    
    if (shouldSucceed) {
      setModalState({
        isOpen: true,
        type: "success",
        title: "¡Solicitud enviada exitosamente!",
        message: "Hemos recibido tu solicitud de cotización. Nuestro equipo la revisará y te contactaremos dentro de las próximas 24 horas para discutir los detalles de tu proyecto.",
      });
      setFormData(initialFormData);
      console.log("Mock submission data:", formData);
    } else {
      throw new Error("Mock error for testing");
    }
  };

  /**
   * Handles form submission to the static forms API.
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      if (MOCK_MODE) {
        await mockSubmit();
        return;
      }

      const response = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessKey: 'ffd6c7c4-cd5e-43f2-a018-bb7b36cd217c', // Replace with your actual access key
          name: formData.name,
          email: formData.email,
          message: `
            Empresa: ${formData.empresa || 'N/A'}
            Tipo de proyecto: ${formData.tipoProyecto}
            Presupuesto estimado: ${formData.presupuesto || 'N/A'}
            Timeline: ${formData.timeline || 'N/A'}
            Teléfono: ${formData.phone || 'N/A'}

            Descripción del proyecto:
            ${formData.message}
          `,
          subject: `Nueva Solicitud de Cotización - ${formData.tipoProyecto}`,
          replyTo: formData.email,
          honeypot: formData.honeypot,
        }),
      });

      if (response.ok) {
        setModalState({
          isOpen: true,
          type: "success",
          title: "¡Solicitud enviada exitosamente!",
          message: "Hemos recibido tu solicitud de cotización. Nuestro equipo la revisará y te contactaremos dentro de las próximas 24 horas para discutir los detalles de tu proyecto.",
        });
        setFormData(initialFormData); // Reset form fields
      } else {
        throw new Error('Error en la respuesta del servidor.');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setModalState({
        isOpen: true,
        type: "error",
        title: "Error al enviar la solicitud",
        message: "Hubo un problema al procesar tu solicitud. Por favor, verifica tu conexión a internet e intenta de nuevo, o contáctanos directamente por WhatsApp o teléfono.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Opens WhatsApp with a pre-filled message based on form data.
   */
  const handleWhatsAppClick = () => {
    const message = `Hola, mi nombre es ${formData.name || '...'}.
Email: ${formData.email || '...'}
Teléfono: ${formData.phone || '...'}
Empresa: ${formData.empresa || '...'}
Tipo de proyecto: ${formData.tipoProyecto || '...'}
Presupuesto estimado: ${formData.presupuesto || '...'}
Timeline: ${formData.timeline || '...'}

Descripción del proyecto:
${formData.message || '...'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+524428908205?text=${encodedMessage}`, '_blank'); // Replace with your WhatsApp number
  };

  /**
   * Updates form state on user input.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Animation variants for motion components
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={formVariants}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 inline-block">
            Contáctame
          </span>
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y recibirás una cotización gratuita y personalizada.
          </p>
        </motion.header>

        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ ...formVariants, visible: { ...formVariants.visible, transition: { ...formVariants.visible.transition, delay: 0.2 } } }}
          className="space-y-6"
          aria-label="Formulario de solicitud de cotización"
        >
          {/* Personal Information Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                placeholder="Tu nombre completo" required aria-required="true" autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                placeholder="tu@correo.com" required aria-required="true" autoComplete="email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">Teléfono</label>
              <input
                type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                placeholder="Tu número de teléfono" autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="empresa" className="block text-sm font-medium mb-2 text-gray-700">Empresa</label>
              <input
                type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                placeholder="Nombre de tu empresa" autoComplete="organization"
              />
            </div>
          </div>

          {/* Project Details Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="tipoProyecto" className="block text-sm font-medium mb-2 text-gray-700">
                Tipo de proyecto <span className="text-red-500">*</span>
              </label>
              <select
                id="tipoProyecto" name="tipoProyecto" value={formData.tipoProyecto} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                required aria-required="true"
              >
                {tipoProyectoOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="presupuesto" className="block text-sm font-medium mb-2 text-gray-700">Presupuesto estimado</label>
              <select
                id="presupuesto" name="presupuesto" value={formData.presupuesto} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              >
                {presupuestoOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium mb-2 text-gray-700">
              ¿Cuándo necesitas el proyecto?
            </label>
            <select
              id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            >
              {timelineOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
              Descripción del proyecto <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message" name="message" value={formData.message} onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              placeholder="Describe tus objetivos, funcionalidades clave y cualquier detalle importante." required aria-required="true"
            ></textarea>
          </div>

          {/* Honeypot field for spam prevention (visually hidden) */}
          <input
            type="text" name="honeypot" value={formData.honeypot} onChange={handleChange}
            style={{ display: 'none' }} tabIndex={-1} autoComplete="off"
          />



          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Solicitar Cotización</span>
                </>
              )}
            </motion.button>
            <div className="flex-shrink-0 grid grid-cols-2 md:flex md:flex-row gap-4">
              <motion.button
                type="button"
                onClick={handleWhatsAppClick}
                className="flex-1 bg-green-500 text-white p-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Enviar un mensaje por WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                <span className="hidden md:inline">WhatsApp</span>
              </motion.button>
              <motion.a
                href="tel:+524428908205" // Replace with your phone number
                className="flex-1 bg-blue-500 text-white p-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Realizar una llamada"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden md:inline">Llamar</span>
              </motion.a>
            </div>
          </div>
        </motion.form>

        {/* Submission Modal */}
        <SubmissionModal
          isOpen={modalState.isOpen}
          onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
          type={modalState.type}
          title={modalState.title}
          message={modalState.message}
        />
      </div>
    </section>
  );
};

export default Contact;