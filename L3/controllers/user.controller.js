const userService = require('../services/user.service');

module.exports = {
    getAllUsers: (req, res) => {
        try {
            const users = userService.findUsers();
            res.json(users);
        } catch (e) {
            res.status('error');
        }
    },

    getSingleUser: (req, res) => {
        try {
            const {userId} = req.params;
            const user = userService.findUserById(userId);
            res.json(user);
        } catch (e) {
            res.status('not');
        }
    },

    createUser: (req, res) => {
        try {
            userService.makeUser(req.body);

            res.status('add');
        } catch (e) {
            res.status('dddd');
        }
    }
};
