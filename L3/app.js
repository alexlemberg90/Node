const express = require('express');
const path = require('path');

const mainRouter = require('./routers/main.router');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', mainRouter);

// Все це має бути розбито по роутах, контроллерах, сервісах з обовязковою перевіркою всього що приходить через мідлвари.
//     Також всі меджік стрінги мають бути винесені в константи та закледений "фундамент" під інтернаціоналізацію.

// Доробити ерори і мідлвари
app.listen(5555, () => {
    console.log('start port 5555');
})
