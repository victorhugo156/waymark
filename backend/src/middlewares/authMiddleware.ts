import { NextFunction, Request, Response } from "express";
import UnauthorisedError from "../errors/Unauthorised";
import jwt from "jsonwebtoken"


export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const secret = process.env.JWT_SECRET

    if (!secret){
        throw new Error("JWT_SECRET is not set")
    }

    const token = req.headers.authorization

    if (!token || !token.startsWith('Bearer ')) {
        throw new UnauthorisedError()
    }

    const tokenJwt = token.replace('Bearer ', '');
    let payload;

    try{
        payload = jwt.verify(tokenJwt, secret )

        if(typeof payload === 'string'){
            throw new UnauthorisedError()
        }
    }catch(error){
        throw new UnauthorisedError()
    }

    req.user = {
        _id: payload._id,
      };
    
    next()

}