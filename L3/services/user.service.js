const { User } = require('../DataBase/schemas');
const { USER_NOT_FOUND, USER_ALREADY_EXISTS } = require('../message/statusMessage');
const { passwordHash } = require('../helpers');

module.exports = {
    findUsers: (query) => User.find(query),
    findUserById: (userId) => {
        const user = User.findOne({ _id: userId });

        if (!user) {
            throw new Error(USER_NOT_FOUND.en);
        }

        return user;
    },
    logUser: async (data) => {
        const { email, password } = data;

        const user = await User.findOne({ email });

        if (!user) {
            throw new Error(USER_NOT_FOUND.en);
        }

        await passwordHash.compare(password, user.password);

        return user;
    },

    makeUser: async (data) => {
        const {
            firstname, lastname, email, password
        } = data;

        const userFind = await User.findOne({ email });

        if (userFind) {
            throw new Error(USER_ALREADY_EXISTS.en);
        }

        await User.create({
            firstname,
            lastname,
            email,
            password
        }, (e) => {
            if (e) {
                throw new Error(e.message);
            }
        });
        return true;
    },

    deleteUser: async (userId) => {
        await User.findByIdAndRemove(userId, (e) => {
            if (e) {
                throw new Error(e.message);
            }
        });

        return true;
    }
};
