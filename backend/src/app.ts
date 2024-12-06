import express from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./docs/swagger";

//  Routes
import authRouter from "./routes/auth.routes";
import entryRouter from "./routes/entry.routes";
import todoRouter from "./routes/todo.routes";

config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

// Middleware para manejar datos JSON
app.use(express.json());

// Middleware para registrar solicitudes
app.use(morgan("dev"));

// Integrar Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//  Routes
app.use("/", entryRouter);
app.use("/auth", authRouter);
app.use("/todo", todoRouter);

export default app;
