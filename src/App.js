import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { helper1, helper2 } from "./util";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {helper1() && helper2()}
        <p>Feature one wit some different stuff</p>
        <p>Feature two wit some different stuff</p>
      </header>
    </div>
  );
}

export default App;
