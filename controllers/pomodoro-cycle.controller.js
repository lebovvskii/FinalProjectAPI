const db = require('../db');

class PomodoroController {
  async createPomodoro(req, res) {
    const { taskId, startTime, endTime } = req.body;
    const newPomodoro = await db.query(
      'INSERT INTO Pomodoro Cycles (task_id, start_time, end_time) values ($1, $2, $3) RETURNING *',
      [taskId, startTime, endTime],
    );
    res.json(newPomodoro.rows[0]);
  }

  async getPomodoros(req, res) {
    const pomodoro = await db.query('SELECT * FROM Pomodory Cycles');
    res.json(pomodoro.rows[0]);
  }

  async getPomodoro(req, res) {
    const pomodoroId = req.params.pomodoro_id;
    const pomodoro = await db.query(
      'SELECT * FROM Pomodory Cycles WHERE pomodoro_id = $1',
      [pomodoroId],
    );
    res.json(pomodoro.rows[0]);
  }

  async updatePomodoro(req, res) {
    const { taskId, pomodoroId, endTime } = req.body;
    const pomodoro = await db.query(
      'UPDATE Pomodory Cycles set task_id = $1, end_time = $2, WHERE pomodoro_id = $3 RETURNING *',
      [taskId, endTime, pomodoroId],
    );
    res.json(category.rows[0]);
  }

  async deletePomodoro(req, res) {
    const pomodoroId = req.params.pomodoro_id;
    const pomodoro = await db.query(
      'DELETE FROM Pomodoro Cycles WHERE pomodoro_id = $1',
      [pomodoroId],
    );
    res.json(pomodoro.rows[0]);
  }
}

module.exports = new PomodoroController();
