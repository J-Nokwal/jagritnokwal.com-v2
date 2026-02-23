import { ALL_FIELDS_GROUP, defineField, defineType } from "sanity";
import { GoProjectRoadmap } from "react-icons/go";

const settingsProjectsType = defineType({
  name: "settingsProjects",
  title: "Projects",
  type: "document",
  icon: GoProjectRoadmap,
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
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
    defineField({
      name: "seo",
      title: "SEO & Social Media",
      type: "seoFields",
      group: "seo",
    }),
    defineField({
      name: "featuredProjects",
      title: "Featured Projects",
      type: "array",
      group: "content",
      of: [{ type: "reference", to: [{ type: "project"  }],options: { filter: '_type == "project" && visible == true' } }],
      // project must be visible
      validation: (rule) =>
        rule
          .unique()
          .min(3)
          .max(3)
          .custom(async (projects, context) => {
            if (!projects || projects.length === 0) return true;

            const client = context.getClient({ apiVersion: "2024-01-01" });

            // extract referenced ids
            const ids = (projects as Array<{ _ref: string }>).map((p) => p._ref);

            // fetch visibility from referenced projects
            const docs = await client.fetch(
              `*[_type == "project" && _id in $ids]{ _id, visible }`,
              { ids },
            );

            const invisibleProjects = docs.filter(
              (doc: { visible: boolean; }) => doc.visible !== true,
            );

            if (invisibleProjects.length > 0) {
              return "All featured projects must be marked as visible.";
            }

            return true;
          }),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
    prepare: () => ({
      title: "Settings Projects",
      subtitle: "Settings Projects",
    }),
  },
});
export default settingsProjectsType;
