const router = require('express').Router();

const userController = require('../controllers/user.controller');
const { userMiddlewares } = require('../middleware');

router.post('/', userMiddlewares.checkIsValidRegister, userController.createUser);

module.exports = router;
