const { User } = require('../DataBase/schemas');

module.exports = {
    findUsers: () => User.find().populate('address'),

    findUserById: async (userField) => {
        const user = await User.findOne({
            $or: [
                { email: userField },
                { firstname: userField },
                { lastname: userField }
            ]
        }).populate('address');

        if (!user) {
            throw new Error('USER_NOT_FOUND');
        }

        return user;
    },
    logUser: async (data) => {
        const user = await User.findOne({ email: data.email });

        if (!user) {
            throw new Error('USER_NOT_FOUND');
        }

        if (user.password !== data.password.toString()) {
            throw new Error('LOGIN_WRONG_PASSWORD');
        }

        return user;
    },

    makeUser: async (data) => {
        const {
            firstname, lastname, email, password
        } = data;

        const userFind = await User.findOne({ email });

        if (userFind) {
            throw new Error('USER_ALREADY_EXISTS');
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
