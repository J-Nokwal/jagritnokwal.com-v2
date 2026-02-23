"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */
import seofields from "sanity-plugin-seofields";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema, settingsSchemaTypes } from "./sanity/schemaTypes";
import { colorInput } from "@sanity/color-input";
import { appPlugin, settingsStructure } from "./sanity/plugins/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({
      structure: settingsStructure({
        settingsDefs: settingsSchemaTypes,
        omitDefts: [],
      }),
    }),
    appPlugin({
      ommitDefts: [...settingsSchemaTypes],
    }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    seofields(),
    unsplashImageAsset(),
    colorInput(),
  ],
});
