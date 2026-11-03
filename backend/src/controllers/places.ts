import { NextFunction, Request, Response } from "express"
import { getGooglePlaceDetails } from "../services/googlePlaces";
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

export async function getPlaceById(req: Request, res: Response, next: NextFunction) {
    console.log('GET PLACE BY ID CONTROLLER REACHED')
    try {

        const place = await Place.findById(req.params.id)

        if(!place){
            return res.status(404).json({
                message: 'Place not found'
              })
        }

        if (!place.googlePlaceId) {
            return res.status(200).json(place)
          }

        const googleDetails = await getGooglePlaceDetails(place.googlePlaceId)

        return res.status(200).json({
            ...place.toObject(),
            accessibility: googleDetails.accessibility,
          })

    } catch (error) {
        next(error)
    }


}

