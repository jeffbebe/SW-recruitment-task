import { Request, Response, NextFunction } from "express";
const axios = require("axios").default;
import { UserModel } from "../models/User.model";
import {
  requestResourceSWAPI,
  requestUrlSwapi,
} from "../middleware/sw-request.middleware";
import { WrongCredentialsError } from "../errors/wrongCredentials.error";
import { ForbiddenError } from "../errors/forbidden.error";

export const getResources = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = global.dbConnection.getRepository(UserModel);

  const { resources } = req.params;

  try {
    const user = await userRepository.findOne({ id: res.locals.userID });
    if (!user) {
      throw new WrongCredentialsError("There is no such user");
    }
    const heroData = await requestResourceSWAPI("people", user.heroID);

    const heroRequests = heroData[resources].map((resource: string) =>
      requestUrlSwapi(resource)
    );
    const data = await Promise.all(heroRequests);

    res.status(200).send(data); //send resource
  } catch (err) {
    next(err);
  }
};

export const getSingleResource = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = global.dbConnection.getRepository(UserModel);
  const { resources, id } = req.params;
  let data: string = "";
  try {
    const user = await userRepository.findOne({ id: res.locals.userID });

    if (!user) {
      throw new WrongCredentialsError("User does not exist");
    }
    const hero = await requestResourceSWAPI("people", user.heroID);
    for (let resource of hero[resources]) {
      if (resource.search("/" + id + "/") != -1) {
        data = await requestUrlSwapi(resource);
      } else
        throw new ForbiddenError("User does not have access to that resource");
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
