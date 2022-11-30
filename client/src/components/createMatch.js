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
    // console.log("useEffect teams called");
  }, [allTeams]);

  return (
    <div>
      <div className="flex flex-col bg-white w-96 p-2 rounded drop-shadow-md">
        <h4 className="text-xs text-slate-500">Group {group}</h4>
        <div className="flex justify-between py-2">
          <div className="flex gap-3">
            <img
              src={teamLocal.flag}
              alt=""
              width="30"
              height="15"
              className="drop-shadow-md "
            />
            <h4 className="text-sm font-semibold">{teamLocal.name}</h4>
          </div>
          <input type="number" placeholder="0" className="w-10 font-bold" />
        </div>
        <div className="flex justify-between py-2">
          <div className="flex gap-3">
            <img
              src={teamAway.flag}
              alt=""
              width="30"
              className="drop-shadow-md "
            />
            <h4 className="text-sm font-semibold">{teamAway.name}</h4>
          </div>
          <input type="number" placeholder="0" className="w-10 font-bold" />
        </div>
      </div>
      <button
        type="submit"
        className="bg-white w-96 rounded my-1 p-1 drop-shadow hover:bg-slate-200"
      >
        Submit
      </button>
    </div>
  );
};

export default CreateMatch;
