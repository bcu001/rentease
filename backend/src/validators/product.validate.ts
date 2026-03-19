import * as z from 'zod'
import { Category } from '../models/product.model'

export const createProductSchema = z.object({
    name: z.string(),
    category: z.enum(Category),
    monthlyRent: z.number().min(0),
    tenureOptions: z.array(z.number().min(0)).min(3),
    availableQuantity: z.number().min(0),
})