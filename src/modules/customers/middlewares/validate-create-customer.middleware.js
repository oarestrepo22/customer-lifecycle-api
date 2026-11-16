export const validateCreateCustomer = (req, res, next) => {
  const { name, email } = req.body ?? {};

  if (
    typeof name !== 'string' ||
    !name.trim() ||
    typeof email !== 'string' ||
    !email.trim()
  ) {
    return res.status(400).json({
      message: 'Name and email are required.',
    });
  }

  next();
};
