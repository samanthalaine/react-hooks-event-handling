import React from "react";
import Tickler from "./Tickler";
import MultiButton from "./MultiButton";
import ChangeItUp from "./ChangeItUp";
import Login from "./Login";

function App() {
  return (
    <div>
      <h3>Tickles!</h3>
      <Tickler />
      <hr />

      <MultiButton />
      <hr />

      <h3>Task</h3>
      <ChangeItUp />
      <hr />

      <h3>Submit Something!</h3>
      <Login />
      <hr />
    </div>
  );
}

export default App;
