import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { defineCollection } from "astro:content";

const education = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
	schema: z.object({
		title: z.string(),
		institution: z.string(),
		startYear: z.number(),
		endYear: z.number().optional(),
		grade: z.string().optional(),
		honors: z.string().optional(),
		thesis: z
			.object({
				title: z.string(),
				url: z.string().optional(),
				language: z.string().optional(),
			})
			.optional(),
	}),
});

export const collections = { education };
