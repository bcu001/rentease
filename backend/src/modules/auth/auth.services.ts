import { AppError } from "../../common/errors/AppError";
import { User } from "../user/user.schema";
import { normalizeUser } from "../../common/utils/normalizeUser";

const generateAccessAndRefreshTokens = async (userId: string) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new AppError("user not found");
    }
    const accessToken = user?.generateAccessToken();
    const refreshToken = user?.generateRefreshToken();
    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new AppError(
      "something went wrong while generating access and refresh tokens",
    );
  }
};

export const loginUser = async (email: string, password: string) => {
  const existingUser = await User.findOne({ email }).select("+passwordHash");

  if (!existingUser) {
    throw new AppError("no user exists", 404);
  }

  const validatePass = await existingUser.isPasswordValid(password);

  if (!validatePass) {
    throw new AppError("inccorect password", 401);
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    existingUser._id.toString(),
  );

  return { user: normalizeUser(existingUser), accessToken, refreshToken };
};

export const registerUser = async (
  email: string,
  password: string,
  name: string,
) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new AppError("this email is already registered");

  return await User.create({
    name,
    email,
    passwordHash: password,
  });
};
