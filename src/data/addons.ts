export type Addon = {
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
};

export const categories = [
  "Atención al Cliente",
  "Comercio Electrónico",
  "Comunicación",
  "Comunidad y Social",
  "Educativo",
  "Gestión de Contenido",
  "Gestión de Medios",
  "Gestión Empresarial",
  "Soluciones Especializadas",
  "Utilidades y Herramientas",
] as const;


export const addons: Addon[] = [
  // Gestión de Contenido
  {
    name: "Paquete de Sitio Web Estático",
    category: "Gestión de Contenido",
    price: 2500,
    description: "Solución simple y eficiente para sitios web estáticos",
    features: [
      "Gestión simple de 2 a 6 páginas",
      "Optimización básica de SEO",
      "Capacidad de respuesta móvil",
      "Formulario de contacto simple"
    ]
  },
  {
    name: "Paquete de Sitio Web Dinámico",
    category: "Gestión de Contenido",
    price: 8500,
    description: "Solución completa para sitios web dinámicos",
    features: [
      "Gestión avanzada de contenido",
      "Roles y permisos de usuario",
      "Plantillas y temas personalizados",
      "Soporte multilingüe",
      "Integración con servicios de terceros"
    ]
  },
  {
    name: "Paquete Básico de Blog",
    category: "Gestión de Contenido",
    price: 3500,
    description: "Plataforma profesional de blogs",
    features: [
      "Gestión de publicaciones",
      "Editor de contenido",
      "Sistema de comentarios",
      "Categorías y etiquetas",
      "Perfiles de autor",
      "Feed RSS"
    ]
  },
  {
    name: "Paquete Avanzado de Blog",
    category: "Gestión de Contenido",
    price: 6800,
    description: "Blog profesional con características avanzadas",
    features: [
      "Todas las características del Paquete Básico de Blog",
      "Gestión de múltiples autores",
      "Programación de publicaciones",
      "Tipos de publicaciones personalizadas",
      "Herramientas avanzadas de SEO",
      "Integración con redes sociales",
      "Panel de análisis"
    ]
  },
  {
    name: "Paquete de Sitio Web Inmobiliario",
    category: "Gestión de Contenido",
    price: 12000,
    description: "Plataforma especializada para inmobiliarias",
    features: [
      "Gestión de listados de propiedades",
      "Opciones avanzadas de búsqueda y filtro",
      "Perfiles de agentes",
      "Programación de citas",
      "Integración de tours virtuales"
    ]
  },
  // Comunidad y Social
  {
    name: "Paquete de Foro",
    category: "Comunidad y Social",
    price: 7500,
    description: "Plataforma de discusión y comunidad",
    features: [
      "Registro y perfiles de usuarios",
      "Gestión de temas y publicaciones",
      "Herramientas de moderación",
      "Mensajería privada",
      "Sistema de reputación"
    ]
  },
  {
    name: "Paquete de Red Social",
    category: "Comunidad y Social",
    price: 15000,
    description: "Plataforma de red social personalizada",
    features: [
      "Perfiles y conexiones de usuarios",
      "Feeds de actividad",
      "Grupos y comunidades",
      "Compartir fotos y videos",
      "Gestión de eventos"
    ]
  },
  {
    name: "Paquete Wiki",
    category: "Comunidad y Social",
    price: 6500,
    description: "Sistema colaborativo de gestión de conocimiento",
    features: [
      "Creación colaborativa de contenido",
      "Historial de versiones y reversión",
      "Seguimiento de contribuciones de usuarios",
      "Enlaces internos",
      "Soporte para adjuntar archivos"
    ]
  },
  // Comercio Electrónico
  {
    name: "Paquete Básico de Tienda en Línea",
    category: "Comercio Electrónico",
    price: 9500,
    description: "Solución básica para comercio electrónico",
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Integración básica de pasarela de pago",
      "Gestión de pedidos",
      "Cuentas de clientes"
    ]
  },
  {
    name: "Paquete Avanzado de Comercio Electrónico",
    category: "Comercio Electrónico",
    price: 18000,
    description: "Solución completa para comercio electrónico",
    features: [
      "Todas las características del Paquete Básico de Tienda en Línea",
      "Múltiples pasarelas de pago",
      "Gestión de inventario",
      "Sistema de descuentos y cupones",
      "Reseñas y calificaciones de productos",
      "Recuperación de carritos abandonados"
    ]
  },
  {
    name: "Tienda de Descargas Digitales",
    category: "Comercio Electrónico",
    price: 12500,
    description: "Plataforma especializada en productos digitales",
    features: [
      "Gestión de productos digitales",
      "Entrega segura de archivos",
      "Generación de claves de licencia",
      "Opciones de suscripción"
    ]
  },
  {
    name: "Paquete de Mercado",
    category: "Comercio Electrónico",
    price: 25000,
    description: "Plataforma de marketplace multivendedor",
    features: [
      "Soporte para múltiples vendedores",
      "Paneles de vendedor",
      "Gestión de comisiones",
      "Calificaciones y reseñas de vendedores"
    ]
  },
  {
    name: "Paquete de Sitio Web de Subastas",
    category: "Comercio Electrónico",
    price: 28000,
    description: "Plataforma de subastas en línea",
    features: [
      "Sistema de pujas",
      "Subastas basadas en tiempo",
      "Sistema de reputación de usuarios",
      "Servicios de custodia"
    ]
  },
  // Gestión Empresarial
  {
    name: "Paquete de Gestión de Relaciones con Clientes (CRM)",
    category: "Gestión Empresarial",
    price: 15000,
    description: "Sistema integral de gestión de relaciones con clientes",
    features: [
      "Gestión de contactos",
      "Seguimiento de leads",
      "Pipeline de ventas",
      "Integración de correo electrónico",
      "Gestión de tareas"
    ]
  },
  {
    name: "Paquete de Planificación de Recursos Empresariales (ERP)",
    category: "Gestión Empresarial",
    price: 35000,
    description: "Sistema completo de gestión empresarial",
    features: [
      "Gestión contable y financiera",
      "Gestión de recursos humanos",
      "Gestión de inventario y cadena de suministro",
      "Gestión de proyectos",
      "Inteligencia empresarial e informes"
    ]
  },
  {
    name: "Paquete de Gestión de Recursos Humanos",
    category: "Gestión Empresarial",
    price: 18000,
    description: "Sistema especializado en gestión de RRHH",
    features: [
      "Base de datos de empleados",
      "Seguimiento de tiempo y asistencia",
      "Gestión de permisos",
      "Evaluaciones de desempeño",
      "Integración de nómina"
    ]
  },
  {
    name: "Paquete de Gestión de Proyectos",
    category: "Gestión Empresarial",
    price: 12000,
    description: "Herramienta completa de gestión de proyectos",
    features: [
      "Gestión de tareas y subtareas",
      "Diagramas de Gantt",
      "Seguimiento de tiempo",
      "Compartir archivos y colaboración",
      "Informes y análisis"
    ]
  },
  {
    name: "Paquete de Gestión de Inventario",
    category: "Gestión Empresarial",
    price: 14000,
    description: "Sistema de control y gestión de inventario",
    features: [
      "Seguimiento de stock",
      "Gestión de órdenes de compra",
      "Gestión de proveedores",
      "Escaneo de códigos de barras",
      "Alertas de bajo stock"
    ]
  },
  // Atención al Cliente
  {
    name: "Paquete de Mesa de Ayuda",
    category: "Atención al Cliente",
    price: 11000,
    description: "Sistema profesional de soporte al cliente",
    features: [
      "Sistema de gestión de tickets",
      "Base de conocimientos",
      "Sección de FAQ",
      "Portal del cliente",
      "Gestión de SLA"
    ]
  },
  {
    name: "Paquete de Chat en Vivo",
    category: "Atención al Cliente",
    price: 7500,
    description: "Solución de chat en tiempo real para atención al cliente",
    features: [
      "Widget de chat en tiempo real",
      "Enrutamiento y cola de chats",
      "Respuestas predefinidas",
      "Compartir archivos en chat",
      "Transcripciones e historial de chat"
    ]
  },
  {
    name: "Paquete de Retroalimentación y Encuestas de Clientes",
    category: "Atención al Cliente",
    price: 6000,
    description: "Sistema de encuestas y feedback de clientes",
    features: [
      "Creación y gestión de encuestas",
      "Múltiples tipos de preguntas",
      "Análisis de datos e informes",
      "Integración con CRM"
    ]
  },
  // Educativo
  {
    name: "Paquete de Sistema de Gestión de Aprendizaje (LMS)",
    category: "Educativo",
    price: 16000,
    description: "Plataforma completa de aprendizaje en línea",
    features: [
      "Creación y gestión de cursos",
      "Inscripción y seguimiento del progreso de estudiantes",
      "Herramientas de cuestionarios y tareas",
      "Foros de discusión",
      "Gestión de certificaciones"
    ]
  },
  {
    name: "Paquete de Sistema de Gestión Escolar",
    category: "Educativo",
    price: 22000,
    description: "Sistema integral de gestión escolar",
    features: [
      "Gestión de información de estudiantes",
      "Seguimiento de asistencia",
      "Libro de calificaciones y boletas",
      "Portal para padres",
      "Gestión de horarios"
    ]
  },
  {
    name: "Paquete de Sistema de Exámenes en Línea",
    category: "Educativo",
    price: 9500,
    description: "Plataforma especializada en evaluaciones en línea",
    features: [
      "Creación y programación de exámenes",
      "Múltiples tipos de preguntas",
      "Calificación automatizada",
      "Análisis de resultados e informes",
      "Medidas anti-trampa"
    ]
  },
  // Gestión de Medios
  {
    name: "Paquete de Galería de Fotos",
    category: "Gestión de Medios",
    price: 5500,
    description: "Sistema profesional de gestión de imágenes",
    features: [
      "Organización de álbumes",
      "Carga y gestión de imágenes",
      "Presentaciones y visualización en lightbox",
      "Etiquetado y búsqueda de imágenes",
      "Opciones de compartir en redes sociales"
    ]
  },
  {
    name: "Paquete de Plataforma de Video",
    category: "Gestión de Medios",
    price: 13500,
    description: "Plataforma completa de gestión de videos",
    features: [
      "Alojamiento y streaming de videos",
      "Gestión de listas de reproducción",
      "Canales de usuario",
      "Comentarios y calificaciones",
      "Opciones de monetización"
    ]
  },
  {
    name: "Paquete de Gestión de Podcast",
    category: "Gestión de Medios",
    price: 8500,
    description: "Sistema especializado en gestión de podcasts",
    features: [
      "Gestión de episodios",
      "Generación de feed RSS",
      "Integración de reproductor",
      "Opciones de suscripción",
      "Análisis y estadísticas de oyentes"
    ]
  },
  {
    name: "Paquete de Gestión de Activos Digitales",
    category: "Gestión de Medios",
    price: 11000,
    description: "Sistema centralizado de gestión de activos digitales",
    features: [
      "Biblioteca de medios centralizada",
      "Gestión de metadatos",
      "Control de versiones",
      "Gestión de derechos de acceso",
      "Integración con otros sistemas"
    ]
  },
  // Comunicación
  {
    name: "Paquete de administracíon de Correo Electrónico",
    category: "Comunicación",
    price: 1000,
    description: "Configuración y administración de correo electrónico en Zoho/Google Workspace/Outlook",
    features: [
      "Tú pagas tu suscripción anual",
      "Nosotros administramos el servico",
      "Uso de dominios personalizados",
      "Aplicación móvil de correo electrónico",
      "Sincronización de calendarios",
      "Calendarios grupales",
      "Contactos y grupos"
    ]
  },
  {
    name: "Paquete de Correo Electrónico Avanzado",
    category: "Comunicación",
    price: 9500,
    description: "Servicio de correo electrónico privado y personalizado",
    features: [
      "100 GB de almacenamiento de correo electrónico",
      "Servidor privado de correo",
      "Control total de tus datos",
      "Cuentas infinitas* de correo",
      "Uso de multiples dominios personalizados",
      "Aplicación móvil de correo electrónico",
    ]
  },
  {
    name: "Paquete de Marketing por Correo Electrónico",
    category: "Comunicación",
    price: 8500,
    description: "Sistema profesional de email marketing",
    features: [
      "Gestión de listas de correo",
      "Diseñador de plantillas de correo",
      "Programación de campañas",
      "Seguimiento de aperturas y clics",
      "Pruebas A/B"
    ]
  },
  {
    name: "Paquete de Sistema de Boletines",
    category: "Comunicación",
    price: 5500,
    description: "Sistema de gestión de boletines informativos",
    features: [
      "Gestión de suscriptores",
      "Creación y programación de boletines",
      "Proceso automatizado de suscripción",
      "Análisis e informes"
    ]
  },
  {
    name: "Paquete de Comunicación Interna",
    category: "Comunicación",
    price: 9500,
    description: "Plataforma de comunicación empresarial interna",
    features: [
      "Noticias y anuncios de la empresa",
      "Directorio de empleados",
      "Compartir documentos",
      "Sistema de mensajería interna",
      "Calendario de eventos"
    ]
  },
  // Soluciones Especializadas
  {
    name: "Paquete de Reserva de Citas",
    category: "Soluciones Especializadas",
    price: 7500,
    description: "Sistema de programación y gestión de citas",
    features: [
      "Sistema de programación en línea",
      "Gestión de calendario",
      "Recordatorios automatizados",
      "Integración de pagos",
      "Gestión de personal"
    ]
  },
  {
    name: "Paquete de Gestión de Eventos",
    category: "Soluciones Especializadas",
    price: 12500,
    description: "Plataforma completa de gestión de eventos",
    features: [
      "Creación de eventos y venta de entradas",
      "Gestión de asistentes",
      "Sistema de check-in",
      "Gestión de patrocinios",
      "Análisis de eventos"
    ]
  },
  {
    name: "Paquete de Gestión de Membresías",
    category: "Soluciones Especializadas",
    price: 9500,
    description: "Sistema de gestión de miembros y suscripciones",
    features: [
      "Registro y perfiles de miembros",
      "Gestión de suscripciones",
      "Contenido exclusivo para miembros",
      "Recordatorios de renovación",
      "Directorio de miembros"
    ]
  },
  {
    name: "Paquete de Anuncios Clasificados",
    category: "Soluciones Especializadas",
    price: 11000,
    description: "Plataforma de anuncios clasificados en línea",
    features: [
      "Publicación y gestión de anuncios",
      "Navegación por categoría y ubicación",
      "Calificaciones y reseñas de usuarios",
      "Listados destacados",
      "Sistema de mensajería"
    ]
  },
  {
    name: "Paquete de Bolsa de Trabajo",
    category: "Soluciones Especializadas",
    price: 13500,
    description: "Portal de empleo y gestión de candidatos",
    features: [
      "Gestión de publicación de empleos",
      "Base de datos de currículums",
      "Seguimiento de candidatos",
      "Perfiles de empleadores",
      "Alertas de trabajo"
    ]
  },
  {
    name: "Paquete de Gestión de Restaurantes",
    category: "Soluciones Especializadas",
    price: 14500,
    description: "Sistema integral para gestión de restaurantes",
    features: [
      "Gestión de menú",
      "Reservas de mesa",
      "Sistema de pedidos en línea",
      "Gestión de pedidos de cocina",
      "Sistema de retroalimentación de clientes"
    ]
  },
  {
    name: "Paquete de Gestión de Iglesias",
    category: "Soluciones Especializadas",
    price: 8500,
    description: "Sistema especializado para gestión de iglesias",
    features: [
      "Base de datos de miembros",
      "Planificación de eventos y servicios",
      "Seguimiento de donaciones",
      "Gestión de voluntarios",
      "Organización de grupos pequeños"
    ]
  },
  {
    name: "Paquete de Sistema de Gestión de Biblioteca",
    category: "Soluciones Especializadas",
    price: 11500,
    description: "Sistema completo de gestión bibliotecaria",
    features: [
      "Catálogo de libros",
      "Gestión de usuarios",
      "Sistema de préstamo/devolución",
      "Cálculo de multas",
      "Catálogo público de acceso en línea (OPAC)"
    ]
  },
  {
    name: "Paquete de Gestión de Práctica Médica",
    category: "Soluciones Especializadas",
    price: 18500,
    description: "Sistema especializado para consultorios médicos",
    features: [
      "Gestión de registros de pacientes",
      "Programación de citas",
      "Facturación y reclamaciones de seguros",
      "Gestión de recetas",
      "Integración de telemedicina"
    ]
  },
  // Utilidades y Herramientas
  {
    name: "Paquete de Herramientas SEO",
    category: "Utilidades y Herramientas",
    price: 7500,
    description: "Suite completa de herramientas SEO",
    features: [
      "Investigación de palabras clave",
      "Análisis SEO en página",
      "Monitoreo de backlinks",
      "Herramientas de auditoría de sitio",
      "Seguimiento de ranking"
    ]
  },
  {
    name: "Paquete de Análisis e Informes",
    category: "Utilidades y Herramientas",
    price: 8500,
    description: "Sistema avanzado de análisis y reportes",
    features: [
      "Análisis de tráfico web",
      "Seguimiento de comportamiento de usuarios",
      "Seguimiento de conversiones",
      "Generación de informes personalizados",
      "Herramientas de visualización de datos"
    ]
  },
  {
    name: "Paquete de Constructor de Formularios",
    category: "Utilidades y Herramientas",
    price: 5500,
    description: "Herramienta profesional de creación de formularios",
    features: [
      "Creación de formularios con arrastrar y soltar",
      "Múltiples tipos de campos",
      "Lógica condicional",
      "Análisis de formularios",
      "Integración con otros sistemas"
    ]
  },
  {
    name: "Paquete de Gestión de Documentos",
    category: "Utilidades y Herramientas",
    price: 9500,
    description: "Sistema completo de gestión documental",
    features: [
      "Almacenamiento y organización de archivos",
      "Control de versiones",
      "Edición colaborativa",
      "Control de acceso y permisos",
      "Búsqueda de texto completo"
    ]
  },
  {
    name: "Paquete de Respaldo y Seguridad",
    category: "Utilidades y Herramientas",
    price: 11500,
    description: "Sistema integral de seguridad y respaldo",
    features: [
      "Copias de seguridad automatizadas",
      "Escaneo de malware",
      "Protección de firewall",
      "Autenticación de dos factores",
      "Gestión de certificados SSL"
    ]
  }
];
