import { Router } from "express";
import { signin, signup, refreshedToken, logout } from "../controllers/auth";
import validate from "../middlewares/validate";
import { z } from "zod";
import { AuthMiddleware } from "../middlewares/authMiddleware";

const authRouter = Router();

const signupSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.email(),
    password: z.string().min(8),
    accessibilityPreferences: z.array(
      z.enum([
        'wheelchair_transport',
        'avoid_stairs',
        'hearing_information',
        'quiet_environment',
      ])
    ).default([]),
  })

  const signinSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
  })

authRouter.post('/signin', validate(signinSchema), signin)
authRouter.post('/signup', validate(signupSchema), signup)

authRouter.post('/refresh', refreshedToken)

authRouter.post('/logout', AuthMiddleware, logout)


export default authRouter;