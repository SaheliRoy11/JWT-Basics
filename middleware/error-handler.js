const { CustomAPIError } = require('../errors')
const {StatusCodes} = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {

  //both BadRequest and Unauthenticated error handling Classes extends from this class, so this condition will still hold true.
  if (err instanceof CustomAPIError)
     {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
  .send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware
