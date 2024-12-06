import { type SchemaTypeDefinition } from "sanity";
import category from "./category";
import hero from "./hero";
import comment from "./comment";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, hero, comment],
};
