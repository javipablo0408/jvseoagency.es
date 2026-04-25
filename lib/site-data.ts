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

// Posts ordenados por prioridad SEO (mayor volumen de búsqueda primero)
export const blogPosts: BlogPost[] = [
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
        body: "Al comparar presupuestos, comprueba: si incluye diseño propio o usa plantilla, qué CMS o framework usan (y si podrás actualizar el contenido tú mismo), si el SEO técnico está incluido o es un extra, qué garantía y soporte hay post-lanzamiento, y si el precio es cerrado o por horas. Un presupuesto más caro pero con diseño propio, SEO y soporte suele ser más rentable a 12 meses que una opción barata sin esos elementos."
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
        body: "Una app web interna sencilla (panel de gestión, listados, formularios y roles básicos) parte de 5.000€ y puede llegar a 15.000€. Una app con lógica de negocio compleja (flujos de aprobación, integraciones API, módulos de reporting y permisos avanzados) oscila entre 15.000€ y 40.000€. Aplicaciones móviles nativas (iOS + Android) o apps con IA integrada, marketplace o alta concurrencia pueden superar los 50.000€. El mantenimiento anual suele estimarse entre el 15% y el 20% del coste de desarrollo."
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
        body: "Pide que el presupuesto incluya desglose por módulos, estimación en horas de cada fase y descripción del equipo. Una app de 15.000€ desarrollada por un equipo de 3 personas durante 10 semanas (150h × 100€/h = 15.000€) es coherente. Si te ofrecen el mismo alcance por 4.000€, pregunta cuántas horas prevén: los números no sumarán. Verifica también que el presupuesto incluya diseño UX, pruebas (QA) y documentación técnica."
      },
      {
        heading: "¿Cuándo conviene una app a medida frente a un SaaS existente?",
        body: "Una app a medida tiene sentido cuando ningún SaaS del mercado cubre tu proceso específico, cuando necesitas integrar múltiples herramientas que ningún SaaS conecta bien, cuando el volumen de usuarios hace que los planes de SaaS sean más caros que un desarrollo propio, o cuando la operación diferencial de tu negocio se basa en ese proceso y no quieres que sea replicable por competidores usando la misma herramienta. Si ninguno de estos casos aplica, suele ser más eficiente adaptar un SaaS."
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
        body: "No intentes automatizarlo todo a la vez. Usa una matriz de impacto/esfuerzo: las automatizaciones de alto impacto y bajo esfuerzo deben ir primero. Un ejemplo de alta prioridad: si recibes leads por un formulario web y alguien los copia manualmente a un CRM, eso se puede automatizar en horas. Un ejemplo de baja prioridad inicial: automatizar la generación de contratos complejos requiere mucho trabajo de configuración y validación; mejor dejarlo para una segunda fase."
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
        body: "Las automatizaciones con mayor retorno son: cualificación de leads con IA (ahorro de 15 a 30 horas semanales en equipos comerciales), respuesta automática a consultas frecuentes por email o WhatsApp (reduce el tiempo de respuesta de horas a minutos), generación de reportes semanales (elimina entre 3 y 8 horas de trabajo de análisis manual) y seguimiento post-reunión automatizado (mejora la tasa de cierre entre un 15% y un 25% sin esfuerzo adicional del equipo)."
      }
    ]
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
        body: "Para recibir un presupuesto preciso, prepara: una descripción del proceso actual paso a paso, las herramientas que ya usas (CRM, email, ERP), el volumen aproximado de operaciones por semana y tu objetivo medible (reducir X horas, responder en menos de Y minutos). Con esa información, en JVSEO Agency podemos enviarte una propuesta con ROI estimado en menos de 24 horas laborables."
      }
    ]
  },
  {
    slug: "como-convertir-mas-con-tu-landing",
    title: "Web corporativa que vende: estructura para convertir visitas en clientes",
    excerpt: "La mayoría de webs corporativas describen la empresa pero no convierten. Aquí está la estructura que sí funciona.",
    category: "Web",
    readingMinutes: 7,
    datePublished: "2025-11-13",
    content:
      "Una web corporativa no es una presentación de empresa: es una máquina de generar demanda. La diferencia entre una web que convierte y una que no suele estar en la estructura, no en el diseño. Puedes tener el sitio más bonito de tu sector y perder clientes en cada scroll si el mensaje, el orden y las llamadas a la acción no están bien pensadas.",
    sections: [
      {
        heading: "El error más común: hablar de ti en lugar de hablar del cliente",
        body: "La mayoría de webs corporativas empiezan con 'Somos una empresa especializada en...' o 'Llevamos X años ofreciendo...'. El problema es que el visitante llega con una pregunta concreta: ¿puedes resolver mi problema? Si los primeros cinco segundos no responden esa pregunta, el 70% de los visitantes se van. La estructura correcta empieza por el resultado que consigue el cliente, no por quién eres tú. En lugar de 'Somos una consultora de marketing digital', prueba con 'Triplicamos el número de leads cualificados de empresas B2B en 90 días'."
      },
      {
        heading: "La estructura de página que genera más leads",
        body: "La secuencia que mejor funciona para webs corporativas orientadas a captación es: (1) Promesa clara en el hero con resultado concreto y CTA directo. (2) Prueba social inmediata: logos de clientes, métricas o testimonios cortos justo debajo del hero. (3) Explicación del problema que resuelves, en palabras del cliente. (4) Tu solución y cómo funciona, en tres pasos máximo. (5) Casos de éxito con métricas reales. (6) FAQ que elimina objeciones de compra. (7) CTA final con propuesta de valor reforzada. Este orden no es arbitrario: respeta el nivel de confianza que va construyendo el visitante a medida que baja."
      },
      {
        heading: "Copy que vende: cómo escribir cada sección",
        body: "En el hero, combina el resultado específico con el público objetivo: 'Diseñamos webs para agencias de servicios que duplican su tasa de captación de clientes'. En los beneficios, usa verbos de resultado: 'Reduces el tiempo de cualificación de leads un 40%', no 'Ofrecemos soluciones avanzadas de optimización'. En los testimonios, incluye nombre, empresa, sector y un número concreto siempre que sea posible. Los testimonios genéricos del tipo 'Quedamos muy satisfechos con el resultado' no generan confianza; los específicos como 'Pasamos de 3 a 17 leads por semana en el primer mes' sí."
      },
      {
        heading: "Velocidad y rendimiento: por qué también es conversión",
        body: "Cada segundo adicional de carga reduce la tasa de conversión entre un 7% y un 12%. Una web que tarda 4 segundos en cargar pierde entre el 25% y el 40% de los visitantes antes de que vean el contenido. El objetivo real es que cargue en menos de 2 segundos en móvil, que es donde llega más del 60% del tráfico en la mayoría de sectores B2B y prácticamente todo el tráfico en B2C. Para conseguirlo: imágenes en formato WebP optimizadas, fuentes autohosteadas, CSS crítico inline y un CDN adecuado."
      },
      {
        heading: "Las métricas que sí debes seguir (y las que no)",
        body: "El error clásico es obsesionarse con el tráfico y olvidar la conversión. Si tienes 10.000 visitas al mes y 0 leads, el tráfico es inútil. Las métricas que importan son: tasa de conversión del hero (porcentaje de visitantes que hacen scroll), tasa de conversión de formularios (porcentaje de visitantes que envían el formulario), tiempo en página por sección (con Hotjar o Microsoft Clarity) y porcentaje de visitantes que llegan al final de la página. Con estos cuatro datos puedes identificar exactamente dónde se rompe el embudo y qué sección necesita trabajo."
      }
    ]
  },
  {
    slug: "errores-de-ux-que-bajan-tus-leads",
    title: "Ecommerce: 7 errores que te hacen perder ventas cada semana",
    excerpt: "Los 7 patrones de UX que más ventas destruyen en ecommerce, con ejemplos concretos y cómo corregirlos.",
    category: "Web",
    readingMinutes: 9,
    datePublished: "2025-11-13",
    content:
      "La mayoría de tiendas online que no convierten no tienen un problema de tráfico: tienen un problema de experiencia de usuario. Hemos auditado más de treinta ecommerce en España y los mismos siete errores aparecen una y otra vez. La buena noticia es que todos son corregibles sin rediseñar toda la tienda.",
    sections: [
      {
        heading: "Error 1: El producto no se entiende en la ficha",
        body: "La ficha de producto es la página más importante de un ecommerce. Si el visitante no entiende en menos de diez segundos qué es el producto, para quién es, qué resuelve y cuánto cuesta, no compra. Los errores más frecuentes son: título genérico sin beneficio, fotos de baja calidad o sin contexto de uso, descripción técnica sin traducción a ventajas para el cliente y precio enterrado o sin comparativa. Solución: añade un subtítulo de beneficio bajo el nombre del producto, incluye al menos una foto de uso real y estructura la descripción con un párrafo corto de para quién es y qué resuelve antes de las especificaciones."
      },
      {
        heading: "Error 2: El checkout tiene demasiados pasos",
        body: "Cada paso adicional en el checkout reduce la tasa de compra entre un 10% y un 20%. Lo óptimo es un checkout de máximo dos pasos: datos de envío y pago. Si tu tienda tiene tres pasos o más, estás perdiendo ventas. Otra causa frecuente de abandono es el registro obligatorio antes de comprar: el 28% de los usuarios abandona si se les pide que creen una cuenta antes de pagar. Solución: ofrece pago como invitado, reduce el número de campos al mínimo imprescindible y muestra un indicador de progreso para que el usuario sepa cuánto queda."
      },
      {
        heading: "Error 3: No hay confianza suficiente en el momento de pago",
        body: "El 17% de los abandonos de carrito ocurren porque el usuario no confía en la seguridad de la transacción. Los elementos de confianza que más impacto tienen son: sello SSL visible en el checkout, métodos de pago reconocibles (Visa, Mastercard, Bizum, PayPal), política de devoluciones accesible desde la ficha de producto y valoraciones verificadas de clientes reales. Las tiendas que muestran estos elementos en el paso de pago tienen una tasa de conversión entre un 15% y un 30% mayor que las que no los muestran."
      },
      {
        heading: "Error 4: El buscador interno no funciona",
        body: "En ecommerce con catálogos de más de 50 productos, el buscador interno genera entre el 30% y el 40% de las conversiones. Un buscador que devuelve 'sin resultados' para búsquedas válidas o que no maneja sinónimos, plurales y errores ortográficos es un generador de pérdidas. Si un usuario escribe 'camisa manga corta' y tu buscador devuelve cero resultados porque el producto se llama 'camiseta de manga corta', acabas de perder esa venta. Solución mínima: configura un mapa de sinónimos, redirige las búsquedas sin resultado a categorías relacionadas y revisa semanalmente las búsquedas más frecuentes que generan cero resultados."
      },
      {
        heading: "Error 5: Velocidad insuficiente en móvil",
        body: "Más del 65% del tráfico de ecommerce en España llega desde dispositivos móviles, pero las tasas de conversión móvil siguen siendo la mitad que en desktop en la mayoría de tiendas. La diferencia la hace la velocidad. Google establece que el LCP (Largest Contentful Paint) debe estar por debajo de 2,5 segundos para no penalizar la experiencia. Cada segundo adicional reduce la conversión un 7%. Revisa tu LCP con PageSpeed Insights: si supera los 3 segundos en móvil, tienes ahí el mayor bloqueo de conversión de tu tienda."
      },
      {
        heading: "Error 6: No hay urgencia ni escasez en el momento de decisión",
        body: "El 60% de las compras online se producen en la primera visita si hay un elemento de urgencia presente. Sin urgencia, el usuario dice 'ya lo compraré otro día' y no vuelve. Los elementos que funcionan son: contador de stock bajo ('Solo quedan 3 unidades'), fecha límite de entrega ('Pide antes de las 14h para recibir mañana'), oferta con fecha de expiración o precio anterior tachado con precio actual. Ojo: estos elementos solo funcionan si son reales. La urgencia falsa (contadores que se reinician cada vez) destruye la confianza a largo plazo."
      },
      {
        heading: "Error 7: El email de carrito abandonado no existe o llega tarde",
        body: "El 70% de los carritos se abandonan antes del pago. El email de recuperación de carrito abandonado es la táctica con mayor ROI de todo el marketing de ecommerce: un email enviado entre 1 y 3 horas después del abandono tiene una tasa de apertura del 40% y una tasa de conversión media del 10%. Si no tienes ese flujo activo, estás dejando sobre la mesa entre el 5% y el 8% de tus ventas potenciales. La secuencia mínima eficaz es: primer email a la hora con recordatorio simple, segundo email a las 24 horas con elemento de urgencia o descuento, tercer email a las 72 horas con testimonio de cliente y último recordatorio."
      }
    ]
  },
  {
    slug: "web-vs-app-cuando-elegir-cada-una",
    title: "Automatización IA o app a medida: qué conviene implementar primero",
    excerpt: "Cómo decidir entre automatizaciones IA y app a medida según tu cuello de botella, tu equipo y tu objetivo.",
    category: "Producto",
    readingMinutes: 8,
    datePublished: "2025-11-13",
    content:
      "Esta es una de las preguntas más frecuentes que nos hacen los fundadores y directores de operaciones que llegan a nuestra agencia: ¿por dónde empiezo, por automatizar con IA o por construir una app? La respuesta correcta depende del tipo de problema que tienes, no de lo que esté de moda.",
    sections: [
      {
        heading: "Cuándo empezar por automatizaciones IA",
        body: "Las automatizaciones IA son la primera opción cuando el problema es de tiempo y repetición: tu equipo hace las mismas tareas manualmente una y otra vez, y esas tareas siguen siempre el mismo patrón. Señales claras de que debes automatizar primero: copias datos de un sistema a otro a mano, respondes las mismas preguntas por email o WhatsApp diariamente, cualificas leads uno por uno, generas informes que siempre tienen la misma estructura, o envías seguimientos manuales después de cada reunión. En estos casos, una automatización bien diseñada puede recuperar entre 10 y 40 horas semanales sin necesidad de construir nada desde cero."
      },
      {
        heading: "Cuándo empezar por una app a medida",
        body: "Una app a medida tiene sentido cuando el problema no es de tiempo sino de control, trazabilidad o procesos que tienen demasiadas excepciones para automatizarse limpiamente. Señales de que necesitas una app: varios perfiles de usuario necesitan ver información diferente y actuar sobre ella (por roles), tienes procesos que requieren aprobaciones, validaciones o flujos de trabajo ramificados, necesitas un historial completo y auditable de lo que ocurre en cada operación, o tu equipo trabaja con información dispersa en múltiples herramientas sin un hub centralizado. En esos casos, una app a medida da control real que ninguna automatización puede replicar."
      },
      {
        heading: "La trampa más común: confundir síntomas con causas",
        body: "El error más frecuente es tomar la decisión basándose en el síntoma visible en lugar de la causa raíz. Un ejemplo real: una empresa de servicios llegó con el problema de que 'el equipo tardaba demasiado en preparar propuestas'. La solución obvia parecía ser una app para gestionar propuestas. Pero al analizar el proceso, el cuello de botella real era que cada propuesta requería recopilar datos de tres herramientas distintas manualmente. La solución correcta fue una automatización que centralizaba esos datos en un documento estructurado que el comercial solo tenía que revisar y enviar. Resultado: el tiempo de preparación pasó de 45 minutos a 8 minutos sin construir ninguna app."
      },
      {
        heading: "El modelo que más ROI genera: automatización primero, app después",
        body: "En la práctica, el patrón que mejor funciona para la mayoría de empresas en crecimiento es: primero automatiza los procesos repetitivos de alto volumen (captación, respuesta, seguimiento, reporting), luego construye la app cuando el volumen o la complejidad del proceso ya superan lo que la automatización puede gestionar limpiamente. Empezar por la app cuando el proceso todavía no está estabilizado es uno de los errores más caros que cometen las empresas: construyes algo complejo para un proceso que cambia cada mes, y acabas con una app desactualizada y costosa de mantener."
      },
      {
        heading: "Cómo decidir en menos de 30 minutos",
        body: "Para tomar la decisión rápido, responde estas tres preguntas: (1) ¿El proceso tiene siempre la misma estructura o varía mucho según el caso? Si varía poco, automatiza. Si varía mucho, app. (2) ¿Necesitas que distintos perfiles de usuario vean y actúen sobre información diferente? Si sí, app. Si no, automatiza. (3) ¿El problema principal es tiempo perdido en tareas repetitivas o falta de control y trazabilidad? Tiempo repetitivo, automatiza. Falta de control, app. Si las respuestas apuntan en direcciones distintas, el orden correcto es siempre: automatiza primero, construye la app cuando la automatización ya no alcance."
      }
    ]
  },
];
