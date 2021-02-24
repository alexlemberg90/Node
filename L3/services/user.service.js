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
        userDb.push(user);
        return await writeFile(userPath, JSON.stringify(userDb));
    },

    deleteUser: async (userId) => {
        userDb.splice(userId, 1);
        return await writeFile(userPath, JSON.stringify(userDb));

    }
};
