const { model } = require('mongoose');

const UserSchema = require('./user');

module.exports = {
    User: model('User', UserSchema),
};
