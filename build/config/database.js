"use strict";
const env_1 = require("./env");
const User_model_1 = require("../src/models/User.model");
env_1.loadEnvs();
console.log(process.env.POSTGRES_URL);
const createDbConfigFromEnvs = (env) => ({
    type: "postgres",
    url: env.POSTGRES_URL,
    synchronize: false,
    logging: true,
    entities: [User_model_1.UserModel],
    migrations: ["src/migrations/*js"],
    cli: {
        migrationsDir: "src/migrations",
        entitiesDir: "src/models",
    },
});
const config = createDbConfigFromEnvs(process.env);
console.log();
module.exports = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25maWcvZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtCQUFpQztBQUVqQyx5REFBcUQ7QUFDckQsY0FBUSxFQUFFLENBQUM7QUFFWCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEMsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxJQUFJLEVBQUUsVUFBVTtJQUNoQixHQUFHLEVBQUUsR0FBRyxDQUFDLFlBQVk7SUFDckIsV0FBVyxFQUFFLEtBQUs7SUFDbEIsT0FBTyxFQUFFLElBQUk7SUFDYixRQUFRLEVBQUUsQ0FBQyxzQkFBUyxDQUFDO0lBQ3JCLFVBQVUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0lBQ2xDLEdBQUcsRUFBRTtRQUNILGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsV0FBVyxFQUFFLFlBQVk7S0FDMUI7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkQsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2QsaUJBQVMsTUFBTSxDQUFDIn0=