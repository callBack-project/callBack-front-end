import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from './components/Users/Users'
import Jobs from './components/Jobs/Jobs'
import Companies from './components/Companies/Companies'
import Events from './Pages/Events'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/users' component={Users} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/jobs' component={Jobs} />
          <Route exact path='/companies' component={Companies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
