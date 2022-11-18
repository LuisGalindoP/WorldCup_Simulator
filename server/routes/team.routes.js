const TeamController = require("../controllers/team.controller");

module.exports = (app) => {
  app.get("/teams", TeamController.findAllTeams);
  app.post("/teams/new", TeamController.addNewTeam);
  app.get("/teams/:id", TeamController.findOneTeam);
  app.put("/teams/edit/:id", TeamController.updateTeam);
  app.post("/teams/:id", TeamController.removeTeam);
};
