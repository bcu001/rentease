import type { Response } from "express"

export const sendResponse = (
    res:Response,
    statusCode:number,
    message:string,
    data:unknown = null
) =>{
    return res.status(statusCode).json({
        success: statusCode >= 200 && 299 <= statusCode,
        message,
        data
    })
}