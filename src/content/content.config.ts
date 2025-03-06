import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string(),
        // image: image().refine((img) => img.width <1200, {
        //     message: 'La imagen debe tener una resolución mínima de 500px'
        // }),
        // Relacion
        author: z.string(),
        // Relacion
        tags: z.array(z.string()),
    })
})

export const collections = {
    blog: blogCollection,
};