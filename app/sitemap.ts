import type { MetadataRoute } from "next";
import { blogPosts, caseStudies } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

const baseUrl = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/servicios/diseno-web",
    "/servicios/diseno-web/madrid",
    "/servicios/diseno-web/barcelona",
    "/servicios/desarrollo-apps",
    "/servicios/automatizacion-ia",
    "/casos",
    "/blog",
    "/precios",
    "/sobre-nosotros",
    "/contacto",
    "/politica-privacidad",
    "/terminos"
  ];

  const staticRoutes = routes.map((route) => {
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      route === "" ? "weekly" : "monthly";
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority: route === "" ? 1 : 0.7
    };
  });

  const caseRoutes = caseStudies.map((item) => ({
    url: `${baseUrl}/casos/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...caseRoutes, ...blogRoutes];
}
