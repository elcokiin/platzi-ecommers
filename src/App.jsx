import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles
import "./styles/global.scss";

// components
import Layout from "./containers/Layout";
import Login from "./containers/Login";
import RecoveryPassword from "./containers/RecoveryPassword";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          {/* Home */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* Routes */}
          <Route path="/recovery-password">
            <RecoveryPassword />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* Default */}
          <Route>
            <NotFound />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
