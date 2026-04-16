import { Router } from "express";
import { deleteMyProfile, getMyProfile, updateMyProfile } from "./user.controller";

const router:Router = Router();

router.get("/users/me",getMyProfile );
router.patch("/user/me", deleteMyProfile)
router.delete("/user/me", updateMyProfile)

export default router;