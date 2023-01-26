const request = require('request');
const express = require("express");
const swaggerUi = require("swagger-ui-express"),
swaggerDocument = require("./swagger.json");

const port = process.env.PORT || 3001;
const swagger_port = process.env.SWAGGER_PORT || 8000;

const app = express();

app.use(express.json());

app.use(
  '/swagger',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.listen(swagger_port, () => {
  console.log(`Server listening on http://localhost:${swagger_port}/swagger`);
});

app.get("/api", (req, res) => {
  res.json({message: "Hello from server!"})
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/api`);
});