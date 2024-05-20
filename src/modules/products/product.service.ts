import { TProduct } from "./product.interface"
import { Products } from "./product.model"

const createProduct = async (payload: TProduct) => {
	const result = await Products.create(payload)
	return result
}

export const ProductService = {
	createProduct,
}
