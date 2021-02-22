const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const fs = require('fs')

const app = express();
const userdir = path.join(__dirname, 'allUsers.json');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));
app.set('views', path.join(__dirname, 'static'));

let users = [];

function getAllUsers() {
    users = JSON.parse(fs.readFileSync(userdir).toString());
};
getAllUsers();


app.get('/register', (req, res) => {
    res.render('register')
})
app.post('/register', ((req, res) => {
    if (!req.body.nickName || !req.body.email || !req.body.password) {
        res.redirect('/register')
        return;
    }
    if (users.some(user => user.email === req.body.email || user.nickName === req.body.nickName)) {
        res.redirect('/error');
        return;
    }


    users.push(req.body);
    fs.writeFile(userdir, JSON.stringify(users), err => {
        if (err) {
            console.log(err);
        }
    });
    res.redirect('/login')
}));
app.get('/users', (req, res) => {
    res.render('users', {users})

})
app.get('/login', (req, res) => {
    res.render('login')

})
app.post('/login', (req, res) => {
    if (!req.body.nickName || !req.body.password) {
        res.send('Nick Name or password is empty');
        return;
    }

    const findUser = users.find(user => user.nickName === req.body.nickName && user.password === req.body.password);
    const id = users.indexOf(findUser);
    if (findUser) {
        res.redirect(`/user/${id}`);
        return;
    }

    res.redirect('/register');

})
app.get('/user/:userId', (req, res) => {
    const {userId} = req.params
    const user = users[userId];
    res.render('user', {user});

})
app.get('/error', (req, res) => {
    res.render('error')

})
app.post('/error', (req, res) => {
    res.redirect('/register')

})

app.listen(5555, () => {
    console.log('start');
})
