import Product, { IProduct } from "./product.schema";
import { createProductDTO } from "./product.types";

export const getProductByNameRepo = async (name: string) => {
  return await Product.findOne({ name });
};

export const createProductRepo = async (data: createProductDTO) => {
  return await Product.create(data);
};

export const getTopProductsRepo = async () => {
  return await Product.find().limit(4);
};

export const getProductsRepo = async (queryFilter: any) => {
  return await Product.find(queryFilter);
};

export const getProductByIdRepo = async (id?: string) => {
  return await Product.findById(id);
};

export const findProductUpdateRepo = async (
  updateData: Partial<IProduct>,
  id: string,
) => {
  return await Product.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true, runValidators: true },
  );
};
