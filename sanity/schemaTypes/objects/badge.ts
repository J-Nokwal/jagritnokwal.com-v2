import { defineType, defineField } from "sanity";
import { portableBadge } from "../../components";

export const inlineBadge = defineType({
  name: "inlineBadge",
  title: "Badge",
  type: "object",

  preview: {
    select: {
      color: "color",
      logo: "logo",
      logoColor: "logoColor",
    },
    // https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white
    prepare({ color, logo, logoColor }) {
      return {
        title: `Badge: ${logo || "no logo"}`,
        // media: `https://img.shields.io/badge/-${logo || "Badge"}-${color?.replace(
        //   "#",
        //   "",
        // )}?style=for-the-badge&logo=${logo || "badge"}&logoColor=${
        //   logoColor?.replace("#", "") || "white"
        // }`,
        imageUrl: `https://img.shields.io/badge/-${logo || "Badge"}-${color?.replace(
          "#",
          "",
        )}?style=for-the-badge&logo=${logo || "badge"}&logoColor=${
          logoColor?.replace("#", "") || "white"
        }`,
      };
    },
  },
  icon : () => "🏷️",

components: {
    annotation: portableBadge,
  },
  fields: [
    defineField({
      name: "color",
      title: "Badge color",
      type: "color",
      options: {
        disableAlpha: true,
      },
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "string",
      description: "go, flutter, aws, etc.",
    }),

    defineField({
      name: "logoColor",
      title: "Logo color",
      type: "color",
      initialValue : { },
      options: {
        colorList: [
            '#FFFFFF',
        ],
        disableAlpha: true,
      },
    }),
  ],
});
