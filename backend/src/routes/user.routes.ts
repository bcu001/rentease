import { Router } from "express";

const router:Router = Router();

router.get("/users/me");
router.patch("/user/me")
router.delete("/user/me")

export default router;