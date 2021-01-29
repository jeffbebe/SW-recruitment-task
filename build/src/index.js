"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const env_1 = require("../config/env");
const db = __importStar(require("../config/database"));
env_1.loadEnvs();
(async () => {
    const app = express_1.default();
    const swaggerDocument = require("./swagger.json");
    global.dbConnection = await typeorm_1.createConnection(db);
    await global.dbConnection.runMigrations();
    app.use("/doc", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
    // parse application/json
    app.use(express_1.default.json());
    // parse application/x-www-form-urlencoded
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.listen(3000);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLDhEQUFxQztBQUNyQyxxQ0FBOEQ7QUFDOUQsNEJBQTBCO0FBQzFCLDRFQUEyQztBQUMzQyx1Q0FBeUM7QUFDekMsdURBQXlDO0FBRXpDLGNBQVEsRUFBRSxDQUFDO0FBQ1gsQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNWLE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztJQUN0QixNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUVsRCxNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sMEJBQWdCLENBQUMsRUFBdUIsQ0FBQyxDQUFDO0lBQ3RFLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSw0QkFBUyxDQUFDLEtBQUssRUFBRSw0QkFBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBRW5FLHlCQUF5QjtJQUN6QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUV4QiwwQ0FBMEM7SUFDMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsRUFBRSxDQUFDIn0=