import { IUser } from "../../modules/user/user.schema";

export const normalizeUser = (user:IUser)=>{
    return {
          id:user._id,
          name: user.name,
          email: user.email,
          createdAt:user.createdAt
    }
}