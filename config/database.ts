import { loadEnvs } from "./env";
import * as path from "path";
import { UserModel } from "../src/models/User.model";
loadEnvs();

console.log(process.env.POSTGRES_URL);
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
console.log();
export = config;
