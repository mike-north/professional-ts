import * as React from "react";
import { useParams } from "react-router";
import ChannelFooter from "./Channel/Footer";
import ChannelHeader from "./Channel/Header";
import ChannelMessage from "./Channel/Message";
import { Route, useRouteMatch } from "react-router-dom";
const Channel: React.FunctionComponent = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const { path } = useRouteMatch();

  return (
    <Route path={`${path}/:channelId`}>
      <main className="flex-1 flex flex-col bg-white overflow-hidden channel">
        {channelId}
        <ChannelHeader />
        {/* Channel Message List  */}
        <div
          className="py-4 flex-1 overflow-y-scroll channel-messages-list"
          role="list"
        >
          <ChannelMessage />
          <ChannelMessage />
          <ChannelMessage />
        </div>

        <ChannelFooter />
      </main>
    </Route>
  );
};
export default Channel;
