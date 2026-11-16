import express from 'express';
import customerRoutes from './modules/customers/customer.routes.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use('/api/customers', customerRoutes);
app.use(errorMiddleware);

export default app;
