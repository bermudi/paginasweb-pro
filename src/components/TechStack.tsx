import { motion } from "framer-motion";
import {
    Code,
    Server,
    Shield,
    BarChart,
    Globe,
    HardDrive,
    Clock,
    Lock,
    Database,
    ShieldCheck,
    Activity,
    LayoutDashboard,
    Flame,
    BarChart2,
    Image,
    Eye
} from "lucide-react";
import { useEffect, useRef } from "react";
import { NextJSIcon, ReactIcon, VueIcon, LaravelIcon } from "./icons";

const technologies = [
    {
        icon: <LayoutDashboard className="w-6 h-6" />,  // Better for frameworks
        title: "Frameworks Modernos",
        description: "Desarrollo con las tecnologías más actuales para crear experiencias web rápidas y dinámicas.",
        items: [
            { name: "React", icon: <ReactIcon className="w-4 h-4" /> },
            { name: "Vue.js", icon: <VueIcon className="w-4 h-4" /> },
            { name: "Next.js", icon: <NextJSIcon className="w-4 h-4" /> },
            { name: "Laravel", icon: <LaravelIcon className="w-4 h-4" /> }
        ],
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
        items: [
            { name: "CDN Global", icon: <Globe className="w-4 h-4" /> },
            { name: "Caching Avanzado", icon: <HardDrive className="w-4 h-4" /> },
            { name: "Optimización de Imágenes", icon: <Image className="w-4 h-4" /> },
            { name: "Lazy Loading", icon: <Clock className="w-4 h-4" /> }
        ],
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
        items: [
            { name: "Certificados SSL", icon: <Lock className="w-4 h-4" /> },
            { name: "Backups Automáticos", icon: <Database className="w-4 h-4" /> },
            { name: "Monitoreo 24/7", icon: <Eye className="w-4 h-4" /> },
            { name: "Protección contra ataques", icon: <ShieldCheck className="w-4 h-4" /> }
        ],
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
        items: [
            { name: "Google Analytics", icon: <Activity className="w-4 h-4" /> },
            { name: "Estadísticas de uso", icon: <BarChart2 className="w-4 h-4" /> },
            { name: "Mapas de Calor", icon: <Flame className="w-4 h-4" /> },
            { name: "Integraciones API", icon: <Code className="w-4 h-4" /> }
        ],
        schema: {
            "@type": "TechArticle",
            "name": "Analytics e Integración",
            "description": "Herramientas para medir y mejorar el rendimiento de tu presencia digital."
        }
    }
];

export const TechStack = () => {
    const descriptionRefs = useRef([]);

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

        // Equalize description heights
        const maxHeight = Math.max(...descriptionRefs.current.map(el => el?.getBoundingClientRect().height || 0));
        descriptionRefs.current.forEach(el => {
            if (el) {
                el.style.height = `${maxHeight}px`;
            }
        });

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
                                <div className="p-3 rounded-xl  bg-accent">
                                    {tech.icon}
                                </div>
                                <h3 className="text-xl font-bold">{tech.title}</h3>
                            </div>
                            <p
                                ref={(el) => (descriptionRefs.current[index] = el)}
                                className="text-primary/80 mb-4"
                            >
                                {tech.description}
                            </p>
                            <ul className="grid grid-cols-2 gap-2 px-4">
                                {tech.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="text-primary/60 rounded-md bg-accent p-1">
                                            {item.icon}
                                        </span>
                                        <span>{item.name}</span>
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