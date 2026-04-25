import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { CinematicBackground } from "@/components/cinematic-background";
import {
  OrganizationJsonLd,
  LocalBusinessJsonLd,
  WebSiteJsonLd
} from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · Desarrollo web, apps e IA en Madrid`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: siteConfig.authors.map((a) => ({ name: a.name })),
  creator: siteConfig.authors[0]?.name,
  publisher: siteConfig.name,
  keywords: [
    "agencia desarrollo web Madrid",
    "diseño web Madrid",
    "desarrollo web a medida Madrid",
    "agencia IA Madrid",
    "automatización IA Madrid",
    "aplicaciones a medida Madrid",
    "ecommerce Madrid",
    "desarrollo apps Madrid",
    "agencia digital Madrid",
    "Next.js Madrid"
  ],
  alternates: {
    canonical: "/"
  },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} · Desarrollo web, apps e IA en Madrid`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Agencia digital en Madrid`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · Web, Apps e IA en Madrid`,
    description: siteConfig.shortDescription,
    images: [siteConfig.defaultOgImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"]
  },
  category: "technology",
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? undefined
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
    { media: "(prefers-color-scheme: light)", color: "#020617" }
  ],
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ES">
      <body>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <CinematicBackground />
        <SiteHeader />
        <div className="pt-16">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
