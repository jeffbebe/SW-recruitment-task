import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { loadEnvs } from "../../config/env";
loadEnvs();

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /*   try {
    var decoded = jwt.verify(process.env.TOKENSECRET, "shhhhh");
  } catch (err) {
    res.status(400).send();
  } */
};
