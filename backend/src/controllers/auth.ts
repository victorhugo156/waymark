import { NextFunction } from "express"
import { Request, Response } from "express"
import {compare, hash, genSalt} from 'bcryptjs'
import { User } from "../models/users"
import jwt from "jsonwebtoken"
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import UnauthorisedError from "../errors/Unauthorised"
import ConflictError from "../errors/ConflictError"
import { randomUUID } from 'node:crypto';



const ONE_WEEK_SECONDS = 7 * 24 * 60 * 60;
const ONE_WEEK_MS = ONE_WEEK_SECONDS * 1000;
const FIVE_MINUTES = 5 * 60;

const isProduction = process.env.NODE_ENV === 'production';


// export const signupSchema = z.object({
//     username: z.string().trim().min(3).max(20),
//     email: z.email(),
//     password: z.string().min(8).max(30),
//     accessibilityPreferences: z.array(
//       z.enum([
//         'wheelchair_transport',
//         'avoid_stairs',
//         'hearing_information',
//         'quiet_environment',
//       ])
//     ).default([]),
//   });

//   export const signinSchema = z.object({
//     email: z.email(),
//     password: z.string().min(8).max(30),
//   });


  export async function signup(req: Request, res: Response, next: NextFunction) {

    try {
        const {
            username,
            email,
            password,
            accessibilityPreferences
          } = req.body;
    
        const isEmailExist = await User.findOne({ email } )
    
        if(isEmailExist){
            throw new ConflictError('Email already registered');
        }
        
        const salt = await genSalt(10)
        const hashedPassword = await hash(password, salt)

        const userCreated = await User.create({ username, email, hashedPassword, accessibilityPreferences})
        
        res.status(201).json({ message: 'User created successfully'})
    } catch (error) {
        next(error)
    }
    

}

export async function signin(req: Request, res: Response) {

    const {email, password} = req.body;

    const user = await User.findOne({email}).select("+hashedPassword")

    if(!user){
        throw new UnauthorisedError("Email or Password Invalid")
    }

    const isPasswordCorrect = await compare(password, user.hashedPassword)

    if(!isPasswordCorrect){
        throw new UnauthorisedError("Email or Password Invalid")
    }

    if(!process.env.JWT_SECRET || !process.env.JWT_REFRESH_SECRET){
        throw new UnauthorisedError("❌ Invalid or missing environment configuration")
    }

    const token = jwt.sign(
        {_id: user._id}, 
        process.env.JWT_SECRET,
        {expiresIn: FIVE_MINUTES}
    )

    const refreshToken = jwt.sign(
        {
            _id: user._id,
            jti: randomUUID(),
        },
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: ONE_WEEK_SECONDS }
    )

    const salt = await genSalt(10);
    user.refreshToken = await hash(refreshToken, salt);
    await user.save();

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'none' : 'lax',
        maxAge: ONE_WEEK_MS,
      });

    res.status(200).json({token: token})
}

export async function refreshedToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;
  
      if (!refreshToken) {
        throw new UnauthorisedError('Unauthorized');
      }

      const jwt_refresh_secret = process.env.JWT_REFRESH_SECRET || ""
  
      const payload = jwt.verify(refreshToken, jwt_refresh_secret );

      if (typeof payload === "string") {
        throw new UnauthorisedError("Unauthorized")
      }
      const { _id } = payload

      const user = await User.findById(_id).select('+refreshToken');
  
      if (!user || !user.refreshToken) {
        throw new UnauthorisedError('Unauthorized');
      }
  
      const isRefreshTokenValid = await compare(refreshToken, user.refreshToken);
  
      if (!isRefreshTokenValid) {
        throw new UnauthorisedError('Unauthorized');
      }
  
      const token = jwt.sign(
        { _id: user._id },
        process.env.JWT_SECRET || "",
        { expiresIn: 5 * 60 }, // 5 minutes
      );
      const newRefreshToken = jwt.sign(
        { 
            _id: user._id, 
            jti: randomUUID(), 
        },
        process.env.JWT_REFRESH_SECRET || "",
        { expiresIn: ONE_WEEK_SECONDS },
      );
  
      const salt = await genSalt(10);
      user.refreshToken = await hash(newRefreshToken, salt);
      await user.save();
      res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'none' : 'lax',
        maxAge: ONE_WEEK_MS,
      });
  
      return res.status(200).json({ token });
    } catch (error) {
        if ( error instanceof JsonWebTokenError) {
            return next(new UnauthorisedError('Unauthorized'));
          }
        
          return next(error);
    }
  }

  export async function logout(req: Request, res: Response, next: NextFunction){

    const userId = req.user._id
    try{

        await User.findByIdAndUpdate(userId, {refreshToken: null})

        res.clearCookie(
            'refreshToken',
            {
                httpOnly: true,
                secure: isProduction,
                sameSite: isProduction ? 'none' : 'lax',
            }
        )

        res.status(204).send()
        
    }catch(error){
        next(error)
    }
  }




