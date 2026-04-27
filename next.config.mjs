/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  async redirects() {
    return [
      // ── URLs de versión anterior ──────────────────────────────────────
      {
        source: "/diseno-paginas-web-madrid",
        destination: "/servicios/diseno-web/madrid",
        permanent: true
      },
      {
        source: "/diseno-paginas-web",
        destination: "/servicios/diseno-web",
        permanent: true
      },
      // ── Rutas multiidioma antiguas (/en/, /de/, /pt/, /fr/) ───────────
      {
        source: "/:lang(en|de|pt|fr)/blog/:slug",
        destination: "/blog/:slug",
        permanent: true
      },
      {
        source: "/:lang(en|de|pt|fr)/:path*",
        destination: "/:path*",
        permanent: true
      },
      // ── Slugs de blog antiguos detectados en Search Console ───────────
      {
        source: "/blog/crear-tienda-online-exitosa-madrid-ecommerce-2024",
        destination: "/blog/errores-de-ux-que-bajan-tus-leads",
        permanent: true
      },
      {
        source: "/blog/nextjs-mejor-opcion-seo-madrid-guia-completa",
        destination: "/blog/como-convertir-mas-con-tu-landing",
        permanent: true
      },
      // ── Variantes sin trailing slash / con www ────────────────────────
      {
        source: "/servicios",
        destination: "/servicios/diseno-web",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
