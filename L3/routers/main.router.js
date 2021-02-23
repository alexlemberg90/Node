const router = require('express').Router();

const userRouter = require('./user.ruoter');
const registerRouter = require('./register.router');

router.use('/users', userRouter);
router.use('/register', registerRouter);


module.exports = router;
