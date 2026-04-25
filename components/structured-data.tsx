import { siteConfig } from "@/lib/site-config";

type JsonLdProps = { data: Record<string, unknown> | Record<string, unknown>[] };

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.defaultOgImage}`,
      width: 1200,
      height: 630
    },
    description: siteConfig.description,
    foundingDate: `${siteConfig.foundingYear}-01-01`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: siteConfig.sameAs,
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "Place",
      name
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.countryCode
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: "Sales",
        areaServed: siteConfig.countryCode,
        availableLanguage: ["Spanish", "English"]
      }
    ]
  };
  return <JsonLd data={data} />;
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.defaultOgImage}`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "€€-€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.countryCode
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lon
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "Place",
      name
    })),
    knowsAbout: [
      "Desarrollo web",
      "Diseño web",
      "Aplicaciones a medida",
      "Automatización con inteligencia artificial",
      "Workflows con n8n",
      "Next.js",
      "React",
      "TypeScript",
      "WordPress",
      "Shopify",
      "SEO técnico",
      "Madrid"
    ]
  };
  return <JsonLd data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "es-ES",
    publisher: { "@id": `${siteConfig.url}#organization` }
  };
  return <JsonLd data={data} />;
}

export type BreadcrumbItem = { name: string; url?: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: `${siteConfig.url}${item.url}` } : {})
    }))
  };
  return <JsonLd data={data} />;
}

export type FaqItem = { question: string; answer: string };

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer }
    }))
  };
  return <JsonLd data={data} />;
}

type ServiceJsonLdProps = {
  name: string;
  description: string;
  url: string;
  serviceType: string;
};

export function ServiceJsonLd({ name, description, url, serviceType }: ServiceJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${siteConfig.url}${url}`,
    provider: { "@id": `${siteConfig.url}#organization` },
    areaServed: siteConfig.serviceAreas.map((n) => ({ "@type": "Place", name: n })),
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      url: `${siteConfig.url}/contacto`,
      availability: "https://schema.org/InStock"
    }
  };
  return <JsonLd data={data} />;
}

type ArticleJsonLdProps = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  authorName: string;
};

export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  authorName
}: ArticleJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: `${siteConfig.url}${siteConfig.defaultOgImage}`,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: authorName
    },
    publisher: { "@id": `${siteConfig.url}#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}${url}` }
  };
  return <JsonLd data={data} />;
}
