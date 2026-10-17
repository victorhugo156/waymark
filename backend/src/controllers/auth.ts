import { NextFunction } from "express"
import { Request, Response } from "express"
import {compare, hash, genSalt} from 'bcryptjs'
import { User } from "../models/users"
import jwt from "jsonwebtoken"
import UnauthorisedError from "../errors/Unauthorised"


export async function signin(req: Request, res: Response) {

    const {email, password} = req.body

    const user = await User.findOne({email}).select("+hashedPassword")

    if(!user){
        throw new UnauthorisedError("Email or Password Invalid")
    }

    const isPasswordCorrect = await compare(password, user.hashedPassword)

    if(!isPasswordCorrect){
        throw new UnauthorisedError("Email or Password Invalid")
    }

    const token = jwt.sign(
        {_id: user._id}, 
        process.env.JWT_SECRET || "",
        {expiresIn: 24 * 7 * 60 * 60 } //1 week
    )

    res.status(200).json({token: token})

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