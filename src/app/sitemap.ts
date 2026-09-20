import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://latitudeproperties.com";
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/booked-properties`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sold-properties`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const propertyRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/properties/${p.id}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...propertyRoutes];
}
