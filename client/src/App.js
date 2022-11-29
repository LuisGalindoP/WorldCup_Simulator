import { Link, Router } from "@reach/router";
import React, { useState } from "react";

import Landing from "./components/landing";

function App() {
  const [allTeams, setAllTeams] = useState([]);

  return (
    <div className="bg-rose-800 p-8">
      <Router>
        <Landing path={"/"} allTeams={allTeams} setAllTeams={setAllTeams} />
      </Router>
    </div>
  );
}

export default App;
