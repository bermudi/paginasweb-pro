// src/components/FaqHero.tsx
import { motion } from "framer-motion";

export const FAQHero = () => {
    return (
        <section
            className="py-24 flex items-center justify-center section-padding relative overflow-hidden"
            aria-label="Introducción a Preguntas Frecuentes"
            role="banner"
        >
            {/* Fondo degradado similar al Hero principal */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-muted" />

            {/* Contenido principal, centrado y sin imagen para mantenerlo compacto */}
            <div className="relative z-10 max-w-4xl mx-auto px-8 py-12 flex flex-col items-center text-center bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block">
                        Respuestas a tus dudas
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Preguntas Frecuentes
                    </h1>
                    <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto mb-8">
                        Encuentra respuestas claras y detalladas a las consultas más comunes sobre nuestros servicios de desarrollo web, procesos y tecnologías. Si no ves lo que buscas, no dudes en contactarnos.
                    </p>
                    <div className="flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-primary text-white rounded-lg font-medium"
                            onClick={() => {
                                document.getElementById('faq')?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}
                        >
                            Explorar Preguntas
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Tarjeta con efecto de vidrio, adaptada y opcional */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-8 left-0 right-0 mx-auto glass px-6 py-4 rounded-xl w-max"
            >
                <div className="flex items-center justify-center">
                    <p className="text-sm font-medium text-center">🚀 Resolviendo dudas para impulsar tu proyecto digital</p>
                </div>
            </motion.div>
        </section>
    );
};