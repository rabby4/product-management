import { Request, Response } from "express"
import productValidationSchema from "./product.validation"
import { ProductService } from "./product.service"

const createProduct = async (req: Request, res: Response) => {
	try {
		const productData = req.body
		const validData = productValidationSchema.parse(productData)
		const result = await ProductService.createProduct(validData)
		res.json({
			success: true,
			message: "Product created successfully!",
			data: result,
		})
	} catch (error) {
		res.json({
			success: false,
			message: "Something went wrong!",
			data: error,
		})
	}
}

export const ProductController = { createProduct }
