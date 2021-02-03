import { Connection } from "typeorm";
//import { AsyncRedis } from "async-redis";

declare global {
  namespace NodeJS {
    interface Global {
      dbConnection: Connection;
      cacheClient: any;
    }
  }
}
