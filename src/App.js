import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Page404 from "./pages/Page404";

import EssentialsListContainer from "./pages/Essentials";
import VarietiesListContainer from "./pages/Varieties";
import "./pages/HomePage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/essentials">
            <EssentialsListContainer />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="varieties">
            <VarietiesListContainer />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
