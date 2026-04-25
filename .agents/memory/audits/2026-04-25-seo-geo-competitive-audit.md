# Auditoría SEO + GEO + Competidores · jvseoagency

**Fecha**: 2026-04-25
**Web auditada**: `localhost:4003` (v1 productiva, dominio destino `jvseoagency.es`)
**Skill stack**: `aaron-he-zhu/seo-geo-claude-skills` (competitor-analysis, on-page-seo-auditor, technical-seo-checker, geo-content-optimizer)
**Status**: DONE_WITH_CONCERNS — fixes técnicos críticos pendientes antes de lanzar

---

## 1. Resumen ejecutivo

| Métrica | jvseoagency (local v1) | Mejor competidor | Brecha |
|---|---|---|---|
| Title tags optimizados | 6/6 (49-64 chars) ✅ | 5/5 | Igualado |
| H1 únicos por página | 6/6 ✅ | 5/5 | Igualado |
| Meta description (150-160) | 0/6 (92-131) ⚠️ | DevTech (191) | Cortas |
| **Canonical tags** | 0/6 ❌ | 4/5 | **Crítico** |
| **Schema.org JSON-LD** | 0/6 ❌ | 5/5 (1-4 schemas) | **Crítico** |
| **Imágenes con alt** | 0 imágenes ❌ | Witrey 23, Navel 25 | **Crítico** |
| Word count (home) | 893 | Witrey 1521 | Aceptable |
| Open Graph completo | ✅ | ✅ | Igualado |
| **GEO/AI citations** | 0 (no aparece) ❌ | AI Hispania, Onabitz, Witrey, Navel todos citados | **Crítico** |
| Dominio en sitemap | `.com` (incorrecto) ❌ | — | **Crítico** |

**Diagnóstico**: la web técnicamente está bien construida (Next.js, performance, semántica). Pero **no es indexable ni citable como debería** por: falta de schema, sin canonical, sin imágenes, dominio inconsistente y cero presencia en respuestas de IA. La buena noticia: son fixes de pocas horas con impacto altísimo.

**Top 3 acciones inmediatas (próximas 48h)**:

1. Añadir Schema.org `Organization` + `LocalBusiness` (Madrid) + `BreadcrumbList` + `FAQPage` global.
2. Generar canonical + corregir dominio `jvseoagency.com` → `jvseoagency.es` en sitemap, layout y JSON-LD.
3. Añadir contenido visual: capturas de proyectos, mockups, fotos del equipo (con alt descriptivo).

---

## 2. Competidores analizados

| # | Competidor | Categoría | Posicionamiento clave |
|---|---|---|---|
| 1 | **AI Hispania** (`aihispania.com`) | IA · Madrid | "Empleados digitales", -40% costes en 6 meses |
| 2 | **Navel Digital** (`naveldigital.com`) | IA · Madrid | "Sin humo, sin PowerPoints", soluciones por industria |
| 3 | **Onabitz** (`onabitz.com`) | Web · Madrid | React/Angular/Node, integraciones ERP/CRM |
| 4 | **Witrey** (`witrey.com`) | Web · 19 años | Roche, Bridgestone, Santillana (autoridad enterprise) |
| 5 | **DevTech** (`devtech.es`) | Web + Apps · Madrid | Joven, 3 pasos: análisis, propuesta, implementación |

**Otros referentes detectados en SERPs (no competidores directos pero ganan tráfico)**:
- `desarrolloweb.madrid` — domina #1, #2, #3 para "desarrollo web Madrid presupuesto" con contenido SEO
- `upliora.es` — gana "automatización IA precios" con guía 2026
- `automatizaciondeprocesos.ai/madrid/` — ranking por subdominio + slug
- `paginaswebenmadrid.es`, `adrianpozo.es` — agencias con SEO de blog

---

## 3. On-page comparativo (datos reales del crawl)

### 3.1 Métricas

