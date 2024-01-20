const db = require('../db');

class UserController {
  async createUser(req, res) {
    const { username, email, user_role_id, team_id } = req.body;
    const newUser = await db.query(
      'INSERT INTO Users (username, email, user_role_id, team_id) values ($1, $2, $3, $4) RETURNING *',
      [username, email, user_role_id, team_id],
    );
    res.json(newUser.rows[0]);
  }

  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM Users');
    res.json(users.rows[0]);
  }

  async getUser(req, res) {
    const user_id = req.params.user_id;
    const user = await db.query('SELECT * FROM Users WHERE user_id = $1', [
      user_id,
    ]);
    res.json(user.rows[0]);
  }

  async updateUser(req, res) {
    const { user_id, username, user_role_id, email, team_id } = req.body;
    const user = await db.query(
      'UPDATE users set username = $1, email = $2, user_role_id = $3, team_id = $4 WHERE user_id = $5 RETURNING *',
      [username, email, user_role_id, team_id, user_id],
    );
    res.json(user.rows[0]);
  }

  async deleteUser(req, res) {
    const user_id = req.params.user_id;
    const user = await db.query('DELETE FROM Users WHERE user_id = $1', [
      user_id,
    ]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
