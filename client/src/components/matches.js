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
    <div className="bg-rose-600 p-8">
      <h2 className="text-center font-medium p-4 text-white text-xl">
        MATCHES
      </h2>
      <div>
        <div>
          <h3 className="text-center font-medium p-4 text-white text-medium">
            ROUND 1
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <CreateMatch teamLocalCode={"A1"} teamAwayCode={"A2"} />
            <CreateMatch teamLocalCode={"B1"} teamAwayCode={"B2"} />
            <CreateMatch teamLocalCode={"A3"} teamAwayCode={"A4"} />
            <CreateMatch teamLocalCode={"B3"} teamAwayCode={"B4"} />

            <CreateMatch teamLocalCode={"C1"} teamAwayCode={"C2"} />
            <CreateMatch teamLocalCode={"C3"} teamAwayCode={"C4"} />
            <CreateMatch teamLocalCode={"D3"} teamAwayCode={"D4"} />
            <CreateMatch teamLocalCode={"D1"} teamAwayCode={"D2"} />

            <CreateMatch teamLocalCode={"E3"} teamAwayCode={"E4"} />
            <CreateMatch teamLocalCode={"E1"} teamAwayCode={"E2"} />
            <CreateMatch teamLocalCode={"F3"} teamAwayCode={"F4"} />
            <CreateMatch teamLocalCode={"F1"} teamAwayCode={"F2"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
