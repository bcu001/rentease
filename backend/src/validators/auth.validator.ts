import * as z from "zod";


export const logInSchema = z.object({
    email: z.email("invalid email"),
    password: z.string(),
})

export const registerSchema = z.object({
    name:z.string().min(3, "name is too short"),
    email:z.email(),
    password:z.string().min(8,"weak password")
})

export type LogInInput = z.infer<typeof logInSchema>