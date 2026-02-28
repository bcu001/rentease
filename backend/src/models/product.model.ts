import { Schema, Document, CallbackWithoutResultAndOptionalError, model } from "mongoose";

export enum Category {
  FURNITURE = "furniture",
  APPLIANCE = "appliance",
}

export type TenureOptions = 3 | 4 | 5 | 6 | 9 | 10 | 11 | 12 | 24 | 25 | 28 | 29 | 30;


export enum ProductStatus{
    AVAILABLE="available",
    OUT_OF_STOCK="out_of_stock",
    DISCONTINUED="discontinued",
    MAINTENANCE="maintenance"
}

export interface IProduct extends Document {
  name: string;
  category: Category;
  monthlyRent:number;
  securityDeposit:number;
  availableQuantity:number;
  tenureOptions:TenureOptions[];
  status: ProductStatus
}

const productSchema = new Schema<IProduct>({
    name:{type:String,required:true},
    category:{type:String, enum: Object.values(Category), required:true},
    monthlyRent: {type:Number, required:true, min:0},
    securityDeposit:{type:Number},
    tenureOptions:[{type:Number}],
    status: {type:String, enum:Object.values(ProductStatus) , default:ProductStatus.AVAILABLE}
});

productSchema.pre('save',function(){
    if(this.monthlyRent && !this.securityDeposit){
        this.securityDeposit = this.monthlyRent * 2
    }    
})


const Product =  model<IProduct>("Product", productSchema);
export default Product;