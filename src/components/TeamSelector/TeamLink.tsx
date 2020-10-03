import * as React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const TeamLink: React.FunctionComponent<{ to: string }> = ({ to }) => {
  let match = useRouteMatch({
    path: to,
  });

  return (
    <Link
      to={to}
      className={
        "team-selector__team-button cursor-pointer rounded-lg p-2 pl-4 inline-block sm:block no-underline opacity-25 " +
        (match ? "opacity-100" : "")
      }
    >
      <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
        <img
          className="team-selector__team-logo"
          src="https://gravatar.com/avatar/0ca1be2eaded508606982feb9fea8a2b?s=200&amp;d=https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png"
          alt="Join the LinkedIn chat"
        />
      </div>
    </Link>
  );
};

export default TeamLink;
