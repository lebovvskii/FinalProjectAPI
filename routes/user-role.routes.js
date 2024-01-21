const Router = require('express');
const router = new Router();
const userRolesController = require('../controllers/user-roles.controller');

router.post('/user-roles', userRolesController.createUserRole);
router.get('/user-roles', userRolesController.getUserRoles);
router.delete('/user-roles/:user_role_id', userRolesController.deleteUserRole);

module.exports = router;
