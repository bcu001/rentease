import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { ENV } from "../config/env";
import { AppError } from "../errors/AppError";
import { User } from "../../modules/user/user.schema";
import { sendError } from "../utils/apiResponse";

type JwtPlayload = {
  userId: string;
};

const authorize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    Object.assign(req, { context: {} });
    let token: string;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else {
      throw new AppError("no token given");
    }

    const decoded = jwt.verify(token, ENV.JWT_SECRET) as JwtPlayload;

    const user = await User.findById(decoded.userId);

    if (!user) throw new AppError("Unauthorized", 401);

    Object.assign(req, {
      context: {
        user,
        token,
      },
    });
    next();
  } catch (error: unknown) {
    return sendError(res, error, 401, "Unauthorized");
  }
};
