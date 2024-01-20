const db = require('../db');

class UserRolesController {
  async createUserRole(req, res) {
    const { userRoleName } = req.body;
    const newUserRole = await db.query(
      'INSERT INTO User_Roles (user_role_name) values ($1) RETURNING *',
      [userRoleName],
    );
    res.json(newUserRole.rows[0]);
  }

  async getUserRoles(req, res) {
    const userRoles = await db.query('SELECT * FROM User_Roles');
    res.json(userRoles.rows[0]);
  }

  async deleteUserRole(req, res) {
    const userRoleId = req.params.team_id;
    const userRole = await db.query(
      'DELETE FROM User_Roles WHERE user_role_id = $1',
      [userRoleId],
    );
    res.json(userRole.rows[0]);
  }
}

module.exports = new UserRolesController();
