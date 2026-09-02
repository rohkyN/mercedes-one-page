import "./globals.css";
import { brand, company } from "../content/site";

const url = `https://${company.domain}`;

export const metadata = {
  metadataBase: new URL(url),
  title: brand.title,
  description: brand.description,
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url,
    siteName: brand.wordmark,
    title: brand.title,
    description: brand.description,
    images: [{ url: "/img/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#0C0B0B" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: brand.wordmark,
  description: brand.description,
  url,
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: company.city,
    addressCountry: "CZ",
  },
  priceRange: "4900–34900 CZK",
  makesOffer: {
    "@type": "Offer",
    priceCurrency: "CZK",
    price: "5990",
    itemOffered: {
      "@type": "Car",
      name: "Mercedes-Benz C 63 AMG Edition 507 Coupé",
      brand: { "@type": "Brand", name: "Mercedes-Benz" },
      vehicleEngine: {
        "@type": "EngineSpecification",
        engineDisplacement: { "@type": "QuantitativeValue", value: 6208, unitCode: "CMQ" },
        enginePower: { "@type": "QuantitativeValue", value: 373, unitCode: "KWT" },
      },
      fuelType: "Benzín",
      vehicleTransmission: "Automatická",
      seatingCapacity: 4,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;800&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
