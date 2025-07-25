import React from 'react';
import { motion } from 'framer-motion';
import CollapsibleSection from '../ui/collapsible-section';
import CollapsibleSectionGroup from '../ui/collapsible-section-group';

export const RolesResponsibilitiesSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-8 shadow-lg border border-white/20 mb-12"
    >
      <div className="text-center">
        <span className="px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6 inline-block" role="text">
          ¿Quién Hace Qué?
        </span>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Definiendo Roles y Responsabilidades
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
  );
};