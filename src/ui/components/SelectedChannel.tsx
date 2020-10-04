import * as React from 'react';
import { match } from 'react-router-dom';
import { IChannel } from '../../types';
import Channel from './Channel';

const SelectedChannel: React.FunctionComponent<{
  channels: IChannel[];
  match: match<any> | null;
}> = ({ match, channels }) => {
  if (!channels)
    return (
      <main className="flex-1 flex flex-col bg-white overflow-hidden channel">
        <p>No channels</p>
      </main>
    );
  if (!match)
    return (
      <main className="flex-1 flex flex-col bg-white overflow-hidden channel">
        <p>No URL match</p>
      </main>
    );
  const { params } = match;
  if (!match) return <p>No match params</p>;
  const { channelId: selectedChannelId } = params;
  if (!selectedChannelId) return <p>Invalid channelId</p>;
  const selectedChannel = channels.find((c) => c.id === selectedChannelId);
  if (!selectedChannel)
    return (
      <div>
        <p>Could not find channel with id {selectedChannelId}</p>
        <pre>{JSON.stringify(channels, null, '  ')}</pre>
      </div>
    );

  return <Channel channel={selectedChannel} />;
};

export default SelectedChannel;
