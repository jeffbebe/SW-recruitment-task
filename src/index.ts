import express from "express";
import bodyParser from "body-parser";
import { ConnectionOptions, createConnection } from "typeorm";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import { loadEnvs } from "../config/env";
import * as db from "../config/database";

loadEnvs();
(async () => {
  const app = express();
  const swaggerDocument = require("./swagger.json");

  global.dbConnection = await createConnection(db as ConnectionOptions);
  await global.dbConnection.runMigrations();
  app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // parse application/json
  app.use(express.json());

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(3000);
})();
