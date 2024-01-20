const db = require('../db');

class TeamController {
  async createTeam(req, res) {
    const { teamName } = req.body;
    const newTeam = await db.query(
      'INSERT INTO Teams (team_name) values ($1) RETURNING *',
      [teamName],
    );
    res.json(newTeam.rows[0]);
  }

  async getTeams(req, res) {
    const teams = await db.query('SELECT * FROM Teams');
    res.json(teams.rows[0]);
  }

  async deleteTeam(req, res) {
    const teamId = req.params.team_id;
    const team = await db.query('DELETE FROM Users WHERE team_id = $1', [
      teamId,
    ]);
    res.json(team.rows[0]);
  }
}

module.exports = new TeamController();
