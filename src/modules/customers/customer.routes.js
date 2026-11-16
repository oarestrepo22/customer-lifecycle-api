import { Router } from 'express';
import { createCustomer, getCustomers } from './customer.controller.js';
import { createCustomerRules } from './validations/create-customer.validation.js';
import { validate } from '../../middlewares/validation.middleware.js';

const router = Router();

router.post('/', validate(createCustomerRules), createCustomer);
router.get('/', getCustomers);

export default router;
