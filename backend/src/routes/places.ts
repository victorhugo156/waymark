import { Router } from "express";
import { getPlaces, getPlaceById } from "../controllers/places";

const placesRouter = Router();

placesRouter.get('/', getPlaces)
placesRouter.get('/:id', getPlaceById)


export default placesRouter;