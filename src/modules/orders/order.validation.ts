import { z } from "zod"

const orderValidationSchema = z.object({
	email: z.string(),
	productId: z.string(),
	price: z.number(),
	quantity: z.number(),
})

export default orderValidationSchema
