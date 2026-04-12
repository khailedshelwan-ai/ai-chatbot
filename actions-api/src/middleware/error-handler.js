function errorHandler(err, _req, res, _next) {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    error: {
      message: err.message || 'Internal server error',
      details: err.details,
    },
  });
}

module.exports = {
  errorHandler,
};
