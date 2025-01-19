import { defineType } from "sanity";

export const Order = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
        name: 'order_id',
        title: 'Order ID',
        type: 'string',
        readOnly: true,
      },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
    },
    {
      name: "product_id",
      title: "Product ID",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "notes",
      title: "Order Notes",
      type: "text",
    },
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "streetAddress",
      title: "Street Address",
      type: "string",
    },
    {
      name: "streetAddress1",
      title: "Street Address Line 2",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "state",
      title: "State/County",
      type: "string",
    },
    {
      name: "zipCode",
      title: "Postcode/ZIP",
      type: "string",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
  ],
});
