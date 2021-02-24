const errorCode = require('../codeStatus/errorCode');
const userDb = require('../DataBase/allUsers.json');

module.exports = {
    checkIsValidRegister: (req, res, next) => {
        try {
            const user = req.body;
            console.log(req.body);
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
    }
}
