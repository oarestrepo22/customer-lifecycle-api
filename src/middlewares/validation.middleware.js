import { validationResult } from 'express-validator';

export const validateRequest = (req, res, next) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return next();
  }

  const firstError = result.array({ onlyFirstError: true })[0];

  return res.status(400).json({
    message: firstError.msg,
  });
};

export const validate = (rules) => [...rules, validateRequest];
