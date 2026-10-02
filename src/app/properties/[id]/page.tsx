import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectById } from "@/data/projects";
import PropertyDetailClient from "@/components/PropertyDetailClient";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const project = getProjectById(params.id);

  if (!project) {
    return {
      title: "Property Not Found | Latitude Properties",
      description: "The requested residential property was not found in Coimbatore.",
    };
  }

  const title = `${project.title} | ${project.tag} | Latitude Properties`;
  const description = project.description.slice(0, 158);
  const pageUrl = `https://latitudeproperties.com/sites/${project.id}`;
  const canonicalUrl = `/sites/${project.id}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      project.location,
      "DTCP approved plots Coimbatore",
      "residential plots Coimbatore",
      "gated community Coimbatore",
      project.type,
      project.tag,
      ...(project.highlights || []).slice(0, 5),
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: project.description,
      url: pageUrl,
      siteName: "Latitude Properties",
      images: [
        {
          url: project.img,
          width: 1200,
          height: 630,
          alt: `${project.title} - Latitude Properties Coimbatore`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.img],
    },
  };
}

export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const isAvailable = project.status === "available";

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${project.title} - Residential Sites in Coimbatore`,
    description: project.description,
    image: [project.img, ...(project.gallery || [])],
    brand: {
      "@type": "Brand",
      name: "Latitude Properties",
    },
    offers: {
      "@type": "Offer",
      url: `https://latitudeproperties.com/sites/${project.id}`,
      priceCurrency: "INR",
      price: project.offerPrice,
      priceValidUntil: "2026-12-31",
      availability: isAvailable
        ? "https://schema.org/InStock"
        : "https://schema.org/SoldOut",
      itemCondition: "https://schema.org/NewCondition",
    },
    category: "RealEstateListing",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Plot Dimensions", value: project.specs.plotDimensions },
      { "@type": "PropertyValue", name: "Total Plot Area", value: project.specs.totalPlotArea },
      { "@type": "PropertyValue", name: "Facing", value: project.specs.facing },
      { "@type": "PropertyValue", name: "Road Width", value: project.specs.roadWidth },
      { "@type": "PropertyValue", name: "Approval Number", value: project.dtcpApprovalNumber || project.specs.approvalNumber },
      { "@type": "PropertyValue", name: "Offer", value: project.launchOfferTitle || "DTCP Approved Layout" },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://latitudeproperties.com" },
      { "@type": "ListItem", position: 2, name: "Our Sites", item: "https://latitudeproperties.com/#sites" },
      { "@type": "ListItem", position: 3, name: project.title, item: `https://latitudeproperties.com/sites/${project.id}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PropertyDetailClient project={project} />
    </>
  );
}
