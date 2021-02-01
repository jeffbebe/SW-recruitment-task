import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/User.model";
import * as jwt from "jsonwebtoken";
const axios = require("axios").default;

const getHero = async (id: number) => {
  try {
    const response = await axios.get(
      "https://swapi.dev/api/people/" + id.toString()
    );
    return response.data.name;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

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
      throw new Error("There is no such user");
    }

    res.status(200).send(resources); //send resource
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
  console.log(req.body);
  const { email, password, confirmPassword } = req.body;
  let salt: string, hashedPassword: string;

  try {
    /*  const user = await userRepository.findOne({ email });

    if (user) {
      throw new Error("User already exists");
    }
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }
    const newUser = UserModel.create({
      email,
      password: hashedPassword,
      salt,
      heroID,
      heroName,
    });
    await userRepository.save(newUser); */
    res.status(200).send(JSON.stringify("user created"));
  } catch (err) {
    next(err);
  }
};
