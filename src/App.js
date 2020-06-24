import React from 'react';
import HomePage from './pages/HomePage'
import EssentialsListContainer from './pages/Essentials';
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
      <HomePage/>
      </Route>
      <Route path='/essentials'>
      <EssentialsListContainer/>
      </Route>
     
      </Switch>
      </Router>
    </div>
  );
}

export default App;
