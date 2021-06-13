import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from './components/Users/Users'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/users' component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
