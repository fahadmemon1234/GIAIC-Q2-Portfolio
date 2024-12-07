import { type SchemaTypeDefinition } from "sanity";
import category from "./category";
import hero from "./hero";
import comment from "./comment";
import userRegistration from "./userRegistration";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, hero, comment, userRegistration],
};
