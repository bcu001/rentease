import { IUser } from "../models/user.model";

export const normalizeUser = (user:IUser)=>{
    return {
          id:user._id,
          name: user.name,
          email: user.email,
          createdAt:user.createdAt
    }
}