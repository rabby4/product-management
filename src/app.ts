import express, { Application, Request, Response } from "express"
import cors from "cors"
import { ProductRoute } from "./modules/products/product.route"
import { OrderRoute } from "./modules/orders/order.route"
const app: Application = express()

// parser
app.use(express.json())

app.use(cors())

app.use("/api/products", ProductRoute)
app.use("/api/orders", OrderRoute)

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!")
})

export default app
