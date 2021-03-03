const errorCode = require('../constants/codeStatus/errorCode');
const { createUserValidators, idUserValidator } = require('../validators');

module.exports = {
    checkIsValidRegister: (req, res, next) => {
        try {
            const { error } = createUserValidators.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },
    checkIsUserIdValid: (req, res, next) => {
        try {
            const { userId } = req.params;
            const error = idUserValidator.validate(userId);

            if (error) {
                throw new Error(error.details[0].message);
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
