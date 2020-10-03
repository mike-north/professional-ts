import * as React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import ChannelFooter from './Channel/Footer';
import ChannelHeader from './Channel/Header';
import ChannelMessage from './Channel/Message';

const Channel: React.FunctionComponent = () => {
  // const { channelId } = useParams<{ channelId: string }>();
  const { path } = useRouteMatch();

  return (
    <Route path={`${path}/:channelId`}>
      <main className="flex-1 flex flex-col bg-white overflow-hidden channel">
        <ChannelHeader
          title="general"
          description="Just some general people generally chatting about general things"
        />
        {/* Channel Message List  */}
        <div
          className="py-4 flex-1 overflow-y-scroll channel-messages-list"
          role="list"
        >
          <ChannelMessage
            body="foo"
            date={new Date('October 13 2020')}
            user={{
              name: 'Lisa',
              avatarUrl:
                'https://gravatar.com/avatar/96c332a96737c6668906232e39cb16ef?s=200',
            }}
          />
          <ChannelMessage
            body="foo"
            date={new Date('October 13 2020')}
            user={{
              name: 'Lisa',
              avatarUrl:
                'https://gravatar.com/avatar/96c332a96737c6668906232e39cb16ef?s=200',
            }}
          />
          <ChannelMessage
            body="foo"
            date={new Date()}
            user={{
              name: 'Lisa',
              avatarUrl:
                'https://gravatar.com/avatar/96c332a96737c6668906232e39cb16ef?s=200',
            }}
          />
        </div>

        <ChannelFooter />
      </main>
    </Route>
  );
};
export default Channel;
