module.exports = (error, req, res, next) => {
  let status;
  let message;

  switch (error.name) {
    case "EmailPasswordIsRequired":
      status = 400;
      message = "email / password is required";
      break;
    case "SequelizeValidationError":
      status = 400;
      message = error.errors[0].message;
      break;
    case "EmailPasswordInvalid":
      status = 401;
      message = "email or password is invalid";
      break;
    case "Unauthenticated":
    case "JsonWebTokenError":
      status = 401;
      message = "unauthenticated";
      break;
    case "forbidden":
      status = 403;
      message = "you are not authorized";
      break;
    case "dataNotFound":
      status = 404;
      message = "data not found";
      break;
    case "SequelizeUniqueConstraintError":
      status = 409;
      message = error.errors[0].message;
      break;
    default:
      status = 500;
      message = "internal server error";
      break;
  }
  res.status(status).json({ message });
};
