const express = require('express');
const path = require('path');

const mainRouter = require('./routers/main.router');
const _dbConnection = require('./DataBase/connections/mongoDb');

const port = 5555;
const app = express();

_dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', mainRouter);

app.listen(5555, () => {
    // eslint-disable-next-line no-console
    console.log(`start port ${port}`);
});
