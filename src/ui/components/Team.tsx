import * as React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import Channel from './Channel';
import TeamSidebar from './TeamSidebar';

const Team: React.FunctionComponent = () => {
  const { teamId } = useParams<{
    teamId: string;
    channelId: string;
  }>();

  return (
    <Switch>
      <Redirect
        exact
        from={`/team/${teamId}`}
        to={`/team/${teamId}/channel/general`}
      />
      <Route exact to={`team/${teamId}/channel/:channelId`}>
        <TeamSidebar />
        <Channel />
      </Route>
    </Switch>
  );
};
export default Team;
