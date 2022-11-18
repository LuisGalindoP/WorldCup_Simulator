const Team = require("../models/team.model");

module.exports = {
  //find all teams
  findAllTeams: (req, res) => {
    Team.find()
      .then((allTeams) => {
        console.log(allTeams);
        res.json(allTeams);
      })
      .catch((err) => {
        console.log("Error in findAllTeams controller");
        res.json({ message: "Error in findAllTeams controller", error: err });
      });
  },
  //Add a new team
  addNewTeam: (req, res) => {
    Team.create(req.body)
      .then((newTeam) => {
        console.log(newTeam);
        res.json(newTeam);
      })
      .catch((err) => {
        console.log("Error in addNewTeam controller");
        res.status(400).json(err);
      });
  },
  //Find one Team
  findOneTeam: (req, res) => {
    Team.findOne({ _id: req.params.id })
      .then((oneTeam) => {
        console.log(oneTeam);
        res.json(oneTeam);
      })
      .catch((err) => {
        console.log("Error in FindOneTeam controller");
        res.json({ message: "Error in FindOneTeam controller", error: err });
      });
  },
  //Update a Team
  updateTeam: (req, res) => {
    Team.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedTeam) => {
        console.log(updatedTeam);
        res.json(updatedTeam);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  //Remove Team
  removeTeam: (req, res) => {
    Team.deleteOne({ _id: req.params.id })
      .then((removedTeam) => {
        console.log(removedTeam);
        res.json(removedTeam);
      })
      .catch((err) => {
        {
          console.log(err);
          res.json({ message: "Error in removeTeam controller", error: err });
        }
      });
  },
};
