const fs = require('fs');
const { promisify } = require('util');
const path = require('path');

const userPath = path.join(process.cwd(), 'DataBase', 'allUsers.json');
const userDb = require('../DataBase/allUsers.json');

const writeFile = promisify(fs.writeFile);

module.exports = {
    findUsers: () => userDb,

    findUserById: (userId) => userDb[userId],

    makeUser: async (user) => {
        userDb.push(user);
        // eslint-disable-next-line no-return-await
        return await writeFile(userPath, JSON.stringify(userDb));
    },

    deleteUser: async (userId) => {
        userDb.splice(userId, 1);
        // eslint-disable-next-line no-return-await
        return await writeFile(userPath, JSON.stringify(userDb));
    }
};
