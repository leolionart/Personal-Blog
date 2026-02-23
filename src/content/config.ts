import { defineCollection, reference } from "astro:content";
import { z } from "astro:schema";

const authors = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        socials: z.optional(
            z.object({
                github: z.optional(z.string()),
            })
        ),
        website: z.string(),
        description: z.optional(z.string()),
        profilePicture: z.optional(z.string())
    })
})

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        type: z.optional(z.enum(['announcement','release','post'])),
        title: z.string(),
        description: z.optional(z.string()),
        author: reference('authors'),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()),
    })
})

export const collections = {
    posts,
    authors
}
