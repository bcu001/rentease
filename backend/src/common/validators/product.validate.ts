import * as z from 'zod'
import { Category } from '../../modules/product/product.schema'

export const createProductSchema = z.object({
    name: z.string(),
    description:z.string(),    
    category: z.enum(Category),
    monthlyRent: z.number().min(0),
    tenureOptions: z.array(z.number().min(0)).min(3),
    stock: z.number().min(0),
})