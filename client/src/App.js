import { Link, Router } from "@reach/router";

import AddTeams from "./components/addTeams";
import Landing from "./components/landing";

function App() {
  return (
    <div>
      <Router>
        <Landing path={"/"} />
        <AddTeams path={"/addteams"} />
      </Router>
    </div>
  );
}

export default App;
