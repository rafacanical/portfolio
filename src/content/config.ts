import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    date: z.date(),
    link: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  projects: projectCollection,
};
