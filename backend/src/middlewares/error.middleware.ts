import type { NextFunction, Request, Response } from "express";
import { success } from "zod";

const errorHandler = (
    err:any,
    req:Request,
    res:Response,
    next:NextFunction
) =>{
    res.status(err.statusCode || 500).json({
        success:false,
        message:err.message || "Internal server error",

    })
}

export default errorHandler;