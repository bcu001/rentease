import Product, { IProduct } from "./product.schema";
import { AppError } from "../../common/errors/AppError";
import {
  createProductDTO,
  getProdcutByIdDTO,
  getProductsDTO,
  updateProductDTO,
} from "./product.types";
import {
  createProductRepo,
  findProductUpdateRepo,
  getProductByIdRepo,
  getProductByNameRepo,
  getProductsRepo,
  getTopProductsRepo,
} from "./product.repository";
import { Request } from "express";

export const createProduct = async (data: createProductDTO) => {
  const { name, description, category, rentAmount, stock } = data;

  const existingProduct = await getProductByNameRepo(name);
  if (existingProduct) {
    throw new AppError("product already exist");
  }

  return await createProductRepo({
    name,
    description,
    category,
    rentAmount,
    stock,
  });
};

export const getTopProducts = async () => {
  return await getTopProductsRepo();
};

export const getProducts = async (data: getProductsDTO) => {
  const { name, category, rentAmount } = data;
  const queryFilter: any = {};

  if (name) queryFilter.name = { $regex: name, options: "i" };
  if (category) queryFilter.category = category;
  if (rentAmount) queryFilter.rentAmount = { $lte: Number(rentAmount) };

  const filterData = await getProductsRepo(queryFilter);
  return filterData;
};

export const getProductById = async (data: getProdcutByIdDTO) => {
  const { id } = data;
  return await getProductByIdRepo(id);
};

export const updateProduct = async (data: updateProductDTO, req: Request) => {
  console.log("update product");
  const { id } = req.params;
  const { name, category, rentAmount, stock } = data;

  const product = await getProductByIdRepo(id as string);
  if (!product) {
    throw new AppError("Product not found", 404);
  }

  const updateData: Partial<IProduct> = {};
  if (name !== undefined) updateData.name = name;
  if (category !== undefined) updateData.category = category;
  if (rentAmount !== undefined) updateData.rentAmount = rentAmount;
  if (stock !== undefined) updateData.stock = stock;

  return await findProductUpdateRepo(updateData, id as string);
};

export const deleteProduct = async () => {
  console.log("delete product");
};
