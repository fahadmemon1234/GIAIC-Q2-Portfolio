import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { addToCart } from "./addtocart";
import { Order } from "./order";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, addToCart, Order],
};
