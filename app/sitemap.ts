import { getAllProjectSlugs } from "@/action/project";
import { MetadataRoute } from "next";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectSlugs = await getAllProjectSlugs();
  const projectUrls : MetadataRoute.Sitemap = projectSlugs.map(({ slug }) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date().toISOString(),
      priority: 1.0,
      changeFrequency: "monthly",
      images: [`${BASE_URL}/images/card.png`],
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectUrls,
  ];
}
