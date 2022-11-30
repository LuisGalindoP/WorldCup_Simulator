import React, { useState, useEffect } from "react";
import axios from "axios";

import { Teams } from "../data/teams";
import Groups from "../components/groups";
import Matches from "../components/matches";

const Landing = (props) => {
  const { allTeams, setAllTeams } = props;

  return (
    <div className="bg-rose-800">
      {/* <h2>Landing</h2> */}

      {!allTeams[1] && (
        <button
          onClick={addAllTeams}
          className="bg-cyan-600 rounded p-2 hover:bg-cyan-300 "
        >
          Add teams
        </button>
      )}
      <Groups allTeams={allTeams} setAllTeams={setAllTeams} />
      <Matches allTeams={allTeams} setAllTeams={setAllTeams} />
    </div>
  );
};

// THIS IS THE FUNCTION TO CREATE ALL THE TEAMS AND BASE STATS IN THE DB
const addAllTeams = (event) => {
  event.preventDefault();

  for (let i = 0; i < Teams.length; i++) {
    axios
      .post("http://localhost:8000/teams/new", {
        teamCode: Teams[i].teamCode,
        name: Teams[i].name,
        flag: Teams[i].flag,
        points: 0,
        stageScore: [0, 0, 0, 0, 0, 0, 0, 0],
        winLoseTie: [0, 0, 0],
        goalsDifference: 0,
        stage: 0,
        cards: [0, 0],
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default Landing;
