import { NextFunction, Request, Response } from "express"
import NotFoundError from "../errors/NotFoundError";
import { Place } from "../models/places";


interface PlaceFilter{
    featured?: boolean
}

export async function getPlaces(req: Request, res: Response, next: NextFunction) {
    try {

        const {featured } = req.query

        const filter: PlaceFilter = {}

        if(featured === "true"){
            filter.featured = true
        }

        const places = await Place.find(filter)

        return res.status(200).json(places)

    } catch (error) {
        next(error)
    }


}