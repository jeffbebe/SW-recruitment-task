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
  /* 	#swagger.tags = ['Resources']
      #swagger.description = 'Endpoint to get certain resource assigned to a user' 
      #swagger.security = [{
            "bearerAuth": []
      }]
  */

  /* #swagger.responses[200] = { 
        description: 'Data fetched successfully'} 
  } */
  /* #swagger.responses[400] = { 
        description: 'Invalid token data'} 
    } */
  /* #swagger.responses[401] = { 
        description: 'Unauthorized, wrong token'} 
  } */
  /* #swagger.responses[403] = { 
        description: 'Forbidden, this resource does not belong to a user'} 
  } */
);
resourcesRouter.get(
  "/:resources",
  isAuth,
  getResources
  /* 	#swagger.tags = ['Resources']
      #swagger.description = 'Endpoint to get all resources of a given name assigned to a user' 
      #swagger.security = [{
            "bearerAuth": []
      }]*/

  /* #swagger.responses[200] = { 
        description: 'Data fetched successfully'} 
  } */
  /* #swagger.responses[400] = { 
        description: 'Invalid token data'} 
    } *
  /* #swagger.responses[401] = { 
        description: 'Unauthorized, wrong token'} 
  } */
);
