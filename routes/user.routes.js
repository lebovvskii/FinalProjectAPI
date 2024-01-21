const Router = require('express');
const router = new Router();

const userController = require('../controllers/user.controller');

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:user_id', userController.getUser);
router.put('/users', userController.updateUser);
router.delete('/users/:user_id', userController.deleteUser);

module.exports = router;
