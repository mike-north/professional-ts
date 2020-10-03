import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Team from './components/Team';
import TeamSelector from './components/TeamSelector';

const App: React.FunctionComponent = () => (
  <Router>
    <div className="flex flex-col sm:flex-row w-full h-full">
      <TeamSelector />
      <Switch>
        <Redirect exact from="/" to="/team/linkedin" />
        <Redirect exact from="/team" to="/team/linkedin" />
        <Route path="/team/:teamId">
          <Team />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
