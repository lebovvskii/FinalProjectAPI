const db = require('../db');

class TaskCategoriesController {
  async createTaskCategory(req, res) {
    const { categoryName, categoryDescription } = req.body;
    const newTaskCategory = await db.query(
      'INSERT INTO Task_Categories (categoryName, categoryDescription) values ($1, $2) RETURNING *',
      [categoryName, categoryDescription],
    );
    res.json(newTaskCategory.rows[0]);
  }

  async getTaskCategories(req, res) {
    const taskCategories = await db.query('SELECT * FROM Task_Categories');
    res.json(taskCategories.rows[0]);
  }

  async getTaskCategory(req, res) {
    const categoryId = req.params.category_id;
    const category = await db.query(
      'SELECT * FROM Task_Categories WHERE category_id = $1',
      [categoryId],
    );
    res.json(category.rows[0]);
  }

  async updateTaskCategory(req, res) {
    const { categoryName, categoryDescription, categoryId } = req.body;
    const category = await db.query(
      'UPDATE Task_Categories set category_name = $1, category_description = $2 WHERE category_id = $3 RETURNING *',
      [categoryName, categoryDescription, categoryId],
    );
    res.json(category.rows[0]);
  }

  async deleteTaskCategory(req, res) {
    const categoryId = req.params.category_id;
    const category = await db.query(
      'DELETE FROM Task_Categories WHERE category_id = $1',
      [categoryId],
    );
    res.json(category.rows[0]);
  }
}

module.exports = new TaskCategoriesController();
