import express, { Application, Request, Response } from "express"
import { ProductRoute } from "./modules/products/product.route"
import { OrderRoute } from "./modules/orders/order.route"
const app: Application = express()

// parser
app.use(express.json())

app.use("/api/products", ProductRoute)
app.use("/api/orders", OrderRoute)

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!")
})

app.all("*", (req: Request, res: Response) => {
	res.json({
		success: false,
		message: "Route not found",
	})
})

export default app
