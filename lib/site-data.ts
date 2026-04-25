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

export type BlogSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  sections?: BlogSection[];
  category: "Automatización" | "Web" | "Producto";
  readingMinutes: number;
  datePublished?: string;
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
    datePublished: "2025-11-13",
    content:
      "Una web corporativa no debe ser solo una presentación. Tiene que captar demanda, explicar valor y empujar a la acción. Empieza por una promesa clara, sigue con prueba social y cierra con CTA específicas según el nivel de intención del visitante."
  },
  {
    slug: "errores-de-ux-que-bajan-tus-leads",
    title: "Ecommerce: 7 errores que te hacen perder ventas cada semana",
    excerpt: "Patrones de UX y de negocio que frenan la conversión en tiendas online.",
    category: "Web",
    readingMinutes: 8,
    datePublished: "2025-11-13",
    content:
      "Los bloqueos más caros en un ecommerce suelen estar en la ficha de producto, el checkout y la confianza. Corrige el copy de valor, la claridad de precio, los tiempos de entrega y la fricción de pago antes de invertir más en tráfico."
  },
  {
    slug: "web-vs-app-cuando-elegir-cada-una",
    title: "Automatización IA o app a medida: qué conviene implementar primero",
    excerpt: "Guía para decidir según tu cuello de botella, tu equipo y tu objetivo de crecimiento.",
    category: "Producto",
    readingMinutes: 7,
    datePublished: "2025-11-13",
    content:
      "Si repites tareas y dependes de personas para todo, empieza por automatizaciones IA. Si necesitas control, trazabilidad y procesos complejos, prioriza una app a medida. En la mayoría de negocios, el mejor resultado llega combinando ambas."
  },
  {
    slug: "cuanto-cuesta-automatizar-procesos-ia",
    title: "Cuánto cuesta automatizar procesos con IA en España (2026)",
    excerpt: "Guía de precios reales para automatizaciones IA en empresas españolas: rangos, factores y ROI esperado.",
    category: "Automatización",
    readingMinutes: 8,
    datePublished: "2026-04-25",
    content:
      "Automatizar procesos con inteligencia artificial en España tiene un coste muy variable. No existe un precio único: depende de la complejidad del flujo, las integraciones necesarias y si usas herramientas como n8n, Make o desarrollos propios. En esta guía encontrarás rangos reales basados en proyectos que hemos ejecutado para empresas españolas.",
    sections: [
      {
        heading: "Rangos de precio según tipo de automatización",
        body: "Una automatización básica —captura de leads desde formulario web, envío de notificación y registro en hoja de cálculo— cuesta entre 500€ y 1.200€. Las automatizaciones intermedias, como flujos de cualificación de leads con IA, respuestas automáticas por email o WhatsApp y actualización de CRM, oscilan entre 2.000€ y 6.000€. Los sistemas complejos con múltiples agentes IA, integraciones con ERP, lógica de decisión avanzada y mantenimiento mensual pueden superar los 10.000€."
      },
      {
        heading: "Factores que determinan el precio final",
        body: "El número de integraciones es el principal driver de coste: cada API nueva añade tiempo de desarrollo y pruebas. La complejidad de la lógica de negocio —reglas de enrutamiento, excepciones, validaciones— también incrementa el precio. El modelo de IA elegido (GPT-4o, Claude, modelos locales) afecta al coste operativo mensual. Por último, si necesitas hosting propio (n8n self-hosted) frente a una solución gestionada, hay un coste inicial de infraestructura pero menor coste recurrente."
      },
      {
        heading: "¿Cuándo se recupera la inversión?",
        body: "Para empresas de servicios con equipos de 5 a 20 personas, el ROI medio de una automatización de ventas o soporte se alcanza entre 3 y 6 meses. El cálculo es directo: si tu equipo dedica 20 horas semanales a tareas que se pueden automatizar y el coste hora es de 25€, son 500€ semanales o 2.000€ al mes en trabajo que desaparece. Una automatización de 3.000€ se amortiza en mes y medio."
      },
      {
        heading: "¿Qué incluye el presupuesto de automatización IA?",
        body: "Un buen presupuesto debe incluir: análisis de procesos y mapeo de flujos, diseño y desarrollo en n8n o similar, configuración de modelos de IA, pruebas con datos reales de tu empresa, documentación en español y un periodo de soporte post-entrega de al menos 30 días. Desconfía de presupuestos que no incluyan fase de análisis: los flujos sin diagnóstico previo suelen requerir retrabajos costosos."
      },
      {
        heading: "Cómo pedir presupuesto de automatización sin perder tiempo",
        body: "Para recibir un presupuesto preciso, prepara: una descripción del proceso actual (paso a paso), las herramientas que ya usas (CRM, email, ERP), el volumen aproximado de operaciones por semana y tu objetivo medible (reducir X horas, responder en menos de Y minutos). Con esa información, en JVSEO Agency podemos enviarte una propuesta con ROI estimado en menos de 24 horas laborables."
      }
    ]
  },
  {
    slug: "cuanto-cuesta-web-corporativa-madrid",
    title: "Cuánto cuesta una web corporativa en Madrid: precios reales 2026",
    excerpt: "Rangos de precio actualizados para webs corporativas en Madrid, con factores clave y qué debe incluir el presupuesto.",
    category: "Web",
    readingMinutes: 7,
    datePublished: "2026-04-25",
    content:
      "El precio de una web corporativa en Madrid varía enormemente según la agencia, el stack tecnológico y el alcance del proyecto. En este artículo encontrarás rangos reales basados en proyectos ejecutados en Madrid y toda España durante 2024 y 2025, con detalle de qué está incluido en cada rango.",
    sections: [
      {
        heading: "Precios de webs corporativas en Madrid por tipología",
        body: "Una web corporativa básica en Madrid —5 a 8 páginas, diseño a medida, formulario de contacto y SEO técnico— cuesta entre 1.500€ y 3.500€. Una web corporativa completa con blog, casos de éxito, integración con CRM y animaciones personalizadas está entre 3.500€ y 7.000€. Para proyectos con requisitos avanzados (multiidioma, área privada, integración con ERP o sistemas de terceros), el rango habitual es de 7.000€ a 15.000€."
      },
      {
        heading: "Qué incluye una web corporativa bien hecha",
        body: "Un proyecto serio debe incluir: estrategia de contenidos y arquitectura de información, diseño UI personalizado (no plantillas), desarrollo con stack moderno (Next.js o WordPress optimizado), SEO técnico completo (meta tags, schema markup, sitemap, Core Web Vitals), formulario con validación y anti-spam, adaptación móvil y tablet, y entrega con documentación. Si el presupuesto no incluye alguno de estos puntos, hay que saber exactamente qué no está cubierto."
      },
      {
        heading: "Factores que suben el precio",
        body: "Los principales factores que incrementan el coste son: el número de páginas e idiomas, la complejidad del diseño (animaciones, efectos de scroll, microinteracciones), las integraciones con terceros (HubSpot, Salesforce, pasarelas de pago), el contenido (si incluye copywriting y fotografía profesional) y el mantenimiento posterior. En Madrid, el coste/hora de una agencia de nivel medio oscila entre 60€ y 90€/h, y el de agencias premium entre 90€ y 150€/h."
      },
      {
        heading: "¿Cuánto tiempo tarda una web corporativa?",
        body: "Un proyecto bien ejecutado tarda entre 4 y 8 semanas. La fase de diseño suele ser la más larga (2-3 semanas) porque requiere feedback y aprobación del cliente. El desarrollo sobre diseño aprobado tarda 1-3 semanas según complejidad. Las agencias que prometen webs en menos de 2 semanas suelen usar plantillas con personalización superficial, lo que limita el rendimiento SEO y la diferenciación visual."
      },
      {
        heading: "Cómo comparar presupuestos de webs en Madrid",
        body: "Al comparar presupuestos, comprueba: si incluye diseño propio o usa plantilla, qué CMS o framework usan (y si podrás actualizar el contenido tú mismo), si el SEO técnico está incluido o es un extra, qué garantía y soporte hay post-lanzamiento, y si el precio es cerrado o por horas (con capped budget). Un presupuesto más caro pero con diseño propio, SEO y soporte suele ser más rentable a 12 meses que una opción barata sin esos elementos."
      }
    ]
  },
  {
    slug: "cuanto-cuesta-app-a-medida-espana",
    title: "Cuánto cuesta una app a medida en España: rangos reales 2026",
    excerpt: "Guía de precios actualizada para el desarrollo de aplicaciones a medida en España, con factores de coste y cómo pedir presupuesto.",
    category: "Producto",
    readingMinutes: 9,
    datePublished: "2026-04-25",
    content:
      "El desarrollo de una app a medida en España es una de las inversiones tecnológicas más variables en presupuesto. Desde 5.000€ hasta 150.000€ o más, el rango es amplísimo. Esta guía te explica qué determina el precio, qué rangos son realistas según el tipo de aplicación y cómo evaluar si el presupuesto que recibes es coherente.",
    sections: [
      {
        heading: "Rangos de precio por tipo de app a medida",
        body: "Una app web interna sencilla (panel de gestión, listados, formularios y roles básicos) parte de 5.000€ y puede llegar a 15.000€. Una app con lógica de negocio compleja (flujos de aprobación, integraciones API, módulos de reporting y permisos avanzados) oscila entre 15.000€ y 40.000€. Aplicaciones móviles nativas (iOS + Android) o apps con IA integrada, marketplace o alta concurrencia pueden superar los 50.000€. En todos los casos, el mantenimiento anual suele estimarse entre el 15% y el 20% del coste de desarrollo."
      },
      {
        heading: "Qué determina el precio de una app a medida",
        body: "Los tres factores principales son la complejidad funcional (número de módulos, flujos y casos de uso), las integraciones externas (ERP, pasarelas de pago, APIs de terceros, servicios de IA) y el equipo necesario (un solo desarrollador full-stack frente a equipo con diseñador, backend, frontend y QA). También influye si se desarrolla como app web progresiva (PWA), app móvil nativa o híbrida: las nativas son más caras pero ofrecen mejor rendimiento y experiencia de usuario."
      },
      {
        heading: "¿Cuánto tarda el desarrollo de una app a medida?",
        body: "Un panel de administración o app interna básica puede estar en producción en 6 a 10 semanas. Una app con múltiples módulos y roles tarda entre 3 y 6 meses. Aplicaciones complejas con marketplace, IA o integraciones profundas requieren de 6 a 12 meses para una versión 1.0 sólida. Los proyectos que prometen entregar en menos de 4 semanas algo complejo suelen hacerlo a base de deuda técnica que pagas después en mantenimiento y bugs."
      },
      {
        heading: "Cómo saber si el presupuesto es realista",
        body: "Pide que el presupuesto incluya desglose por módulos, estimación en horas de cada fase y descripción del equipo que trabajará en el proyecto. Una app de 15.000€ desarrollada por un equipo de 3 personas durante 10 semanas (150h × 100€/h = 15.000€) es coherente. Si te ofrecen el mismo alcance por 4.000€, pregunta cuántas horas prevén y a qué tarifa: los números no sumarán. También verifica que el presupuesto incluya diseño UX, pruebas (QA) y documentación técnica, no solo desarrollo."
      },
      {
        heading: "¿Cuándo conviene una app a medida frente a un SaaS existente?",
        body: "Una app a medida tiene sentido cuando ningún SaaS del mercado cubre tu proceso específico, cuando necesitas integrar múltiples herramientas que ningún SaaS conecta bien, cuando el volumen de usuarios o datos hace que los planes de SaaS sean más caros que un desarrollo propio, o cuando la operación diferencial de tu negocio se basa en ese proceso y no quieres que sea replicable por competidores usando la misma herramienta. Si ninguno de estos casos aplica, suele ser más eficiente adaptar un SaaS."
      }
    ]
  },
  {
    slug: "como-automatizar-empresa-con-ia",
    title: "Cómo automatizar tu empresa con IA: guía práctica paso a paso",
    excerpt: "Guía para implementar automatizaciones con inteligencia artificial en tu empresa, sin conocimientos técnicos previos.",
    category: "Automatización",
    readingMinutes: 10,
    datePublished: "2026-04-25",
    content:
      "Automatizar tu empresa con inteligencia artificial no requiere que seas técnico ni que tengas un equipo de desarrollo propio. Requiere identificar qué procesos consumen más tiempo, qué herramientas ya usas y qué resultado concreto quieres conseguir. Esta guía te explica cómo hacerlo en cuatro pasos con ejemplos reales aplicables desde esta semana.",
    sections: [
      {
        heading: "Paso 1: Identifica los procesos que más tiempo consumen",
        body: "El primer paso no es técnico: es operativo. Haz que cada persona del equipo anote durante una semana cuánto tiempo dedica a cada tarea repetitiva. Las más automatizables suelen ser: responder siempre las mismas preguntas por email o WhatsApp, mover datos de un sistema a otro, generar informes periódicos, cualificar leads manualmente, enviar recordatorios o seguimientos, y revisar o resumir documentos. Si una tarea se repite más de 10 veces a la semana y sigue siempre el mismo patrón, es candidata a automatizarse."
      },
      {
        heading: "Paso 2: Prioriza según impacto y facilidad",
        body: "No intentes automatizarlo todo a la vez. Usa una matriz de impacto/esfuerzo: las automatizaciones de alto impacto y bajo esfuerzo deben ir primero. Un ejemplo de alta prioridad: si recibes leads por un formulario web y alguien los copia manualmente a un CRM, eso se puede automatizar en horas y el impacto es inmediato. Un ejemplo de baja prioridad inicial: automatizar la generación de contratos complejos requiere mucho trabajo de configuración y validación; mejor dejarlo para una segunda fase."
      },
      {
        heading: "Paso 3: Elige las herramientas adecuadas",
        body: "Para la mayoría de automatizaciones empresariales, n8n es la herramienta más potente y flexible del mercado. Conecta más de 400 aplicaciones, permite lógica condicional avanzada e integra modelos de IA (OpenAI, Claude, modelos locales) de forma nativa. Alternativas como Make o Zapier son más fáciles de configurar pero tienen límites en la lógica de negocio y son más caras a escala. Para procesos de atención al cliente con IA conversacional, combinar n8n con un modelo de lenguaje entrenado con tu documentación es hoy el estándar más efectivo."
      },
      {
        heading: "Paso 4: Implementa, mide y expande",
        body: "Empieza por una sola automatización, mídela durante 2 a 4 semanas y calcula el tiempo ahorrado. Una vez validada, replica el enfoque en el siguiente proceso. El error más común es querer construir el sistema completo desde el principio: la complejidad se multiplica y es difícil detectar qué funciona. El mejor sistema de automatización es el que se construye en capas: una automatización sólida que funciona, y luego otra que se apoya en la anterior."
      },
      {
        heading: "Qué automatizaciones tienen mayor ROI en empresas de servicios",
        body: "Según nuestra experiencia con empresas de servicios en España, las automatizaciones con mayor retorno son: cualificación de leads con IA (ahorro de 15 a 30 horas semanales en equipos comerciales), respuesta automática a consultas frecuentes por email o WhatsApp (reduce el tiempo de respuesta de horas a minutos), generación de reportes semanales (elimina entre 3 y 8 horas de trabajo de análisis manual) y seguimiento post-reunión automatizado (mejora la tasa de cierre entre un 15% y un 25% sin esfuerzo adicional del equipo)."
      }
    ]
  }
];
