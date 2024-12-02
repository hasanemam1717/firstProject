import { z } from "zod";


const userZodSchema = z.object({
    password: z.string({
        invalid_type_error: "Name must be a string",
    }).max(20, { message: 'Password can not be more than 20 characters.' }).optional(),
})

export const userValidationSchema = { userZodSchema }