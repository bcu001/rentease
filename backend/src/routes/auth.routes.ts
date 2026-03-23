import { Router } from "express";
import { logIn, register } from "../controllers/auth.controller";
import validateRequest from "../middlewares/validateRequest";
import { logInSchema, registerSchema } from "../validators/auth.validator";


const router:Router = Router();

router.post("/login", validateRequest(logInSchema),logIn)
router.post("/register", validateRequest(registerSchema),register )

export default router;