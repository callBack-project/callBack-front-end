import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppProvider } from './components/Context/context';

import Jobs from './Pages/Jobs';
import Companies from './Pages/Companies';
import InterviewExperiences from './Pages/InterviewExperiences';
import Events from './Pages/Events';
import Users from './Pages/Users'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import UserPage from './Pages/User-Page'
import FooterComponent from './components/Footer/FooterComponent';

import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className='content'>
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
            <Route exact path="/sign-up" component={SignUp}/>
            <Route exact path='/home' component={UserPage} />
            <Route component={Login} />

          </Switch>
          <FooterComponent/>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
