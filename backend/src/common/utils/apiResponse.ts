import { Response } from "express";

export const sendError = (res:Response, error:unknown,statusCode:number = 500, message:string = "server internal error")=>{
    res.status(statusCode).json({
        success:false,
        message,
        error
    });
};

export const sendSuccess = (res:Response, data:unknown, statusCode:number = 200, message:string = "success")=>{
    res.status(statusCode).json({
        success:true,
        message,
        data
    })
}

