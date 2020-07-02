import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import EssentialsListContainer from './pages/Essentials';
import VarietiesListContainer from './pages/Varieties';
import BlogRoutes from './BlogRoutes';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/essentials'>
            <EssentialsListContainer />
          </Route>
          <Route path='/learn'>
            <BlogRoutes />
          </Route>
          <Route path='/about'>

            <AboutPage />
          </Route>
          <Route path='/contact'>

            <ContactPage />
          </Route>
          <Route>
            <VarietiesListContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
