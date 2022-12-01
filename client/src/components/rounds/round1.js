import axios from "axios";
import React, { useEffect, useState } from "react";

const Round1 = (props) => {
  const { allTeams, setAllTeams } = props;

  //   FUNCTION TO CREATE THE MATCH
  const createMatch = (localTeam, awayTeam) => {
    for (let i = 0; i < allTeams.length; i++) {
      if (localTeam === allTeams[i].name) {
        localTeam = allTeams[i];
      }
      if (awayTeam === allTeams[i].name) {
        awayTeam = allTeams[i];
      }
    }

    //FUNTION TO MANAGE FORM FROM THE MATCH
    const submitMatchForm = (e, localTeamName) => {
      e.preventDefault();
      console.log("submitMatchForm", localTeam.stageScore[0]);
      axios.put(`http://localhost:8000/teams/edit/${localTeam._id}`, {
        teamCode: localTeam.teamCode,
        name: localTeam.name,
        flag: localTeam.flag,
        points: localTeam.points,
        stageScore: [
          localTeam.stageScore[0],
          localTeam.stageScore[1],
          localTeam.stageScore[2],
          localTeam.stageScore[3],
          localTeam.stageScore[4],
          localTeam.stageScore[5],
          localTeam.stageScore[6],
          localTeam.stageScore[7],
        ],
        winLoseTie: [
          localTeam.winLoseTie[0],
          localTeam.winLoseTie[1],
          localTeam.winLoseTie[2],
        ],
        goalsDifference: localTeam.goalsDifference,
        stage: localTeam.stage,
        cards: [localTeam.cards[0], localTeam.cards[1]],
      });
    };

    return (
      <div>
        <form onSubmit={submitMatchForm}>
          <div className="flex flex-col bg-white w-96 p-2 rounded drop-shadow-md">
            <h4 className="text-xs text-slate-500">
              Group {localTeam.teamCode[0]}
            </h4>
            <div className="flex justify-between py-2">
              <div className="flex gap-3">
                <img
                  src={localTeam.flag}
                  alt=""
                  width="30"
                  height="15"
                  className="drop-shadow-md "
                />
                <h4 className="text-sm font-semibold">{localTeam.name}</h4>
              </div>
              <input
                type="number"
                placeholder={localTeam.stageScore[0]}
                className="w-10 font-bold"
              />
            </div>
            <div className="flex justify-between py-2">
              <div className="flex gap-3">
                <img
                  src={awayTeam.flag}
                  alt=""
                  width="30"
                  className="drop-shadow-md "
                />
                <h4 className="text-sm font-semibold">{awayTeam.name}</h4>
              </div>
              <input
                type="number"
                placeholder={awayTeam.stageScore[0]}
                className="w-10 font-bold"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-white w-96 rounded my-1 p-1 drop-shadow hover:bg-slate-200"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <h3 className="text-center text-white font-bold p-4 bg-slate-400 my-4">
        ROUND 1
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {allTeams.length && createMatch("Qatar", "Ecuador")}
        {allTeams.length && createMatch("England", "Iran")}
        {allTeams.length && createMatch("Senegal", "Netherlands")}
        {allTeams.length && createMatch("USA", "Wales")}
      </div>
    </div>
  );
};

export default Round1;
