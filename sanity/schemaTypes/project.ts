/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineArrayMember, defineField, defineType } from "sanity";
import { filter } from "sanity/migrate";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",

  fields: [
    defineField({
      name: "visible",
      title: "Visible",
      type: "boolean",
      initialValue: true,
      validation: (Rule) =>
        Rule.custom(async (value, context) => {
          if (value !== false) return true;

          const rawId = context.document?._id;
          if (!rawId) return true;

          const projectId = rawId.replace(/^drafts\./, "");
          const client = context.getClient({ apiVersion: "2024-01-01" });

          const featuredRefs = await client.fetch(
            `*[_type == "settingsProjects"][0].featuredProjects[]._ref`,
          );

          if (featuredRefs?.includes(projectId)) {
            return "This project is featured. Remove it from Featured Projects before hiding it.";
          }

          return true;
        }),
    }),

    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),

    defineField({
      name: "url",
      title: "Live URL",
      type: "url",
    }),

    defineField({
      name: "repository",
      title: "Repository",
      type: "url",
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
          options: {
            filter: ({ parent }) => {
              const selectedIds = (parent as any[])?.map((ref: any) => ref._ref) || [];

              return {
                filter: "!(_id in $ids)",
                params: { ids: selectedIds },
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().unique().min(1),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          marks: {
            annotations: [
              defineArrayMember({
                type: "inlineBadge",
              }),
              defineArrayMember({
                type: "inlineChip",
              }),
              {
                name: "link",
                type: "object",
                title: "link",
                fields: [
                  {
                    name: "url",
                    type: "url",
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
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
        }),
        defineArrayMember({
          type: "horizontalImageGroup",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});
