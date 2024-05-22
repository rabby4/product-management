import { Request, Response } from "express"
import { OrderService } from "./order.service"
import orderValidationSchema from "./order.validation"
import { Products } from "../products/product.model"
import mongoose from "mongoose"

// Order controller for create a order
const createOrder = async (req: Request, res: Response) => {
	try {
		const orderData = req.body
		const orderProductId = new mongoose.Types.ObjectId(orderData.productId)
		const product = await Products.findOne({ _id: orderProductId })

		if (product) {
			if (product.inventory.quantity >= orderData.quantity) {
				const updateQuantity = product.inventory.quantity - orderData.quantity
				await Products.updateOne(
					{ _id: product._id },
					{ $set: { "inventory.quantity": updateQuantity } }
				)

				if (updateQuantity === 0) {
					await Products.updateOne(
						{ _id: product._id },
						{ $set: { "inventory.inStock": false } }
					)
				}

				const validData = orderValidationSchema.parse(orderData)
				const result = await OrderService.createOrder(validData)
				res.json({
					success: true,
					message: "Order created successfully!",
					data: result,
				})
			} else {
				res.json({
					success: false,
					message: "Insufficient quantity available in inventory",
				})
			}
		}
	} catch (error) {
		res.json({
			success: false,
			message: "Order not found",
		})
	}
}

// Order controller for get all Orders
const getAllOrders = async (req: Request, res: Response) => {
	try {
		const email = req.query.email as string
		if (!email) {
			const allOrders = await OrderService.getAllOrders(email)
			res.json({
				success: true,
				message: "Orders fetched successfully!",
				data: allOrders,
			})
		} else {
			const allOrders = await OrderService.getAllOrders(email)
			res.json({
				success: true,
				message: "Orders fetched successfully for user email!",
				data: allOrders,
			})
		}
	} catch (error) {
		res.json({
			success: false,
			message: "Order not found",
		})
	}
}

export const OrderController = {
	createOrder,
	getAllOrders,
}
