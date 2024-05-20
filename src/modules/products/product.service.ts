import { TProduct } from "./product.interface"
import { Products } from "./product.model"

// product service for create a product
const createProduct = async (payload: TProduct) => {
	const result = await Products.create(payload)
	return result
}

// product service for get all products
const getAllProducts = async () => {
	const result = await Products.find()
	return result
}

const getSingleProduct = async (id: string) => {
	const result = await Products.findById(id)
	return result
}

const updateProduct = async (id: string, payload: Partial<TProduct>) => {
	const result = await Products.findByIdAndUpdate(id, payload, {
		new: true,
		runValidators: true,
	})
	return result
}

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