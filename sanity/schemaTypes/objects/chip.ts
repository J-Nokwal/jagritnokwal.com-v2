// schemas/inlineChip.ts
import { ColorRadioInput, portableChip } from "@/sanity/components";
import { defineType, defineField } from "sanity";

export const inlineChip = defineType({
  name: "inlineChip",
  title: "Chip",
  type: "object",
  icon: () => "🔖",
  preview: {
    select: {
      color: "color",
    },
    prepare({ color }) {
      return {
        title: `Chip: ${color}`,
      };
    },
  },
  components: {
    annotation: portableChip,
  },
  fields: [
    defineField({
      name: "color",
      type: "string",
      placeholder: "Select a color",
      title: "Color",
      options: {
        list: [
          { title: "Gray", value: "gray", },
          { title: "Blue", value: "blue" },
          { title: "Green", value: "green" },
          { title: "Red", value: "red" },
          { title: "Yellow", value: "yellow" },
          { title: "Purple", value: "purple" },
          { title: "Orange", value: "orange" },
          { title: "Black", value: "black" },
          { title: "White", value: "white" },
        ],
        layout: "radio",
      },
      initialValue: "gray",
      components: {
    input: ColorRadioInput,
  },

    }),
  ],
});
