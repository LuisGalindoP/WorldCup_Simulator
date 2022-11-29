import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateMatch = (props) => {
  const { teamLocalCode, teamAwayCode } = props;
  const [teamLocal, setTeamLocal] = useState({});
  const [teamAway, setTeamAway] = useState({});
  const [allTeams, setAllTeams] = useState([]);
  const [group, setGroup] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/teams")
      .then((res) => {
        setAllTeams(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // if (allTeams.length) {
    for (let i = 0; i < allTeams.length; i++) {
      if (allTeams[i].teamCode === teamLocalCode) {
        setTeamLocal(allTeams[i]);
      }
      if (allTeams[i].teamCode === teamAwayCode) {
        setTeamAway(allTeams[i]);
      }
      setGroup(teamLocalCode[0]);
    }
    console.log("useEffect teams called");
  }, [allTeams]);

  return (
    <div className={styleMatch}>
      <div className={styleGroupName}>Group {group}</div>
      <div className="flex gap-4">
        {allTeams && <div className={styleTeam}>{teamLocal.name}</div>}

        <input type="Number" className="w-8" />

        <input type="Number" className="w-8" />

        {allTeams && <div className={styleTeam}>{teamAway.name}</div>}
      </div>
      <div className={styleGroupName}>TBP</div>
    </div>
  );
};

const styleMatch = "flex justify-between bg-white rounded p-2";
const styleGroupName = "text-sm text-slate-500";
const styleTeam = "font-medium text-base";

export default CreateMatch;
