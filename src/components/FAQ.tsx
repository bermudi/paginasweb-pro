import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

type FAQItem = {
  question: string;
  answer: string;
  category: string;
  relatedComponent?: string;
};

type Category = {
  id: string;
  name: string;
  description: string;
};

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  // FAQ data organized by categories
  const faqItems: FAQItem[] = [
    // Términos Técnicos
    {
      question: "Mencionan 'Optimización SEO' en sus servicios. ¿Qué significa eso exactamente para mi negocio?",
      answer: "'SEO' (Search Engine Optimization) se refiere al conjunto de técnicas que aplicamos para que tu sitio web sea más visible y atractivo para motores de búsqueda como Google. En la práctica, esto significa que cuando tus clientes potenciales busquen productos o servicios como los tuyos, tu página tendrá más probabilidades de aparecer en los primeros resultados. No se trata solo de construir la página, sino de asegurar que la gente la encuentre.",
      category: "tecnico"
    },
    {
      question: "En la sección de tecnología, hablan de 'CDN Global'. ¿Qué es y por qué debería importarme?",
      answer: "Un CDN (Content Delivery Network o Red de Distribución de Contenidos) es una red de servidores distribuidos por todo el mundo. Cuando lo implementamos, una copia de tu sitio se almacena en múltiples ubicaciones. Si un usuario de, por ejemplo, España visita tu web, el contenido se le entrega desde un servidor cercano en Europa en lugar de desde México. El beneficio directo para ti es una velocidad de carga drásticamente mayor para todos tus usuarios, sin importar dónde se encuentren, lo que mejora su experiencia y tu posicionamiento en Google.",
      category: "tecnico"
    },
    {
      question: "Explican que pueden gestionar el 'dominio' y el 'hospedaje'. ¿Cuál es la diferencia entre ambos?",
      answer: "Usando la analogía del coche y el garaje de nuestra web: El **Dominio** es la dirección de tu sitio (ej. `www.miempresa.com`). Es el nombre único que la gente escribe en el navegador para encontrarte. Sería como la dirección de tu casa. El **Hospedaje (Hosting)** es el espacio en un servidor donde se almacenan todos los archivos de tu sitio web (imágenes, textos, código). Es el terreno y la casa en sí. Ambos son indispensables, y nosotros podemos encargarnos de toda la configuración técnica para que no tengas que preocuparte por ello.",
      category: "tecnico"
    },
    {
      question: "¿Qué es una 'Integración API' y qué tipo de funcionalidades permite?",
      answer: "Una API (Application Programming Interface) es un puente que permite que diferentes sistemas de software se comuniquen entre sí. Al integrarlas en tu web, podemos añadir funcionalidades avanzadas de terceros. Por ejemplo: Integrar un sistema de reservas de citas directamente en tu página, conectar tu tienda online con tu sistema de inventario, mostrar un mapa interactivo de Google Maps con tus ubicaciones, o procesar pagos de forma segura a través de plataformas como Stripe o PayPal.",
      category: "tecnico"
    },

    // Proceso y Colaboración
    {
      question: "En su analogía, mencionan que el cliente provee el contenido ('equipaje'). ¿Qué pasa si no tengo textos o imágenes profesionales?",
      answer: "Es una situación muy común. Si bien nuestro enfoque principal es el diseño y desarrollo, entendemos la importancia del contenido de calidad. Si no cuentas con él, **podemos ayudarte**. Ofrecemos servicios adicionales de redacción publicitaria (copywriting) y podemos asesorarte en la selección de imágenes de stock profesionales para asegurar que tu 'coche' no solo sea potente, sino que también luzca increíble por dentro y por fuera.",
      category: "proceso"
    },
    {
      question: "Una vez que el sitio está 'construido', ¿puedo solicitar cambios? ¿Cómo funciona ese proceso?",
      answer: "¡Por supuesto! Tu sitio web debe evolucionar contigo. Distinguimos dos tipos de cambios: 1) **Ajustes Menores:** Si contratas uno de nuestros planes de mantenimiento, cambios como actualizar un texto, cambiar una imagen o añadir una nueva entrada al blog suelen estar cubiertos. 2) **Nuevas Funcionalidades:** Si deseas añadir una sección completamente nueva o una funcionalidad compleja (como un área de clientes o un nuevo módulo de e-commerce), lo tratamos como un mini-proyecto. Te prepararemos una cotización por separado para esa nueva fase de desarrollo.",
      category: "proceso"
    },
    {
      question: "Al finalizar el proyecto, ¿quién es el dueño del código y del diseño del sitio web?",
      answer: "**Tú.** Una vez que el proyecto ha sido completado y el pago final ha sido realizado, te entregamos todos los archivos y accesos. El código fuente, el diseño y todo el trabajo realizado te pertenecen por completo. Creemos en la transparencia y en empoderar a nuestros clientes, no en atarlos a nuestro servicio.",
      category: "proceso"
    },

    // Valor y Beneficios
    {
      question: "¿Cuál es la diferencia real entre un sitio web personalizado con ustedes y usar una plantilla de plataformas como Wix, Squarespace o Shopify?",
      answer: "Las plataformas de plantillas son como comprar un coche de producción en serie; son funcionales, pero limitadas. Un sitio personalizado con nosotros es como mandar a construir un coche a medida. Las ventajas clave son: **Diseño Único:** Tu sitio no se parecerá a ningún otro. Reflejará al 100% la identidad de tu marca. **Rendimiento Superior:** Optimizamos cada línea de código para una velocidad máxima, algo que las plantillas genéricas no pueden ofrecer. **Escalabilidad sin Límites:** Tu sitio podrá crecer tanto como tu negocio lo necesite, sin las restricciones funcionales de una plataforma cerrada. **Propiedad Total:** Eres dueño de tu sitio. No estás 'alquilando' un espacio en una plataforma de la que no puedes salir. **Asesoría Experta:** Tienes un socio tecnológico directo que entiende tus objetivos de negocio.",
      category: "valor"
    },

    // Diseño y Experiencia
    {
      question: "El proceso incluye una etapa de 'Diseño y Prototipado'. ¿Qué sucede si no me gusta la propuesta inicial de diseño?",
      answer: "¡Esa es precisamente la razón por la que tenemos esa etapa! Es una preocupación totalmente válida. El prototipo es nuestra herramienta para alinearnos con tu visión antes de escribir una sola línea de código. Nuestro proceso incluye **rondas de revisión y retroalimentación**. Trabajaremos juntos, ajustando colores, tipografías y la disposición de los elementos hasta que estés completamente satisfecho y sientas que el diseño representa fielmente a tu marca. La idea no es que aceptes una propuesta, sino que la co-creemos.",
      category: "diseno"
    },
    {
      question: "¿Puedo ver ejemplos de proyectos que hayan realizado antes?",
      answer: "¡Claro! En nuestra sección de **'Proyectos recientes'** puedes explorar una selección de nuestro trabajo. Allí encontrarás desde plataformas de e-commerce hasta sitios corporativos y aplicaciones web. Cada ejemplo incluye un enlace para que puedas navegar por el sitio en vivo y experimentar la calidad de nuestro desarrollo de primera mano.",
      category: "diseno"
    },
    {
      question: "Veo que usan frameworks modernos como React o Next.js. ¿Qué ventaja me da esto frente a una plataforma más tradicional como WordPress?",
      answer: "Es una pregunta fundamental. Mientras que plataformas como WordPress son excelentes para blogs o sitios sencillos, nuestro enfoque con frameworks modernos te ofrece ventajas clave para un proyecto profesional y a largo plazo: **Experiencia de Usuario Superior:** Los sitios se sienten increíblemente rápidos y fluidos, más parecidos a una aplicación de escritorio que a una página web tradicional. **Seguridad Reforzada:** Al no depender de un ecosistema de plugins de terceros, la superficie de ataque para hackers se reduce drásticamente. **Rendimiento Inigualable:** Construimos solo lo que necesitas, sin el código innecesario que a menudo ralentiza los sitios basados en plantillas o constructores visuales. **Escalabilidad Real:** Tu sitio estará preparado para crecer. Añadir funcionalidades complejas en el futuro es mucho más sencillo y limpio. Básicamente, elegimos construirte un motor de alto rendimiento a medida, en lugar de adaptar uno de producción masiva.",
      category: "diseno"
    },

    // Soporte y Mantenimiento
    {
      question: "¿Cómo será la comunicación durante el desarrollo del proyecto?",
      answer: "La comunicación clara es la base de nuestro trabajo. Estableceremos un canal principal (generalmente correo electrónico para dejar constancia escrita) y programaremos llamadas o videollamadas periódicas para las fases clave (inicio, revisiones de diseño, etc.). Recibirás actualizaciones proactivas sobre el progreso para que siempre sepas en qué etapa se encuentra tu proyecto y qué es lo siguiente.",
      category: "soporte"
    },
    {
      question: "Mencionan 'Monitoreo 24/7' en la sección de seguridad. ¿Qué significa esto en la práctica?",
      answer: "Significa que, incluso después del lanzamiento, tu sitio no queda desatendido. Utilizamos sistemas automáticos que vigilan constantemente la 'salud' de tu página. Esto incluye: **Monitoreo de Tiempo de Actividad (Uptime):** Si tu sitio se cae por cualquier motivo, recibimos una alerta inmediata para poder actuar. **Escaneo de Seguridad:** Buscamos continuamente malware o actividades sospechosas para prevenir problemas antes de que afecten a tus usuarios. Es tu sistema de seguridad y tu mecánico de confianza, trabajando en segundo plano para darte tranquilidad.",
      category: "soporte"
    },
    {
      question: "¿Qué sucede si algo se 'rompe' en el sitio después de un tiempo? ¿Lo arreglan?",
      answer: "Sí. Distinguimos entre dos escenarios: 1) **Errores (Bugs):** Si alguna funcionalidad que construimos deja de funcionar correctamente debido a un error en nuestro código, la corrección está cubierta por nuestra garantía de trabajo. 2) **Problemas por Factores Externos:** A veces, problemas surgen por actualizaciones de navegadores, servicios de terceros o cambios que se realizan en el contenido. Estos casos se gestionan a través de nuestros paquetes de mantenimiento o soporte por horas.",
      category: "soporte"
    },
    {
      question: "El servicio de 'Optimización SEO' que ofrecen, ¿incluye la creación de contenido como artículos de blog o la gestión de redes sociales?",
      answer: "Es importante aclarar este punto. Nuestra optimización SEO se enfoca en la parte **técnica y estructural** del sitio: nos aseguramos de que la página sea rápida, que Google pueda leerla y entenderla correctamente, que las etiquetas estén bien puestas y que la experiencia móvil sea impecable. La creación de contenido (estrategia de blog, redacción) y el marketing en redes sociales son disciplinas separadas. Si bien son cruciales para una estrategia SEO completa, no están incluidas en el paquete de desarrollo estándar, pero podemos asesorarte o cotizarlas como un servicio adicional.",
      category: "soporte"
    },

    // Pagos y Facturación
    {
      question: "¿Cómo es el esquema de pagos para un proyecto?",
      answer: "Entendemos que cada proyecto tiene su propia escala y complejidad. Por eso, en lugar de un único modelo de pago, ofrecemos esquemas flexibles que se alinean con la duración y los hitos del proyecto, garantizando transparencia y un compromiso mutuo.\n\nDependiendo de la naturaleza de tu proyecto, aplicamos uno de los siguientes modelos:\n\n*   **Modelo de 3 Fases (Para Proyectos Simples, 3-5 semanas):**\n    *   **40%** - Al inicio del proyecto.\n    *   **40%** - Al finalizar la fase de diseño y desarrollo.\n    *   **20%** - Contra entrega y lanzamiento del sitio.\n\n*   **Modelo de 4 Fases (Estándar, 6-12 semanas):**\n    *   **30%** - Al inicio del proyecto.\n    *   **30%** - Al aprobar la propuesta de diseño (antes de comenzar el desarrollo).\n    *   **20%** - Al finalizar el desarrollo (antes de la revisión final).\n    *   **20%** - Contra entrega y lanzamiento.\n\n*   **Modelo de 5 Fases (Para Proyectos Complejos, 12-16+ semanas):**\n    *   **25%** - Al inicio del proyecto.\n    *   **25%** - Al aprobar la propuesta de diseño.\n    *   **20%** - Al completar el desarrollo Frontend (la parte visual).\n    *   **20%** - Al completar la integración Backend (la lógica y base de datos).\n    *   **10%** - Contra entrega y lanzamiento.\n\nEl modelo específico que aplicará a tu proyecto se detallará claramente en la cotización y en el acuerdo de servicio para tu total tranquilidad.",
      category: "pagos"
    },
    {
      question: "¿Emiten facturas fiscales (CFDI)?",
      answer: "Sí, por supuesto. Emitimos facturas fiscales (CFDI) por todos nuestros servicios. Como profesionales, entendemos la importancia de la formalidad fiscal para tu negocio. Solo necesitaremos tus datos fiscales para generar la factura correspondiente a cada pago.",
      category: "pagos"
    },
    {
      question: "Además del costo del desarrollo, ¿qué otros costos recurrentes debo considerar?",
      answer: "Es una pregunta crucial para una planificación financiera clara. Además de la inversión inicial en el desarrollo, existen tres costos operativos que debes tener en mente:\n1.  **Registro del Dominio:** Es un pago anual para mantener la propiedad de tu dirección `www.tuempresa.com`.\n2.  **Servicio de Hospedaje (Hosting):** Es un pago (mensual o anual) por el 'alquiler' del espacio en el servidor que mantiene tu sitio en línea.\n3.  **Mantenimiento (Opcional):** Nuestros planes de mantenimiento son un costo recurrente que garantiza que tu sitio se mantenga seguro, actualizado y funcionando óptimamente.\n\nTe detallaremos todos estos costos de forma transparente en tu cotización para que tengas el panorama completo.",
      category: "pagos"
    },
    {
      question: "¿Firmamos algún tipo de contrato o acuerdo de servicio?",
      answer: "Sí. Para la tranquilidad de ambas partes, todos nuestros proyectos se formalizan a través de un **acuerdo de servicio**. Este documento funciona como nuestro 'mapa de ruta' compartido y detalla claramente el alcance del trabajo, los entregables, el cronograma, los términos de pago y las responsabilidades de cada uno. Es la mejor manera de asegurar que las expectativas estén alineadas y el proyecto sea un éxito.",
      category: "pagos"
    },
    {
      question: "¿Qué sucede si necesito cancelar el proyecto a mitad del camino?",
      answer: "Entendemos que las prioridades de un negocio pueden cambiar. Si necesitas cancelar el proyecto, el pago inicial del 50% no es reembolsable, ya que cubre el trabajo estratégico, creativo y técnico realizado hasta ese momento. No se requerirán pagos adicionales y te entregaremos todos los activos y el código que se hayan completado hasta la fecha de cancelación.",
      category: "pagos"
    },
    {
      question: "Si no contrato un plan de mantenimiento, ¿puedo contactarlos para solicitar ayuda o cambios puntuales en el futuro?",
      answer: "¡Por supuesto! Siempre estaremos disponibles para ayudarte. Las solicitudes de trabajo que no están cubiertas por un plan de mantenimiento se gestionan bajo un esquema de **soporte por horas**. Es una opción flexible y perfecta si solo necesitas ajustes ocasionales. Te enviaremos una cotización por el tiempo estimado antes de realizar cualquier trabajo.",
      category: "pagos"
    },

    // Conceptos Digitales
    {
      question: "¿Qué es el DNS y por qué a veces hablan de 'tiempo de propagación'?",
      answer: "Imagina que el **DNS (Domain Name System)** es la agenda de contactos de Internet. Traduce el nombre de tu sitio, que es fácil de recordar para las personas (ej. `www.miempresa.com`), a una dirección IP, que es la que entienden los ordenadores (ej. `192.168.1.1`).\n\nCuando hacemos un cambio importante, como lanzar tu sitio por primera vez o cambiar de servidor, tenemos que actualizar esa 'agenda de contactos' a nivel mundial. El **tiempo de propagación** es el período que tardan todos los servidores de Internet del mundo en recibir y registrar esa actualización. No es instantáneo; puede tardar desde unos minutos hasta 48 horas. Durante este tiempo, es posible que algunos usuarios vean la versión antigua del sitio y otros la nueva.",
      category: "conceptos"
    },
    {
      question: "¿Qué significa que mi sitio tenga un certificado SSL (y muestre HTTPS y un candado)?",
      answer: "Un **Certificado SSL (Secure Sockets Layer)** es una tecnología de seguridad que crea una conexión cifrada entre el navegador de tu usuario y tu servidor. Piensa en ello como enviar una carta en un sobre sellado y blindado, en lugar de una postal que cualquiera puede leer.\n\nEl `https://` (la 'S' es de 'seguro') y el icono del candado son la señal visual de que esta protección está activa. Esto es crucial por tres motivos:\n1.  **Confianza:** Los usuarios se sienten seguros al introducir sus datos (formularios, contraseñas, datos de pago).\n2.  **Seguridad:** Protege la información sensible de ser interceptada.\n3.  **SEO:** Google y otros buscadores dan prioridad en sus rankings a los sitios web que son seguros.",
      category: "conceptos"
    },
    {
      question: "En el modelo de pago complejo mencionan 'Frontend' y 'Backend'. ¿Qué son?",
      answer: "Usando nuestra analogía del coche, es muy fácil de entender:\n*   El **Frontend** es todo lo que el usuario ve y con lo que interactúa: la carrocería, el color, el tablero, el volante, los asientos. En términos web, es el diseño, la tipografía, los botones, las animaciones y la estructura visual. Es la *experiencia*.\n*   El **Backend** es todo lo que hace que el coche funcione, pero que no se ve a simple vista: el motor, la transmisión, la computadora a bordo, el sistema de combustible. En la web, es el servidor, la base de datos y la lógica de la aplicación. Es el *poder* y la *inteligencia*.\n\nAmbos son esenciales y trabajan juntos para crear una aplicación web funcional y atractiva.",
      category: "conceptos"
    },
    {
      question: "A veces realizo un cambio y no lo veo reflejado inmediatamente. ¿Es por el 'caché'?",
      answer: "Exactamente. El **caché** es una memoria temporal donde tu navegador (o el servidor) guarda una 'foto' de tu sitio web. Lo hace para que, en futuras visitas, la página cargue mucho más rápido, ya que muestra la 'foto' guardada en lugar de tener que volver a construirla desde cero.\n\nEsto es excelente para el rendimiento, pero a veces significa que estás viendo una versión ligeramente desactualizada. Generalmente, el caché se limpia solo después de un tiempo, o podemos forzar su limpieza. Así que no te preocupes, es una señal de que tu sitio está optimizado para la velocidad.",
      category: "conceptos"
    },
    {
      question: "Una vez que mi sitio esté en línea, ¿cómo sé si está funcionando o si la gente lo visita?",
      answer: "Esa es la pregunta más importante y el verdadero objetivo de tu inversión. La respuesta está en los **datos de analítica web**.\n\nNo se trata de adivinar, sino de medir. Integramos tu sitio con herramientas como Google Analytics, que te permiten responder preguntas clave sobre tu negocio:\n*   **¿Cuántas personas visitan mi sitio cada día/semana/mes?**\n*   **¿Cómo me encontraron?** (Ej. a través de Google, redes sociales, un enlace directo).\n*   **¿Qué páginas o servicios son los más populares?**\n*   **¿Están los usuarios completando los objetivos clave?** (Ej. llenando el formulario de contacto, comprando un producto).\n\nNosotros nos encargamos de la instalación y configuración técnica para que tú tengas acceso a un panel de control claro y puedas ver el rendimiento real de tu sitio. Esto transforma tu página de ser una simple tarjeta de presentación a ser una poderosa herramienta de inteligencia de negocio.",
      category: "conceptos"
    }
  ];

  // Categories with display names and descriptions
  const categories: Category[] = [
    { id: 'all', name: 'Todas las categorías', description: 'Explora todas las preguntas frecuentes' },
    { id: 'tecnico', name: 'Términos Técnicos', description: 'Explicaciones claras sobre términos técnicos' },
    { id: 'proceso', name: 'Proceso de Desarrollo', description: 'Cómo trabajamos juntos en tu proyecto' },
    { id: 'valor', name: 'Valor y Beneficios', description: 'Lo que nos distingue y cómo te beneficia' },
    { id: 'diseno', name: 'Diseño y Experiencia', description: 'Sobre diseño web y experiencia de usuario' },
    { id: 'soporte', name: 'Soporte y Mantenimiento', description: 'Cómo te apoyamos después del lanzamiento' },
    { id: 'pagos', name: 'Pagos y Facturación', description: 'Opciones de pago y términos' },
    { id: 'conceptos', name: 'Conceptos Digitales', description: 'Explicaciones sobre conceptos digitales importantes' }
  ];

  // Filter FAQs based on search query and active category
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Get current category data
  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];

  // Toggle FAQ item open/closed
  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { },
    visible: { }
  };

  const itemVariants = {
    hidden: { },
    visible: { }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      paddingTop: '0.5rem',
      paddingBottom: '1.5rem',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.header
          initial={false}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentCategory.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {currentCategory.description}
          </p>
        </motion.header>

        {/* Search and Filter */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              placeholder="Buscar preguntas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar en preguntas frecuentes"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setSearchQuery('');
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
                  ? 'bg-accent text-primary shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                aria-pressed={activeCategory === category.id}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial={false}
        >
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                initial={false}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-content-${index}`}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{
                      rotate: openItems.includes(index) ? 180 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    aria-hidden="true"
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openItems.includes(index) && (
                    <motion.div
                      id={`faq-content-${index}`}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={contentVariants}
                      className="px-6 pb-6 pt-0 text-gray-600"
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="prose prose-indigo max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                          {faq.answer}
                        </ReactMarkdown>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="text-center py-12"
              variants={itemVariants}
            >
              <p className="text-gray-500">No se encontraron preguntas que coincidan con tu búsqueda.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-4 py-2"
              >
                Mostrar todas las preguntas
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">¿No encuentras la respuesta que buscas?</h3>
            <p className="text-gray-600 mb-6">
              Estoy aquí para resolver todas tus dudas sobre desarrollo web y ayudarte a crear la presencia digital perfecta para tu negocio.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Contáctame
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { FAQ };
