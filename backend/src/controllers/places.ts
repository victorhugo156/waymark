import { NextFunction, Request, Response } from "express"
import NotFoundError from "../errors/NotFoundError";
import { Place } from "../models/places";

export async function getPlaces(req: Request, res: Response, next: NextFunction) {
    try {
        const places = await Place.find({featured: true})

        if(!places){
            throw new NotFoundError("Place has not been found")
        }

        console.log(places)
        return res.status(200).json(places)

    } catch (error) {
        next(error)
    }


}