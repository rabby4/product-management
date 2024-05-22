import { TProduct } from "./product.interface"
import { Products } from "./product.model"

// product service for create a product
const createProduct = async (payload: TProduct) => {
	const result = await Products.create(payload)
	return result
}

// product service for get all products
/* eslint-disable @typescript-eslint/no-explicit-any */
const getAllProducts = async (searchTerm: any) => {
	if (!searchTerm) {
		const result = await Products.find()
		return result
	} else {
		const result = await Products.find({
			name: { $regex: searchTerm, $options: "i" },
		})
		return result
	}
}

// Service for get single product
const getSingleProduct = async (id: string) => {
	const result = await Products.findById(id)
	return result
}

// product service for update a product
const updateProduct = async (id: string, payload: Partial<TProduct>) => {
	const result = await Products.findByIdAndUpdate(id, payload, {
		new: true,
		runValidators: true,
	})
	return result
}

// product service for delete a product from database
const deleteProduct = async (id: string) => {
	const result = await Products.findByIdAndDelete(id)
	return result
}

export const ProductService = {
	createProduct,
	getAllProducts,
	getSingleProduct,
	updateProduct,
	deleteProduct,
}
