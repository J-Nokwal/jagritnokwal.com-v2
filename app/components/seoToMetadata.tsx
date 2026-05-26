import { urlFor } from "@/sanity/lib/image";
import { SeoFields } from "@/sanity/types";
import type { Metadata } from "next";
import { Robots } from "next/dist/lib/metadata/types/metadata-types";
import {
  OpenGraph,
  OpenGraphType,
} from "next/dist/lib/metadata/types/opengraph-types";

export function seoToMetadata(seo?: SeoFields): Metadata {
  if (!seo) return {};
  let ogType: OpenGraphType = "website";
  let ogImage: OpenGraph["images"] | undefined = undefined;
  if (seo.openGraph) {
    if (seo.openGraph.type) {
      switch (seo.openGraph.type) {
        case "article":
          ogType = "article";
          break;
        case "book":
          ogType = "book";
          break;
        case "profile":
          ogType = "profile";
          break;
        case "music":
          ogType = "music.song";
          break;
        case "video":
          ogType = "video.other";
          break;
        case "product":
          ogType = "website";
          break;
        case "website":
          ogType = "website";
          break;
        default:
          ogType = "website";
          break;
      }
    }
    if (seo.openGraph.image) {
      ogImage = {
        url: urlFor(seo.openGraph.image).url() ?? seo.openGraph.imageUrl,
        alt: seo.openGraph.image.alt,
      };
    }
  }
  return {
    title: seo.title,
    description: seo.description,
    openGraph: seo.openGraph
      ? {
          title: seo.openGraph.title,
          description: seo.openGraph.description,
          url: seo.openGraph.url,
          siteName: seo.openGraph.siteName,
          type: ogType,
          images: ogImage,
        }
      : undefined,

    twitter: seo.twitter
      ? {
          card: seo.twitter.card,
          site: seo.twitter.site,
          creator: seo.twitter.creator,
          title: seo.twitter.title ?? seo.openGraph?.title ?? seo.title,
          description:
            seo.twitter.description ??
            seo.openGraph?.description ??
            seo.description,
        }
      : undefined,

    robots: seo.robots
      ? {
          index: !seo.robots.noIndex,
          follow: !seo.robots.noFollow,
        }
      : undefined,

    alternates: seo.canonicalUrl
      ? {
          canonical: seo.canonicalUrl,
        }
      : undefined,
  };
}
// (
//     pageMetadata,
//     seoToMetadata(settings?.seo)
//   );

/**
 * Applies forced robots metadata to the given metadata.
 * If forcedRobots is not provided, the original metadata is returned.
 * If forcedRobots is provided, the original metadata's robots property is overridden
 * with the values from forcedRobots.
 * If a value in forcedRobots is undefined, the original metadata's robots property is used.
 * If a value in forcedRobots is explicitly set to false, it overrides the original metadata's robots property.
 * If a value in forcedRobots is explicitly set to true, it does not override the original metadata's robots property.
 *
 * @param {Metadata} metadata - The original metadata.
 * @param {{index?: boolean, follow?: boolean}} forcedRobots - The forced robots metadata.
 * @returns {Metadata} - The metadata with the forced robots applied.
 */
export const applyForcedRobots = (
  metadata: Metadata,
  forcedRobots?: {
    index?: boolean;
    follow?: boolean;
  },
): Metadata => {
  if (!forcedRobots) return metadata;
  const robots = metadata.robots as Robots;
  return {
    ...metadata,
    robots: {
      index:
        forcedRobots.index !== undefined && forcedRobots.index === false
          ? false
          : robots?.index,
      follow:
        forcedRobots.follow !== undefined && forcedRobots.follow === false
          ? false
          : robots?.follow,
    },
  };
};
