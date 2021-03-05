const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../constants/constants');

module.exports = () => {
    const access_token = jwt.sign({}, JWT_SECRET, { expiresIn: 9999 });
    access_token();
};
