import { Router } from "express";
import { getPlaces } from "../controllers/places";

const placesRouter = Router();

placesRouter.get('/', getPlaces)
//placesRouter.post('/signup', validate(signupSchema), signup)


export default placesRouter;