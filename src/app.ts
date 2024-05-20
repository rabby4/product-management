import express, { Request, Response } from "express"
const app = express()

app.get("/", (req: Request, res: Response) => {
	const a = 10
	console.log(a)
	res.send("Hello World!")
})

export default app
