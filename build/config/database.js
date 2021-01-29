"use strict";
const env_1 = require("./env");
env_1.loadEnvs();
const createDbConfigFromEnvs = (env) => ({
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
module.exports = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25maWcvZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtCQUFpQztBQUVqQyxjQUFRLEVBQUUsQ0FBQztBQUVYLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUMsSUFBSSxFQUFFLFVBQVU7SUFDaEIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxZQUFZO0lBQ3JCLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsUUFBUSxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDdEMsVUFBVSxFQUFFLENBQUMseUJBQXlCLENBQUM7SUFDdkMsR0FBRyxFQUFFO1FBQ0gsYUFBYSxFQUFFLGdCQUFnQjtLQUNoQztDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sTUFBTSxHQUFHLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVuRCxpQkFBUyxNQUFNLENBQUMifQ==