import { definePlugin } from "sanity";
import { PageviewsTool } from "./PageviewsTool";

export const pageviewsPlugin = definePlugin({
  name: "pageviews-plugin",
  tools: [
    {
      name: "pageviews",
      title: "Page Views",
      component: PageviewsTool,
    },
  ],
});