import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import About from "@/components/About";
import TrustStrip from "@/components/TrustStrip";
import Projects from "@/components/Projects";
import WhyLatitude from "@/components/WhyLatitude";
import Investment from "@/components/Investment";
import SiteVisit from "@/components/SiteVisit";
import InstagramReelsCarousel from "@/components/InstagramReelsCarousel";
import CustomerExperience from "@/components/CustomerExperience";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCta from "@/components/StickyMobileCta";
import { faqs } from "@/data/faqs";
import { projects } from "@/data/projects";
import { officialReels } from "@/data/instagram-reels";

const siteUrl = "https://latitudeproperties.com";

export const metadata: Metadata = {
  title: "Latitude Properties | DTCP Approved Plots & 2 BHK Houses in Coimbatore",
  description:
    "Buy DTCP approved gated community plots & 2 BHK houses in Coimbatore. Explore Rathna Residency (Malumichampatty - ₹12.5L/Cent), Kandhan Avenue (Elur - ₹29L), and Sri Aanandham Avenue (Madhampatty - ₹11.90L/Cent) with clear Patta titles & free cab site visits.",
  keywords: [
    "DTCP approved plots Coimbatore",
    "Rathna Residency Malumichampatty",
    "plots behind Karpagam University",
    "Future Corporation Limit plots Coimbatore",
    "Kandhan Avenue Elur Arisipalayam",
    "2 BHK houses Coimbatore",
    "Kinathukadavu houses for sale",
    "Sri Aanandham Avenue Madhampatty",
    "Madhampatty plots",
    "Siruvani water plots",
    "gated community sites Coimbatore",
    "Latitude Properties Coimbatore",
    "plots for sale Pollachi road",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Latitude Properties | DTCP Approved Plots & 2 BHK Houses in Coimbatore",
    description:
      "Explore DTCP approved residential sites, 2 BHK houses from ₹29 Lakhs, and gated community plots at ₹11.90L - ₹12.5L/cent in Coimbatore with Latitude Properties.",
    url: siteUrl,
    siteName: "Latitude Properties",
    images: [
      {
        url: "/images/branding/logo.png",
        width: 1200,
        height: 630,
        alt: "Latitude Properties Coimbatore - DTCP Approved Layouts",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Latitude Properties",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/#sites`,
      "query-input": "required name=search_term_string",
    },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DTCP Approved Residential Layouts & Sites in Coimbatore",
    itemListElement: projects.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: p.title,
      url: `${siteUrl}/sites/${p.id}`,
      description: p.description,
    })),
  };

  const reelsJsonLd = officialReels.map((r) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: r.title,
    description: r.highlight,
    thumbnailUrl: [`${siteUrl}${r.thumbnail}`],
    uploadDate: "2026-01-01T08:00:00+05:30",
    embedUrl: r.embedUrl,
    contentUrl: r.url,
  }));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reelsJsonLd) }}
      />
      <Navbar />
      <Hero />
      <PropertySearch />
      <About />
      <TrustStrip />
      <InstagramReelsCarousel />
      <Projects />
      <WhyLatitude />
      <Investment />
      <SiteVisit />
      <CustomerExperience />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <StickyMobileCta />
    </main>
  );
}
