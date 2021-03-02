const errorCode = require('../codeStatus/errorCode');
const errorMessage = require('../message/statusMessage');

module.exports = {
    checkIsValidRegister: (req, res, next) => {
        try {
            const userFields = [
                'firstname',
                'lastname',
                'email',
                'password'
            ];

            for (const key of userFields) {
                if (!(key in req.body)) {
                    throw new Error(`MISSING_USER_FIELD_${key.toUpperCase()}`);
                }

                if (req.body[key].length === 0) {
                    throw new Error(`EMPTY_USER_FIELD_${key.toUpperCase()}`);
                }
            }

            next();
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },
    checkIsUserIdValid: (req, res, next) => {
        try {
            const userId = +req.params.userId;

            if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
                throw new Error(errorMessage.NOT_VALID_ID.en);
            }

            next();
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },
    isLoginValid: (req, res, next) => {
        try {
            const loginFields = [
                'email',
                'password'
            ];

            for (const key of loginFields) {
                if (!(key in req.body)) {
                    throw new Error(`MISSING_LOGIN_FIELD_${key.toUpperCase()}`);
                }

                if (req.body[key].length === 0) {
                    throw new Error(`EMPTY_LOGIN_FIELD_${key.toUpperCase()}`);
                }
            }

            next();
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    }
};
