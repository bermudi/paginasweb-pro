import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedTab } from '../ui/animated-tab';
import { AnimatedTabContent } from '../ui/animated-tab-content';

export const CallToActionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
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
          ¿Quieres Encender el Motor? ¡Vamos!
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-primary/80">
          Para asegurar un viaje suave desde el principio, aclaremos algunas cosas antes de empezar:
        </p>
      </motion.header>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        <AnimatedTab
          title="Información"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          isActive={activeTab === 0}
          onClick={() => setActiveTab(0)}
        />
        <AnimatedTab
          title="Contenido"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
          isActive={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />
        <AnimatedTab
          title="Hospedaje"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          }
          isActive={activeTab === 2}
          onClick={() => setActiveTab(2)}
        />
        <AnimatedTab
          title="Mantenimiento"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          isActive={activeTab === 3}
          onClick={() => setActiveTab(3)}
        />
      </div>

      {/* Tab Contents */}
      <div className="mb-8">
        {/* Overview Tab */}
        <AnimatedTabContent isActive={activeTab === 0}>
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
        </AnimatedTabContent>

        {/* Content Tab */}
        <AnimatedTabContent isActive={activeTab === 1}>
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
        </AnimatedTabContent>

        {/* Hosting Tab */}
        <AnimatedTabContent isActive={activeTab === 2}>
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
        </AnimatedTabContent>

        {/* Maintenance Tab */}
        <AnimatedTabContent isActive={activeTab === 3}>
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
        </AnimatedTabContent>
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
  );
};