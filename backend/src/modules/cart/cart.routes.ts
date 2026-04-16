import { Router } from "express";
import {
  addCart,
  clearCart,
  getCart,
  removeItemCart,
  updateCart,
} from "./cart.controller";

const router: Router = Router();

router.get("/", getCart);
router.post("/add", addCart);
router.patch("/update", updateCart);
router.delete("/remove/:productId", removeItemCart);
router.delete("/clear", clearCart);

export default router;
