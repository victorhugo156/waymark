import { NextFunction } from "express"
import { Request, Response } from "express"
import {compare, hash, genSalt} from 'bcryptjs'
import { User } from "../models/users"

export async function signin(req: Request, res: Response) {

    const myHello = req.body

    return(myHello)

}

export async function signup(req: Request, res: Response, next: NextFunction) {
    try {
        const { username, email, password } = req.body
        
        const salt = await genSalt(10)
        const hashedPassword = await hash(password, salt)

        const userCreated = await User.create({ username, email, hashedPassword})
    } catch (error) {
        next(error)
    }

    res.status(201).json({ message: 'User created successfully'})

}