import { Schema, model, Document, Types } from "mongoose";

export enum OrderStatus {
  ACTIVE = "active",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface IOrder extends Document {
  user: Types.ObjectId;
  product: Types.ObjectId;
  quantity: number;
  tenure: number;
  startDate: Date;
  endDate: Date;
  monthlyRentAtOrder: number;
  securityDepositAtOrder: number;
  totalRent: number;
  orderStatus: OrderStatus;
}

const orderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, min: 1 },
    tenure: { type: Number, required: true, min: 1, max: 30 },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    monthlyRentAtOrder: { type: Number, required: true, min: 0 },
    securityDepositAtOrder: { type: Number, required: true, min: 0 },
    totalRent: { type: Number, required: true, min: 0 },
    orderStatus: {
      type: String,
      enum: Object.values(OrderStatus),
      default: OrderStatus.ACTIVE,
    },
  },
  { timestamps: true },
);

orderSchema.pre("save", async function () {
  if (this.startDate && this.tenure) {
    const end = new Date(this.startDate);
    end.setMonth(end.getMonth() + this.tenure);
    this.endDate = end;
  }
  
});

const Order = model<IOrder>("Order", orderSchema);

export default Order;
