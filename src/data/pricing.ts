export interface PricingPlan {
  name: string;
  description: string;
  price: number;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Paquete Básico",
    description: "Diseño web esencial y profesional",
    price: 6500,
    features: [
      "Diseño web moderno y limpio",
      "Paleta de colores corporativa",
      "Tipografía profesional",
      "Diseño adaptable a dispositivos móviles",
      "Iconografía básica",
      "Layout simple y efectivo"
    ]
  },
  {
    name: "Paquete Profesional",
    description: "Diseño web avanzado y distintivo",
    price: 12500,
    features: [
      "Diseño web premium personalizado",
      "Identidad visual única",
      "Animaciones y transiciones elegantes",
      "Diseño responsivo avanzado",
      "Sistema de diseño coherente",
      "Elementos visuales personalizados"
    ]
  },
  {
    name: "Paquete Personalizado",
    description: "Diseño web exclusivo de alta gama",
    price: 25000,
    features: [
      "Diseño web de lujo totalmente único",
      "Branding completo integrado",
      "Micro-interacciones personalizadas",
      "Diseño UX/UI premium",
      "Ilustraciones y gráficos exclusivos",
      "Experiencia visual inmersiva"
    ]
  }
];
