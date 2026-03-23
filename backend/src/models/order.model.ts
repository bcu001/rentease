import { Schema, model, Document, Types } from "mongoose";

export enum OrderStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export enum PaymentStatus {
  PENDING = "pending",
  PAID = "paid",
  FAILED = "failed",
  REFUNDED = "refunded",
}

export interface IOrderItem {
  productId: Types.ObjectId;
  name: string;
  monthlyRent: number;
  deposit: number;
  quantity: number;
  rentalDuration: number;
}

export interface IOrder extends Document {
  userId: Types.ObjectId;
  items: IOrderItem[];

  totalRent: number;
  totalDeposit: number;
  totalAmount: number;

  startDate: Date;
  endDate: Date;
  deliveryAddress: string;

  status: OrderStatus;
  paymentStatus: PaymentStatus;

  createdAt: Date;
  updatedAt: Date;
}

const orderItemSchema = new Schema<IOrderItem>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    monthlyRent: {
      type: Number,
      required: true,
      min: 0,
    },
    deposit: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
    rentalDuration: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { _id: false }
);

const orderSchema = new Schema<IOrder>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: {
      type: [orderItemSchema],
      required: true,
    },

    totalRent: {
      type: Number,
      required: true,
      min: 0,
    },

    totalDeposit: {
      type: Number,
      required: true,
      min: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    deliveryAddress: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: Object.values(OrderStatus),
      default: OrderStatus.PENDING,
    },

    paymentStatus: {
      type: String,
      enum: Object.values(PaymentStatus),
      default: PaymentStatus.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

export const Order = model<IOrder>("Order", orderSchema);