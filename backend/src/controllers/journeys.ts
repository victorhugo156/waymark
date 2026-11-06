import { NextFunction, Request, Response } from "express"

export async function getJourney(req: Request, res: Response, next: NextFunction) {
    try {

        const response = await req.body

        return res.status(200).json(response)

    } catch (error) {
        next(error)
    }


}