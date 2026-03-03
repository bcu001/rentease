import {
  Schema,
  Document,
  CallbackWithoutResultAndOptionalError,
  model,
} from "mongoose";

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
  category: Category;
  monthlyRent: number;
  securityDeposit: number;
  availableQuantity: number;
  tenureOptions: number[];
  status: ProductStatus;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  category: { type: String, enum: Object.values(Category), required: true },
  monthlyRent: { type: Number, required: true, min: 0 },
  securityDeposit: { type: Number },
  availableQuantity:{type:Number, required:true, default:1, min:0},
  tenureOptions: { type: [Number], required: true, min: 1 },
  status: {
    type: String,
    enum: Object.values(ProductStatus),
    default: ProductStatus.AVAILABLE,
  },
});

productSchema.pre("save", async function () {
  if (this.monthlyRent && !this.securityDeposit) {
    this.securityDeposit = this.monthlyRent * 2;
  }
});

const Product = model<IProduct>("Product", productSchema);
export default Product;
