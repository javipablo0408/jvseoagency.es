import Script from "next/script";
import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: "Automatizaciones IA, webs y aplicaciones a medida",
  description:
    "Agencia digital en Madrid especializada en automatizaciones IA, webs corporativas, ecommerce y apps a medida. Reducimos tiempo operativo un 58% y aumentamos conversión un 34%. Presupuesto en 24h.",
  alternates: { canonical: "/" }
};

export default function Home() {
  return (
    <>
      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}');
              gtag('event', 'view');
            `}
          </Script>
        </>
      ) : null}
      <LandingPage />
    </>
  );
}
