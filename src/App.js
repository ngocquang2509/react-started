import React from "react";
import Clock from "./components/Clock";
import Mouse from "./components/Render Props/Mouse";


function App() {
  return (
    <div>
      <Clock />
      <Mouse
        render={({ x, y }) => (
          <h1>The mouse position is {x}, {y}</h1>
        )} />
    </div>
  );
}

export default App;
