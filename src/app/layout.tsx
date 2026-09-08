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

export const metadata: Metadata = {
  title: "Latitude Promoters | Residential Plots & Land in Coimbatore",
  description:
    "Explore residential plots and land opportunities with Latitude Promoters in Coimbatore. Discover thoughtfully planned layouts, infrastructure and property guidance.",
  openGraph: {
    title: "Latitude Promoters | Your Trusted Property Partner",
    description:
      "Residential plots and land opportunities in Coimbatore, Tamil Nadu.",
    type: "website",
  },
};

import LatitudeAiChat from "@/components/LatitudeAiChat";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans">
        {children}
        <LatitudeAiChat />
      </body>
    </html>
  );
}
