import mongoose, { Document, model, Schema } from "mongoose";

export enum RentalStatus{
    ACTIVE='active',
    RETURN="return",
} 

export interface IRental extends Document{
    userId:Schema.Types.ObjectId;
    productId:Schema.Types.ObjectId;
    tenure:number;
    startDate:Date;
    endDate:Date;
    status : RentalStatus;
    deliveryAddress:string;
}

const rentalSchema = new Schema<IRental>({
    userId:{type:Schema.Types.ObjectId, ref:"User", required:true},
    productId:{type:Schema.Types.ObjectId, ref:"Product", required:true},
    tenure:{type:Number, required:true},
    startDate:{type:Date,required:true},
    endDate:{type:Date},
    status:{type:String, enum:Object.values(RentalStatus), default:RentalStatus.ACTIVE},
    deliveryAddress:{type:String, required:true}
})

const Rental = model<IRental>("Rental", rentalSchema);
export default Rental;