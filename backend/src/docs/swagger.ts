import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Ubuntu Focal Fossa (clone)",
    version: "1.0.0",
    description: "API for Ubuntu Focal Fossa services (clone)",
    contact: {
      name: "Wanderlee Max Gutierrez",
      email: "wanderleedev@gmail.com",
      url: "https://github.com/WanderleeDev",

    },
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/docs/routes/*.yml"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
