import { type SchemaTypeDefinition } from 'sanity'

import author from './schemas/author'
import blockContent from './schemas/blockContent'
import category from './schemas/category'
import hero from './schemas/hero'
import post from './schemas/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, blockContent, category, hero, post,],
}
