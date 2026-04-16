import { Response , Request} from "express";
import asyncHandler from "../../common/middlewares/asyncHandler";
import { User } from "./user.schema";

export const getMyProfile = asyncHandler(async(req:Request,res:Response)=>{
    const {id} = req.body;

    const user = await User.findById(id);

    res.status(200).json({
        success:true
    })
});



export const deleteMyProfile =asyncHandler(async(req:Request,res:Response)=>{
    
});



export const updateMyProfile =asyncHandler(async(req:Request,res:Response)=>{
    
});