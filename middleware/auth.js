
const customAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {

    const authorizationHeader = req.headers.authorization;

    if(!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        throw new customAPIError('No token provided', 401);// 401 is authentication error
    }

    //retreive the token only
    const token = authorizationHeader.split(' ')[1];

    try{
        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
        //passing the username to dashboard functionality
        req.username = decodedPayload.username;
        next();

    }catch(err) {
        throw new customAPIError('Not authorized to access this route', 401)
    }
    
}

module.exports = { checkAuth };