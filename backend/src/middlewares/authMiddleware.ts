import { NextFunction, Request, Response } from "express";

export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {

    const token = req.headers.authorization

    if (token !== "secret-1234567890") {
        return res.status(401).json({ message: "Unauthorized" })
    }

next()

}