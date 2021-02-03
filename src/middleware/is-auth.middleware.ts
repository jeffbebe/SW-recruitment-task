import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/unauthorized.error";

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
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw new UnauthorizedError("Token field empty");
    }
    const [, userAccessToken] = String(authorizationHeader).split(" ");

    const decoded = jwt.verify(
      userAccessToken,
      process.env.TOKENSECRET as string
    ) as TokenPayload;
    res.locals.userID = decoded.userID;
    next();
  } catch (err) {
    next(new UnauthorizedError("Wrong token"));
  }
};
