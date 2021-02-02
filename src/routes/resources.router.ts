import * as express from "express";
import {
  getResources,
  getSingleResource,
} from "../controllers/resources.controller";
import { isAuth } from "../middleware/is-auth.middleware";
export const resourcesRouter = express.Router();

resourcesRouter.get("/:resources/:id", isAuth, getSingleResource);
resourcesRouter.get("/:resources", isAuth, getResources);
