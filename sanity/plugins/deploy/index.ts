import { definePlugin } from "sanity";
import { RocketIcon } from "@sanity/icons";
import { DeployTool } from "./DeployTool";

export const deployPlugin = definePlugin({
  name: "deploy-plugin",
  tools: [
    {
      name: "deploy",
      title: "Deploy",
      icon: RocketIcon,
      component: DeployTool,
    },
  ],
});
