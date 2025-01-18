import { defineType } from "sanity";

export const addToCart = defineType({
    name: 'addToCart',
    title: 'Add To Cart',
    type: 'document',
    fields: [
      {
        name: 'productId',
        title: 'Product ID',
        type: 'string',
      },
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
      },
    ],
  });
  