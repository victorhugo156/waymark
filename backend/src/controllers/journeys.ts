import { NextFunction, Request, Response } from "express"
import { searchTfNSWLocation, getTfNSWJourney } from "../services/tfnw"

export async function getJourney(req: Request, res: Response, next: NextFunction) {
    try {

        const {origin, destination } = req.body

        const originLocation = await searchTfNSWLocation(origin)
        const destinationLocation = await searchTfNSWLocation(destination)

        const journey = await getTfNSWJourney(
            originLocation,
            destinationLocation
          )

        return res.status(200).json({ journey})

    } catch (error) {
        next(error)
    }


}