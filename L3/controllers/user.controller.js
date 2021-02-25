const userService = require('../services/user.service');
const confirmCode = require('../codeStatus/confirmCode');
const errorCode = require('../codeStatus/errorCode');
const statusMessage = require('../message/statusMessage');

module.exports = {
    getAllUsers: (req, res) => {
        try {
            const users = userService.findUsers();
            res.json(users);
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: (req, res) => {
        try {
            const {userId} = req.params;
            const user = userService.findUserById(userId);
            res.json(user);
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },

    createUser: (req, res) => {
        try {
            userService.makeUser(req.body);

            res.status(confirmCode.CREATED_USER).json(statusMessage.USER_CREATED);
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },

    delUser: (req, res) => {
        try {
            const {userId} = req.params;
            userService.deleteUser(userId);
            res.status(confirmCode.DELETED_USER).json(statusMessage.USER_DELETED);
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message)
        }
    }
};
