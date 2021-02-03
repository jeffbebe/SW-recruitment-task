import { Request, Response, NextFunction } from "express";
import { WrongCredentialsError } from "../errors/wrongCredentials.error";
import { UnauthorizedError } from "../errors/unauthorized.error";
import { NotFoundError } from "../errors/notFound.error";
import { ForbiddenError } from "../errors/forbidden.error";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (error instanceof WrongCredentialsError) {
      res.status(error.status).json(error.message);
      return;
    }

    if (error instanceof NotFoundError) {
      res.status(error.status).json(error.message);
      return;
    }
    if (error instanceof UnauthorizedError) {
      res.status(error.status).json(error.message);
      return;
    }
    if (error instanceof ForbiddenError) {
      res.status(error.status).json(error.message);
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};
