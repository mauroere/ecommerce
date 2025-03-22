const jwt = require('jsonwebtoken');
const config = require('../config/env');

const generateToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, config.JWT_SECRET, {
        expiresIn: '1h',
    });
};

const verifyToken = (token) => {
    return jwt.verify(token, config.JWT_SECRET);
};

module.exports = {
    generateToken,
    verifyToken,
};