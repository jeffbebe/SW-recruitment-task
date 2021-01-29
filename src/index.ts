import express from "express";
import bodyParser from "body-parser";
import { ConnectionOptions, createConnection } from "typeorm";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import { loadEnvs } from "../config/env";
import * as db from "../config/database";

declare global {
  var connection: any;
}

loadEnvs();
(async () => {
  const app = express();
  const swaggerDocument = require("./swagger.json");

  const dbConnection = await createConnection(db as ConnectionOptions);
  dbConnection.runMigrations();
  connection = dbConnection;
  app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // parse application/json
  app.use(express.json());

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(process.env.PORT);
})();
