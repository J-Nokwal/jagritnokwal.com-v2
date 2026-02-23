import { createClient, SanityClient } from "next-sanity";

import {
  apiVersion,
  dataset,
  projectId,
  useCdn,
  studioUrl,
  writeToken,
} from "../env";
import { PreviewData } from "next";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: useCdn, // Set to false if statically generating pages, using ISR or tag-based revalidation
  perspective: "published",
});
export function getClient(preview?: {
  token: string;
  perspective: PreviewData;
}): SanityClient {
  client.withConfig({
    stega: { enabled: preview?.token ? true : false, studioUrl },
  });
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      stega: { enabled: true, studioUrl },
      perspective:
        typeof preview.perspective === "string"
          ? preview.perspective.split(",")
          : "drafts",
    });
  }
  return client;
}
export const sanityWriteClient = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  token: writeToken, // 🔐 WRITE TOKEN
  useCdn: false,
});
