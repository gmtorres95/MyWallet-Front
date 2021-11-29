import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import GlobalStyle from "./styles/GlobalStyle";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Main from "./pages/Main/Main";
import NewEntry from "./pages/NewEntry/NewEntry";

export default function App() {
  const [user, setUser] = useState(localStorage.length ? JSON.parse(localStorage.getItem("user")) : undefined);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/new-entry/:type" component={NewEntry} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}
