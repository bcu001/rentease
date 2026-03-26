import { Router } from "express";
import { createProduct } from "../controllers/product.controller";
import validateRequest from "../middlewares/validateRequest";
import { createProductSchema } from "../validators/product.validate";


const router:Router = Router();


router.post("/", validateRequest(createProductSchema) , createProduct)

export default router;