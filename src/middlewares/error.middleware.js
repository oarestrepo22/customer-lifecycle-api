export const errorMiddleware = (error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    return res.status(400).json({
      message: 'Invalid JSON format.',
    });
  }

  if (error.name === 'SequelizeUniqueConstraintError') {
    return res.status(409).json({
      message: 'A customer with this email already exists.',
    });
  }

  if (error.name === 'SequelizeValidationError') {
    return res.status(400).json({
      message: 'Invalid customer data.',
    });
  }

  console.error('Unhandled application error:', error);

  return res.status(500).json({
    message: 'Internal server error.',
  });
};
