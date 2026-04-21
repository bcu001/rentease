import { IUser } from "../../modules/user/user.schema";

export declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}
