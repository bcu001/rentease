import { Request, Response } from "express";
import asyncHandler from "../helpers/asyncHandler";
import Product, { IProduct } from "../models/product.model";
import { AppError } from "../helpers/AppError";
import { sendSuccess } from "../helpers/response";

export const getTopProducts = asyncHandler(
  async(req:Request, res:Response)=>{
    console.log("apple")
    const productList = await Product.find().limit(4);
    return sendSuccess(res,productList,200,"top 4 product")
    // return sendSuccess(res, "get apple")
  }
)

export const getProducts = asyncHandler(
  async (req: Request, res: Response) => {
    console.log("get products")
    const { name, category, monthlyRent } = req.query;
    // console.log({name,category,monthlyRent})
    const queryFilter:any  ={};
    if(name === "string") queryFilter.name = {$regex:name, options:"i"};
    if(category !==undefined) queryFilter.category = category;
    if(monthlyRent !== undefined) queryFilter.monthlyRent = { $lte: Number(monthlyRent) };
    const filterData = await Product.find(queryFilter);

    return sendSuccess(res, filterData);
  }
);

export const getProductById = asyncHandler(
  async (req: Request, res: Response) => {
    console.log("getprdocut by id")
     const {id} = req.params;
    const product = await Product.findById(id);
    return sendSuccess(res,product);
  },
);
export const createProduct = asyncHandler(
  async (req: Request, res: Response) => {
    console.log("create producti")
    const {name, category, monthlyRent, availableQuantity} = req.body;

    const existingProduct = await Product.findOne({name});
    if (existingProduct) { 
        throw new AppError("product already exist")
    }

    const newProduct = await Product.create({name, category, monthlyRent, availableQuantity});

    return sendSuccess(res, newProduct )
  },
);
export const updateProduct = asyncHandler(
  async (req: Request, res: Response) => {
    console.log("update product")
    const { id } = req.params;
    const { name, category, monthlyRent, availableQuantity } = req.body;

    const product = await Product.findById(id);
    if (!product) {
      throw new AppError("Product not found", 404);
    }

    
    const updateData: Partial<IProduct> = {};
    if (name !== undefined) updateData.name = name;
    if (category !== undefined) updateData.category = category;
    if (monthlyRent !== undefined) updateData.monthlyRent = monthlyRent;
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
  async (req: Request, res: Response) => {
    console.log("delete product")
  },
);
