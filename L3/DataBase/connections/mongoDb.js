const mongodb = require('mongoose');

const dbname = 'users';

module.exports = () => {
    mongodb.connect(`mongodb://localhost:27017/${dbname}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    const { connection } = mongodb;

    connection.on('error', (err) => {
        // eslint-disable-next-line no-console
        console.log(err);
    });
};
