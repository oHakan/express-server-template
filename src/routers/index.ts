import { Router } from "express";
import { MainRouter } from "./mainRouter";
import * as swagger from 'swagger-ui-express';
const swaggerDoc = require('../swaggerDoc.json')

export const indexRouter: Router = Router();

indexRouter.use('/main', MainRouter);
indexRouter.use('/api-docs', swagger.serve);
indexRouter.get('/api-docs', swagger.setup(swaggerDoc))
