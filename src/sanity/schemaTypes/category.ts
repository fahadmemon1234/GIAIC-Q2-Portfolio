import { defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
      readOnly: true,
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],

  initialValue: async (_, context) => {
    const client = context.getClient({ apiVersion: "2024-11-01" });

    const existingItems = await client.fetch<{ id: number }[]>(
      `*[_type == "category"]{id}`
    );
    const maxId = existingItems.reduce(
      (max, item) => Math.max(max, item.id || 0),
      0
    );

    return {
      id: maxId + 1,
    };
  },
});
