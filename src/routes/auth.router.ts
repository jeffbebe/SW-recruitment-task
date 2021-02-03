import * as express from "express";
import { postSignup, postLogin } from "../controllers/auth.controller";

export const authRouter = express.Router();

authRouter.post(
  "/auth/signup",
  postSignup
  /* 	#swagger.tags = ['Auth']
      #swagger.description = 'Endpoint to signup ' */

  /*	#swagger.parameters['data'] = {
          in: 'body',
          description: 'User information',
          required: true,
          type: 'object',
        schema: {
            $email: "mail@mail.com", 
            $password: "password",
            $confirmPassword: "password"
        }}
  } */
  /* #swagger.responses[200] = { 
            description: 'User successfully added'} 
    } */
  /* #swagger.responses[400] = { 
            description: 'Wrong credentials, user already exists or passwords do not match'} 
    } */
  /* #swagger.responses[500] = { 
            description: 'Internal error'} 
    } */
);
authRouter.post(
  "/auth/login",
  postLogin
  /* 	#swagger.tags = ['Auth']
      #swagger.description = 'Endpoint to log in' */

  /*	#swagger.parameters['data'] = {
          in: 'body',
          description: 'User information',
          required: true,
          type: 'object',
        schema: {
            $email: "mail@mail.com", 
            $password: "password"
        }}
  } */
  /* #swagger.responses[200] = { 
            description: 'User successfully obtained.'} 
    } */
  /* #swagger.responses[400] = { 
            description: 'Wrong credentials, user already exists or passwords do not match'} 
    } */
  /* #swagger.responses[500] = { 
            description: 'Internal error'} 
    } */
);
