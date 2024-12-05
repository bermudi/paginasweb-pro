export type Addon = {
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
};

export const categories = [
  "Base",
  "Blog y Contenido",
  "Comunidad",
  "E-Commerce",
  "Gestión Empresarial",
  "Atención y Educación",
  "Medios y Comunicación",
  "Soluciones Especializadas",
  "Utilidades"
] as const;

export const addons: Addon[] = [
  {
    name: "Paquete Base",
    category: "Base",
    price: 7500,
    description: "Funcionalidades esenciales para cualquier sitio web",
    features: ["Hosting básico", "Dominio por 1 año", "SSL", "Configuración inicial"]
  },
  {
    name: "Paquete Básico de Blog",
    category: "Blog y Contenido",
    price: 3500,
    description: "Sistema de blog simple y efectivo",
    features: ["Editor de contenido", "Categorías", "Comentarios", "RSS Feed"]
  },
  {
    name: "Paquete Avanzado de Blog",
    category: "Blog y Contenido",
    price: 6800,
    description: "Blog profesional con características avanzadas",
    features: ["Editor avanzado", "SEO para blogs", "Moderación de comentarios", "Programación de posts"]
  },
  {
    name: "Paquete Sitio Web Estático",
    category: "Blog y Contenido",
    price: 2500,
    description: "Sitio web simple y rápido",
    features: ["Páginas estáticas", "Optimización de rendimiento", "Hosting incluido"]
  },
  {
    name: "Paquete Sitio Web Dinámico",
    category: "Blog y Contenido",
    price: 8500,
    description: "Sitio web interactivo y dinámico",
    features: ["Contenido dinámico", "Base de datos", "Panel de administración"]
  },
  {
    name: "Paquete Inmobiliario",
    category: "Blog y Contenido",
    price: 12500,
    description: "Solución especializada para inmobiliarias",
    features: ["Listado de propiedades", "Búsqueda avanzada", "Galería de imágenes"]
  },
  {
    name: "Paquete Foro",
    category: "Comunidad",
    price: 9800,
    description: "Plataforma de discusión completa",
    features: ["Foros temáticos", "Perfiles de usuario", "Sistema de rangos"]
  },
  {
    name: "Paquete Red Social",
    category: "Comunidad",
    price: 15500,
    description: "Red social personalizada",
    features: ["Perfiles", "Mensajería", "Muro de actividad"]
  },
  {
    name: "Paquete Wiki",
    category: "Comunidad",
    price: 7800,
    description: "Sistema colaborativo de documentación",
    features: ["Editor wiki", "Historial de cambios", "Colaboración en tiempo real"]
  },
  {
    name: "Paquete Básico de Tienda",
    category: "E-Commerce",
    price: 12500,
    description: "Tienda en línea básica",
    features: ["Catálogo de productos", "Carrito de compras", "Pagos en línea"]
  },
  {
    name: "Paquete Avanzado E-commerce",
    category: "E-Commerce",
    price: 25800,
    description: "Tienda en línea completa",
    features: ["Gestión de inventario", "Multiple métodos de pago", "Sistema de cupones"]
  },
  {
    name: "Tienda de Productos Digitales",
    category: "E-Commerce",
    price: 18500,
    description: "Venta de productos digitales",
    features: ["Entrega automática", "Licencias", "Protección de contenido"]
  },
  {
    name: "Paquete Marketplace",
    category: "E-Commerce",
    price: 35000,
    description: "Plataforma multi-vendedor",
    features: ["Múltiples vendedores", "Comisiones", "Sistema de reputación"]
  },
  {
    name: "Paquete de Subastas",
    category: "E-Commerce",
    price: 28500,
    description: "Sistema de subastas en línea",
    features: ["Subastas en tiempo real", "Pujas automáticas", "Sistema de garantías"]
  },
  {
    name: "Paquete CRM",
    category: "Gestión Empresarial",
    price: 18500,
    description: "Gestión de relaciones con clientes",
    features: ["Seguimiento de clientes", "Pipeline de ventas", "Automatización"]
  },
  {
    name: "Paquete ERP",
    category: "Gestión Empresarial",
    price: 45000,
    description: "Sistema de planificación empresarial",
    features: ["Contabilidad", "Inventario", "Recursos humanos"]
  },
  {
    name: "Paquete RRHH",
    category: "Gestión Empresarial",
    price: 25800,
    description: "Gestión de recursos humanos",
    features: ["Gestión de personal", "Nóminas", "Evaluaciones"]
  },
  {
    name: "Paquete Mesa de Ayuda",
    category: "Atención y Educación",
    price: 15800,
    description: "Sistema de soporte técnico",
    features: ["Tickets de soporte", "Base de conocimientos", "Chat de soporte"]
  },
  {
    name: "Paquete Chat en Vivo",
    category: "Atención y Educación",
    price: 12500,
    description: "Atención al cliente en tiempo real",
    features: ["Chat en vivo", "Chatbot", "Historial de conversaciones"]
  },
  {
    name: "Paquete LMS",
    category: "Atención y Educación",
    price: 22500,
    description: "Sistema de gestión de aprendizaje",
    features: ["Cursos en línea", "Evaluaciones", "Certificados"]
  },
  {
    name: "Paquete Galería de Fotos",
    category: "Medios y Comunicación",
    price: 8500,
    description: "Galería multimedia profesional",
    features: ["Álbumes", "Lightbox", "Compartir en redes"]
  },
  {
    name: "Paquete Plataforma de Video",
    category: "Medios y Comunicación",
    price: 22500,
    description: "Plataforma de streaming de video",
    features: ["Reproductor personalizado", "Streaming", "Monetización"]
  },
  {
    name: "Paquete Podcast",
    category: "Medios y Comunicación",
    price: 15800,
    description: "Plataforma de podcasting",
    features: ["Reproductor de audio", "RSS Feed", "Distribución"]
  },
  {
    name: "Paquete Reserva de Citas",
    category: "Soluciones Especializadas",
    price: 8500,
    description: "Sistema de reservas en línea",
    features: ["Calendario", "Recordatorios", "Pagos en línea"]
  },
  {
    name: "Paquete Gestión de Eventos",
    category: "Soluciones Especializadas",
    price: 15800,
    description: "Plataforma de eventos",
    features: ["Registro de eventos", "Venta de boletos", "Check-in"]
  },
  {
    name: "Paquete SEO",
    category: "Utilidades",
    price: 12500,
    description: "Optimización para motores de búsqueda",
    features: ["Análisis SEO", "Optimización de contenido", "Reportes"]
  },
  {
    name: "Paquete Analytics",
    category: "Utilidades",
    price: 15800,
    description: "Análisis detallado del comportamiento de usuarios",
    features: ["Google Analytics", "Dashboards", "Reportes personalizados"]
  }
];
