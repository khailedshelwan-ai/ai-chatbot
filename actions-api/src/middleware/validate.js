const { ZodError } = require('zod');
const { AppError } = require('../utils/app-error');

function validate(schema) {
  return (req, _res, next) => {
    try {
      req.validatedBody = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return next(new AppError('Validation failed', 400, error.flatten()));
      }

      return next(error);
    }
  };
}

module.exports = {
  validate,
};
