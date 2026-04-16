import { Router } from "express";
import {   getTopProducts, getProductById, getProducts, } from "./product.controller";


const router:Router = Router();

router.get("/top", getTopProducts)
router.get("/", getProducts);
router.get("/:id", getProductById);


export default router;