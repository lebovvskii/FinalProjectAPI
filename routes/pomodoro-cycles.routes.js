const Router = require('express');
const router = new Router();
const pomodoroController = require('../controllers/pomodoro-cycle.controller');

router.post('/pomodoro', pomodoroController.createPomodoro);
router.get('/pomodoro', pomodoroController.getPomodoros);
router.get('/pomodoro/:pomodoro_id', pomodoroController.getPomodoro);
router.put('/pomodoro', pomodoroController.updatePomodoro);
router.delete('/pomodoro/:pomodoro_id', pomodoroController.deletePomodoro);

module.exports = router;
