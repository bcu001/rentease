import { Schema, Document, model } from "mongoose";

export enum Category {
  FURNITURE = "furniture",
  APPLIANCE = "appliance",
}

export enum ProductStatus {
  AVAILABLE = "available",
  OUT_OF_STOCK = "out_of_stock",
  DISCONTINUED = "discontinued",
  MAINTENANCE = "maintenance",
}

export interface IProduct extends Document {
  name: string;
  description:string;
  category: Category;
  rentAmount: number;
  depositAmount: number;
  stock: number;
  // tenureOptions: number[];
  status: ProductStatus;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true,lowercase:true, index: true },
  description:{type:String, required:true, lowercase:true},
  category: { type: String, enum: Object.values(Category), required: true },
  rentAmount: { type: Number, required: true, min: 0 },
  depositAmount: { type: Number },
  stock: { type: Number, required: true, default: 1, min: 0 },
  // tenureOptions: { type: [Number], required: true, min: 1 },
  status: {
    type: String,
    enum: Object.values(ProductStatus),
    default: ProductStatus.AVAILABLE,
  },
});

productSchema.pre("save", async function () {
  if (this.rentAmount && !this.depositAmount) {
    this.depositAmount = this.rentAmount * 2;
  }
});

const Product = model<IProduct>("Product", productSchema);
export default Product;
