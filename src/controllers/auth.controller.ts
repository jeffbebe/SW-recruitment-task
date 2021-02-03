import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/User.model";
import * as jwt from "jsonwebtoken";
import * as crypto from "crypto";
const axios = require("axios").default;
import { requestResourceSWAPI } from "../middleware/sw-request.middleware";

export const postLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = global.dbConnection.getRepository(UserModel);

  const { email, password } = req.body;

  try {
    const user = await userRepository.findOne({ email });
    if (!user) {
      throw new Error("There is no such user");
    }
    const hashedPassword = crypto
      .pbkdf2Sync(password, user.salt, 1000, 64, `sha512`)
      .toString(`hex`);

    if (hashedPassword != user.password) {
      throw new Error("Wrong password");
    }

    const token = jwt.sign(
      { userID: user.id },
      process.env.TOKENSECRET as string,
      { expiresIn: 60 * 60 }
    );
    res.status(200).json({ accessToken: token });
  } catch (err) {
    next(err);
  }
};

export const postSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = global.dbConnection.getRepository(UserModel);

  const { email, password, confirmPassword } = req.body;
  let salt: string, hashedPassword: string;

  try {
    const user = await userRepository.findOne({ email });

    if (user) {
      throw new Error("User already exists");
    }
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }
    // generate random 16 bytes long salt
    salt = crypto.randomBytes(16).toString("hex");
    hashedPassword = crypto
      .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
      .toString(`hex`);
    const peopleObj = await requestResourceSWAPI("people");
    console.log(peopleObj);
    console.log(peopleObj.count);
    const heroAmount = parseInt(peopleObj.count);
    const heroID: number = Math.floor(Math.random() * (heroAmount - 1) + 1);
    const response = await requestResourceSWAPI("people", heroID);
    const heroName = response.name;

    const newUser = UserModel.create({
      email,
      password: hashedPassword,
      salt,
      heroID,
      heroName,
    });
    await userRepository.save(newUser);
    res.status(200).send();
  } catch (err) {
    next(err);
  }
};
