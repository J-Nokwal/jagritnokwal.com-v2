import Link from "next/link";
import React from "react";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import { Article } from "./components/article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { FilterItem } from "./components/filterForm";
import type { Metadata } from "next";

import { getProjectpageData } from "@/action/project";
import { ProjectsPageDataQueryResult } from "@/sanity/types";
import Filters from "./components/filterButton";
import { ExtraProjects } from "./components/ExtraProjects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of software projects built with Flutter, Golang, AWS, React, and more.",
  openGraph: {
    title: "Projects | Jagrit Nokwal",
    description:
      "A collection of software projects built with Flutter, Golang, AWS, React, and more.",
    url: "https://www.jagritnokwal.com/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Jagrit Nokwal",
    description:
      "A collection of software projects built with Flutter, Golang, AWS, React, and more.",
  },
  alternates: {
    canonical: "https://www.jagritnokwal.com/projects",
  },
};

type Project = ProjectsPageDataQueryResult["projects"][number] & {
  mainProject?: boolean | null;
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const redis = Redis.fromEnv();

  const data: ProjectsPageDataQueryResult = await getProjectpageData();

  const { projects, featuredIds } = data;

  /* ---------------------------------------------
   * Views (Redis)
   * -------------------------------------------*/
  const views = (
    await redis.mget<number[]>(
      ...projects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce(
    (acc, v, i) => {
      acc[projects[i].slug] = v ?? 0;
      return acc;
    },
    {} as Record<string, number>,
  );

  /* ---------------------------------------------
   * Filters
   * -------------------------------------------*/
  const tags = (await searchParams).tags;
  const selectedTagsSlugs = typeof tags === "string" ? [tags] : tags || [];
  const selectedTags: FilterItem[] = selectedTagsSlugs.map((slug) => {
    const tag: FilterItem | undefined = projects
      .flatMap((project) =>
        project.tags
          ? project.tags.map((tag) => ({ title: tag.title, slug: tag.slug }))
          : [],
      )
      .find((tag) => tag.slug === slug);
    if (tag) {
      return tag;
    }
    return { title: slug, slug };
  });

  const allProjects = projects as Project[];

  const filteredProjects =
    selectedTags.length > 0
      ? allProjects.filter((project) =>
          project.tags
            ? project.tags.some((tag) => selectedTagsSlugs.includes(tag.slug))
            : false,
        )
      : allProjects;

  const mainFilteredProjects = filteredProjects.filter(
    (p) => p.mainProject !== false,
  );
  const extraFilteredProjects = filteredProjects.filter(
    (p) => p.mainProject === false,
  );

  const allTags: FilterItem[] = Array.from(
    new Map(
      projects.flatMap((project) =>
        project.tags
          ? project.tags.map((tag) => [
              tag.slug,
              { title: tag.title, slug: tag.slug },
            ])
          : [],
      ),
    ).values(),
  ).sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { sensitivity: "base" }),
  );

  /* ---------------------------------------------
   * Featured logic (CMS driven)
   * -------------------------------------------*/
  let featured: Project | null = null;
  let top2: Project | null = null;
  let top3: Project | null = null;
  let sorted: Project[] = [];
  if (featuredIds && featuredIds.length > 0) {
    const featuredProjects: Project[] = featuredIds!
      .map((id) => mainFilteredProjects.find((p) => p._id === id))
      .filter((p) => p !== undefined);

    [featured, top2, top3] = featuredProjects;

    sorted = mainFilteredProjects
      .filter(
        (p) =>
          p._id !== featured?._id && p._id !== top2?._id && p._id !== top3?._id,
      )
      .sort(
        (a, b) =>
          new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
          new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
      );
  } else {
    sorted = [...mainFilteredProjects].sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );
  }
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://jagritnokwal.com/projects#projects",
    url: "https://jagritnokwal.com/projects",
    name: "Projects - Jagrit Nokwal",
    description:
      "A collection of software projects built using Flutter, Golang, AWS, and modern technologies.",
    hasPart: projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      description: p.description,
      url: `https://www.jagritnokwal.com/projects/${p.slug}`,
      author: { "@id": "https://jagritnokwal.com/#person" },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jagritnokwal.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://jagritnokwal.com/projects",
      },
    ],
  };

  /* ---------------------------------------------
   * Render
   * -------------------------------------------*/
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main className="relative pb-16">
        <Navigation />
        <div className="space-y-8 md:space-y-16 mx-auto px-6 lg:px-8 pt-20 md:pt-24 lg:pt-32 max-w-7xl">
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center mx-auto lg:mx-0 lg:max-w-full max-w-2xl">
            <div>
              <h2 className="font-bold text-zinc-100 text-3xl sm:text-4xl tracking-tight">
                Projects
              </h2>
              <p className="mt-4 text-zinc-400">
                Some of the projects are from work and some are on my own time.
              </p>
            </div>

            <div className="mt-4 lg:mt-0 max-w-full">
              <Filters availableTags={allTags} selectedTags={selectedTags} />
            </div>
          </div>

          <div className="bg-zinc-800 w-full h-px" />

          {filteredProjects.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-zinc-400">No projects match your filters.</p>
              <Link
                href="/projects"
                className="mt-2 text-zinc-200 hover:text-white"
              >
                Clear filters
              </Link>
            </div>
          ) : (
            <>
              <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mx-auto">
                {featured && (
                  <Card>
                    <Link href={`/projects/${featured.slug}`}>
                      <article className="relative p-4 md:p-8 w-full h-full">
                        <div className="flex justify-between items-center gap-2">
                          <div className="text-zinc-100 text-xs">
                            {featured.date ? (
                              <time
                                dateTime={new Date(featured.date).toISOString()}
                              >
                                {Intl.DateTimeFormat(undefined, {
                                  dateStyle: "medium",
                                }).format(new Date(featured.date))}
                              </time>
                            ) : (
                              <span>SOON</span>
                            )}
                          </div>
                          <span className="flex items-center gap-1 text-zinc-500 text-xs">
                            <Eye className="w-4 h-4" />{" "}
                            {Intl.NumberFormat("en-US", {
                              notation: "compact",
                            }).format(views[featured.slug] ?? 0)}
                          </span>
                        </div>

                        <h2
                          id="featured-post"
                          className="mt-4 font-display font-bold text-zinc-100 group-hover:text-white text-3xl sm:text-4xl"
                        >
                          {featured.title}
                        </h2>
                        <p className="mt-4 text-zinc-400 group-hover:text-zinc-300 leading-8 duration-150">
                          {featured.description}
                        </p>
                        <div className="bottom-4 md:bottom-8 absolute">
                          <p className="hidden lg:block text-zinc-200 hover:text-zinc-50">
                            Read more <span aria-hidden="true">&rarr;</span>
                          </p>
                        </div>
                      </article>
                    </Link>
                  </Card>
                )}

                <div className="flex flex-col gap-8 mx-auto lg:mx-0 border-gray-900/10 border-t lg:border-t-0 w-full">
                  {[top2, top3].filter(Boolean).map((project) => (
                    <Card key={project?.slug}>
                      <Article
                        project={project!}
                        views={views[project!.slug] ?? 0}
                      />
                    </Card>
                  ))}
                </div>
              </div>

              <div className="hidden md:block bg-zinc-800 w-full h-px" />

              <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mx-auto lg:mx-0">
                <div className="gap-4 grid grid-cols-1">
                  {sorted
                    .filter((_, i) => i % 3 === 0)
                    .map((project) => (
                      <Card key={project.slug}>
                        <Article
                          project={project}
                          views={views[project.slug] ?? 0}
                        />
                      </Card>
                    ))}
                </div>
                <div className="gap-4 grid grid-cols-1">
                  {sorted
                    .filter((_, i) => i % 3 === 1)
                    .map((project) => (
                      <Card key={project.slug}>
                        <Article
                          project={project}
                          views={views[project.slug] ?? 0}
                        />
                      </Card>
                    ))}
                </div>
                <div className="gap-4 grid grid-cols-1">
                  {sorted
                    .filter((_, i) => i % 3 === 2)
                    .map((project) => (
                      <Card key={project.slug}>
                        <Article
                          project={project}
                          views={views[project.slug] ?? 0}
                        />
                      </Card>
                    ))}
                </div>
              </div>

              {extraFilteredProjects.length > 0 && (
                <ExtraProjects>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-zinc-800 h-px" />
                    <span className="text-zinc-500 text-sm font-medium tracking-wide uppercase">
                      More Projects
                    </span>
                    <div className="flex-1 bg-zinc-800 h-px" />
                  </div>

                  <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mx-auto lg:mx-0">
                    <div className="gap-4 grid grid-cols-1">
                      {extraFilteredProjects
                        .filter((_, i) => i % 3 === 0)
                        .map((project) => (
                          <Card key={project.slug}>
                            <Article
                              project={project}
                              views={views[project.slug] ?? 0}
                            />
                          </Card>
                        ))}
                    </div>
                    <div className="gap-4 grid grid-cols-1">
                      {extraFilteredProjects
                        .filter((_, i) => i % 3 === 1)
                        .map((project) => (
                          <Card key={project.slug}>
                            <Article
                              project={project}
                              views={views[project.slug] ?? 0}
                            />
                          </Card>
                        ))}
                    </div>
                    <div className="gap-4 grid grid-cols-1">
                      {extraFilteredProjects
                        .filter((_, i) => i % 3 === 2)
                        .map((project) => (
                          <Card key={project.slug}>
                            <Article
                              project={project}
                              views={views[project.slug] ?? 0}
                            />
                          </Card>
                        ))}
                    </div>
                  </div>
                </ExtraProjects>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
