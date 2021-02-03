const swaggerAutogen = require("swagger-autogen")();
import * as path from "path";
const outputFile = path.join(__dirname, "..", "swagger.json");
const endpointsFiles = [
  path.join(__dirname, "routes", "auth.router.js"),
  path.join(__dirname, "routes", "resources.router.js"),
];

const doc = {
  info: {
    version: "2.0.0", // by default: "1.0.0"
    title: "Swapi recruitment task",
  },
  host: "localhost:1337", // by default: "localhost:3000"
  basePath: "/", // by default: "/"

  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
  },
  definitions: {},
};
swaggerAutogen(outputFile, endpointsFiles, doc);
