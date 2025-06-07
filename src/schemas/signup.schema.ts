import {z} from 'zod'

export const usernameValidation = z.string()
    .min(2,{message:"Username must be atleast 2 characters"})
    .max(20,"Username cannot exceed 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Invalid username")


export const signupValidation = z.object({
    username: usernameValidation,
    email: z.string().email({message:"Invalid Email"}),
    password: z.string().min(6,"Must contain atleast 6 characters")
})