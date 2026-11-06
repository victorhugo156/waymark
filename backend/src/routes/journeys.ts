import { Router } from "express";
import { getJourney } from "../controllers/journeys";
import validate from "../middlewares/validate";
import { z } from "zod";

const journeysRouter = Router();

const journeySchema = z.object({
  origin: z.string().trim().min(1, 'Origin is required'),
  destination: z.string().trim().min(1, 'Destination is required'),
})

journeysRouter.post('/', validate(journeySchema), getJourney)


export default journeysRouter;