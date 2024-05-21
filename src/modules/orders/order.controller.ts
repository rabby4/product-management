import { Request, Response } from "express"
import { OrderService } from "./order.service"
import orderValidationSchema from "./order.validation"

const createOrder = async (req: Request, res: Response) => {
	try {
		const orderData = req.body
		const validData = orderValidationSchema.parse(orderData)
		const result = await OrderService.createOrder(validData)
		res.json({
			success: true,
			message: "Order created successfully!",
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
const getAllOrders = async (req: Request, res: Response) => {
	try {
		const email = req.query.email as string
		console.log(email)
		const allOrders = await OrderService.getAllOrders(email)
		res.json({
			success: true,
			message: "Orders fetched successfully!",
			data: allOrders,
		})
	} catch (error) {
		res.json({
			success: false,
			message: "Something went wrong!",
			data: error,
		})
	}
}

export const OrderController = {
	createOrder,
	getAllOrders,
}
