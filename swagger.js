const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Definición de las opciones de Swagger
const options = {
  definition: {
    openapi: "3.0.0", // Versión de OpenAPI
    info: {
      title: "API Backend con Autenticación", // Nombre de tu API
      version: "1.0.0", // Versión de la API
      description: "API para gestionar productos y usuarios con autenticación JWT",
    },
  },
  apis: ["./routes/*.js"], // Ruta donde se encuentran las definiciones de las rutas
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
