import { Router } from 'express';
import { createCustomer, getCustomers } from './customer.controller.js';
import { validateCreateCustomer } from './middlewares/validate-create-customer.middleware.js';

const router = Router();

router.post('/', validateCreateCustomer, createCustomer);
router.get('/', getCustomers);

export default router;
