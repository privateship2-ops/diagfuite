import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingPhone } from "@/components/ui/FloatingPhone";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "DiagFuite — Détection de fuite non destructive à Toulouse",
    template: "%s | DiagFuite Toulouse",
  },
  description:
    "DiagFuite, expert en détection de fuites non destructive à Toulouse et grande couronne. Agréé assurances, rapport expertise, intervention sous 48h. Devis gratuit.",
  metadataBase: new URL("https://diagfuite.fr"),
  openGraph: {
    siteName: "DiagFuite",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DiagFuite",
  description:
    "Détection de fuites non destructive à Toulouse et sa grande couronne. Agréé assurances.",
  url: "https://diagfuite.fr",
  telephone: "+33614468777",
  email: "contact@diagfuite.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Toulouse",
    addressLocality: "Toulouse",
    addressRegion: "Occitanie",
    postalCode: "31000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6047,
    longitude: 1.4442,
  },
  areaServed: [
    "Toulouse",
    "Blagnac",
    "Colomiers",
    "Tournefeuille",
    "Muret",
    "Ramonville",
    "Balma",
    "L'Union",
    "Launaguet",
    "Portet-sur-Garonne",
  ],
  serviceType: "Détection de fuites non destructive",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingPhone />
        <CookieBanner />
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-B013CEDM42" />
        )}
      </body>
    </html>
  );
}
