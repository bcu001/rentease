import { Schema, model, Document } from "mongoose";

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER"
}

export interface IUser extends Document {
  name:string;
  email: string;
  hashedPassword: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name:{
      type:String,
      required:true,
      lowercase:true,
      trim:true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    hashedPassword: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER
    },
    
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>("User", UserSchema);
