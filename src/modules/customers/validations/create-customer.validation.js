import { body } from 'express-validator';

export const createCustomerRules = [
  body('name')
    .isString()
    .withMessage('Name and email are required.')
    .bail()
    .trim()
    .notEmpty()
    .withMessage('Name and email are required.'),

  body('email')
    .isString()
    .withMessage('Name and email are required.')
    .bail()
    .trim()
    .notEmpty()
    .withMessage('Name and email are required.')
    .bail()
    .isEmail()
    .withMessage('Invalid customer data.'),
];
