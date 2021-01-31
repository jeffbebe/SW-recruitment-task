import * as express from "express";
import { postSignup } from "../controllers/auth.controller";

export const authRouter = express.Router();

authRouter.post("/auth/signup", postSignup);
