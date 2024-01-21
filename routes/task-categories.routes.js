const Router = require('express');
const router = new Router();
const taskCategoriesController = require('../controllers/task-categories.controller');

router.post('/tasksCategories', taskCategoriesController.createTaskCategory);
router.get('/tasksCategories', taskCategoriesController.getTaskCategories);
router.get(
  '/tasksCategories/:category_id',
  taskCategoriesController.getTaskCategory,
);
router.put('/tasksCategories', taskCategoriesController.updateTaskCategory);
router.delete(
  '/tasksCategories/:category_id',
  taskCategoriesController.deleteTaskCategory,
);

module.exports = router;
