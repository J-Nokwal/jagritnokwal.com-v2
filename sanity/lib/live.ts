/* eslint-disable @typescript-eslint/no-explicit-any */
// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity/live";
import { getClient } from "./client";
import { readToken } from "../env";
// Keep the normal defineLive usage so types stay correct. We still warn at
// runtime if the read token is missing so developers understand why live
// preview may fall back to full-page refreshes.
let sanityFetch: any;
let SanityLive: any;

if (readToken && readToken.length > 0) {
  const defined = defineLive({
    client: getClient({ perspective: "drafts", token: readToken }),
    browserToken: readToken,
    serverToken: readToken,
  });

  // Assign the real implementations from next-sanity
  // (we keep the loose types here to avoid pulling in extra types).
  sanityFetch = defined.sanityFetch;
  SanityLive = defined.SanityLive;
} else {
  sanityFetch = () => {
    throw new Error(
      "Sanity live preview not configured. Set SANITY_API_READ_TOKEN to enable live updates."
    );
  };
  function SanityLiveFallback() {
    return null;
  }

  SanityLive = SanityLiveFallback;

  if (typeof window !== "undefined") {
    console.warn(
      "[sanity] SANITY_API_READ_TOKEN is not set — live preview disabled. Presentation updates may trigger full-page refreshes."
    );
  }
}

export { sanityFetch, SanityLive };
