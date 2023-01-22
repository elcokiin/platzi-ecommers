import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "./styles/global.scss";

// components
import Layout from "./containers/Layout";
import Login from "./containers/Login";
import RecoveryPassword from "./containers/RecoveryPassword";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
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
          <Route path="*">
            <NotFound />
          </Route>
        </Layout>
      </Routes>
    </Router>
  );
};

export default App;
