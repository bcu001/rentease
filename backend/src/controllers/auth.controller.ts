import { Request, Response } from "express"
import { User } from "../models/user.model";
import bcrypt from 'bcryptjs'
import { ENV } from "../config/env";
import jwt from 'jsonwebtoken'
import asyncHandler from "../helpers/asyncHandler";
import { AppError } from "../helpers/AppError";

export const logIn = asyncHandler(async(req:Request, res:Response)=>{
        const {email, password} = req.body;

        const existingUser = await User.findOne({email}).select("+hashedPassword");

        if(!existingUser){
            throw new AppError("no user exists", 404);
        }

        const validatePass = bcrypt.compare(password, existingUser.hashedPassword);

        if(!validatePass){
            throw new AppError("inccorect password",401);
        }

        const token = jwt.sign({userId:existingUser._id}, ENV.JWT_SECRET , {expiresIn:ENV.JWT_EXPIRE_IN as jwt.SignOptions["expiresIn"] });

        return res.json({
            success:true,
            message:"user log in successfully",
            data:{
                token,
                user: {
                    id: existingUser._id,
                    name: existingUser.name,
                    email: existingUser.email,
                    createdAt: existingUser.createdAt
                }
            }
        })
} )

export const register = asyncHandler(async(req:Request, res:Response)=>{
    const {name, email, password } = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser) throw new AppError("this email is already registered");

    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({name , email, hashedPassword});

   return res.status(201).json({
    success:true,
    message:"user as been registered",
    data:{
        user:newUser,
    }
   })
})