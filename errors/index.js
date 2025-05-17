
//This file is for exporting all the different Error handling Classes combined as a big object.

const CustomAPIError = require('./custom-error');
const BadRequestError = require('./bad-request');
const UnauthenticatedError = require('./unauthenticated');

module.exports = {
    CustomAPIError,
    BadRequestError,
    UnauthenticatedError
}