export type Addon = {
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
};

export const categories = [
  "Customer Service",
  "E-commerce",
  "Communication",
  "Community & Social",
  "Educational",
  "Content Management",
  "Media Management",
  "Business Management",
  "Specialized Solutions",
  "Utilities & Tools"
] as const;


export const addons: Addon[] = [
  // Content Management
  {
    name: "Static Website Package",
    category: "Content Management",
    price: 2500,
    description: "Simple and efficient solution for static websites",
    features: [
      "Simple management of 2-6 pages",
      "Basic SEO optimization",
      "Mobile responsiveness",
      "Simple contact form"
    ]
  },
  {
    name: "Dynamic Website Package",
    category: "Content Management",
    price: 8500,
    description: "Complete solution for dynamic websites",
    features: [
      "Advanced content management",
      "User roles and permissions",
      "Custom templates and themes",
      "Multilingual support",
      "Third-party service integration"
    ]
  },
  {
    name: "Basic Blog Package",
    category: "Content Management",
    price: 3500,
    description: "Professional blogging platform",
    features: [
      "Post management",
      "Content editor",
      "Comment system",
      "Categories and tags",
      "Author profiles",
      "RSS Feed"
    ]
  },
  {
    name: "Advanced Blog Package",
    category: "Content Management",
    price: 6800,
    description: "Professional blog with advanced features",
    features: [
      "All Basic Blog Package features",
      "Multiple author management",
      "Post scheduling",
      "Custom post types",
      "Advanced SEO tools",
      "Social media integration",
      "Analytics dashboard"
    ]
  },
  {
    name: "Real Estate Website Package",
    category: "Content Management",
    price: 12000,
    description: "Specialized platform for real estate agencies",
    features: [
      "Property listing management",
      "Advanced search and filter options",
      "Agent profiles",
      "Appointment scheduling",
      "Virtual tour integration"
    ]
  },
  // Comunidad y Social
  {
    name: "Forum Package",
    category: "Community & Social",
    price: 7500,
    description: "Discussion and community platform",
    features: [
      "User registration and profiles",
      "Topic and post management",
      "Moderation tools",
      "Private messaging",
      "Reputation system"
    ]
  },
  {
    name: "Social Network Package",
    category: "Community & Social",
    price: 15000,
    description: "Custom social network platform",
    features: [
      "User profiles and connections",
      "Activity feeds",
      "Groups and communities",
      "Photo and video sharing",
      "Event management"
    ]
  },
  {
    name: "Wiki Package",
    category: "Community & Social",
    price: 6500,
    description: "Collaborative knowledge management system",
    features: [
      "Collaborative content creation",
      "Version history and rollback",
      "User contribution tracking",
      "Internal linking",
      "File attachment support"
    ]
  },
  // Comercio Electrónico
  {
    name: "Basic Online Store Package",
    category: "E-commerce",
    price: 9500,
    description: "Basic e-commerce solution",
    features: [
      "Product catalog",
      "Shopping cart",
      "Basic payment gateway integration",
      "Order management",
      "Customer accounts"
    ]
  },
  {
    name: "Advanced E-commerce Package",
    category: "E-commerce",
    price: 18000,
    description: "Complete e-commerce solution",
    features: [
      "All Basic Online Store Package features",
      "Multiple payment gateways",
      "Inventory management",
      "Discount and coupon system",
      "Product reviews and ratings",
      "Abandoned cart recovery"
    ]
  },
  {
    name: "Digital Downloads Store",
    category: "E-commerce",
    price: 12500,
    description: "Specialized platform for digital products",
    features: [
      "Digital product management",
      "Secure file delivery",
      "License key generation",
      "Subscription options"
    ]
  },
  {
    name: "Marketplace Package",
    category: "E-commerce",
    price: 25000,
    description: "Multi-vendor marketplace platform",
    features: [
      "Multi-vendor support",
      "Vendor dashboards",
      "Commission management",
      "Vendor ratings and reviews"
    ]
  },
  {
    name: "Auction Website Package",
    category: "E-commerce",
    price: 28000,
    description: "Online auction platform",
    features: [
      "Bidding system",
      "Time-based auctions",
      "User reputation system",
      "Escrow services"
    ]
  },
  // Gestión Empresarial
  {
    name: "Customer Relationship Management (CRM) Package",
    category: "Business Management",
    price: 15000,
    description: "Comprehensive customer relationship management system",
    features: [
      "Contact management",
      "Lead tracking",
      "Sales pipeline",
      "Email integration",
      "Task management"
    ]
  },
  {
    name: "Enterprise Resource Planning (ERP) Package",
    category: "Business Management",
    price: 35000,
    description: "Complete business management system",
    features: [
      "Accounting and financial management",
      "Human resources management",
      "Inventory and supply chain management",
      "Project management",
      "Business intelligence and reporting"
    ]
  },
  {
    name: "Human Resources Management Package",
    category: "Business Management",
    price: 18000,
    description: "Specialized HR management system",
    features: [
      "Employee database",
      "Time and attendance tracking",
      "Leave management",
      "Performance evaluations",
      "Payroll integration"
    ]
  },
  {
    name: "Project Management Package",
    category: "Business Management",
    price: 12000,
    description: "Complete project management tool",
    features: [
      "Task and subtask management",
      "Gantt charts",
      "Time tracking",
      "File sharing and collaboration",
      "Reports and analysis"
    ]
  },
  {
    name: "Inventory Management Package",
    category: "Business Management",
    price: 14000,
    description: "Inventory control and management system",
    features: [
      "Stock tracking",
      "Purchase order management",
      "Supplier management",
      "Barcode scanning",
      "Low stock alerts"
    ]
  },
  // Atención al Cliente
  {
    name: "Help Desk Package",
    category: "Customer Service", 
    price: 11000,
    description: "Professional customer support system",
    features: [
      "Ticket management system",
      "Knowledge base",
      "FAQ section", 
      "Customer portal",
      "SLA management"
    ]
  },
  {
    name: "Live Chat Package",
    category: "Customer Service",
    price: 7500,
    description: "Real-time chat solution for customer service",
    features: [
      "Real-time chat widget",
      "Chat routing and queuing",
      "Canned responses",
      "File sharing in chat",
      "Chat transcripts and history"
    ]
  },
  {
    name: "Customer Feedback and Survey Package",
    category: "Customer Service",
    price: 6000,
    description: "Customer survey and feedback system",
    features: [
      "Survey creation and management",
      "Multiple question types",
      "Data analysis and reporting",
      "CRM integration"
    ]
  },
  // Educativo
  {
    name: "Learning Management System (LMS) Package",
    category: "Educational",
    price: 16000,
    description: "Complete online learning platform",
    features: [
      "Course creation and management",
      "Student enrollment and progress tracking",
      "Quiz and assignment tools",
      "Discussion forums",
      "Certificate management"
    ]
  },
  {
    name: "School Management System Package",
    category: "Educational",
    price: 22000,
    description: "Comprehensive school management system",
    features: [
      "Student information management",
      "Attendance tracking",
      "Gradebook and report cards",
      "Parent portal",
      "Schedule management"
    ]
  },
  {
    name: "Online Examination System Package",
    category: "Educational",
    price: 9500,
    description: "Specialized online assessment platform",
    features: [
      "Exam creation and scheduling",
      "Multiple question types",
      "Automated grading",
      "Results analysis and reporting",
      "Anti-cheating measures"
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
  // Specialized Solutions
  {
    name: "Appointment Booking Package",
    category: "Specialized Solutions",
    price: 7500,
    description: "Appointment scheduling and management system",
    features: [
      "Online scheduling system",
      "Calendar management",
      "Automated reminders",
      "Payment integration",
      "Staff management"
    ]
  },
  {
    name: "Event Management Package",
    category: "Specialized Solutions",
    price: 12500,
    description: "Complete event management platform",
    features: [
      "Event creation and ticket sales",
      "Attendee management",
      "Check-in system",
      "Sponsorship management",
      "Event analytics"
    ]
  },
  {
    name: "Membership Management Package",
    category: "Specialized Solutions",
    price: 9500,
    description: "Member and subscription management system",
    features: [
      "Member registration and profiles",
      "Subscription management",
      "Exclusive member content",
      "Renewal reminders",
      "Member directory"
    ]
  },
  {
    name: "Classified Ads Package",
    category: "Specialized Solutions",
    price: 11000,
    description: "Online classified ads platform",
    features: [
      "Ad publishing and management",
      "Category and location navigation",
      "User ratings and reviews",
      "Featured listings",
      "Messaging system"
    ]
  },
  {
    name: "Job Board Package",
    category: "Specialized Solutions",
    price: 13500,
    description: "Job portal and candidate management",
    features: [
      "Job posting management",
      "Resume database",
      "Candidate tracking",
      "Employer profiles",
      "Job alerts"
    ]
  },
  {
    name: "Restaurant Management Package",
    category: "Specialized Solutions",
    price: 14500,
    description: "Comprehensive restaurant management system",
    features: [
      "Menu management",
      "Table reservations",
      "Online ordering system",
      "Kitchen order management",
      "Customer feedback system"
    ]
  },
  {
    name: "Church Management Package",
    category: "Specialized Solutions",
    price: 8500,
    description: "Specialized church management system",
    features: [
      "Member database",
      "Event and service planning",
      "Donation tracking",
      "Volunteer management",
      "Small group organization"
    ]
  },
  {
    name: "Library Management System Package",
    category: "Specialized Solutions",
    price: 11500,
    description: "Complete library management system",
    features: [
      "Book catalog",
      "User management",
      "Loan/return system",
      "Fine calculation",
      "Online Public Access Catalog (OPAC)"
    ]
  },
  {
    name: "Medical Practice Management Package",
    category: "Specialized Solutions",
    price: 18500,
    description: "Specialized system for medical practices",
    features: [
      "Patient records management",
      "Appointment scheduling",
      "Insurance billing and claims",
      "Prescription management",
      "Telemedicine integration"
    ]
  },
  // Utilities & Tools
  {
    name: "SEO Tools Package",
    category: "Utilities & Tools",
    price: 7500,
    description: "Complete suite of SEO tools",
    features: [
      "Keyword research",
      "On-page SEO analysis",
      "Backlink monitoring",
      "Site audit tools",
      "Rank tracking"
    ]
  },
  {
    name: "Analytics and Reporting Package",
    category: "Utilities & Tools",
    price: 8500,
    description: "Advanced analytics and reporting system",
    features: [
      "Web traffic analysis",
      "User behavior tracking",
      "Conversion tracking",
      "Custom report generation",
      "Data visualization tools"
    ]
  },
  {
    name: "Form Builder Package",
    category: "Utilities & Tools",
    price: 5500,
    description: "Professional form creation tool",
    features: [
      "Drag and drop form creation",
      "Multiple field types",
      "Conditional logic",
      "Form analytics",
      "System integration"
    ]
  },
  {
    name: "Document Management Package",
    category: "Utilities & Tools",
    price: 9500,
    description: "Complete document management system",
    features: [
      "File storage and organization",
      "Version control",
      "Collaborative editing",
      "Access control and permissions",
      "Full-text search"
    ]
  },
  {
    name: "Backup and Security Package",
    category: "Utilities & Tools",
    price: 11500,
    description: "Comprehensive security and backup system",
    features: [
      "Automated backups",
      "Malware scanning",
      "Firewall protection",
      "Two-factor authentication",
      "SSL certificate management"
    ]
  }
];
