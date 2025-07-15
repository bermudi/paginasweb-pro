import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import VanAnimation from './VanAnimation';
import BouncyCarAnimation from './BouncyCarAnimation';
import CollapsibleSection from './CollapsibleSection';
import './CarAnalogyAnimations.css';

export const CarAnalogy = () => {
  useEffect(() => {
    // Schema.org JSON-LD for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Building a Website is Like Buying a Car',
      description: 'Understanding web development through the analogy of car buying - roles, responsibilities, and expectations.',
      author: {
        '@type': 'Organization',
        name: 'PaginasWeb Pro'
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Función helper para reduced motion
  const getTransition = (baseTransition) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return { ...baseTransition, duration: 0, repeat: 0 };
    }
    return baseTransition;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¡Bienvenido a tu Viaje Web: Construyamos y Conduzcamos Juntos!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Construir un sitio web es una aventura emocionante, pero para asegurar un viaje sin contratiempos, es esencial tener claridad en los roles y responsabilidades. Piensa en crear un sitio web como comprar el coche de tus sueños.
          </p>
        </motion.div>

        {/* Magazine-Style Content Sections */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Section 1: The Digital Journey with Van Animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">El Viaje Digital</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Imagina que entras a una agencia de autos. Estás emocionado por los diseños elegantes, los motores potentes y la promesa de un viaje suave. Firmas los papeles, te entregan las llaves y estás listo para salir a la carretera.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Pero luego, te volteas hacia el vendedor y le dices: "Entonces... ¿tú me vas a llevar a todos lados, verdad?" Suena gracioso, pero esto pasa a menudo en el desarrollo web. Los clientes piden un sitio web hecho a medida, pero a veces esperan que el desarrollador no solo construya el "coche", sino que también lo conduzca y lo mantenga por ellos.
            </p>

            {/* Van Animation */}
            <VanAnimation />
          </motion.div>

          {/* Section 2: Performance with Bouncy Car Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nuestra Ruta al Éxito</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Para evitar confusiones, definamos claramente nuestros roles y aseguremos que tu viaje digital sea tan emocionante como lo imaginaste al "entrar a la agencia". Tu sitio web debe funcionar como un automóvil deportivo perfectamente afinado: rápido, receptivo y confiable.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Así como esperas que tu coche arranque cada vez y funcione sin problemas, tus clientes esperan que tu sitio web cargue rápidamente y funcione a la perfección en todos los dispositivos. Estamos aquí para construir el "coche" de tus sueños y enseñarte a conducirlo, o conducirlo por ti si esa es tu preferencia.
            </p>

            {/* Bouncy Car Animation */}
            <div className="car-container relative h-48 overflow-hidden rounded-lg bg-gradient-to-b from-emerald-200 to-emerald-100 mt-6">
              <BouncyCarAnimation />
            </div>
          </motion.div>
        </div>

        {/* Detailed Sections with Collapsible Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿Quién Hace Qué? Definiendo Roles y Responsabilidades
          </h3>

          <CollapsibleSection title="Tu Rol: Lo Que Aportas al Proyecto" defaultOpen={true}>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Tu Visión de Negocio</h5>
                  <p className="text-gray-600">Así como decides si necesitas una SUV familiar o un deportivo, tú tienes claro tus objetivos de negocio, tu público meta y la identidad de tu marca.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Contenido y Materiales</h5>
                  <p className="text-gray-600">Tú nos entregas los textos, imágenes, logotipos y demás contenido; es como decirnos el color y los accesorios que quieres para tu coche.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Retroalimentación y Decisiones</h5>
                  <p className="text-gray-600">Así como pruebas diferentes modelos, revisas nuestro trabajo y das tu opinión para asegurarnos de que estamos creando justo lo que necesitas.</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Mi Rol: Lo Que Manejo Por Ti">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Implementación Técnica</h5>
                  <p className="text-gray-600">Nosotros nos encargamos de toda la programación, hospedaje, seguridad y lo técnico; como la agencia que gestiona el financiamiento, los papeles y la entrega del auto.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Diseño y Experiencia de Usuario</h5>
                  <p className="text-gray-600">Creamos diseños atractivos e intuitivos que funcionan perfecto en cualquier dispositivo, asegurando que tu vehículo digital ruede suave en cualquier camino.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Optimización y Rendimiento</h5>
                  <p className="text-gray-600">Optimizamos para velocidad, buscadores y conversiones; como un mecánico afinando tu motor para el mejor desempeño.</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Evitando Baches en el Camino: Expectativas vs. Realidad">
            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h5 className="font-semibold text-red-800 mb-2">❌ Expectativa Irreal</h5>
                <p className="text-red-700 mb-2">"Quiero una página como Amazon, pero solo tengo $500 y la necesito para la próxima semana."</p>
                <p className="text-red-600 text-sm">Esto es como querer un auto de lujo con presupuesto de bicicleta y esperar entrega inmediata.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-800 mb-2">✅ Enfoque Realista</h5>
                <p className="text-green-700 mb-2">"Necesito una página profesional que muestre mis servicios y convierta visitantes en clientes. ¿Qué se puede hacer con mi presupuesto?"</p>
                <p className="text-green-600 text-sm">Esto nos permite recomendarte la mejor solución para tus necesidades y presupuesto.</p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Tu Manual del Propietario: El Proceso de Desarrollo">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold">1</div>
                <div>
                  <h5 className="font-semibold text-gray-900">Descubrimiento y Planeación</h5>
                  <p className="text-gray-600">Como platicar tus necesidades con el vendedor antes de ver opciones.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold">2</div>
                <div>
                  <h5 className="font-semibold text-gray-900">Diseño y Prototipado</h5>
                  <p className="text-gray-600">Creamos bocetos y prototipos; es como el test drive de tu página web.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold">3</div>
                <div>
                  <h5 className="font-semibold text-gray-900">Desarrollo y Pruebas</h5>
                  <p className="text-gray-600">Construimos y probamos tu página; como fabricar y hacer control de calidad de un auto.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold">4</div>
                <div>
                  <h5 className="font-semibold text-gray-900">Lanzamiento y Soporte</h5>
                  <p className="text-gray-600">Publicamos tu sitio y damos mantenimiento; como la entrega y la garantía de tu coche.</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </motion.div>

        {/* Cómo trabajamos section with adjusted animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Cómo Trabajamos: Tu Viaje al Éxito Digital
          </h3>

          <p className="text-gray-600 text-center mb-8">
            Un proceso claro y transparente que garantiza resultados excepcionales en cada proyecto, como una ruta bien planificada para tu viaje digital.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-xl p-6 border border-blue-100 relative overflow-hidden cursor-pointer"
              whileHover={{
                x: 8,
                scale: 1.05,
                boxShadow: "0 8px 20px -4px rgba(59, 130, 246, 0.3)",
                borderColor: "#93c5fd"
              }}
              transition={getTransition({ duration: 0.3, ease: "easeInOut" })}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-full -mr-8 -mt-8 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={getTransition({
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                })}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  backgroundColor: "#bfdbfe"
                }}
              >
                <span className="text-2xl font-bold text-blue-600 ml-2 mb-2">1</span>
              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Consulta y Análisis</h4>
              <p className="text-gray-600">
                Como un buen mecánico, primero diagnosticamos tus necesidades exactas antes de proponer soluciones. Entendemos tus objetivos de negocio para crear la solución perfecta.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-xl p-6 border border-green-100 relative overflow-hidden cursor-pointer"
              whileHover={{
                x: 8,
                scale: 1.05,
                boxShadow: "0 8px 20px -4px rgba(16, 185, 129, 0.3)",
                borderColor: "#6ee7b7"
              }}
              transition={getTransition({ duration: 0.3, ease: "easeInOut" })}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-full -mr-8 -mt-8 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={getTransition({
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                })}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  backgroundColor: "#a7f3d0"
                }}
              >
                <span className="text-2xl font-bold text-green-600 ml-2 mb-2">2</span>
              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Propuesta y Cotización</h4>
              <p className="text-gray-600">
                Como elegir el modelo y características de tu vehículo, desarrollamos una propuesta detallada con cronograma y presupuesto transparente.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-purple-50 rounded-xl p-6 border border-purple-100 relative overflow-hidden cursor-pointer"
              whileHover={{
                x: 8,
                scale: 1.05,
                boxShadow: "0 8px 20px -4px rgba(139, 92, 246, 0.3)",
                borderColor: "#c4b5fd"
              }}
              transition={getTransition({ duration: 0.3, ease: "easeInOut" })}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                className="absolute top-0 right-0 w-16 h-16 bg-purple-100 rounded-full -mr-8 -mt-8 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={getTransition({
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                })}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  backgroundColor: "#ddd6fe"
                }}
              >
                <span className="text-2xl font-bold text-purple-600 ml-2 mb-2">3</span>
              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Desarrollo</h4>
              <p className="text-gray-600">
                Como ingenieros construyendo tu vehículo a medida, creamos tu proyecto con las mejores prácticas y tecnologías actuales para un rendimiento óptimo.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-amber-50 rounded-xl p-6 border border-amber-100 relative overflow-hidden cursor-pointer"
              whileHover={{
                x: 8,
                scale: 1.05,
                boxShadow: "0 8px 20px -4px rgba(245, 158, 11, 0.3)",
                borderColor: "#fcd34d"
              }}
              transition={getTransition({ duration: 0.3, ease: "easeInOut" })}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                className="absolute top-0 right-0 w-16 h-16 bg-amber-100 rounded-full -mr-8 -mt-8 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={getTransition({
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                })}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  backgroundColor: "#fde68a"
                }}
              >
                <span className="text-2xl font-bold text-amber-600 ml-2 mb-2">4</span>
              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Lanzamiento y Soporte</h4>
              <p className="text-gray-600">
                Como la entrega de llaves y servicio postventa, lanzamos tu proyecto y brindamos soporte continuo para asegurar su crecimiento y óptimo funcionamiento.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Listo para Encender el Motor? ¡Vamos!
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Para asegurar un viaje suave desde el principio, aclaremos algunas cosas antes de empezar: ¿Tienes listos los textos e imágenes? ¿Quién gestionará el dominio y hospedaje? ¿Prefieres un plan de mantenimiento o tomarás el volante para las actualizaciones? Al definir estos roles ahora, evitaremos desvíos y construiremos un sitio web que te lleve exactamente a donde quieres ir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                ¡Comencemos Ahora!
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Conoce Más
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};