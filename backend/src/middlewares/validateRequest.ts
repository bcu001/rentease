import { Request, Response,NextFunction } from 'express'

import * as z from 'zod'

const validateRequest = (zodSchema:z.ZodObject)=>{
    return function (req:Request, res:Response, next:NextFunction){
        const validate = zodSchema.safeParse(req.body);

        if ( !validate.success){
            let errMessage =  validate.error.issues.map(e=>e.message)
            return res.json({
                success:false,
                message: errMessage,
                validate:{"shit": validate.error}
            })
        }

        req.body = validate.data;
        next();
    }
}

export default validateRequest;
