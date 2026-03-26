import { Router } from "express";
import {   getTopProducts, getProductById, getProducts, } from "../controllers/product.controller";


const router:Router = Router();

router.get("/top", getTopProducts)
router.get("/", getProducts);
router.get("/:id", getProductById);


export default router;