import { z } from "zod"

// variant validation schema with zod
const variationValidationSchema = z.object({
	type: z.string(),
	value: z.string(),
})

// inventory validation schema with zod
const inventoryValidationSchema = z.object({
	quantity: z.string(),
	inStock: z.string(),
})

// product validation schema with zod
const productValidationSchema = z.object({
	name: z.string(),
	description: z.string(),
	price: z.number(),
	category: z.string(),
	tags: z.array(z.string()),
	variants: variationValidationSchema,
	inventory: inventoryValidationSchema,
})

export default productValidationSchema
