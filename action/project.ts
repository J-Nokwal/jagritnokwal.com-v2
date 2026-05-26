import { getClient } from "@/sanity/lib/client";
import {
  getAllProjectSlugsQuery,
  projectDataQuery,
  projectsPageDataQuery,
} from "@/sanity/lib/queries";
import {
  ProjectDataQueryResult,
  ProjectsPageDataQueryResult,
} from "@/sanity/types";
import { Redis } from "@upstash/redis";

export async function getProjectpageData(): Promise<ProjectsPageDataQueryResult> {
  "use cache";
  const sanityClient = getClient();
  const data = await sanityClient.fetch<ProjectsPageDataQueryResult>(
    projectsPageDataQuery,
  );
  return data;
}

export async function getProjectData(
  slug: string,
): Promise<ProjectDataQueryResult> {
  "use cache";
  const sanityClient = getClient();
  const data = await sanityClient.fetch(projectDataQuery, { slug });
  return data;
}
export async function getAllProjectSlugs(): Promise<
  { slug: string; _updatedAt?: string; date?: string }[]
> {
  "use cache";
  const sanityClient = getClient();
  const data = await sanityClient.fetch<
    { slug: string; _updatedAt?: string; date?: string }[]
  >(getAllProjectSlugsQuery);
  return data;
}

// Get single
export async function getProjectPageviews(slug: string) {
  const redis = Redis.fromEnv();

  const views = await redis.get<number>(getKey(slug));
  return views ?? 0;
}
const getKey = (slug: string) => `pageviews:projects:${slug}`;

// Get multiple (optimized)
export async function getMultipleProjectPageviews(slugs: string[]) {
  const keys = slugs.map(getKey);
  const redis = Redis.fromEnv();

  const result = await redis.mget<number[]>(...keys);

  const map: Record<string, number> = {};

  slugs.forEach((slug, i) => {
    map[slug] = result[i] ?? 0;
  });

  return map;
}

// Update
export async function updateProjectPageviews(slug: string, views: number) {
  const redis = Redis.fromEnv();

  await redis.set(getKey(slug), views);
  return true;
}
