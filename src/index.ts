import * as express from "express";
import * as bodyParser from "body-parser";
import { ConnectionOptions, createConnection } from "typeorm";
import "reflect-metadata";
import * as swaggerUi from "swagger-ui-express";
import { loadEnvs } from "../config/env";
import * as dbConfig from "../config/database";
// import { CacheClient } from "./util/redis";
import * as AsyncRedis from "async-redis";
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
    global.cacheClient = AsyncRedis.createClient({
      url: process.env.REDIS_URL,
    });
    global.dbConnection = await createConnection(dbConfig as ConnectionOptions);
    await global.dbConnection.runMigrations();
  } catch (error) {
    console.log(error);
  }

  //app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(authRouter);
  app.use(resourcesRouter);
  // parse application/json
  app.use(express.json());

  app.listen(process.env.PORT);
})();
