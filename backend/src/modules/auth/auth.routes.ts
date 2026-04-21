import { Router } from "express";
import { loginUserHandler, register } from "./auth.controller";
import validateRequest from "../../common/middlewares/validateRequest";
import {
  logInSchema,
  registerSchema,
} from "../../common/validators/auth.validator";

const router: Router = Router();

router.post("/login", validateRequest(logInSchema), loginUserHandler);
router.post("/register", validateRequest(registerSchema), register);

export default router;
