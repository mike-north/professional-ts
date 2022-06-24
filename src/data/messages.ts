import { apiCall } from '../utils/networking';

const cachedMessageRecordArrays: Record<string, any> = {};

export async function getChannelMessages(teamId, channelId) {
  let cached = cachedMessageRecordArrays[channelId];
  if (typeof cached === 'undefined')
    cached = cachedMessageRecordArrays[channelId] = apiCall(
      `teams/${teamId}/channels/${channelId}/messages`,
    );
  return await cached;
}
