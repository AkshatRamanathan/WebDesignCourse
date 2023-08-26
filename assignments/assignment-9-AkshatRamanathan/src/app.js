import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import registerRoutes from "./routes/index.js";
import swaggerUiExpress from "swagger-ui-express";
import { readFileSync } from "fs";
import YAML from "yaml";
const file = readFileSync("./openapi/get-reminder.yaml", 'utf8')
const swaggerDocument = YAML.parse(file);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));

registerRoutes(app);
mongoose.connect('mongodb://127.0.0.1/reminders');
export default app;



