exports.errorResponse = (
  res,
  { statusCode = 500, message = "server errors" }
) => {
  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message,
  });
};

exports.successResponse = (res, { statusCode, message, payload = {} }) => {
  res.status(statusCode).json({
    success: true,
    statusCode: statusCode,
    message: message,
    payload: payload,
  });
};
