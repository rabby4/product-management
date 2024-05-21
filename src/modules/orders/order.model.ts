import { Schema, model } from "mongoose"
import { TOrders } from "./order.interface"

const orderSchema = new Schema<TOrders>({
	email: { type: String },
	productId: { type: String },
	price: { type: Number },
	quantity: { type: Number },
})

export const Orders = model<TOrders>("Orders", orderSchema)
