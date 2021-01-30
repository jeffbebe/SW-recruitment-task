"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const env_1 = require("../config/env");
const db = require("../config/database");
env_1.loadEnvs();
(async () => {
    const app = express();
    //const swaggerDocument = require("./swagger.json");
    try {
        global.dbConnection = await typeorm_1.createConnection(db);
        await global.dbConnection.runMigrations();
    }
    catch (error) {
        console.log(error);
    }
    //app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    // parse application/json
    app.use(express.json());
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
    app.listen(3000);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsMENBQTBDO0FBQzFDLHFDQUE4RDtBQUM5RCw0QkFBMEI7QUFFMUIsdUNBQXlDO0FBQ3pDLHlDQUF5QztBQUd6QyxjQUFRLEVBQUUsQ0FBQztBQUNYLENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDVixNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztJQUN0QixvREFBb0Q7SUFFcEQsSUFBSTtRQUNGLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSwwQkFBZ0IsQ0FBQyxFQUF1QixDQUFDLENBQUM7UUFDdEUsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzNDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QscUVBQXFFO0lBRXJFLHlCQUF5QjtJQUN6QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRXhCLDBDQUEwQztJQUMxQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRW5ELEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9