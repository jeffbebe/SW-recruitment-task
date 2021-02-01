import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export interface TokenPayload {
  userID: string;
  iat: number;
  exp: number;
}

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.body;
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      res.status(400).send();
      throw new Error("No token");
    }
    const [, userAccessToken] = String(authorizationHeader).split(" ");

    const decoded = jwt.verify(
      userAccessToken,
      process.env.TOKENSECRET as string
    ) as TokenPayload;

    res.locals.userID = decoded.userID;
    next();
  } catch (err) {
    res.status(401).send();
  }
};
