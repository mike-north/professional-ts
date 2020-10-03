import * as React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";

const ChannelLink: React.FunctionComponent<{ to: string }> = ({ to }) => {
  let match = useRouteMatch({
    path: to,
  });
  const { teamId, channelId } = useParams<{
    teamId: string;
    channelId: string;
  }>();
  console.log({ teamId, channelId });
  return (
    <Link
      to={to}
      className={
        "team-sidebar__channel-link py-1 px-4 no-underline block" +
        (match ? "font-bold bg-teal-700 text-gray-200" : "")
      }
    >
      <span aria-hidden="true"># </span>
      {"foo"}
    </Link>
  );
};

export default ChannelLink;
