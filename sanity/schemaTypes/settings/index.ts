/* eslint-disable @typescript-eslint/no-explicit-any */
import { CogIcon } from "@sanity/icons";
import {
  ALL_FIELDS_GROUP,
  defineField,
  defineType,
} from "sanity";

const settingsType = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    // {
    //   name: "content",
    //   title: "Content",
    //   default: true,
    // },
    {
      name: "seo",
      title: "SEO",
    },
    {
      ...ALL_FIELDS_GROUP,
      hidden: true,
    },
  ],
  fields: [
    // here forced no index, no follow,
    defineField({
      name: "forcedRobots",
      title: "Forced Robots Meta Tag",
      type: "object",
      group: "seo",
      description:
        "Force specific values for the robots meta tag on all pages, overriding individual page settings.",
      fields: [
        defineField({
          name: "index",
          title: "Indexing",
          type: "boolean",
          description:
            "Allow search engines to index this site. If True, default value of 'index' will be used. If False, 'noindex' will be set for all pages.",
          initialValue: false,
        }),
        defineField({
          name: "follow",
          title: "Following Links",
          type: "boolean",
          description:
            "Allow search engines to follow links on this site. If True, default value of 'follow' will be used. If False, 'nofollow' will be set for all pages.",
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "Default SEO & Social Media",
      type: "seoFields",
      group: "seo", // Optional: group in a tab
    }),
  ],
  preview: {
    select: { title: "Settings" },
    prepare: () => ({ title: "Settings", subtitle: "Settings" }),
  },
});

export default settingsType;
