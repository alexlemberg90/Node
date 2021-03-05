const bcrypt = require('bcrypt');

const { LOGIN_WRONG_PASSWORD_OR_EMAIL } = require('../message/statusMessage');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10,),
    compare: (password, hashPassword) => {
        const isPasswordEquals = bcrypt.compare(password, hashPassword);

        if (!isPasswordEquals) {
            throw new Error(LOGIN_WRONG_PASSWORD_OR_EMAIL);
        }
    }
};
