const bcrypt = require('bcrypt');

const { LOGIN_WRONG_PASSWORD_OR_EMAIL } = require('../message/statusMessage');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10,),
    compare: async (password, hashPassword) => {
        const isPasswordEquals = await bcrypt.compare(password, hashPassword);

        if (!isPasswordEquals) {
            throw new Error(LOGIN_WRONG_PASSWORD_OR_EMAIL.en);
        }
    }
};
