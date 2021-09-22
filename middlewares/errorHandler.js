const errorHandler = async (err, req, res, next) => {
  let code;
  let message;
  let errors;

  // console.log(err, 'ini di error handler');
  switch (err.name) {
    case 'SequelizeValidationError':
      errors = err.errors.map(el => {
        return el.message;
      })
      code = 400, message = errors
      break;
    case 'SequelizeUniqueConstraintError':
      errors = err.errors.map(el => {
        return el.message;
      })
      code = 400, message = errors
      break;
    case 'emailOrPasswordIsWrong':
      code = 401, message = 'Email / Password is wrong!'
      break;
    case 'JsonWebTokenError':
      code = 401, message = err.message;
      break;
    case 'invalidToken':
      code = 401, message = 'Invalid Token'
      break;
    case 'postNotFound':
      code = 404, message = 'Post data is not found'
      break;
    case 'forbidden':
      code = 403, message = 'You have no access'
      break;
    case 'emptyImageFile':
      code = 400, message = 'Please add image file'
      break;
    case 'imageInvalid':
      code = 400, message = 'File should be an Image format and maximum size is 1,525 mb'
      break;
    default:
      code = 500, message = `Internal server error`
      break;
  }
  console.log(err);
  res.status(code).json({ message: message });
}

module.exports = errorHandler;