| Sitio | Title | Meta | H1 | H2 | H3 | Imgs | Schema | Canonical | Words |
|---|---|---|---|---|---|---|---|---|---|
| **jvseoagency local /** | 49 | 131 | 1 | 10 | 9 | 0 | 0 | ❌ | 893 |
| AI Hispania | 65 | 134 | 1 | 8 | 19 | 13 | 2 | ✅ | 1313 |
| Onabitz | 59 | 138 | 1 | 5 | 0 | 4 | 3 | ✅ | 483 |
| Navel Digital | 67 | 170 | 1 | 7 | 4 | 25 | 4 | ✅ | 497 |
| Witrey | 52 | 132 | 1 | 17 | 25 | 23 | 1 | ✅ | 1521 |
| DevTech | 53 | 191 | 1 | 2 | 4 | 2 | 2 | ❌ | 339 |

### 3.2 Lecturas clave

✅ **Donde ya ganamos**:
- Estructura H1/H2/H3 más rica (10 H2 + 9 H3 en home vs Onabitz 5/0 o DevTech 2/4).
- Word count competitivo (893 home, 1194 servicios, 1299 apps) — mejor que Onabitz, Navel y DevTech.
- Title tags y meta dentro de rangos óptimos.
- HTML semántico, lang="es", viewport, Open Graph completo.

❌ **Donde perdemos vs todos los competidores**:
- **Schema.org**: 4/5 competidores tienen JSON-LD. Witrey, AI Hispania, Onabitz, Navel y DevTech usan `Organization`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`. Nosotros 0.
- **Canonical**: 4/5 competidores. Nosotros 0.
- **Contenido visual**: Witrey 23 imgs, Navel 25 imgs, AI Hispania 13. Nosotros 0. Esto mata Image Search y reduce tiempo en página.

### 3.3 Estructura de H2 que ganan (lo que copiar adaptando)

| Competidor | Patrón H2 ganador |
|---|---|
| AI Hispania | "El coste invisible de…" / "Más que herramientas, implementamos…" / "¿Por qué las empresas líderes de Madrid eligen…?" / FAQ |
| Navel Digital | "Sin humo. Sin PowerPoints. Resultados." / soluciones por sector / "¿En qué sector estás?" |
| Witrey | Casos por marca como H2 (Roche, Bridgestone, Santillana, Bodegas Palacios) |
| Onabitz | "Por qué [nombre] es el partner ideal en Madrid" / FAQ |

**Insight**: todos los competidores usan **objeción + ciudad + sector + FAQ** en sus H2. Nosotros tenemos buen H2 storytelling pero no incluye ni "Madrid" ni FAQs ricas en H2.

---

## 4. Análisis GEO (Generative Engine Optimization)

Verifiqué presencia en respuestas de IA usando dos queries reales:

### Query: "agencia desarrollo web Madrid empresas"
| Sitio | Citado en respuesta IA | Detalle |
|---|---|---|
| Witrey | ✅ | "19 años de experiencia, Roche, Bridgestone, Santillana" |
| Onabitz | ✅ | "React, Angular, Node.js, Python, integran ERP y CRM" |
| DevTech | ✅ | "tres pasos: análisis integral, propuesta a medida" |
| Synkross | ✅ | "TypeScript, React, Next.js, Node.js" |
| **jvseoagency** | ❌ | No mencionado |

### Query: "agencia automatizacion IA Madrid empresas"
| Sitio | Citado en respuesta IA | Detalle |
|---|---|---|
| AI Hispania | ✅ | "reducir costes administrativos hasta un 40% en los primeros 6 meses" |
| Rakaty | ✅ | "recuperar entre 15 y 40 horas reales en los primeros 30 días" |
| Navel Digital | ✅ | "implementación rápida (2-8 semanas), e-commerce, legal, logística" |
| **jvseoagency** | ❌ | No mencionado |

### Patrones GEO ganadores observados

Las respuestas de IA citan a quien:
1. **Da números concretos** ("-40%", "15-40 horas", "2-8 semanas") → tenemos el dato pero solo en cards visuales, no como texto plano cita-friendly.
2. **Menciona sectores específicos** ("e-commerce, legal, hostelería, salud, inmobiliaria") → nosotros mencionamos "negocios online" genérico.
3. **Da experiencia/años** ("19 años", "10 años") → no tenemos year-of-founding visible.
4. **Lista marcas/clientes reales** (Roche, Bridgestone) → tenemos casos pero anonimizados ("SaaS B2B", "eCommerce moda").

---

## 5. Análisis de keywords + content gap

### 5.1 Keywords donde compiten ellos pero no tú

| Cluster keyword | Top ranker | ¿Tienes página? |
|---|---|---|
| "agencia desarrollo web Madrid empresas" | Witrey, Onabitz | ⚠️ Solo H1 en /servicios/diseno-web sin "Madrid" ni "empresas" |
| "agencia IA Madrid" | AI Hispania, Navel | ⚠️ Solo H1 en /servicios/desarrollo-apps sin "Madrid" |
| "automatización procesos IA Madrid" | aihispania, automatizaciondeprocesos.ai | ❌ No hay landing dedicada |
| "desarrollo web a medida Madrid presupuesto" | desarrolloweb.madrid | ❌ No hay artículo de blog |
| "cuánto cuesta una página web Madrid 2026" | desarrolloweb.madrid, upliora | ❌ No hay artículo |
| "cuánto cuesta implementar IA empresa" | upliora.es | ❌ No hay artículo |
| "automatizar reservas / facturación / CRM" | automatizaciondeprocesos.ai | ❌ No hay landings por caso de uso |

### 5.2 Content gap prioritario (para blog)

Ahora tu blog tiene **3 posts** muy genéricos. Los competidores ganan SEO con artículos de:
1. **"Cuánto cuesta una web a medida en Madrid 2026 (precios reales)"** — high-intent comercial.
2. **"Cuánto cuesta implementar IA en tu empresa (guía 2026)"** — high-intent comercial.
3. **"Automatización IA por sector: ecommerce, legal, hostelería, salud"** — long-tail volumen.
4. **"Web a medida vs WordPress vs Shopify: qué elegir según tu negocio"**.
5. **"Casos reales de automatización IA con n8n + ChatGPT (workflows comentados)"**.

---

## 6. Backlinks (estimación cualitativa sin Ahrefs)

Sin API de Ahrefs/SEMrush no puedo dar números exactos, pero observo:
- **Witrey**: cita a Roche, Bridgestone, Santillana en H2 → indica menciones recíprocas/PR.
- **AI Hispania, Navel**: aparecen en `madridactual.es` ("Las mejores agencias SEO en Madrid") y portales locales.
- **jvseoagency**: la única mención pública detectada es la `jvseoagency.es/241572-2/` (Sobre nosotros) y dominio Odoo de prueba — perfil de backlinks **prácticamente inexistente**.

**Acción**: link-building local (directorios Madrid, prensa local, partners tecnológicos n8n/Vercel/Supabase).

---

## 7. Issues técnicos detectados (priorizados)

### P0 — Bloqueantes (esta semana)

| # | Issue | Impacto | Fix |
|---|---|---|---|
| 1 | **Dominio inconsistente**: `metadataBase`, sitemap.xml y robots.txt apuntan a `jvseoagency.com` pero el dominio real es `.es` | Indexación, canonical, OG | Cambiar `siteUrl`/`baseUrl` a `https://jvseoagency.es` en `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` |
| 2 | **0 Schema.org JSON-LD** | Rich results, GEO, knowledge graph | Añadir `Organization` + `LocalBusiness` (Madrid, GMB) en layout; `BreadcrumbList` por página; `FAQPage` en home y servicios; `Article` en posts; `Service` en /servicios/* |
| 3 | **No canonical tags** | Riesgo de duplicado, indexación | Añadir `alternates: { canonical: '...' }` en cada `metadata` |
| 4 | **0 imágenes con alt** | Image Search, accesibilidad, tiempo en página | Añadir 8-15 imágenes (mockups, capturas casos, fotos equipo, logos clientes) con alt descriptivo |
| 5 | **Sin GA4 ni Search Console verificado** (no detecté tag) | Sin medición = sin optimización | Añadir GA4 + verificación GSC en `<head>` |

### P1 — Importantes (2 semanas)

| # | Issue | Fix |
|---|---|---|
| 6 | Meta descriptions cortas (92-131 chars) | Reescribir a 150-160 chars con CTA y keyword `Madrid` |
| 7 | "Madrid" no aparece en H1/H2 de ninguna página (excepto en tagline corta) | Añadir "Madrid", "España", "empresas" en H1/H2 de servicios |
| 8 | 0 enlaces externos | Citar fuentes (n8n.io, vercel.com, gov.es para LSSI) en blog |
| 9 | No favicon detectado | Añadir `app/icon.png` y `app/apple-icon.png` |
| 10 | Casos anonimizados ("SaaS B2B") sin marca | Si hay permiso, nombrar 1-2 marcas reales (potencia E-E-A-T) |

### P2 — Mejoras continuas (4-6 semanas)

| # | Acción |
|---|---|
| 11 | Crear landings programáticas: `/servicios/automatizacion-ia/[sector]` (ecommerce, legal, salud, hostelería) |
| 12 | Crear cluster blog: precios + comparativas (5 artículos del content gap) |
| 13 | Página `/sobre-nosotros` con E-E-A-T (años, equipo, foto, autores en posts) |
| 14 | FAQ enriquecida con `FAQPage` schema en home y cada servicio |
| 15 | Plan link-building: directorios (Clutch, GoodFirms, ManyPixels), prensa local, podcast invitado |

---

## 8. GEO action plan (para aparecer en respuestas IA)

Las skills `geo-content-optimizer` y `entity-optimizer` recomiendan:

1. **Reescribir intros con datos cita-friendly**: cada página debe abrir con 1 párrafo de 2-3 frases que un LLM pueda citar literalmente. Patrón: `"[Empresa] es [categoría] basada en [ciudad] que [propuesta]. [Métrica diferencial]."`
   - Ejemplo: *"JVSEO Agency es una agencia de desarrollo web, apps y automatización IA con sede en Madrid, fundada en 2020. Sus implementaciones reducen el tiempo operativo medio un 58% en menos de 8 semanas."*
2. **Añadir bloque de "About" con fecha de fundación, equipo, ciudad, NIF visible** (ya lo tienes en aviso legal pero no en home).
3. **FAQ semántica** con preguntas exactas que la gente teclea en ChatGPT: *"¿Cuánto cuesta automatizar con IA en Madrid?"*, *"¿Qué agencia de desarrollo web Madrid es mejor para empresas?"*, *"¿Cuánto tarda en hacerse una web a medida?"*.
4. **Tablas comparativas** de precio/plazo (ChatGPT y Perplexity las extraen como JSON).
5. **Author bio** en cada post con `Person` schema.
6. **Reclamar Wikipedia / Wikidata** si hay PR o cliente notable.

---

## 9. Plan de ejecución (8 semanas)

### Semana 1 — Fixes técnicos P0
- Corregir dominio `.com` → `.es` en 3 archivos.
- Añadir 4 schemas (`Organization`, `LocalBusiness`, `BreadcrumbList`, `FAQPage`).
- Añadir canonical en cada page metadata.
- Verificar GA4 + Search Console + Bing Webmaster.

### Semana 2 — Contenido visual + GEO básico
- Generar/conseguir 12-15 imágenes (mockups, casos, equipo, logos stack).
- Reescribir intros y meta descriptions con dato cita-friendly + "Madrid".
- Añadir `FAQPage` con 6 preguntas reales en home y cada servicio.

### Semanas 3-4 — Landings de captura
- Crear `/servicios/automatizacion-ia/ecommerce` y `/legal` y `/salud` y `/hosteleria`.
- Crear `/servicios/desarrollo-web/madrid` (geo-landing).
- Crear página `/sobre-nosotros` con timeline + equipo + E-E-A-T.

### Semanas 5-8 — Content + Off-page
- Publicar 5 artículos del gap (1 por semana).
- Submission a 10 directorios (Clutch, GoodFirms, Sortlist, Capterra, TopDevelopers, Manifest, DesignRush, ProductHunt para apps).
- Pitch a 5 medios locales (`madridactual.es`, blogs sectoriales).
- Aplicar a `n8n.io/showcase` y `vercel.com/customers` como cliente del stack.

---

## 10. KPIs a 90 días

| KPI | Hoy | Objetivo 90d |
|---|---|---|
| Páginas indexadas en Google | 0 (no lanzado) | 25+ |
| Keywords en top 10 (Madrid + servicios) | 0 | 5-8 |
| Citas en respuestas IA (ChatGPT/Perplexity/Google AI Overview) | 0 | 3+ queries |
| Backlinks (DR>20) | <5 | 25+ |
| Schema warnings en GSC | n/a | 0 |
| Core Web Vitals | n/a (verificar) | LCP<2.5s, INP<200ms, CLS<0.1 |
| Leads orgánicos/mes | 0 | 8-12 |

---

## 11. Handoff

- **Status**: DONE_WITH_CONCERNS
- **Objetivo**: auditoría completa SEO + GEO + competitivo de jvseoagency local v1 vs 5 competidores reales Madrid.
- **Hallazgos clave**: técnico/semántico bien, faltan schema/canonical/imágenes/dominio correcto/citas IA. Word count y H1 ya competitivos.
- **Evidencia**: crawl real de localhost:4003 (6 páginas), crawl real de 5 competidores, 2 búsquedas Google con respuestas IA.
- **Open loops**:
  - Validar Core Web Vitals reales con PageSpeed Insights tras deploy en `.es`.
  - Confirmar permiso para usar nombres reales de clientes en casos.
  - Conectar Ahrefs/SEMrush para datos exactos de backlinks y volumen de keywords.
- **Recommended next skill**: `meta-tags-optimizer` (P0 #6) → `schema-markup-generator` (P0 #2) → `internal-linking-optimizer` (al añadir landings) → `content-refresher` (cuando relances casos/blog) → `rank-tracker` (semana 4 en adelante).
