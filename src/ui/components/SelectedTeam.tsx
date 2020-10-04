import * as React from 'react';
import { match } from 'react-router-dom';
import { ITeam } from '../../types';
import Team from './Team';

const SelectedTeam: React.FunctionComponent<{
  teams: ITeam[];
  match: match<any> | null;
}> = ({ match, teams }) => {
  if (!match) return <p>No URL match</p>;
  const { params } = match;
  if (!match) return <p>No match params</p>;
  const { teamId: selectedTeamId } = params;
  if (!selectedTeamId) return <p>Invalid teamId</p>;
  const selectedTeam = teams.find((t) => t.id === selectedTeamId);
  if (!selectedTeam)
    return <p>Invalid could not find team with id {selectedTeamId}</p>;
  return <Team team={selectedTeam} />;
};

export default SelectedTeam;
