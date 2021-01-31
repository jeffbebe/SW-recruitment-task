import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/User.model";
import * as jwt from "jsonwebtoken";
import * as crypto from "crypto";
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
    //wyslac token

    jwt.sign({
      data: 'foobar'
    }, 'secret', { expiresIn: 60 * 60 });
    //const token:string;

    res.status(200).send();
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
  console.log(req.body);
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

    const heroID: number = Math.floor(Math.random() * (10 - 1) + 1);
    const heroName: string = await getHero(heroID);

    const newUser = UserModel.create({
      email,
      password: hashedPassword,
      salt,
      heroID,
      heroName,
    });
    await userRepository.save(newUser);
    res.status(200).send(JSON.stringify("user created"));
  } catch (err) {
    next(err);
  }
};
