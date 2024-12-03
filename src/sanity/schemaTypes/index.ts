import { type SchemaTypeDefinition } from "sanity";
import category from "./category";
import hero from "./hero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, hero],
};
