import express, { Request, Response } from "express"
import cors from "cors"
import { ProductRoute } from "./modules/products/product.route"
const app = express()

// parser
app.use(express.json())

app.use(cors())

app.use("/api/products", ProductRoute)

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!")
})

export default app
