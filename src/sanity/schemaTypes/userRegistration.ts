import { defineType } from "sanity";

export default defineType({
  name: "userRegistration",
  title: "User Registration",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
      readOnly: true,
    },
    {
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { name: "email", invert: false })
          .error("Must be a valid email address"),
    },
    {
      name: "password",
      title: "Password",
      type: "string",
      hidden: true,
      validation: (Rule) => Rule.required().min(6).max(100),
    },
    {
      name: "isLogin",
      title: "Is Login",
      type: "boolean",
      hidden: true,
      initialValue: false,
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],

  initialValue: async (_, context) => {
    const client = context.getClient({ apiVersion: "2024-11-01" });

    const existingItems = await client.fetch<{ id: number }[]>(
      `*[_type == "userRegistration"]{id}`
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
