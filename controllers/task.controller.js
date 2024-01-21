const db = require('../db');

class TaskController {
  async createTask(req, res) {
    const { taskName, taskDescription, status, userId, categoryId } = req.body;
    const newTask = await db.query(
      'INSERT INTO Tasks (task_name, task_description, status, user_id, category_id) values ($1, $2, $3, $4, $5) RETURNING *',
      [taskName, taskDescription, status, userId, categoryId],
    );
    res.json(newTask.rows[0]);
  }

  async getTasks(req, res) {
    const tasks = await db.query('SELECT * FROM Tasks');
    res.json(tasks.rows[0]);
  }

  async getTask(req, res) {
    const taskId = req.params.taskId;
    const task = await db.query('SELECT * FROM Tasks WHERE task_id = $1', [
      taskId,
    ]);
    res.json(task.rows[0]);
  }

  async updateTask(req, res) {
    const { taskName, taskDescription, status, userId, categoryId, taskId } =
      req.body;
    const task = await db.query(
      'UPDATE users set task_name = $1, task_description = $2, status = $3, category_id = $4, user_id = $5 WHERE task_id = $6 RETURNING *',
      [taskName, taskDescription, status, userId, categoryId, taskId],
    );
    res.json(user.rows[0]);
  }

  async deleteTask(req, res) {
    const taskId = req.params.user_id;
    const task = await db.query('DELETE FROM Tasks WHERE task_id = $1', [
      taskId,
    ]);
    res.json(task.rows[0]);
  }
}

module.exports = new TaskController();
