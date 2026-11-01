// app.get('/places', async (req, res) => {
//     const search = req.query.search;
  
//     console.log('Searching for:', search);
  
//       const url =
//       'https://api.transport.nsw.gov.au/v1/tp/stop_finder' +
//       '?outputFormat=rapidJSON' +
//       '&type_sf=any' +
//       `&name_sf=${encodeURIComponent(search as string)}` +
//       '&coordOutputFormat=EPSG:4326' +
//       '&TfNSWSF=true';
  
//     const response = await fetch(url, {
//       headers: {
//         Authorization: `apikey ${process.env.TFNSW_API_KEY}`,
//       },
//     });
  
//     const data = await response.json();
  
//     res.json(data);
     
//   });


import { Router } from "express";
import validate from "../middlewares/validate";
import { z } from "zod";
import { getPlaces } from "../controllers/places";

const placesRouter = Router();

// const signupSchema = z.object({
//     username: z.string().min(3).max(20),
//     email: z.email(),
//     password: z.string().min(8),
//     accessibilityPreferences: z.array(
//       z.enum([
//         'wheelchair_transport',
//         'avoid_stairs',
//         'hearing_information',
//         'quiet_environment',
//       ])
//     ).default([]),
//   })

//   const signinSchema = z.object({
//     email: z.email(),
//     password: z.string().min(8),
//   })

placesRouter.get('/', getPlaces)
//placesRouter.post('/signup', validate(signupSchema), signup)


export default placesRouter;