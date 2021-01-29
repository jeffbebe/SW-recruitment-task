import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/user.model";

exports.postLogin = async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = global.dbConnection.getRepository(UserModel);

  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await userRepository.findOne({ email });
    if (!user) {
      throw new Error("There is no such user");
    }
  } catch (err) {
    next(err);
  }
};

exports.postSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = global.dbConnection.getRepository(UserModel);

  const email: string = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  try {
    const user = await userRepository.findOne({ email });

    /*       if (user) {
        throw new WrongCredentials("User already exists", 400);
      } */
    /*       if (password !== confirmPassword) {
        throw new WrongCredentials("Passwords do not match", 400);
      } */

    //const hashedPassword = await bcrypt.hash(password, 12);
    /*     const createdUser = await User.create({
      email: email,
      password: hashedPassword,
      isAdmin: false,
    }); */
  } catch (err) {
    next(err);
  }
};
