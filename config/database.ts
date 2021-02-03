import { loadEnvs } from "./env";
import * as path from "path";
import { UserModel } from "../src/models/User.model";
loadEnvs();

const createDbConfigFromEnvs = (env: any) => ({
  type: "postgres",
  url: env.POSTGRES_URL,
  synchronize: false,
  logging: true,
  entities: [UserModel],
  migrations: ["src/migrations/*js"],
  cli: {
    migrationsDir: "src/migrations",
    entitiesDir: "src/models",
  },
});

const config = createDbConfigFromEnvs(process.env);
export = config;
