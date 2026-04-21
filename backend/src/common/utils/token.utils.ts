import jwt from "jsonwebtoken";
import { ENV } from "../config/env";

type accessTokenPlayload = {
  _id: string;
  email: string;
  name: string;
};

type refreshTokenPlayload = {
  _id: string;
};

export const generateAccessToken = (payload: accessTokenPlayload) => {
  return jwt.sign(payload, ENV.ACCESS_TOKEN_SECRET, {
    expiresIn: ENV.ACCESS_TOKEN_EXPIRY as jwt.SignOptions["expiresIn"],
  });
};

export const generateRefreshToken = (payload: accessTokenPlayload) => {
  return jwt.sign(payload, ENV.REFRESH_TOKEN_SECRET, {
    expiresIn: ENV.REFRESH_TOKEN_EXPIRY as jwt.SignOptions["expiresIn"],
  });
};
