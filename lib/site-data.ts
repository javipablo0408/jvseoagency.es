export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  challenge: string;
  solution: string;
  result: string;
  metric: string;
  metricLabel: string;
  category: "Automatización IA" | "Web" | "Aplicación";
  accent: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Automatización" | "Web" | "Producto";
  readingMinutes: number;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-b2b-captacion",
    title: "SaaS B2B: automatizaciones IA para ventas y soporte",
    sector: "SaaS B2B",
    category: "Automatización IA",
    challenge: "El equipo comercial perdía horas cualificando leads y respondiendo tareas repetitivas.",
    solution:
      "Implementamos flujos IA con n8n, scoring automático y respuestas asistidas conectadas al CRM.",
    result: "−58 % de tiempo operativo en preventa y +31 % de reuniones cualificadas en 8 semanas.",
    metric: "−58 %",
    metricLabel: "Tiempo operativo",
    accent: "linear-gradient(140deg, #0c2e58 0%, #1956b6 50%, #29c6ff 100%)"
  },
  {
    slug: "ecommerce-rediseno-ux",
    title: "eCommerce: rediseño completo para vender más",
    sector: "eCommerce moda",
    category: "Web",
    challenge: "Había tráfico, pero la conversión era baja por un catálogo confuso y fricción en el checkout.",
    solution:
      "Rediseñamos home, fichas de producto, carrito y checkout con foco en conversión y velocidad.",
    result: "+29 % en tasa de compra, −26 % en abandono de checkout y +18 % en ticket medio.",
    metric: "+29 %",
    metricLabel: "Conversión",
    accent: "linear-gradient(140deg, #0a1d3d 0%, #4f23a8 50%, #c47bff 100%)"
  },
  {
    slug: "app-operaciones-internas",
    title: "Servicios: app interna para operar sin cuellos de botella",
    sector: "Empresa de servicios",
    category: "Aplicación",
    challenge: "Procesos críticos dispersos en hojas de cálculo y herramientas sin integrar.",
    solution:
      "Construimos una app por roles con paneles de control, automatizaciones y trazabilidad completa.",
    result: "−41 % de tiempo operativo, −33 % de errores y mayor capacidad de entrega con el mismo equipo.",
    metric: "−41 %",
    metricLabel: "Tiempo operativo",
    accent: "linear-gradient(140deg, #08213a 0%, #074f6d 55%, #18b3a4 100%)"
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "como-convertir-mas-con-tu-landing",
    title: "Web corporativa que vende: estructura para convertir visitas en clientes",
    excerpt: "Modelo de estructura y copy para webs corporativas orientadas a negocio.",
    category: "Web",
    readingMinutes: 6,
    content:
      "Una web corporativa no debe ser solo una presentación. Tiene que captar demanda, explicar valor y empujar a la acción. Empieza por una promesa clara, sigue con prueba social y cierra con CTA específicas según el nivel de intención del visitante."
  },
  {
    slug: "errores-de-ux-que-bajan-tus-leads",
    title: "Ecommerce: 7 errores que te hacen perder ventas cada semana",
    excerpt: "Patrones de UX y de negocio que frenan la conversión en tiendas online.",
    category: "Web",
    readingMinutes: 8,
    content:
      "Los bloqueos más caros en un ecommerce suelen estar en la ficha de producto, el checkout y la confianza. Corrige el copy de valor, la claridad de precio, los tiempos de entrega y la fricción de pago antes de invertir más en tráfico."
  },
  {
    slug: "web-vs-app-cuando-elegir-cada-una",
    title: "Automatización IA o app a medida: qué conviene implementar primero",
    excerpt: "Guía para decidir según tu cuello de botella, tu equipo y tu objetivo de crecimiento.",
    category: "Producto",
    readingMinutes: 7,
    content:
      "Si repites tareas y dependes de personas para todo, empieza por automatizaciones IA. Si necesitas control, trazabilidad y procesos complejos, prioriza una app a medida. En la mayoría de negocios, el mejor resultado llega combinando ambas."
  }
];
