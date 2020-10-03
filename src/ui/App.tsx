import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { apiCall } from '../utils/networking';
import Team from './components/Team';
import TeamSelector from './components/TeamSelector';

const { useState, useEffect } = React;

interface ITeam {
  name: string;
  id: string;
  iconUrl: string;
}

function isTeam(arg: any): arg is ITeam {
  return (
    typeof arg.name === 'string' &&
    typeof arg.id === 'string' &&
    typeof arg.iconUrl === 'string'
  );
}

function assertIsTeamArray(arg: any): asserts arg is ITeam[] {
  if (!Array.isArray(arg))
    throw new Error(`Expected array\nfound: ${JSON.stringify(arg)}`);
  const validated = arg.filter(isTeam);
  if (validated.length < arg.length)
    throw new Error(`Expected array of ITeams\nfound: ${JSON.stringify(arg)}`);
}

const App: React.FunctionComponent = () => {
  const [teams, setTeams] = useState<ITeam[]>([]);
  useEffect(() => {
    apiCall('teams').then((teamData) => {
      assertIsTeamArray(teamData);
      setTeams(teamData);
    });
  }, ['teams']);

  return (
    <Router>
      <div className="flex flex-col sm:flex-row w-full h-full">
        <TeamSelector teams={teams} />
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
};
export default App;
