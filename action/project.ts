import { getClient } from "@/sanity/lib/client";
import { getAllProjectSlugsQuery, projectDataQuery, projectsPageDataQuery } from "@/sanity/lib/queries";
import { ProjectDataQueryResult,  ProjectsPageDataQueryResult } from "@/sanity/types"

export async function getProjectpageData(): Promise<ProjectsPageDataQueryResult>{
    "use cache";
    const sanityClient = getClient();
    const data = await sanityClient.fetch<ProjectsPageDataQueryResult>(projectsPageDataQuery);
    return data;
}

export async function getProjectData(slug: string): Promise<ProjectDataQueryResult> {
    "use cache";
    const sanityClient = getClient();
    const data = await sanityClient.fetch(projectDataQuery, { slug });
    return data;
}
export async function getAllProjectSlugs(): Promise<{ slug: string }[]> {
  "use cache";
  const sanityClient = getClient();
  const data = await sanityClient.fetch<{ slug: string }[]>(getAllProjectSlugsQuery);
  return data;
}