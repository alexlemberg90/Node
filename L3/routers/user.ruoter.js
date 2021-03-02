const router = require('express').Router();

const userController = require('../controllers/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);
router.post('/login', userMiddleware.isLoginValid, userController.loginUser);
router.get('/:userId', userMiddleware.checkIsUserIdValid, userController.getSingleUser);
router.delete('/:userId', userMiddleware.checkIsUserIdValid, userController.delUser);

module.exports = router;
