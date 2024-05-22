import { z } from "zod"

// order validation
const orderValidationSchema = z.object({
	email: z.string(),
	productId: z.string(),
	price: z.number(),
	quantity: z.number(),
})

export default orderValidationSchema
