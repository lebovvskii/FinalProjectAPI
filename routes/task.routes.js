const Router = require('express');
const router = new Router();
const taskController = require('../controllers/task.controller');

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasks);
router.get('/tasks/:task_id', taskController.getTask);
router.put('/tasks', taskController.updateTask);
router.delete('/tasks/:task_id', taskController.deleteTask);

module.exports = router;
