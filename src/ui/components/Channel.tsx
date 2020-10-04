import * as React from 'react';
import { getChannelMessages } from '../../data/messages';
import { IChannel, IMessage } from '../../types';
import { useAsyncDataEffect } from '../../utils/api';
import ChannelFooter from './Channel/Footer';
import ChannelHeader from './Channel/Header';
import ChannelMessage from './Channel/Message';
import Loading from './Loading';

export interface IChannelProps {
  channel: IChannel;
}

const Channel: React.FunctionComponent<IChannelProps> = ({ channel }) => {
  const [messages, setMessages] = React.useState<IMessage[]>();
  useAsyncDataEffect(() => getChannelMessages(channel.teamId, channel.id), {
    setter: setMessages,
    stateName: 'messages',
    otherStatesToMonitor: [channel],
  });
  if (!messages || messages.length === 0)
    return <Loading message="Loading messages" />;
  console.log(
    `%c CHANNEL render: ${channel.name}`,
    'background-color: purple; color: white',
  );
  return (
    <main className="flex-1 flex flex-col bg-white overflow-hidden channel">
      <ChannelHeader title={channel.name} description={channel.description} />
      {/* Channel Message List  */}
      <div
        className="py-4 flex-1 overflow-y-scroll channel-messages-list"
        role="list"
      >
        {messages?.map((m) => (
          <ChannelMessage
            key={m.id}
            body={m.body}
            date={new Date('October 13 2020')}
            user={{
              name: 'Lisa',
              avatarUrl:
                'https://gravatar.com/avatar/96c332a96737c6668906232e39cb16ef?s=200',
            }}
          />
        ))}
      </div>

      <ChannelFooter />
    </main>
  );
};
export default Channel;
