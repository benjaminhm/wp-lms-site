import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
  })
});

const course = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/course" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    module: z.string().default("General"),
    order: z.number(),
    videoUrl: z.string().optional(),
    freePreview: z.boolean().default(false),
  })
});

export const collections = { blog, course };
