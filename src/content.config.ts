import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Project copy lives at the repo root, outside src/, so the files read as
// content rather than site code. The page decides order and grouping itself.
const projects = defineCollection({
	loader: glob({ pattern: '*.md', base: './content/projects' }),
	schema: z.object({
		name: z.string(),
		kicker: z.string(),
		date: z.string(),
		repo: z.string().url(),
		live: z.string().url().optional(),
		// The stack is data, not prose — the page renders it per section (full-width
		// band, quiet list), so it lives in frontmatter rather than the markdown body.
		stack: z.array(z.object({ name: z.string(), note: z.string().optional() })),
	}),
});

export const collections = { projects };
