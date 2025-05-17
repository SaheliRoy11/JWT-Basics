
const { UnauthenticatedError } = require('../errors/index');
const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {

    const authorizationHeader = req.headers.authorization;

    if(!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('No token provided');
    }

    //retreive the token only
    const token = authorizationHeader.split(' ')[1];

    try{
        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
        //passing the username to dashboard functionality
        req.username = decodedPayload.username;
        next();

    }catch(err) {
        throw new UnauthenticatedError('Not authorized to access this route');
    }
    
}

module.exports = { checkAuth };