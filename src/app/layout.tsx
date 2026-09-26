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
    default: "Latitude Properties | DTCP & LPA Approved Sites & Plots in Coimbatore",
    template: "%s | Latitude Properties",
  },
  description:
    "Explore DTCP & LPA approved residential sites, layout maps, and plots in Coimbatore with Latitude Properties. View Sri Aanandham Avenue, Kandhan Avenue, and Siruvani Enclave with live plot availability and 40% Deepavali festive discounts.",
  keywords: [
    "sites in Coimbatore",
    "residential sites for sale Coimbatore",
    "DTCP approved sites Coimbatore",
    "Sri Aanandham Avenue",
    "Kandhan Avenue",
    "Siruvani Enclave",
    "plots layout map Coimbatore",
    "Latitude Properties",
    "Latitude Promoters",
    "Siruvani water plots",
    "gated community sites Coimbatore",
  ],
  authors: [{ name: "Latitude Properties" }],
  creator: "Latitude Properties",
  publisher: "Latitude Properties",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/images/branding/logo.png",
    apple: "/images/branding/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Latitude Properties | Residential Sites & Master Layout Maps in Coimbatore",
    description:
      "DTCP approved sites with certified layout plans in Coimbatore. Live plot status (Available, Booked, Sold), Siruvani water, and free site visits with cab pickup.",
    url: siteUrl,
    siteName: "Latitude Properties",
    images: [
      {
        url: "/images/branding/logo.png",
        width: 1200,
        height: 630,
        alt: "Latitude Properties Official Logo & Sites",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latitude Properties | Residential Sites in Coimbatore",
    description:
      "DTCP certified residential sites in Coimbatore with master layout maps and live plot availability.",
    images: ["/images/branding/logo.png"],
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
  logo: `${siteUrl}/images/branding/logo.png`,
  image: `${siteUrl}/images/branding/logo.png`,
  description:
    "Leading residential plot promoter and real estate development firm in Coimbatore, offering DTCP and LPA approved sites with clear layout plans, Siruvani drinking water, and high investment appreciation.",
  telephone: "+919363439993",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2/350, Siruvani Main Road, Durga Nagar, Kalampalayam, Theethipalayam",
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
        <link rel="icon" href="/images/branding/logo.png" />
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
