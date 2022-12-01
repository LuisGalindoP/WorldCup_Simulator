import React, { useState, useEffect } from "react";
import axios from "axios";

import Round1 from "../components/rounds/round1";

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
    <div className="bg-rose-500">
      <Round1 allTeams={allTeams} setAllTeams={setAllTeams} />
    </div>
  );
};

export default Matches;
