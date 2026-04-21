import { Request, Response } from "express";
import { User } from "../user/user.schema";
import bcrypt from "bcryptjs";
import asyncHandler from "../../common/middlewares/asyncHandler";
import { AppError } from "../../common/errors/AppError";
import { normalizeUser } from "../../common/utils/normalizeUser";
import { loginUser } from "./auth.services";
import { sendSuccess } from "../../common/utils/apiResponse";

export const loginUserHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const { user, accessToken, refreshToken } = await loginUser(
      email,
      password,
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return sendSuccess(
      res,
      { user, accessToken },
      200,
      "user log in suceessfully",
    );
  },
);

export const logoutUserHandler = asyncHandler(
  async (req: Request, res: Response) => {
    User.findByIdAndUpdate(req.user._id, {
      $set: { refreshToken: undefined },
    });
    res.clearCookie("refreshToken");
    return sendSuccess(res, {}, 200,"user logged out");
  }
);

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new AppError("this email is already registered");

  const salt = await bcrypt.genSalt();

  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    passwordHash: hashedPassword,
  });

  return res.status(201).json({
    success: true,
    message: "user as been registered",
    data: {
      user: normalizeUser(newUser),
    },
  });
});
