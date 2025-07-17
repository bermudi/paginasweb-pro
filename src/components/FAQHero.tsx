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

            {/* Contenido principal con imagen */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:max-w-[55%]"
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
                    <div className="w-full">
                        <div className="inline-flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white rounded-lg font-medium whitespace-nowrap"
                                onClick={() => {
                                    document.getElementById('faq')?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }}
                            >
                                Explorar Preguntas
                            </motion.button>
                            <motion.a
                                href="/"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent text-primary border-2 border-primary rounded-lg font-medium whitespace-nowrap"
                            >
                                Ir al Inicio
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
                {/* Ilustración */}
                <motion.div 
                    className="relative w-full max-w-md lg:max-w-none lg:w-2/5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img
                        src="/images/faq/illustration-woman-online-mobile.svg"
                        alt="Ilustración de una mujer interactuando con contenido digital"
                        width={500}
                        height={500}
                        className="w-full h-auto object-contain"
                        loading="eager"
                    />
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