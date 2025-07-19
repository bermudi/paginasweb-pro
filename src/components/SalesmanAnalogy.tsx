import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VanAnimation from './VanAnimation';
import CarAnimation from './CarAnimation';
import CollapsibleSection from './CollapsibleSection';
import CollapsibleSectionGroup from './CollapsibleSectionGroup';
import './SalesmanAnalogyAnimations.css';

interface TabProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ title, icon, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all duration-300 font-medium ${isActive
        ? 'bg-white text-primary shadow-lg border border-primary/10'
        : 'glass text-primary/70 hover:text-primary hover:bg-white/60'
        }`}
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{title}</span>
    </motion.button>
  );
};

interface TabContentProps {
  isActive: boolean;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ isActive, children }) => {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-2xl p-8 shadow-lg border border-white/20"
    >
      {children}
    </motion.div>
  );
};

export const SalesmanAnalogy = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

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
    <section id="digital-journey" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            ¡Planea tu Viaje Web: Construyamos y Conduzcamos Juntos!
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
            className="glass rounded-2xl p-8 shadow-lg border border-white/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">El Viaje Digital</h3>
            </div>
            <p className="text-primary/80 mb-6 leading-relaxed">
              Imagina que entras a una agencia de autos. Estás emocionado por los diseños elegantes, los motores potentes y la promesa de un viaje suave. Firmas los papeles, te entregan las llaves y estás listo para salir a la carretera.
            </p>
            <p className="text-primary/80 mb-6 leading-relaxed">
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
            className="glass rounded-2xl p-8 shadow-lg border border-white/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nuestra Ruta al Éxito</h3>
            </div>
            <p className="text-primary/80 mb-6 leading-relaxed">
              Para evitar confusiones, definamos claramente nuestros roles y aseguremos que tu viaje digital sea tan emocionante como lo imaginaste al "entrar a la agencia". Tu sitio web debe funcionar como un automóvil deportivo perfectamente afinado: rápido, receptivo y confiable.
            </p>
            <p className="text-primary/80 mb-6 leading-relaxed">
              Así como esperas que tu coche arranque cada vez y funcione sin problemas, tus clientes esperan que tu sitio web cargue rápidamente y funcione a la perfección en todos los dispositivos. Estamos aquí para construir el "coche" de tus sueños y enseñarte a conducirlo, o conducirlo por ti si esa es tu preferencia.
            </p>

            {/* Bouncy Car Animation */}
            <div className="car-container relative h-60 overflow-hidden rounded-lg bg-gradient-to-b from-emerald-200 to-emerald-100 mt-6">
              <CarAnimation />
            </div>
          </motion.div>
        </div>

        {/* Detailed Sections with Collapsible Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 shadow-lg border border-white/20 mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿Quién Hace Qué? Definiendo Roles y Responsabilidades
          </h3>

          <CollapsibleSectionGroup defaultOpenSection="tu-rol">
            <CollapsibleSection id="tu-rol" title="Tu Rol: Lo Que Aportas al Proyecto" defaultOpen={true}>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Tu Visión de Negocio</h5>
                    <p className="text-primary/80">Así como decides si necesitas una SUV familiar o un deportivo, tú tienes claro tus objetivos de negocio, tu público meta y la identidad de tu marca.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Contenido y Materiales</h5>
                    <p className="text-primary/80">Tú nos entregas los textos, imágenes, logotipos y demás contenido; es como decirnos el color y los accesorios que quieres para tu coche.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Retroalimentación y Decisiones</h5>
                    <p className="text-primary/80">Así como pruebas diferentes modelos, revisas nuestro trabajo y das tu opinión para asegurarnos de que estamos creando justo lo que necesitas.</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection id="mi-rol" title="Mi Rol: Lo Que Manejo Por Ti">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Implementación Técnica</h5>
                    <p className="text-primary/80">Nosotros nos encargamos de toda la programación, hospedaje, seguridad y lo técnico; como la agencia que gestiona el financiamiento, los papeles y la entrega del auto.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Diseño y Experiencia de Usuario</h5>
                    <p className="text-primary/80">Creamos diseños atractivos e intuitivos que funcionan perfecto en cualquier dispositivo, asegurando que tu vehículo digital ruede suave en cualquier camino.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Optimización y Rendimiento</h5>
                    <p className="text-primary/80">Optimizamos para velocidad, buscadores y conversiones; como un mecánico afinando tu motor para el mejor desempeño.</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection id="expectativas" title="Evitando Baches en el Camino: Expectativas vs. Realidad">
              <div className="space-y-6">
                <p className="text-primary/80 mb-4">
                  Quiero pasar de ser un "chofer renuente" a tu confiable "instructor de manejo". Así es como podemos asegurar un viaje sin frustraciones:
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <h5 className="font-semibold text-blue-800 mb-2">🗺️ ¿Falta de Ruta? Hagamos una Juntos</h5>
                  <p className="text-blue-700">Muchos clientes quieren "conducir hacia el éxito", pero no están seguros del destino. Te ayudaré a definir tus metas, público objetivo y estrategia de contenido desde el principio.</p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                  <h5 className="font-semibold text-purple-800 mb-2">🚦 ¿Conducción desde el Asiento Trasero? Comuniquémonos Claramente</h5>
                  <p className="text-purple-700">Los cambios "pequeños" a veces son revisiones mayores (¡como convertir un coche en un barco a mitad del viaje!). Explicaré el alcance de las solicitudes para que siempre estemos en la misma página.</p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                  <h5 className="font-semibold text-amber-800 mb-2">🔮 ¿Leer la Mente? No es Necesario</h5>
                  <p className="text-amber-700">No puedo adivinar tus necesidades, pero haré las preguntas correctas para entender tu visión. Una comunicación clara nos ahorrará tiempo y recursos.</p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
                  <h5 className="font-semibold text-emerald-800 mb-2">⛽ ¿Quién Paga la Gasolina?</h5>
                  <p className="text-emerald-700">Los sitios web necesitan cuidados continuos (actualizaciones, seguridad, hospedaje). Te explicaré estos costos desde el inicio para que no haya sorpresas.</p>
                </div>

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

            <CollapsibleSection id="proceso" title="Tu Manual del Propietario: El Proceso de Desarrollo">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-accent rounded-xl flex items-center justify-center mr-4 text-primary font-bold">1</div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Descubrimiento y Planeación</h5>
                    <p className="text-primary/80">Como platicar tus necesidades con el vendedor antes de ver opciones.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-accent rounded-xl flex items-center justify-center mr-4 text-primary font-bold">2</div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Diseño y Prototipado</h5>
                    <p className="text-primary/80">Creamos bocetos y prototipos; es como el test drive de tu página web.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-accent rounded-xl flex items-center justify-center mr-4 text-primary font-bold">3</div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Desarrollo y Pruebas</h5>
                    <p className="text-primary/80">Construimos y probamos tu página; como fabricar y hacer control de calidad de un auto.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-accent rounded-xl flex items-center justify-center mr-4 text-primary font-bold">4</div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Lanzamiento y Soporte</h5>
                    <p className="text-primary/80">Publicamos tu sitio y damos mantenimiento; como la entrega y la garantía de tu coche.</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection id="contenido" title="Creación de Contenido: Llenando el Coche con Equipaje">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Mi Rol</h5>
                    <p className="text-primary/80">Me enfoco en construir la estructura y funcionalidad de tu sitio. A menos que se acuerde lo contrario, la creación de contenido (textos, imágenes, videos, logotipos, etc.) generalmente no está incluida en el diseño y desarrollo.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Tu Rol</h5>
                    <p className="text-primary/80">Proporcionar el contenido para tu sitio o comunicarme si necesitas ayuda para crearlo. Si necesitas ayuda con el contenido, puedo incluir redacción, edición o búsqueda de imágenes por un costo adicional.</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection id="dominio" title="Gestión de Dominio y Hospedaje: Preparando tu Garaje">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Mi Rol</h5>
                    <p className="text-primary/80">Puedo manejar el registro de dominio, configuración de DNS y hospedaje para una experiencia sin complicaciones. Si prefieres gestionarlos tú, te proporcionaré instrucciones claras y soporte para conectar tu dominio al sitio.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Tu Rol (Si lo Gestionas Tú)</h5>
                    <p className="text-primary/80">Responsabilizarte de la configuración de DNS y la propagación. Te guiaré, pero los errores pueden causar tiempos de inactividad, así que es importante prestar atención a los detalles.</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection id="mantenimiento" title="Mantenimiento y Actualizaciones: Conduciendo y Manteniendo el Coche">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Mi Rol</h5>
                    <p className="text-primary/80">Ofrezco paquetes opcionales de mantenimiento continuo, que incluyen respaldos, actualizaciones de seguridad y edición de contenido. También proporciono capacitación y documentación si deseas "conducir" el sitio tú mismo.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Tu Rol</h5>
                    <p className="text-primary/80">Decidir si manejarás las actualizaciones y el mantenimiento o prefieres que yo tome el volante con un plan de soporte. ¡Los sitios web, como los coches, necesitan "combustible" y "cambios de aceite" regulares para mantenerse en óptimas condiciones!</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>
          </CollapsibleSectionGroup>
        </motion.div>

        {/* Cómo trabajamos section with adjusted animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 shadow-lg border border-white/20 mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Cómo Trabajamos: Tu Viaje al Éxito Digital
          </h3>

          <p className="text-primary/80 text-center mb-8">
            Un proceso claro y transparente que garantiza resultados excepcionales en cada proyecto, como una ruta bien planificada para tu viaje digital.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-white/20 relative overflow-hidden cursor-pointer"
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
                className="absolute top-0 right-0 w-16 h-16 bg-accent rounded-full -mr-8 -mt-8 flex items-center justify-center"
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
                }}
              >

              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Consulta y Análisis</h4>
              <p className="text-primary/80">
                Como un buen mecánico, primero diagnosticamos tus necesidades exactas antes de proponer soluciones. Entendemos tus objetivos de negocio para crear la solución perfecta.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-white/20 relative overflow-hidden cursor-pointer"
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
                className="absolute top-0 right-0 w-16 h-16 bg-accent rounded-full -mr-8 -mt-8 flex items-center justify-center"
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
                }}
              >

              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Propuesta y Cotización</h4>
              <p className="text-primary/80">
                Como elegir el modelo y características de tu vehículo, desarrollamos una propuesta detallada con cronograma y presupuesto transparente.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-white/20 relative overflow-hidden cursor-pointer"
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
                className="absolute top-0 right-0 w-16 h-16 bg-accent rounded-full -mr-8 -mt-8 flex items-center justify-center"
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
                }}
              >

              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Desarrollo</h4>
              <p className="text-primary/80">
                Como ingenieros construyendo tu vehículo a medida, creamos tu proyecto con las mejores prácticas y tecnologías actuales para un rendimiento óptimo.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-white/20 relative overflow-hidden cursor-pointer"
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
                className="absolute top-0 right-0 w-16 h-16 bg-accent rounded-full -mr-8 -mt-8 flex items-center justify-center"
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
                }}
              >

              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Lanzamiento y Soporte</h4>
              <p className="text-primary/80">
                Como la entrega de llaves y servicio postventa, lanzamos tu proyecto y brindamos soporte continuo para asegurar su crecimiento y óptimo funcionamiento.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Unified Call to Action Section with Tabs - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 shadow-lg border border-white/20 mt-12"
        >
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block" role="text">
              ¿Listo para empezar?
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Listo para Encender el Motor? ¡Vamos!
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-primary/80">
              Para asegurar un viaje suave desde el principio, aclaremos algunas cosas antes de empezar:
            </p>
          </motion.header>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            <Tab
              title="Información"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              isActive={activeTab === 0}
              onClick={() => setActiveTab(0)}
            />
            <Tab
              title="Contenido"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              isActive={activeTab === 1}
              onClick={() => setActiveTab(1)}
            />
            <Tab
              title="Hospedaje"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              isActive={activeTab === 2}
              onClick={() => setActiveTab(2)}
            />
            <Tab
              title="Mantenimiento"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              }
              isActive={activeTab === 3}
              onClick={() => setActiveTab(3)}
            />
          </div>

          {/* Tab Contents */}
          <div className="mb-8">
            {/* Overview Tab */}
            <TabContent isActive={activeTab === 0}>
              <div className="text-primary/80">
                <p className="mb-6">
                  Al definir estos roles ahora, evitaremos desvíos y construiremos un sitio web que te lleve exactamente a donde quieres ir. Estoy aquí para construir el "coche" de tus sueños y enseñarte a conducirlo, o conducirlo por ti si esa es tu preferencia.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-accent/30 rounded-xl p-5 border border-accent">
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Claridad
                    </h4>
                    <p className="text-sm text-primary/70">Roles y responsabilidades claramente definidos para evitar confusiones.</p>
                  </div>
                  <div className="bg-accent/30 rounded-xl p-5 border border-accent">
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Eficiencia
                    </h4>
                    <p className="text-sm text-primary/70">Proceso optimizado que ahorra tiempo y recursos para todos.</p>
                  </div>
                  <div className="bg-accent/30 rounded-xl p-5 border border-accent">
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Colaboración
                    </h4>
                    <p className="text-sm text-primary/70">Trabajo en equipo efectivo para lograr los mejores resultados.</p>
                  </div>
                </div>
                <p className="mb-4 text-center font-medium">¡Hagamos Algo Increíble Juntos!</p>
              </div>
            </TabContent>

            {/* Content Tab */}
            <TabContent isActive={activeTab === 1}>
              <div className="text-primary/80">
                <h4 className="text-xl font-semibold mb-4">Contenido: Llenando el Coche con Equipaje</h4>
                <div className="mb-6 bg-accent/20 p-4 rounded-lg border border-accent/30">
                  <p className="mb-4">
                    Así como llenarías tu coche con equipaje para un viaje, tu sitio web necesita contenido de calidad para funcionar correctamente.
                  </p>
                  <div className="flex items-start mb-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Mi Rol</h5>
                      <p className="text-primary/80">Me enfoco en construir la estructura y funcionalidad de tu sitio. A menos que se acuerde lo contrario, la creación de contenido (textos, imágenes, videos, logotipos, etc.) generalmente no está incluida en el diseño y desarrollo.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Tu Rol</h5>
                      <p className="text-primary/80">Proporcionar el contenido para tu sitio o comunicarme si necesitas ayuda para crearlo. Si necesitas ayuda con el contenido, puedo incluir redacción, edición o búsqueda de imágenes por un costo adicional.</p>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  <span className="font-semibold">Pregunta clave:</span> ¿Tienes listos los textos, imágenes y otros materiales, o necesitas ayuda para crearlos?
                </p>
              </div>
            </TabContent>

            {/* Hosting Tab */}
            <TabContent isActive={activeTab === 2}>
              <div className="text-primary/80">
                <h4 className="text-xl font-semibold mb-4">Dominio y Hospedaje: Preparando tu Garaje</h4>
                <div className="mb-6 bg-accent/20 p-4 rounded-lg border border-accent/30">
                  <p className="mb-4">
                    Así como un coche necesita un garaje, tu sitio web necesita un dominio y hospedaje para existir en internet.
                  </p>
                  <div className="flex items-start mb-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Mi Rol</h5>
                      <p className="text-primary/80">Puedo manejar el registro de dominio, configuración de DNS y hospedaje para una experiencia sin complicaciones. Si prefieres gestionarlos tú, te proporcionaré instrucciones claras y soporte para conectar tu dominio al sitio.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Tu Rol (Si lo Gestionas Tú)</h5>
                      <p className="text-primary/80">Responsabilizarte de la configuración de DNS y la propagación. Te guiaré, pero los errores pueden causar tiempos de inactividad, así que es importante prestar atención a los detalles.</p>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  <span className="font-semibold">Pregunta clave:</span> ¿Lo gestionarás tú, o prefieres que yo me encargue de estos aspectos técnicos?
                </p>
              </div>
            </TabContent>

            {/* Maintenance Tab */}
            <TabContent isActive={activeTab === 3}>
              <div className="text-primary/80">
                <h4 className="text-xl font-semibold mb-4">Mantenimiento y Actualizaciones: Conduciendo y Manteniendo el Coche</h4>
                <div className="mb-6 bg-accent/20 p-4 rounded-lg border border-accent/30">
                  <p className="mb-4">
                    Así como un coche necesita mantenimiento regular, tu sitio web requiere actualizaciones y cuidados para seguir funcionando correctamente.
                  </p>
                  <div className="flex items-start mb-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Mi Rol</h5>
                      <p className="text-primary/80">Ofrezco paquetes opcionales de mantenimiento continuo, que incluyen respaldos, actualizaciones de seguridad y edición de contenido. También proporciono capacitación y documentación si deseas "conducir" el sitio tú mismo.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Tu Rol</h5>
                      <p className="text-primary/80">Decidir si manejarás las actualizaciones y el mantenimiento o prefieres que yo tome el volante con un plan de soporte. ¡Los sitios web, como los coches, necesitan "combustible" y "cambios de aceite" regulares para mantenerse en óptimas condiciones!</p>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  <span className="font-semibold">Pregunta clave:</span> ¿Quieres tomar el volante para las actualizaciones, o prefieres un plan de mantenimiento?
                </p>
              </div>
            </TabContent>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-center"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              ¡Comencemos Ahora!
            </motion.button>
            <Link
              to="/preguntas-frecuentes"
              className="glass border border-primary/20 hover:border-primary/40 text-primary font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-center"
            >
              Conoce Más
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};