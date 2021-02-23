const fs = require('fs');
const {promisify} = require('util');
const path = require('path')

const userPath = path.join(process.cwd(), 'DataBase', 'allUsers.json');
const userDb = require('../DataBase/allUsers.json');
const writeFile = promisify(fs.writeFile);

module.exports = {
    findUsers: () => {
        return userDb;
    },
    findUserById: (userId) => {
        return userDb[userId];
    },
    makeUser: async (user) => {
        userDb.forEach(value => {
            if (value.email === user.email || value.nickName === user.nickName) {
                throw new Error('wje e');
            }
        })
        if (!user.nickName || !user.email || !user.password) {
            throw new Error('pusto');
        }

        userDb.push(user);
       await writeFile(userPath, JSON.stringify(userDb));

        return user;
    },
};
