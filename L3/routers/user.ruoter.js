const router = require('express').Router();

const userController = require('../controllers/user.controller');
const { userMiddlewares } = require('../middleware');

router.get('/', userController.getAllUsers);
router.post('/login', userMiddlewares.isLoginValid, userController.loginUser);
router.get('/:userId', userMiddlewares.checkIsUserIdValid, userController.getSingleUser);
router.delete('/:userId', userMiddlewares.checkIsUserIdValid, userController.delUser);

module.exports = router;
