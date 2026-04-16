import { Router } from "express";
import {
  getTopProductsHandler,
  getProductByIdHandler,
  getProductsHandler,
} from "./product.controller";

const router: Router = Router();

router.get("/top", getTopProductsHandler);
router.get("/", getProductsHandler);
router.get("/:id", getProductByIdHandler);

export default router;
