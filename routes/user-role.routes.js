const Router = require('express');
const router = new Router();
const userRolesController = require('../controllers/user-roles.controller');

router.post('/userRoles', userRolesController.createUserRole);
router.get('/userRoles', userRolesController.getUserRoles);
router.delete('/userRoles/:team_id', userRolesController.deleteUserRole);

module.exports = router;
