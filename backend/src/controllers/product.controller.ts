import { Request, Response } from "express";
import asyncHandler from "../helpers/asyncHandler";
import Product, { IProduct } from "../models/product.model";
import { AppError } from "../helpers/AppError";
import { sendSuccess } from "../helpers/response";

export const getProducts = asyncHandler(
  async (req: Request, res: Response) => {},
);

export const getProductById = asyncHandler(
  async (req: Request, res: Response) => {},
);
export const createProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const {name, category, monthlyRent, tenureOptions, availableQuantity} = req.body;

    const existingProduct = await Product.findOne({name});
    if (existingProduct) { 
        throw new AppError("product already exist")
    }

    const newProduct = await Product.create({name, category, monthlyRent, tenureOptions, availableQuantity});

    return sendSuccess(res, newProduct )
  },
);
export const updateProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, category, monthlyRent, tenureOptions, availableQuantity } = req.body;

    const product = await Product.findById(id);
    if (!product) {
      throw new AppError("Product not found", 404);
    }

    
    const updateData: Partial<IProduct> = {};
    if (name !== undefined) updateData.name = name;
    if (category !== undefined) updateData.category = category;
    if (monthlyRent !== undefined) updateData.monthlyRent = monthlyRent;
    if (tenureOptions !== undefined) updateData.tenureOptions = tenureOptions;
    if (availableQuantity !== undefined) updateData.availableQuantity = availableQuantity;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    return sendSuccess(res, updatedProduct);
  }
);

export const deleteProduct = asyncHandler(
  async (req: Request, res: Response) => {},
);
