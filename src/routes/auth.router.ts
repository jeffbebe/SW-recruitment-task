import * as express from "express";
import { postSignup, postLogin } from "../controllers/auth.controller";

export const authRouter = express.Router();

authRouter.post("/auth/signup", postSignup);
authRouter.post(
  "/auth/login",
  postLogin
  /* 	#swagger.tags = ['Login']
      #swagger.description = 'Endpoint to log in' 
      #security: bearerAuth[]*/

  /*	#swagger.parameters['data'] = {
          in: 'body',
          description: 'User information.',
          required: true,
          type: 'object',
        schema: {
            $email: "mail@gmail.com", 
            $password: "password"
        }}
  } */
  /* #swagger.responses[200] = { 
                    description: 'User successfully obtained.'} 
            } */
);
