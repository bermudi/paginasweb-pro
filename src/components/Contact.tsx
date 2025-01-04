import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import { pricingPlans } from "../data/pricing";
import { addons } from "../data/addons";

interface FormData {
  name: string;
  email: string;
  phone: string;
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
    phone: "",
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
        setFormData({ name: "", email: "", phone: "", message: "", selectedPackage, selectedAddons, honeypot: "" });
        alert("Message sent successfully!");
      } else {
        throw new Error('Error sending message');
      }
    } catch (error) {
      alert("There was an error sending the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const packageInfo = selectedPackage ? `
Package: ${selectedPackage}
Price: $${pricingPlans.find(p => p.name === selectedPackage)?.price.toLocaleString()} MXN` : '';

    const addonsInfo = selectedAddons.length > 0 ? `
Addons:
${selectedAddons.map(addon => {
  const addonData = addons.find(a => a.name === addon);
  return `- ${addon}: $${addonData?.price.toLocaleString()} MXN`;
}).join('\n')}` : '';

    const total = selectedPackage ? `
Total: $${(
  (pricingPlans.find(p => p.name === selectedPackage)?.price || 0) +
  selectedAddons.reduce((total, addonName) => {
    const addon = addons.find(a => a.name === addonName);
    return total + (addon?.price || 0);
  }, 0)
).toLocaleString()} MXN` : '';

    const message = `Hi, my name is ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}${packageInfo}${addonsInfo}${total}

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
      aria-label="Contact form"
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
            Contact Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you as soon as possible.
          </p>
        </motion.header>

        {(selectedPackage && selectedPackage !== "" || selectedAddons.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 rounded-xl bg-accent/5 border border-accent/10"
            role="region"
            aria-label="Resumen de selección"
          >
            <h3 className="text-xl font-semibold mb-4">Your Selection:</h3>
            {selectedPackage && selectedPackage !== "" && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Selected Package:</span>
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
                  <span className="font-medium">Selected Add-ons:</span>
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
          aria-label="Formulario de contacto"
          role="form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border bg-white/50"
                placeholder="Your name"
                required
                aria-required="true"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border bg-white/50"
                placeholder="Your phone number"
                aria-label="Your phone number"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-white/50"
              placeholder="your@email.com"
              required
              aria-required="true"
              autoComplete="email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-white/50 h-32"
              placeholder="Tell me more about your project and any specific requirements"
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
              Send Message
            </motion.button>
            <motion.button
              type="button"
              onClick={handleWhatsAppClick}
              className="aspect-square md:aspect-auto md:flex-1 bg-green-500 text-white p-3 md:px-6 md:py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="hidden md:inline">Send WhatsApp</span>
            </motion.button>
            <motion.a
              href="tel:+524428908205"
              className="aspect-square md:aspect-auto md:flex-1 bg-blue-500 text-white p-3 md:px-6 md:py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden md:inline">Call</span>
            </motion.a>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};
