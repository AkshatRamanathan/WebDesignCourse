// Importing the node modules required
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import swaggerUiExpress from "swagger-ui-express";
import { readFileSync } from "fs";
import YAML from "yaml";
import registerRoutes from './routes/index.js';
const file = readFileSync("./src/api_spec.yml", 'utf8')
const swaggerDocument = YAML.parse(file);


// Creating an app that uses express
const app = express();

// Adding cors services to app as it cumminicates to other services
app.use(cors());
app.use(express.json());
// For the endpoints that have urls encoded
app.use(express.urlencoded({extended: true}))
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));
registerRoutes(app);

// Connection to the mongodb backend
mongoose.connect('mongodb://localhost:27017/Pac-Man');

export default app;