export interface PricingPlan {
  name: string;
  description: string;
  price: number;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Paquete Básico",
    description: "Ideal para emprendedores y pequeños negocios",
    price: 6500,
    features: [
      "Diseño web estático",
      "Diseño adaptable a dispositivos móviles",
      "Formulario de contacto básico",
      "Enlaces a redes sociales",
      "Botones para WhatsApp/Messenger",
      "Una sola landing page o sitio informativo simple"
    ]
  },
  {
    name: "Paquete Profesional",
    description: "Ideal para empresas establecidas",
    price: 12500,
    features: [
      "Diseño web personalizado",
      "Optimización de velocidad de carga",
      "Diseño responsivo avanzado",
      "Múltiples secciones y páginas",
      "Integración completa con redes sociales",
      "Formularios personalizados"
    ]
  },
  {
    name: "Paquete Personalizado",
    description: "Ideal para empresas que requieren diferenciación",
    price: 25000,
    features: [
      "Diseño premium totalmente personalizado",
      "Optimización SEO on-page",
      "Alta puntuación en Google Page Speed",
      "Copywriting profesional",
      "Diseño UX/UI avanzado",
      "Múltiples páginas con diseños únicos por sección"
    ]
  }
];
