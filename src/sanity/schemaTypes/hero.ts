import { defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
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
      validation: (Rule) =>
        Rule.required().min(10).warning("A descriptive title is better."),
    },
    {
      name: "imageUrl",
      title: "Image URL",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Image is required"),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description1",
      title: "Description 1",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subHeading",
      title: "Sub Heading",
      type: "string",
    },
    {
      name: "subDescription",
      title: "Sub Description",
      type: "text",
    },
    {
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "postType",
      title: "Post Type",
      type: "string",
      options: {
        list: [
          { title: "Hero Post", value: "hero" },
          { title: "Trending Post", value: "trending" },
          { title: "Latest Post", value: "latest" },
          { title: "Feature Post", value: "feature" },
        ],
        layout: "radio",
      },
      initialValue: "hero",
    },
    {
      name: "createdDate",
      title: "Created Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],

  initialValue: async (_, context) => {
    const client = context.getClient({ apiVersion: "2024-11-01" });

    const existingItems = await client.fetch<{ id: number }[]>(
      `*[_type == "post"]{id}`
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
