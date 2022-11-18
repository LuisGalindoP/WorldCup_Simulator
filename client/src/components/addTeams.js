import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const AddTeams = () => {
  const [allTeams, setAllTeams] = useState([]);
  const [teamCode, setTeamCode] = useState();
  const [name, setName] = useState();
  const [deletedConfirmation, setDeletedConfirmation] = useState(false);

  //GET ALL THE TEAMS
  useEffect(() => {
    axios
      .get("http://localhost:8000/teams")
      .then((response) => {
        console.log("all teams from axios: ", response.data);
        setAllTeams(response.data);
      })
      .catch((error) => {
        console.log("Error gettin all teams from useEffect axios");
      });
  }, [deletedConfirmation]);

  //CREATE A TEAM FUNCTION
  const createTeam = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/teams/new", {
        teamCode: teamCode,
        name: name,
        stage: "groups",
        goalsTemp: 0,
        goalsTotal: 0,
        local: false,
      })
      .then((response) => {
        console.log(response.data);
        setAllTeams([...allTeams, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //DELETE A TEAM FUNCTION
  const deleteTeam = (id) => {
    axios
      .post(`http://localhost:8000/teams/${id}`)
      .then((response) => {
        console.log(response.data);
        setDeletedConfirmation(!deletedConfirmation);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button>
        <a href="/">Home</a>
      </button>
      <h2>Add Teams</h2>
      <form onSubmit={createTeam}>
        <div>
          <label>Team Code </label>
          <input
            type="text"
            onChange={(event) => {
              setTeamCode(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Team Name </label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <h3>All teams</h3>
      {allTeams.map((team, index) => {
        return (
          <div key={index}>
            <h5>
              {team.teamCode} - {team.name}
              <button onClick={(event) => deleteTeam(team._id)}>Delete</button>
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default AddTeams;
