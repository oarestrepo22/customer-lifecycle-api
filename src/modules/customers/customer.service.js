import { Customer } from './customer.model.js';

export const createCustomer = async ({ name, email }) => {
  return Customer.create({
    name: name.trim(),
    email: email.trim(),
  });
};

export const getCustomers = async () => {
  return Customer.findAll({
    order: [['createdAt', 'DESC']],
  });
};
