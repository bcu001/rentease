import { Request, Response } from "express";
import { Cart } from "./cart.schema";
import asyncHandler from "../../common/middlewares/asyncHandler";
import { sendSuccess } from "../../common/utils/apiResponse";
import Product from "../product/product.schema";
import { AppError } from "../../common/errors/AppError";

export const addCart = asyncHandler(async (req: Request, res: Response) => {
  const { productId, quantity = 1, rentDuration, userId } = req.body;

  // change the userID from body to req.user.userId

  const product = await Product.findById(productId);

  if (!product) {
    throw new AppError("product not found", 404);
  }

  if (product.stock < quantity) {
    throw new AppError(
      `only ${product.stock} items are available`,
      400,
    );
  }

  let userCart = await Cart.findOne({ userId });
  if (!userCart) {
    userCart = await Cart.create({
      userId,
      items: [{ productId, quantity, rentDuration }],
    });

    return sendSuccess(res, userCart);
  }

  const existingItem = userCart.items.find(
    (item) => item.productId === productId,
  );

  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.rentDuration = rentDuration;

    if (existingItem.quantity > product.stock) {
      throw new AppError(
        `only ${product.stock} items are available`,
        400,
      );
    }
  } else {
    userCart.items.push({ productId, quantity, rentDuration });
  }

  await userCart.save();
  return sendSuccess(res, userCart);
});

export const updateCart = asyncHandler(
  async (req: Request, res: Response) => {
    const { items ,userId} = req.body;
    const userCart = await Cart.findOne({userId});
    if(!userCart){
      throw new AppError("cart not found",404);
    }

    userCart.items = items;
    await userCart.save();
    return sendSuccess(res, userCart);
  },
);

export const getCart = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.body;
  const userCart = await Cart.findOne({ userId });
  if (!userCart) {
    throw new AppError("cart not found", 404);
  }
  return sendSuccess(res, userCart);
});

export const removeItemCart = asyncHandler(
  async (req: Request, res: Response) => {},
);
export const clearCart = asyncHandler(
  async (req: Request, res: Response) => {},
);
