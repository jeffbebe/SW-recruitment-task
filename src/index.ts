import * as express from "express";
import * as bodyParser from "body-parser";
import { ConnectionOptions, createConnection } from "typeorm";
import "reflect-metadata";
import * as swaggerUi from "swagger-ui-express";
import { loadEnvs } from "../config/env";
import * as db from "../config/database";
import { UserModel } from "./models/User.model";
import { authRouter } from "./routes/auth.router";
import { resourcesRouter } from "./routes/resources.router";

loadEnvs();
(async () => {
  const app = express();
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());
  //const swaggerDocument = require("./swagger.json");

  try {
    global.dbConnection = await createConnection(db as ConnectionOptions);
    await global.dbConnection.runMigrations();
  } catch (error) {
    console.log(error);
  }

  //app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(authRouter);
  app.use(resourcesRouter);
  // parse application/json
  app.use(express.json());

  app.listen(1337);
})();
