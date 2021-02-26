const router = require('express').Router();

const userController = require('../controllers/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.post('/', userMiddleware.checkIsValidRegister, userController.createUser);

module.exports = router;
