import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Controls from "./components/Controls/Controls"
import "./App.css";
import "nes.css/css/nes.min.css";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" exact component={Controls} />
    </div>
  );
}

export default App;
