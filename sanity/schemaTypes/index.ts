import { type SchemaTypeDefinition } from 'sanity';
import { opportunities } from './opportunities';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [opportunities],
};
