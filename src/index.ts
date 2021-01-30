import * as express from "express";
import * as bodyParser from "body-parser";
import { ConnectionOptions, createConnection } from "typeorm";
import "reflect-metadata";
import * as swaggerUi from "swagger-ui-express";
import { loadEnvs } from "../config/env";
import * as db from "../config/database";
import { UserModel } from "./models/User.model";

loadEnvs();
(async () => {
  const app = express();
  //const swaggerDocument = require("./swagger.json");

  try {
    global.dbConnection = await createConnection(db as ConnectionOptions);
    await global.dbConnection.runMigrations();
  } catch (error) {
    console.log(error);
  }
  //app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // parse application/json
  app.use(express.json());

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(3000);
})();
