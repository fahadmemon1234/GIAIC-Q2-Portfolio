import { defineType } from "sanity";

export default defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
      readOnly: true,
    },
    {
      name: "p_id",
      title: "Parent ID",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "createdDate",
      title: "Created Date",
      type: "datetime",
      readOnly: true,
    },
  ],

  initialValue: async (_, context) => {
    const client = context.getClient({ apiVersion: "2024-11-01" });

    // Fetch existing IDs for `id`
    const existingItems = await client.fetch<{ id: number }[]>(
      `*[_type == "comment"]{id}`
    );

    const maxId = existingItems.reduce(
      (max, item) => Math.max(max, item.id || 0),
      0
    );

    return {
      id: maxId + 1,
      createdDate: new Date().toISOString(),
    };
  },
});
