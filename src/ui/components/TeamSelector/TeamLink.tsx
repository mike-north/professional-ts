import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export interface ITeamLink {
  to: string;
  name: string;
  iconUrl: string;
}

const TeamLink: React.FunctionComponent<ITeamLink> = ({
  to,
  name,
  iconUrl,
}) => {
  const match = useRouteMatch({
    path: to,
  });

  return (
    <Link
      to={to}
      className={
        'team-selector__team-button cursor-pointer rounded-lg p-2 pl-4 inline-block sm:block no-underline opacity-25 ' +
        (match ? 'opacity-100' : '')
      }
    >
      <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
        <img
          className="team-selector__team-logo"
          src={iconUrl}
          alt={`Join the ${name} chat`}
        />
      </div>
    </Link>
  );
};

export default TeamLink;
