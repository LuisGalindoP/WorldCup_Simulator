import React, { useState, useEffect } from "react";
import axios from "axios";

import CreateMatch from "../components/createMatch";

const Matches = (props) => {
  const { allTeams, setAllTeams } = props;

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

  return (
    <div>
      <h2 className="text-center font-bold m-4">MATCHES</h2>
      <div>
        <div>
          <h3 className="text-center font-bold mb-4">ROUND 1</h3>
          <div className="flex flex-col gap-2">
            <CreateMatch teamLocalCode={"A1"} teamAwayCode={"A2"} />
            <CreateMatch teamLocalCode={"A2"} teamAwayCode={"A4"} />
            <CreateMatch teamLocalCode={"B1"} teamAwayCode={"B2"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styleMatch = "flex gap-24 justify-center bg-white rounded";
const styleGroupName = "text-sm text-slate-500";
const styleTeam = "font-semibold text-sm";
export default Matches;
