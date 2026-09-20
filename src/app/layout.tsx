import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

import LatitudeAiChat from "@/components/LatitudeAiChat";
import LeadPopupModal from "@/components/LeadPopupModal";
import { site } from "@/data/site";

const siteUrl = "https://latitudeproperties.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Latitude Properties | DTCP & RERA Approved Residential Plots in Coimbatore",
    template: "%s | Latitude Properties",
  },
  description:
    "Explore DTCP & RERA approved residential plots, villa lands & gated communities in Coimbatore by Latitude Properties. Exclusive 40% Deepavali festive offer, individual Patta transfer, pure Siruvani water, and free cab site visits.",
  keywords: [
    "plots in Coimbatore",
    "residential land for sale Coimbatore",
    "DTCP approved plots Coimbatore",
    "RERA plots Kalampalayam",
    "land promoters Coimbatore",
    "Siruvani water plots",
    "gated community villa plots",
    "Deepavali property offer Coimbatore",
    "land for sale in Kalampalayam",
    "40 percent off plots Coimbatore",
    "Latitude Properties",
  ],
  authors: [{ name: "Latitude Properties" }],
  creator: "Latitude Properties",
  publisher: "Latitude Properties",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Latitude Properties | Residential Plots & Land in Coimbatore (40% Deepavali Offer)",
    description:
      "DTCP & RERA approved plots in Coimbatore. 40% Deepavali festive discount, individual Patta, Siruvani drinking water, and free site visits with cab pickup.",
    url: siteUrl,
    siteName: "Latitude Properties",
    images: [
      {
        url: "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Latitude Properties Coimbatore Residential Plots",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latitude Properties | Residential Plots in Coimbatore (40% Deepavali Offer)",
    description:
      "DTCP & RERA certified residential plots in Coimbatore. Save up to ₹30 Lakhs with our 40% Deepavali offer. Book a free site visit today!",
    images: [
      "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "10.9601;76.9030",
    ICBM: "10.9601, 76.9030",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Latitude Properties",
  legalName: "Latitude Properties",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?auto=format&fit=crop&w=1200&q=80",
  description:
    "Leading residential plot promoter and real estate development firm in Coimbatore, offering DTCP and RERA approved gated communities with clear titles, Siruvani drinking water, and high investment appreciation.",
  telephone: "+919363439993",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2/344, Siruvani Main Rd, Durga Nagar, Kalampalayam, Theethipalayam",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641010",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "10.9601",
    longitude: "76.9030",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  priceRange: "₹₹₹",
  areaServed: [
    {
      "@type": "City",
      name: "Coimbatore",
    },
    {
      "@type": "AdministrativeArea",
      name: "Tamil Nadu",
    },
  ],
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://wa.me/919363439993",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        {children}
        <LatitudeAiChat />
        <LeadPopupModal />
      </body>
    </html>
  );
}
