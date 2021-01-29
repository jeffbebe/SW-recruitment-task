import { loadEnvs } from "./env";

loadEnvs();

const createDbConfigFromEnvs = (env: any) => ({
  type: "postgres",
  url: env.POSTGRES_URL,
  synchronize: false,
  logging: true,
  entities: ["/build/src/**/*.model.js"],
  migrations: ["/build/src/migrations/*"],
  cli: {
    migrationsDir: "src/migrations",
  },
});

const config = createDbConfigFromEnvs(process.env);

export = config;
