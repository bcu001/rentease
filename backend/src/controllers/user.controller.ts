import { Response , Request} from "express";
import asyncHandler from "../helpers/asyncHandler";
import { User } from "../models/user.model";

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