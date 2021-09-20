import { apiCall } from '../utils/networking';

const cachedMessageRecordArrays = {};

export async function getChannelMessages(
  teamId: string,
  channelId: string,
) {
  let cached = cachedMessageRecordArrays[channelId];
  if (typeof cached === 'undefined')
    cached = cachedMessageRecordArrays[channelId] = apiCall(
      `teams/${teamId}/channels/${channelId}/messages`,
    );
  return await cached;
}
