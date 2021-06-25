import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Jobs from './Pages/Jobs';
import Companies from './Pages/Companies';
import InterviewExperiences from './Pages/InterviewExperiences';
import Events from './Pages/Events';
import Users from './Pages/Users'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/companies" component={Companies} />
          <Route
            exact
            path="/interview-experiences"
            component={InterviewExperiences}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
