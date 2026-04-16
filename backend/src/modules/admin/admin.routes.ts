import { Router } from "express";
import { createProductHandler } from "../product/product.controller";
import validateRequest from "../../common/middlewares/validateRequest";
import { createProductSchema } from "../../common/validators/product.validate";

const router:Router = Router();


router.post("/", validateRequest(createProductSchema) , createProductHandler)

export default router;