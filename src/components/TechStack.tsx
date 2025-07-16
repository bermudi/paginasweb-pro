import { motion } from "framer-motion";
import { Code, Server, Shield, BarChart } from "lucide-react";
import { useEffect } from "react";

const technologies = [
    {
        icon: <Code className="w-6 h-6" />,
        title: "Frameworks Modernos",
        description: "Desarrollo con las tecnologías más actuales para crear experiencias web rápidas y dinámicas.",
        items: ["React", "Vue.js", "Next.js", "Laravel"],
        schema: {
            "@type": "TechArticle",
            "name": "Frameworks Modernos",
            "description": "Desarrollo con las tecnologías más actuales para crear experiencias web rápidas y dinámicas."
        }
    },
    {
        icon: <Server className="w-6 h-6" />,
        title: "Herramientas de Rendimiento",
        description: "Optimización avanzada para garantizar velocidad y eficiencia en todos los dispositivos.",
        items: ["CDN Global", "Caching Avanzado", "Optimización de Recursos", "Lazy Loading"],
        schema: {
            "@type": "TechArticle",
            "name": "Herramientas de Rendimiento",
            "description": "Optimización avanzada para garantizar velocidad y eficiencia en todos los dispositivos."
        }
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Medidas de Seguridad",
        description: "Protección integral para tu sitio web y los datos de tus usuarios.",
        items: ["Certificados SSL", "Backups Automáticos", "Monitoreo 24/7", "Protección contra ataques"],
        schema: {
            "@type": "TechArticle",
            "name": "Medidas de Seguridad",
            "description": "Protección integral para tu sitio web y los datos de tus usuarios."
        }
    },
    {
        icon: <BarChart className="w-6 h-6" />,
        title: "Analytics e Integración",
        description: "Herramientas para medir y mejorar el rendimiento de tu presencia digital.",
        items: ["Google Analytics", "Seguimiento de Conversiones", "Mapas de Calor", "Integraciones API"],
        schema: {
            "@type": "TechArticle",
            "name": "Analytics e Integración",
            "description": "Herramientas para medir y mejorar el rendimiento de tu presencia digital."
        }
    }
];

export const TechStack = () => {
    useEffect(() => {
        // Add Schema.org JSON-LD
        const schema = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": technologies.map((tech, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": tech.schema
            }))
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section
            id="tech-stack"
            className="section-padding bg-gradient-to-b from-background to-muted"
            aria-label="Tecnologías utilizadas"
        >
            <div className="max-w-6xl mx-auto">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block" role="text">
                        Tecnología de Vanguardia
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Stack Tecnológico</h2>
                    <p className="text-primary/80 max-w-2xl mx-auto">
                        Utilizamos las mejores herramientas y tecnologías para crear soluciones web robustas, seguras y de alto rendimiento.
                    </p>
                </motion.header>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-background rounded-xl p-6 shadow-lg border border-primary/10 hover:border-primary/30 transition-all"
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-accent/20 text-accent">
                                    {tech.icon}
                                </div>
                                <h3 className="text-xl font-bold">{tech.title}</h3>
                            </div>
                            <p className="text-primary/80 mb-4">
                                {tech.description}
                            </p>
                            <ul className="grid grid-cols-2 gap-2">
                                {tech.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="text-accent">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
