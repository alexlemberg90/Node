const userService = require('../services/user.service');
const confirmCode = require('../codeStatus/confirmCode');

module.exports = {
    getAllUsers: (req, res) => {
        try {
            const users = userService.findUsers();
            res.json(users);
        } catch (e) {
            res.json(e.message);
        }
    },

    getSingleUser: (req, res) => {
        try {
            const {userId} = req.params;
            const user = userService.findUserById(userId);
            res.json(user);
        } catch (e) {
            res.json(e.message);
        }
    },

    createUser: (req, res) => {
        try {
            userService.makeUser(req.body);

            res.status(confirmCode.CREATED_USER).json('add');
        } catch (e) {
            res.json(e.message);
        }
    },

    delUser: (req, res) => {
        try {
            const {userId} = req.params;
            userService.deleteUser(userId);
            res.status(confirmCode.DELETED_USER).json('del')
        } catch (e) {
            res.json(e.message)
        }
    }
};
