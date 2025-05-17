
const { BadRequestError } = require('../errors/index');

const jwt = require('jsonwebtoken');

const login = (req, res) => {

    const {username, password} = req.body;

    //username and password needs to have a value, otherwise it will throw an error which will be handled by our custom error handler
    if(!username || !password) {
        throw new BadRequestError('Please provide email and password');
    }

    //create authentication token
    const authToken = jwt.sign({username: username}, process.env.JWT_SECRET, {expiresIn: '30d'});

    return res.status(200).json({
        msg: 'Successful Login',
        token: authToken
    })

}

const dashboard = (req, res) => {

    const secret = parseInt(Math.random()*100);
    return res.status(200).json({
        msg: `Hello ${req.username}`,
        secret: `Here is your secret number: ${secret}`
    })
}

module.exports = {
    login, dashboard
}