import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { addToCart } from './addtocart'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, addToCart],
}
