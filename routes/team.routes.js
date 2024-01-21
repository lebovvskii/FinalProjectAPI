const Router = require('express');
const router = new Router();
const teamController = require('../controllers/team.controller');

router.post('/teams', teamController.createTeam);
router.get('/teams', teamController.getTeams);
router.delete('/teams/:team_id', teamController.deleteTeam);

module.exports = router;
