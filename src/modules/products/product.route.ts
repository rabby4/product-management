import express from "express"
import { ProductController } from "./product.controller"
const router = express.Router()

// all router for products
router.post("/", ProductController.createProduct)
router.get("/", ProductController.getAllProduct) // get method for all products
router.get("/:productId", ProductController.getSingleProduct) // get method for get a single product using id
router.put("/:productId", ProductController.updateProduct)
router.delete("/:productId", ProductController.deleteProduct)

export const ProductRoute = router
