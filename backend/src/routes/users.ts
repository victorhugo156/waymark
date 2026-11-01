import { Router } from "express";
import { signin, signup, refreshedToken, logout } from "../controllers/auth";
import validate from "../middlewares/validate";
import { z } from "zod";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { getCurrentUser } from "../controllers/users";

const usersRouter = Router();

usersRouter.get('/me', AuthMiddleware, getCurrentUser)


export default usersRouter;