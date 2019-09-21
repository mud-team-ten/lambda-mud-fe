import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Game from "./components/Game";
import "./App.css";
import "nes.css/css/nes.min.css";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/game" exact component={Game} />
    </div>
  );
}

export default App;
