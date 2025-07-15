import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Collapsible Section Component
interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
      >
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-white">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

// Bouncy Car Animation Component
const BouncyCarAnimation = () => {
  const carRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(carRef, { once: false, amount: 0.5 });
  const carControls = useAnimation();
  const shadowControls = useAnimation();
  const tyreControls = useAnimation();
  const chassisControls = useAnimation();
  const headlightControls = useAnimation();

  // Function to run the animation sequence
  const runAnimationSequence = async () => {
    // Reset animation state
    carControls.set({
      y: -80, // Start from higher position
      scale: 1,
      x: -150, // Center the 300px wide SVG
    });

    shadowControls.set({
      opacity: 0.2,
      scaleX: 0.5,
      scaleY: 0.5,
    });

    tyreControls.set({
      y: -30,
      scaleX: 1,
    });

    chassisControls.set({
      y: 0,
    });

    headlightControls.set({
      scale: 0,
    });

    // Initial bounce
    await Promise.all([
      carControls.start({
        y: 10, // Stop at a higher position
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } // Custom ease similar to Anticipate
      }),
      shadowControls.start({
        opacity: 0.4,
        scaleX: 1,
        scaleY: 1,
        transition: { duration: 1, ease: "easeInOut" }
      }),
      tyreControls.start({
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 }
      }),
      headlightControls.start({
        scale: 1,
        transition: { duration: 1, ease: "easeInOut" }
      })
    ]);

    // Tyre squish effect
    await tyreControls.start({
      scaleX: 1.1,
      transition: { duration: 0.2, ease: "easeOut" }
    });

    // Chassis bounce
    await chassisControls.start({
      y: 5,
      transition: { duration: 0.2, ease: "easeIn" }
    });

    await chassisControls.start({
      y: 0,
      transition: { duration: 0.4 }
    });

    // Tyre return to normal
    await tyreControls.start({
      scaleX: 1,
      transition: { duration: 2, type: "spring", stiffness: 100, damping: 8 }
    });

    // Hide shadow for driving effect
    await shadowControls.start({
      opacity: 0,
      transition: { duration: 0.3 }
    });

    // Drive forward and disappear
    await carControls.start({
      y: 600,
      scale: 1.82,
      transition: { duration: 2, ease: "easeIn" }
    });

    // Small delay before restarting the animation
    await new Promise(resolve => setTimeout(resolve, 500));

    // Restart the animation for looping
    runAnimationSequence();
  };

  useEffect(() => {
    if (isInView) {
      runAnimationSequence();
    }

    // Cleanup function to cancel animations when component unmounts
    return () => {
      carControls.stop();
      shadowControls.stop();
      tyreControls.stop();
      chassisControls.stop();
      headlightControls.stop();
    };
  }, [isInView]); // Only re-run when isInView changes

  return (
    <div ref={carRef} className="relative w-full h-full">
      <motion.div
        className="absolute bottom-0 left-1/2"
        animate={carControls}
        initial={{ y: -80, x: -150 }}
      >
        <svg
          width="300"
          height="200"
          viewBox="200 150 420 350"
          className="overflow-visible"
        >
          <motion.ellipse
            className="bouncy-car-shadow"
            fill="#000"
            cx="410.8"
            cy="411.6"
            rx="143"
            ry="7.4"
            animate={shadowControls}
            style={{ transformOrigin: 'center' }}
          />
          <motion.g animate={chassisControls} className="bouncy-car-chassis">
            <line fill="none" stroke="#3B82F6" strokeWidth="26" strokeLinecap="round" strokeMiterlimit="10" x1="290" y1="370" x2="528" y2="370" />
            <path fill="#3B82F6" d="M378,361.167v-47.833c0-17.05,13.95-31,31-31h1.833c17.05,0,31,13.95,31,31v47.833" />
            <path fill="#1E40AF" d="M290,361.167v-47.833c0-17.05,13.95-31,31-31h177.833c17.05,0,31,13.95,31,31v47.833" />
            <polygon fill="#1E40AF" stroke="#60A5FA" strokeWidth="8" strokeMiterlimit="10" points="496.4,282.3 323.5,282.3 340.5,202.2 483.4,202.2" />
            <motion.circle
              className="headlight"
              fill="#FEF3C7"
              cx="331.7"
              cy="326.9"
              r="17.5"
              animate={headlightControls}
              style={{ transformOrigin: '410px 320px' }}
            />
            <motion.circle
              className="headlight"
              fill="#FEF3C7"
              cx="487.8"
              cy="326.9"
              r="17.5"
              animate={headlightControls}
              style={{ transformOrigin: '410px 320px' }}
            />
            <rect x="514.2" y="262.8" width="28.6" height="20.2" rx="6" ry="6" fill="#9CA3AF" />
            <rect x="276.9" y="262.8" width="28.6" height="20.2" rx="6" ry="6" fill="#9CA3AF" />
          </motion.g>
          <g>
            <motion.path
              className="tyre"
              fill="#374151"
              d="M345.8,410.9h-29.1c-2.2,0-4-1.8-4-4v-40.9c0-2.2,1.8-4,4-4h29.1c2.2,0,4,1.8,4,4v40.9C349.8,409.1,348,410.9,345.8,410.9z"
              animate={tyreControls}
              style={{ transformOrigin: '50% 50%' }}
            />
            <motion.path
              className="tyre"
              fill="#374151"
              d="M502.3,410.9h-29.1c-2.2,0-4-1.8-4-4v-40.9c0-2.2,1.8-4,4-4h29.1c2.2,0,4,1.8,4,4v40.9C506.3,409.1,504.5,410.9,502.3,410.9z"
              animate={tyreControls}
              style={{ transformOrigin: '50% 50%' }}
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

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
            <div className="van-container relative h-48 overflow-hidden rounded-lg bg-gradient-to-b from-teal-300 to-teal-200 mt-6">
              {/* Smoke Animation */}
              <div className="absolute bottom-16 right-[15%] z-0">
                <div className="smoke-puff w-2 h-2 bg-gray-400 rounded-full opacity-60" style={{ animationDelay: '0s' }}></div>
                <div className="smoke-puff w-2 h-2 bg-gray-300 rounded-full opacity-50 absolute top-0 right-1" style={{ animationDelay: '0.3s' }}></div>
                <div className="smoke-puff w-2 h-2 bg-gray-200 rounded-full opacity-40 absolute top-0 right-2" style={{ animationDelay: '0.6s' }}></div>
              </div>

              <svg
                className="van-main absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                width="200"
                height="120"
                viewBox="0 0 545.6 313.5"
              >
                {/* Shadow */}
                <ellipse className="van-shadow" cx="277" cy="290" rx="120" ry="8" fill="#000" />

                <g className="van-wrapper">
                  {/* Surf Board */}
                  <g className="surf-board">
                    <path fill="#FDBE25" d="M418.3,59.4c-14.5-4-106.5-10.5-120.5-10.5s-92.7,0.8-108.5,3c-14.1,2-43.4,4.5-57,7.5H418.3z" />
                    <path fill="#FDBE25" d="M415.3,60.4c14.5,5,19.5,12.5,19.5,12.5l-165.2-3l-165.2,3c0,0-3.3-2,0-5.5c3.3-3.5,10.6-3.1,20.8-6c1.1-0.3,2.6-1,4.3-1H415.3z" />
                    <path fill="#FDBE25" d="M360.7,51.6c0,0-0.9-5.2,10.6-17.3s21.6-11.9,21.6-11.9h11.9l6.5,2.2L399.1,42l-3.8,12.6L360.7,51.6z" />
                    <rect x="146.3" y="73" width="6.8" height="12" fill="#FDBE25" />
                    <rect x="390.3" y="72.9" width="7.5" height="12" fill="#FDBE25" />
                  </g>

                  {/* Van Body */}
                  <g>
                    {/* Front Section */}
                    <path fill="#F9F8DE" d="M213.4,161.9l0-67.7c-73.1,0.3-134.6,1.1-136.6,2.7c-5,4-28.1,49.6-28.1,58.1c0,2,0,4.6,0,7.4L213.4,161.9z" />
                    <path fill="#F57D41" d="M213.4,161.2l0.4,76.3h-29.5l-16.5-30h-42.5l-18.5,30h-56l-2-54.9c0,0,0-11.8,0-21.1L213.4,161.2z" />
                    <polygon fill="#F57D41" stroke="#EA5514" strokeWidth="2" points="205.8,160.4 205.8,196.4 116.1,197.6 107.8,215.4 86.3,215.4 85.9,160.4" />

                    {/* Main Body */}
                    <path fill="#F9F8DE" d="M271.8,161.4l205-1c0,0,0-16.6,0-19.4c0-10.6-9.1-42.6-14.1-46.1c-3-2.1-139.9-3.1-250.9-2.7v54.2l0.6,15H271.8z" />
                    <polygon fill="#F57D41" points="476.8,159.3 476.8,237.4 447.3,237.4 437.8,222.4 376.3,222.4 366.8,237.4 212.8,237.4 212.1,159.9" />

                    {/* Windows */}
                    <path fill="#BDE6E3" d="M260.8,147.4h-29c-6.6,0-12-5.4-12-12v-19.5c0-6.6,5.4-12,12-12h29c6.6,0,12,5.4,12,12v19.5C272.8,142,267.4,147.4,260.8,147.4z" />
                    <path fill="#BDE6E3" d="M325.3,147.4h-29c-6.6,0-12-5.4-12-12v-19.5c0-6.6,5.4-12,12-12h29c6.6,0,12,5.4,12,12v19.5C337.3,142,331.9,147.4,325.3,147.4z" />
                    <path fill="#BDE6E3" d="M388.8,146.9h-29c-6.6,0-12-5.4-12-12v-19.5c0-6.6,5.4-12,12-12h29c6.6,0,12,5.4,12,12v19.5C400.8,141.5,395.4,146.9,388.8,146.9z" />

                    {/* Details */}
                    <path fill="#F9F8DE" d="M72.3,99.4h395c0,0-6-6.1-8.7-8c-2.8-1.9-8.1-6-13.4-6s-345.1,0-345.1,0l-7.5,0.5c0,0-8.7,2.6-11.8,4.4C77.7,92,72.3,99.4,72.3,99.4z" />
                    <rect x="204.8" y="155.9" width="272" height="5.5" fill="#EA5514" />
                    <rect x="48.8" y="155.9" width="37.1" height="5.5" fill="#EA5514" />
                    <rect x="85.8" y="155.9" width="122.5" height="5.5" fill="#EA5514" />

                    {/* Side Lines */}
                    <line stroke="#595757" strokeWidth="3" x1="407.8" y1="167.9" x2="447.8" y2="167.9" />
                    <line stroke="#595757" strokeWidth="3" x1="407.8" y1="173.9" x2="447.8" y2="173.9" />
                    <line stroke="#595757" strokeWidth="3" x1="407.8" y1="179.9" x2="447.8" y2="179.9" />
                    <line stroke="#595757" strokeWidth="3" x1="407.8" y1="185.9" x2="447.8" y2="185.9" />
                    <line stroke="#595757" strokeWidth="3" x1="407.8" y1="191.9" x2="447.8" y2="191.9" />
                  </g>

                  {/* Wheels */}
                  <g>
                    {/* Front Wheel */}
                    <circle cx="146.3" cy="245.9" r="24" fill="#898989" />
                    <circle cx="146.6" cy="246.2" r="11" fill="#FFFFFF" />
                    <g className="inner-wheel" style={{ transformOrigin: '146.3px 245.9px' }}>
                      <path fill="#C9CACA" d="M146.8,239c-4.1,0-7.3,3.2-7.3,7.2c0,4,3.3,7.2,7.3,7.2c0-2.3,0-4.7,0-7c2.8,0,4.7,0,7.3,0c0-0.1,0-0.2,0-0.2C154.1,242.2,150.9,239,146.8,239z" />
                    </g>

                    {/* Back Wheel */}
                    <circle cx="408.3" cy="245.9" r="24" fill="#898989" />
                    <circle cx="408.6" cy="246.2" r="11" fill="#FFFFFF" />
                    <g className="inner-wheel" style={{ transformOrigin: '408.3px 245.9px' }}>
                      <path fill="#C9CACA" d="M408.8,239c-4.1,0-7.3,3.2-7.3,7.2c0,4,3.3,7.2,7.3,7.2c0-2.3,0-4.7,0-7c2.8,0,4.7,0,7.3,0c0-0.1,0-0.2,0-0.2C416.1,242.2,412.9,239,408.8,239z" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
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