import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts authored in Markdown (migrated + new), managed via Decap CMS.
// Decap writes files into src/content/blog/ matching this schema.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Mark Stefanelli'),
    excerpt: z.string().optional(),
    metaDescription: z.string().optional(),
    featuredImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
