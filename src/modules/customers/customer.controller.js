import * as customerService from './customer.service.js';

export const createCustomer = async (req, res) => {
  const customer = await customerService.createCustomer(req.body);

  return res.status(201).json(customer);
};

export const getCustomers = async (req, res) => {
  const customers = await customerService.getCustomers();

  return res.status(200).json(customers);
};
