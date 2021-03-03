const userService = require('../services/user.service');
const { confirmCode, errorCode } = require('../constants/codeStatus');
const statusMessage = require('../message/statusMessage');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findUsers(req.query);

            res.json(users);
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await userService.findUserById(userId);

            res.json(user);
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },

    loginUser: async (req, res) => {
        try {
            await userService.logUser(req.body);

            res.status(confirmCode.LOGIN_SUCCESS).json(statusMessage.LOGIN_SUCCESS);
        } catch (e) {
            res.status(errorCode.UNAUTHORIZED).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            await userService.makeUser(req.body);

            res.status(confirmCode.CREATED_USER).json(statusMessage.USER_CREATED);
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },

    delUser: async (req, res) => {
        try {
            const { userId } = req.params;

            await userService.deleteUser(userId);

            res.status(confirmCode.DELETED_USER).json(statusMessage.USER_DELETED);
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    }
};
