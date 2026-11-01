import { Request, Response, NextFunction } from "express"
import { User } from "../models/users";
import NotFoundError from "../errors/NotFoundError";

export async function getCurrentUser(req: Request, res: Response, next: NextFunction) {

    try {
        const currentUser = req.user._id

        const user = await User.findById(currentUser)
            .select('username email accessibilityPreferences')

        if (!user) {
            throw new NotFoundError('User not found');
        }

        res.status(200).json(user)
    } catch (error) {
        next(error)
    }


}