import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: React.ReactNode;
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

  // FAQ data organized by categories with JSX content
  const faqItems: FAQItem[] = [
    // Términos Técnicos
    {
      question: "Mencionan 'Optimización SEO' en sus servicios. ¿Qué significa eso exactamente para mi negocio?",
      answer: (
        <p>
          'SEO' (Search Engine Optimization) se refiere al conjunto de técnicas que aplicamos para que tu sitio web sea más visible y atractivo para motores de búsqueda como Google. En la práctica, esto significa que cuando tus clientes potenciales busquen productos o servicios como los tuyos, tu página tendrá más probabilidades de aparecer en los primeros resultados. No se trata solo de construir la página, sino de asegurar que la gente la encuentre.
        </p>
      ),
      category: "tecnico"
    },
    {
      question: "En la sección de tecnología, hablan de 'CDN Global'. ¿Qué es y por qué debería importarme?",
      answer: (
        <p>
          Un CDN (Content Delivery Network o Red de Distribución de Contenidos) es una red de servidores distribuidos por todo el mundo. Cuando lo implementamos, una copia de tu sitio se almacena en múltiples ubicaciones. Si un usuario de, por ejemplo, España visita tu web, el contenido se le entrega desde un servidor cercano en Europa en lugar de desde México. El beneficio directo para ti es una velocidad de carga drásticamente mayor para todos tus usuarios, sin importar dónde se encuentren, lo que mejora su experiencia y tu posicionamiento en Google.
        </p>
      ),
      category: "tecnico"
    },
    {
      question: "Explican que pueden gestionar el 'dominio' y el 'hospedaje'. ¿Cuál es la diferencia entre ambos?",
      answer: (
        <p>
          Usando la analogía del coche y el garaje de nuestra web: El <strong>Dominio</strong> es la dirección de tu sitio (ej. <code>www.miempresa.com</code>). Es el nombre único que la gente escribe en el navegador para encontrarte. Sería como la dirección de tu casa. El <strong>Hospedaje (Hosting)</strong> es el espacio en un servidor donde se almacenan todos los archivos de tu sitio web (imágenes, textos, código). Es el terreno y la casa en sí. Ambos son indispensables, y nosotros podemos encargarnos de toda la configuración técnica para que no tengas que preocuparte por ello.
        </p>
      ),
      category: "tecnico"
    },
    {
      question: "¿Qué es una 'Integración API' y qué tipo de funcionalidades permite?",
      answer: (
        <p>
          Una API (Application Programming Interface) es un puente que permite que diferentes sistemas de software se comuniquen entre sí. Al integrarlas en tu web, podemos añadir funcionalidades avanzadas de terceros. Por ejemplo: Integrar un sistema de reservas de citas directamente en tu página, conectar tu tienda online con tu sistema de inventario, mostrar un mapa interactivo de Google Maps con tus ubicaciones, o procesar pagos de forma segura a través de plataformas como Stripe o PayPal.
        </p>
      ),
      category: "tecnico"
    },

    // Proceso y Colaboración
    {
      question: "En su analogía, mencionan que el cliente provee el contenido ('equipaje'). ¿Qué pasa si no tengo textos o imágenes profesionales?",
      answer: (
        <p>
          Es una situación muy común. Si bien nuestro enfoque principal es el diseño y desarrollo, entendemos la importancia del contenido de calidad. Si no cuentas con él, <strong>podemos ayudarte</strong>. Ofrecemos servicios adicionales de redacción publicitaria (copywriting) y podemos asesorarte en la selección de imágenes de stock profesionales para asegurar que tu 'coche' no solo sea potente, sino que también luzca increíble por dentro y por fuera.
        </p>
      ),
      category: "proceso"
    },
    {
      question: "Una vez que el sitio está 'construido', ¿puedo solicitar cambios? ¿Cómo funciona ese proceso?",
      answer: (
        <p>
          ¡Por supuesto! Tu sitio web debe evolucionar contigo. Distinguimos dos tipos de cambios: 1) <strong>Ajustes Menores:</strong> Si contratas uno de nuestros planes de mantenimiento, cambios como actualizar un texto, cambiar una imagen o añadir una nueva entrada al blog suelen estar cubiertos. 2) <strong>Nuevas Funcionalidades:</strong> Si deseas añadir una sección completamente nueva o una funcionalidad compleja (como un área de clientes o un nuevo módulo de e-commerce), lo tratamos como un mini-proyecto. Te prepararemos una cotización por separado para esa nueva fase de desarrollo.
        </p>
      ),
      category: "proceso"
    },
    {
      question: "Al finalizar el proyecto, ¿quién es el dueño del código y del diseño del sitio web?",
      answer: (
        <p>
          <strong>Tú.</strong> Una vez que el proyecto ha sido completado y el pago final ha sido realizado, te entregamos todos los archivos y accesos. El código fuente, el diseño y todo el trabajo realizado te pertenecen por completo. Creemos en la transparencia y en empoderar a nuestros clientes, no en atarlos a nuestro servicio.
        </p>
      ),
      category: "proceso"
    },

    // Valor y Beneficios
    {
      question: "¿Cuál es la diferencia real entre un sitio web personalizado con ustedes y usar una plantilla de plataformas como Wix, Squarespace o Shopify?",
      answer: (
        <div>
          <p>
            Las plataformas de plantillas son como comprar un coche de producción en serie; son funcionales, pero limitadas. Un sitio personalizado con nosotros es como mandar a construir un coche a medida. Las ventajas clave son:
          </p>
          <p><strong>Diseño Único:</strong> Tu sitio no se parecerá a ningún otro. Reflejará al 100% la identidad de tu marca.</p>
          <p><strong>Rendimiento Superior:</strong> Optimizamos cada línea de código para una velocidad máxima, algo que las plantillas genéricas no pueden ofrecer.</p>
          <p><strong>Escalabilidad sin Límites:</strong> Tu sitio podrá crecer tanto como tu negocio lo necesite, sin las restricciones funcionales de una plataforma cerrada.</p>
          <p><strong>Propiedad Total:</strong> Eres dueño de tu sitio. No estás 'alquilando' un espacio en una plataforma de la que no puedes salir.</p>
          <p><strong>Asesoría Experta:</strong> Tienes un socio tecnológico directo que entiende tus objetivos de negocio.</p>
        </div>
      ),
      category: "valor"
    },

    // Diseño y Experiencia
    {
      question: "El proceso incluye una etapa de 'Diseño y Prototipado'. ¿Qué sucede si no me gusta la propuesta inicial de diseño?",
      answer: (
        <p>
          ¡Esa es precisamente la razón por la que tenemos esa etapa! Es una preocupación totalmente válida. El prototipo es nuestra herramienta para alinearnos con tu visión antes de escribir una sola línea de código. Nuestro proceso incluye <strong>rondas de revisión y retroalimentación</strong>. Trabajaremos juntos, ajustando colores, tipografías y la disposición de los elementos hasta que estés completamente satisfecho y sientas que el diseño representa fielmente a tu marca. La idea no es que aceptes una propuesta, sino que la co-creemos.
        </p>
      ),
      category: "diseno"
    },
    {
      question: "¿Puedo ver ejemplos de proyectos que hayan realizado antes?",
      answer: (
        <p>
          ¡Claro! En nuestra sección de <strong>'Proyectos recientes'</strong> puedes explorar una selección de nuestro trabajo. Allí encontrarás desde plataformas de e-commerce hasta sitios corporativos y aplicaciones web. Cada ejemplo incluye un enlace para que puedas navegar por el sitio en vivo y experimentar la calidad de nuestro desarrollo de primera mano.
        </p>
      ),
      category: "diseno"
    },
    {
      question: "Veo que usan frameworks modernos como React o Next.js. ¿Qué ventaja me da esto frente a una plataforma más tradicional como WordPress?",
      answer: (
        <div>
          <p>
            Es una pregunta fundamental. Mientras que plataformas como WordPress son excelentes para blogs o sitios sencillos, nuestro enfoque con frameworks modernos te ofrece ventajas clave para un proyecto profesional y a largo plazo:
          </p>
          <p><strong>Experiencia de Usuario Superior:</strong> Los sitios se sienten increíblemente rápidos y fluidos, más parecidos a una aplicación de escritorio que a una página web tradicional.</p>
          <p><strong>Seguridad Reforzada:</strong> Al no depender de un ecosistema de plugins de terceros, la superficie de ataque para hackers se reduce drásticamente.</p>
          <p><strong>Rendimiento Inigualable:</strong> Construimos solo lo que necesitas, sin el código innecesario que a menudo ralentiza los sitios basados en plantillas o constructores visuales.</p>
          <p><strong>Escalabilidad Real:</strong> Tu sitio estará preparado para crecer. Añadir funcionalidades complejas en el futuro es mucho más sencillo y limpio.</p>
          <p>Básicamente, elegimos construirte un motor de alto rendimiento a medida, en lugar de adaptar uno de producción masiva.</p>
        </div>
      ),
      category: "diseno"
    },

    // Soporte y Mantenimiento
    {
      question: "¿Cómo será la comunicación durante el desarrollo del proyecto?",
      answer: (
        <p>
          La comunicación clara es la base de nuestro trabajo. Estableceremos un canal principal (generalmente correo electrónico para dejar constancia escrita) y programaremos llamadas o videollamadas periódicas para las fases clave (inicio, revisiones de diseño, etc.). Recibirás actualizaciones proactivas sobre el progreso para que siempre sepas en qué etapa se encuentra tu proyecto y qué es lo siguiente.
        </p>
      ),
      category: "soporte"
    },
    {
      question: "Mencionan 'Monitoreo 24/7' en la sección de seguridad. ¿Qué significa esto en la práctica?",
      answer: (
        <div>
          <p>
            Significa que, incluso después del lanzamiento, tu sitio no queda desatendido. Utilizamos sistemas automáticos que vigilan constantemente la 'salud' de tu página. Esto incluye:
          </p>
          <p><strong>Monitoreo de Tiempo de Actividad (Uptime):</strong> Si tu sitio se cae por cualquier motivo, recibimos una alerta inmediata para poder actuar.</p>
          <p><strong>Escaneo de Seguridad:</strong> Buscamos continuamente malware o actividades sospechosas para prevenir problemas antes de que afecten a tus usuarios.</p>
          <p>Es tu sistema de seguridad y tu mecánico de confianza, trabajando en segundo plano para darte tranquilidad.</p>
        </div>
      ),
      category: "soporte"
    },
    {
      question: "¿Qué sucede si algo se 'rompe' en el sitio después de un tiempo? ¿Lo arreglan?",
      answer: (
        <div>
          <p>Sí. Distinguimos entre dos escenarios:</p>
          <p>1) <strong>Errores (Bugs):</strong> Si alguna funcionalidad que construimos deja de funcionar correctamente debido a un error en nuestro código, la corrección está cubierta por nuestra garantía de trabajo.</p>
          <p>2) <strong>Problemas por Factores Externos:</strong> A veces, problemas surgen por actualizaciones de navegadores, servicios de terceros o cambios que se realizan en el contenido. Estos casos se gestionan a través de nuestros paquetes de mantenimiento o soporte por horas.</p>
        </div>
      ),
      category: "soporte"
    },
    {
      question: "El servicio de 'Optimización SEO' que ofrecen, ¿incluye la creación de contenido como artículos de blog o la gestión de redes sociales?",
      answer: (
        <p>
          Es importante aclarar este punto. Nuestra optimización SEO se enfoca en la parte <strong>técnica y estructural</strong> del sitio: nos aseguramos de que la página sea rápida, que Google pueda leerla y entenderla correctamente, que las etiquetas estén bien puestas y que la experiencia móvil sea impecable. La creación de contenido (estrategia de blog, redacción) y el marketing en redes sociales son disciplinas separadas. Si bien son cruciales para una estrategia SEO completa, no están incluidas en el paquete de desarrollo estándar, pero podemos asesorarte o cotizarlas como un servicio adicional.
        </p>
      ),
      category: "soporte"
    },

    // Pagos y Facturación
    {
      question: "¿Cómo es el esquema de pagos para un proyecto?",
      answer: (
        <div>
          <p>
            Entendemos que cada proyecto tiene su propia escala y complejidad. Por eso, en lugar de un único modelo de pago, ofrecemos esquemas flexibles que se alinean con la duración y los hitos del proyecto, garantizando transparencia y un compromiso mutuo.
          </p>
          <p>Dependiendo de la naturaleza de tu proyecto, aplicamos uno de los siguientes modelos:</p>
          
          <div className="my-4">
            <p><strong>Modelo de 3 Fases (Para Proyectos Simples, 3-5 semanas):</strong></p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>40%</strong> - Al inicio del proyecto.</li>
              <li><strong>40%</strong> - Al finalizar la fase de diseño y desarrollo.</li>
              <li><strong>20%</strong> - Contra entrega y lanzamiento del sitio.</li>
            </ul>
          </div>

          <div className="my-4">
            <p><strong>Modelo de 4 Fases (Estándar, 6-12 semanas):</strong></p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>30%</strong> - Al inicio del proyecto.</li>
              <li><strong>30%</strong> - Al aprobar la propuesta de diseño (antes de comenzar el desarrollo).</li>
              <li><strong>20%</strong> - Al finalizar el desarrollo (antes de la revisión final).</li>
              <li><strong>20%</strong> - Contra entrega y lanzamiento.</li>
            </ul>
          </div>

          <div className="my-4">
            <p><strong>Modelo de 5 Fases (Para Proyectos Complejos, 12-16+ semanas):</strong></p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>25%</strong> - Al inicio del proyecto.</li>
              <li><strong>25%</strong> - Al aprobar la propuesta de diseño.</li>
              <li><strong>20%</strong> - Al completar el desarrollo Frontend (la parte visual).</li>
              <li><strong>20%</strong> - Al completar la integración Backend (la lógica y base de datos).</li>
              <li><strong>10%</strong> - Contra entrega y lanzamiento.</li>
            </ul>
          </div>

          <p>El modelo específico que aplicará a tu proyecto se detallará claramente en la cotización y en el acuerdo de servicio para tu total tranquilidad.</p>
        </div>
      ),
      category: "pagos"
    },
    {
      question: "¿Emiten facturas fiscales (CFDI)?",
      answer: (
        <p>
          Sí, por supuesto. Emitimos facturas fiscales (CFDI) por todos nuestros servicios. Como profesionales, entendemos la importancia de la formalidad fiscal para tu negocio. Solo necesitaremos tus datos fiscales para generar la factura correspondiente a cada pago.
        </p>
      ),
      category: "pagos"
    },
    {
      question: "Además del costo del desarrollo, ¿qué otros costos recurrentes debo considerar?",
      answer: (
        <div>
          <p>Es una pregunta crucial para una planificación financiera clara. Además de la inversión inicial en el desarrollo, existen tres costos operativos que debes tener en mente:</p>
          <ol className="list-decimal ml-6 space-y-2 my-4">
            <li><strong>Registro del Dominio:</strong> Es un pago anual para mantener la propiedad de tu dirección <code>www.tuempresa.com</code>.</li>
            <li><strong>Servicio de Hospedaje (Hosting):</strong> Es un pago (mensual o anual) por el 'alquiler' del espacio en el servidor que mantiene tu sitio en línea.</li>
            <li><strong>Mantenimiento (Opcional):</strong> Nuestros planes de mantenimiento son un costo recurrente que garantiza que tu sitio se mantenga seguro, actualizado y funcionando óptimamente.</li>
          </ol>
          <p>Te detallaremos todos estos costos de forma transparente en tu cotización para que tengas el panorama completo.</p>
        </div>
      ),
      category: "pagos"
    },
    {
      question: "¿Firmamos algún tipo de contrato o acuerdo de servicio?",
      answer: (
        <p>
          Sí. Para la tranquilidad de ambas partes, todos nuestros proyectos se formalizan a través de un <strong>acuerdo de servicio</strong>. Este documento funciona como nuestro 'mapa de ruta' compartido y detalla claramente el alcance del trabajo, los entregables, el cronograma, los términos de pago y las responsabilidades de cada uno. Es la mejor manera de asegurar que las expectativas estén alineadas y el proyecto sea un éxito.
        </p>
      ),
      category: "pagos"
    },
    {
      question: "¿Qué sucede si necesito cancelar el proyecto a mitad del camino?",
      answer: (
        <p>
          Entendemos que las prioridades de un negocio pueden cambiar. Si necesitas cancelar el proyecto, el pago inicial del 50% no es reembolsable, ya que cubre el trabajo estratégico, creativo y técnico realizado hasta ese momento. No se requerirán pagos adicionales y te entregaremos todos los activos y el código que se hayan completado hasta la fecha de cancelación.
        </p>
      ),
      category: "pagos"
    },
    {
      question: "Si no contrato un plan de mantenimiento, ¿puedo contactarlos para solicitar ayuda o cambios puntuales en el futuro?",
      answer: (
        <p>
          ¡Por supuesto! Siempre estaremos disponibles para ayudarte. Las solicitudes de trabajo que no están cubiertas por un plan de mantenimiento se gestionan bajo un esquema de <strong>soporte por horas</strong>. Es una opción flexible y perfecta si solo necesitas ajustes ocasionales. Te enviaremos una cotización por el tiempo estimado antes de realizar cualquier trabajo.
        </p>
      ),
      category: "pagos"
    },

    // Conceptos Digitales
    {
      question: "¿Qué es el DNS y por qué a veces hablan de 'tiempo de propagación'?",
      answer: (
        <div>
          <p>
            Imagina que el <strong>DNS (Domain Name System)</strong> es la agenda de contactos de Internet. Traduce el nombre de tu sitio, que es fácil de recordar para las personas (ej. <code>www.miempresa.com</code>), a una dirección IP, que es la que entienden los ordenadores (ej. <code>192.168.1.1</code>).
          </p>
          <p>
            Cuando hacemos un cambio importante, como lanzar tu sitio por primera vez o cambiar de servidor, tenemos que actualizar esa 'agenda de contactos' a nivel mundial. El <strong>tiempo de propagación</strong> es el período que tardan todos los servidores de Internet del mundo en recibir y registrar esa actualización. No es instantáneo; puede tardar desde unos minutos hasta 48 horas. Durante este tiempo, es posible que algunos usuarios vean la versión antigua del sitio y otros la nueva.
          </p>
        </div>
      ),
      category: "conceptos"
    },
    {
      question: "¿Qué significa que mi sitio tenga un certificado SSL (y muestre HTTPS y un candado)?",
      answer: (
        <div>
          <p>
            Un <strong>Certificado SSL (Secure Sockets Layer)</strong> es una tecnología de seguridad que crea una conexión cifrada entre el navegador de tu usuario y tu servidor. Piensa en ello como enviar una carta en un sobre sellado y blindado, en lugar de una postal que cualquiera puede leer.
          </p>
          <p>
            El <code>https://</code> (la 'S' es de 'seguro') y el icono del candado son la señal visual de que esta protección está activa. Esto es crucial por tres motivos:
          </p>
          <ol className="list-decimal ml-6 space-y-2 my-4">
            <li><strong>Confianza:</strong> Los usuarios se sienten seguros al introducir sus datos (formularios, contraseñas, datos de pago).</li>
            <li><strong>Seguridad:</strong> Protege la información sensible de ser interceptada.</li>
            <li><strong>SEO:</strong> Google y otros buscadores dan prioridad en sus rankings a los sitios web que son seguros.</li>
          </ol>
        </div>
      ),
      category: "conceptos"
    },
    {
      question: "En el modelo de pago complejo mencionan 'Frontend' y 'Backend'. ¿Qué son?",
      answer: (
        <div>
          <p>Usando nuestra analogía del coche, es muy fácil de entender:</p>
          <ul className="list-disc ml-6 space-y-2 my-4">
            <li>
              El <strong>Frontend</strong> es todo lo que el usuario ve y con lo que interactúa: la carrocería, el color, el tablero, el volante, los asientos. En términos web, es el diseño, la tipografía, los botones, las animaciones y la estructura visual. Es la <em>experiencia</em>.
            </li>
            <li>
              El <strong>Backend</strong> es todo lo que hace que el coche funcione, pero que no se ve a simple vista: el motor, la transmisión, la computadora a bordo, el sistema de combustible. En la web, es el servidor, la base de datos y la lógica de la aplicación. Es el <em>poder</em> y la <em>inteligencia</em>.
            </li>
          </ul>
          <p>Ambos son esenciales y trabajan juntos para crear una aplicación web funcional y atractiva.</p>
        </div>
      ),
      category: "conceptos"
    },
    {
      question: "A veces realizo un cambio y no lo veo reflejado inmediatamente. ¿Es por el 'caché'?",
      answer: (
        <div>
          <p>
            Exactamente. El <strong>caché</strong> es una memoria temporal donde tu navegador (o el servidor) guarda una 'foto' de tu sitio web. Lo hace para que, en futuras visitas, la página cargue mucho más rápido, ya que muestra la 'foto' guardada en lugar de tener que volver a construirla desde cero.
          </p>
          <p>
            Esto es excelente para el rendimiento, pero a veces significa que estás viendo una versión ligeramente desactualizada. Generalmente, el caché se limpia solo después de un tiempo, o podemos forzar su limpieza. Así que no te preocupes, es una señal de que tu sitio está optimizado para la velocidad.
          </p>
        </div>
      ),
      category: "conceptos"
    },
    {
      question: "Una vez que mi sitio esté en línea, ¿cómo sé si está funcionando o si la gente lo visita?",
      answer: (
        <div>
          <p>
            Esa es la pregunta más importante y el verdadero objetivo de tu inversión. La respuesta está en los <strong>datos de analítica web</strong>.
          </p>
          <p>No se trata de adivinar, sino de medir. Integramos tu sitio con herramientas como Google Analytics, que te permiten responder preguntas clave sobre tu negocio:</p>
          <ul className="list-disc ml-6 space-y-2 my-4">
            <li><strong>¿Cuántas personas visitan mi sitio cada día/semana/mes?</strong></li>
            <li><strong>¿Cómo me encontraron?</strong> (Ej. a través de Google, redes sociales, un enlace directo).</li>
            <li><strong>¿Qué páginas o servicios son los más populares?</strong></li>
            <li><strong>¿Están los usuarios completando los objetivos clave?</strong> (Ej. llenando el formulario de contacto, comprando un producto).</li>
          </ul>
          <p>
            Nosotros nos encargamos de la instalación y configuración técnica para que tú tengas acceso a un panel de control claro y puedas ver el rendimiento real de tu sitio. Esto transforma tu página de ser una simple tarjeta de presentación a ser una poderosa herramienta de inteligencia de negocio.
          </p>
        </div>
      ),
      category: "conceptos"
    }
  ];

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

  const filteredFAQs = faqItems.filter(item => {
    const searchInAnswer = (node: React.ReactNode): string => {
      if (typeof node === 'string') return node;
      if (React.isValidElement(node)) {
        if (node.props.children) {
          if (Array.isArray(node.props.children)) {
            return node.props.children.map(searchInAnswer).join(' ');
          }
          return searchInAnswer(node.props.children);
        }
      }
      return '';
    };

    const answerText = searchInAnswer(item.answer);
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      answerText.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Animation variants for the list and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      },
    },
  };

  // Animation variants for the accordion content
  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4, ease: 'easeInOut' }
    }
  };

  const faqSectionRef = useRef<HTMLElement>(null);
  const hasScrolled = useRef(false);

  // Scroll to FAQ section only when explicitly requested via hash
  useEffect(() => {
    if (window.location.hash === '#faq' && faqSectionRef.current && !hasScrolled.current) {
      // Small timeout to ensure the page has rendered
      const timer = setTimeout(() => {
        if (faqSectionRef.current) {
          window.scrollTo(0, 0);
          hasScrolled.current = true;
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section id="faq-content" ref={faqSectionRef} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.header
          key={activeCategory} // Animate header on category change
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentCategory.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {currentCategory.description}
          </p>
        </motion.header>
        </AnimatePresence>

        {/* Search and Filter */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-shadow"
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
                  setOpenItems([]); // UX Refinement: Reset open items on category change
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
          key={activeCategory} // Re-run animation when category changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout // Animate layout changes for the container itself
        >
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.question} // Use a stable key
                className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-shadow duration-300"
                variants={itemVariants}
                layout="position" // Animate position changes on filter
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-content-${index}`}
                >
                  <h3 id={`faq-question-${index}`} className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
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
                      className="overflow-hidden" // Prevents content overflow during animation
                      role="region"
                      aria-labelledby={`faq-question-${index}`} // A11y Improvement
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600">
                        <div className="prose prose-indigo max-w-none">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
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
              Estoy aquí para resolver todas tus dudas y ayudarte a tomar la mejor decisión para tu proyecto.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Contactar ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { FAQ };