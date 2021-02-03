import * as express from "express";
import {
  getResources,
  getSingleResource,
} from "../controllers/resources.controller";
import { isAuth } from "../middleware/is-auth.middleware";
export const resourcesRouter = express.Router();

resourcesRouter.get(
  "/:resources/:id",
  isAuth,
  getSingleResource
  /* 	#swagger.tags = ['Get resources']
      #swagger.description = 'Endpoint to get certain resource assigned to a user' 
      #swagger.security = [{
            "bearerAuth": []
      }]
  */

  /* #swagger.responses[200] = { 
    description: 'Data fetched successfully'} 
    } */
);
resourcesRouter.get(
  "/:resources",
  isAuth,
  getResources
  /* 	#swagger.tags = ['Get resources']
      #swagger.description = 'Endpoint to get certain resources assigned to a user' 
      #security: bearerAuth[]*/

  /* #swagger.responses[200] = { 
                    description: 'Data fetched successfully'} 
            } */
);
