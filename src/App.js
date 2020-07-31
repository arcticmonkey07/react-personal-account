import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { AuthProvider } from "./Auth";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
