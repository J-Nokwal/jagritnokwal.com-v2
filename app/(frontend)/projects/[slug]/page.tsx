import { notFound } from "next/navigation";
import { Redis } from "@upstash/redis";
import { getAllProjectSlugs, getProjectData } from "@/action/project";
import { ProjectDataQueryResult } from "@/sanity/types";
import { Header } from "./components/header";
import { ReportView } from "./components/view";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Key } from "react";

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
    const projectSlugs : { slug: string }[] = await getAllProjectSlugs();
      return projectSlugs.map((p) => ({
        slug: p.slug,
      }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: ProjectDataQueryResult = await getProjectData(slug);

  if (!project) {
    notFound();
  }

  const views =
    (await redis.get<number>(
      [ "pageviews", "projects", slug].join(":"),
    )) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header
        project={{
          title: project.title,
          description: project.description,
          url: project.url ?? undefined,
          repository: project.repository ?? undefined,
        }}
        views={views}
      />
      <ReportView slug={project.slug} />

      <article className="mx-auto px-4 py-12 prose prose-zinc prose-quoteless">
        {/* <Mdx code={project.body.code} /> */}
        {project.content && (
          <PortableText
            value={project.content}
            components={myPortableTextComponents}
          />
        )}
      </article>
    </div>
  );
}
const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      const { asset, alt, caption } = value;
      return (
        <figure>
          <Image
            src={urlFor(asset).maxWidth(800).quality(80).auto("format").url()}
            alt={alt}
            sizes="(max-width: 800px) 100vw, 800px"
            width={800}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
          {caption && (
            <figcaption className="mt-2 text-gray-500 dark:text-gray-400 text-sm text-center italic text-pretty">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    },
    // will be 2 images side by side
    horizontalImageGroup: ({ value }) => {
      const { images } = value;
      return (
        <div className="gap-4 grid grid-cols-2">
          {images.map(
            (
              image: { asset: SanityImageSource; alt: string },
              index: Key | null | undefined,
            ) => (
              <Image
                key={index}
                title={image.alt}
                src={urlFor(image.asset)
                  .maxWidth(800)
                  .quality(80)
                  .auto("format")
                  .url()}
                alt={image.alt}
                sizes="(max-width: 800px) 100vw, 800px"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
            ),
          )}
        </div>
      );
    },
  },
  marks: {
    highlight: ({ children }) => {
      return <span style={{ backgroundColor: "#0f0" }}>{children}</span>;
    },
    fontHighlight: ({ children }) => {
      return (
        <span style={{ fontFamily: "var(--font-breeserif)" }}>{children}</span>
      );
    },
    link: ({ value, children }) => {
      return (
        <a
          href={value.url}
          className="decoration-1 hover:decoration-2 underline underline-offset-2"
        >
          {children}
        </a>
      );
    },
    // https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white
    inlineBadge: ({ value, children }) => {
      const { color, logo, logoColor } = value;
      const formattedColor =
        color && color.hex ? color.hex.replace("#", "") : "";
      const formattedLogoColor =
        logoColor && logoColor.hex ? logoColor.hex.replace("#", "") : "white";
        const url = `https://img.shields.io/badge/${children}-${formattedColor}?style=for-the-badge&logo=${logo}&logoColor=${formattedLogoColor}`;
        // console.log(url);
        // return children;
        return (
          <Image
            src={url}
            alt={value.logo || "Badge"}
            width={(children ? children.toString().length * 10 : 100) + (logo ? 24 : 0)}
            height={30}
            unoptimized
            className="inline m-0! rounded-md w-auto min-h-7"
          />
      );
    },
  },
};
