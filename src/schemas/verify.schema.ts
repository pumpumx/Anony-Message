import {z} from 'zod'

export const verifyCodeschema = z.object({
    verifyCode:z.string().length(6,"Verify code length must be 6")
}) 