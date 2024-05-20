import { Request, Response } from "express"
import productValidationSchema from "./product.validation"
import { ProductService } from "./product.service"

// product controller for create a product
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

// product controller for get all products
const getAllProduct = async (req: Request, res: Response) => {
	try {
		const result = await ProductService.getAllProducts()
		res.json({
			success: true,
			message: "Products fetched successfully!",
			data: result,
		})
	} catch (error) {
		res.json({
			success: true,
			message: "Something went wrong!",
			data: error,
		})
	}
}

// product controller for get a single product using id
const getSingleProduct = async (req: Request, res: Response) => {
	try {
		const { productId } = req.params
		const result = await ProductService.getSingleProduct(productId)
		res.json({
			success: true,
			message: "Products fetched successfully!",
			data: result,
		})
	} catch (error) {
		res.json({
			success: true,
			message: "Something went wrong!",
			data: error,
		})
	}
}

export const ProductController = {
	createProduct,
	getAllProduct,
	getSingleProduct,
}
