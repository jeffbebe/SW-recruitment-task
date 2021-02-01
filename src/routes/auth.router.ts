import * as express from "express";
import { postSignup, postLogin } from "../controllers/auth.controller";

export const authRouter = express.Router();

authRouter.post("/auth/signup", postSignup);
authRouter.post("/auth/login", postLogin);
