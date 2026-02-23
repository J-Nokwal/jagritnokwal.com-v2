// schemas/horizontalImageGroup.ts
import { defineType, defineField } from "sanity";

export const horizontalImageGroup = defineType({
  name: "horizontalImageGroup",
  title: "Horizontal Images",
  type: "object",

  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Image caption",
              description: "Caption displayed below the image.",
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(2),
    }),
  ],
  preview: {
    select: {
      images: "images",
    },
    prepare({ images }) {
      const count = images?.length || 0;
      return {
        title: `Horizontal Image Group (${count} image${count !== 1 ? "s" : ""})`,
        media: images && images[0],
      };
    },
  },
});
