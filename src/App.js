import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import CodeGenerator from "./components/CodeGenerator";
import Presentation from "./components/Presentation";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <div className="appAside">
            <Presentation />
          </div>
          <div className="appForm">
            <CodeGenerator />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
