const errorCode = require('../codeStatus/errorCode');
const userDb = require('../DataBase/allUsers.json');
const errorMessage = require('../message/statusMessage');

module.exports = {
    checkIsValidRegister: (req, res, next) => {
        try {
            const user = req.body;

            userDb.forEach(value => {
                if (value.email === user.email || value.nickName === user.nickName) {
                    throw new Error('email is already registered');
                }
            })
            if (!user.nickName || !user.email || !user.password) {
                throw new Error('empty line');
            }

            next();

        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json('next time');
        }
    },
    checkIsUserIdValid:  (req, res, next) => {
        try {
            const userId = +req.params.userId;

            if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
                throw new Error(errorMessage.NOT_VALID_ID['en']);
            }

            next();
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },

};


