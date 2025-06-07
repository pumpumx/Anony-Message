import { z } from 'zod'

export const messageSchemam = z.object({
    content: z.string().min(5, "content must be atleast 5 characters").max(300, "Content cannot be more than 300 characters")
}) 