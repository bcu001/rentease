import { Request, Response } from "express";
import asyncHandler from "../../common/middlewares/asyncHandler";
import { sendSuccess } from "../../common/utils/apiResponse";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  getTopProducts,
  updateProduct,
} from "./product.service";
import { getProdcutByIdDTO, getProductsDTO } from "./product.types";

export const getTopProductsHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const productList = await getTopProducts();
    return sendSuccess(res, productList, 200, "top 4 product");
  },
);

export const getProductsHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const filterData = await getProducts(req.query as getProductsDTO);
    return sendSuccess(res, filterData);
  },
);

export const getProductByIdHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const product = await getProductById(req.params as getProdcutByIdDTO);
    return sendSuccess(res, product);
  },
);

export const createProductHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const newProduct = await createProduct(req.body);

    return sendSuccess(res, newProduct);
  },
);

export const updateProductHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const updatedProduct = await updateProduct(req.body, req);
    return sendSuccess(res, updatedProduct);
  },
);

export const deleteProductHandler = asyncHandler(
  async (req: Request, res: Response) => {
   deleteProduct();
  },
);
