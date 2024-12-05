export interface PricingPlan {
  name: string;
  description: string;
  price: number;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Diseño Web Básico",
    description: "Perfecto para pequeños negocios que buscan establecer su presencia en línea",
    price: 8500,
    features: [
      "Diseño web responsive",
      "Hasta 5 secciones",
      "Formulario de contacto",
      "Optimización SEO básica",
      "Integración con redes sociales",
      "Hosting por 1 año"
    ]
  },
  {
    name: "Diseño Web Pro",
    description: "Ideal para negocios en crecimiento que necesitan más funcionalidades",
    price: 15000,
    features: [
      "Todo lo del plan Básico",
      "Hasta 10 secciones",
      "Blog integrado",
      "Galería de imágenes",
      "Optimización SEO avanzada",
      "Panel de administración",
      "Soporte prioritario"
    ]
  },
  {
    name: "Diseño Web Premium",
    description: "Solución completa para empresas que requieren máximo rendimiento",
    price: 25000,
    features: [
      "Todo lo del plan Pro",
      "Secciones ilimitadas",
      "E-commerce integrado",
      "Sistema de reservas",
      "Análisis de tráfico",
      "Optimización de velocidad",
      "Mantenimiento mensual"
    ]
  }
];
