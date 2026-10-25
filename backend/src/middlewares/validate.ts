import {Response, Request, NextFunction} from "express"
import { z } from "zod"

export default function validate(schema: z.ZodType) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body)
        if(!result.success){
            return next(result.error)
        }
        req.body = result.data
        next()
    }
}
