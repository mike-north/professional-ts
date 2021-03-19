import { IMessage, ITeam } from '../types';
import { apiCall } from '../utils/networking';

const cachedMessageRecordArrays: {
  [channelId: string]: Promise<IMessage[]> | undefined;
} = {};

function isIMessage(arg: any): arg is IMessage {
  if (!arg 
      || typeof arg !== 'object'
      || typeof arg.id !== 'string'
      || typeof arg.body !== 'string'
      || typeof arg.createdAt !== 'string'
      || typeof arg.user !== 'object'
    )
    return false;
  return true;
}

export async function getChannelMessages(
  teamId: string,
  channelId: string,
): Promise<IMessage[]> {
  let cached = cachedMessageRecordArrays[channelId];
  if (typeof cached === 'undefined') {
    cached = apiCall(
      `teams/${teamId}/channels/${channelId}/messages`,
    ).then(apiResult => {
      if (!Array.isArray(apiResult)) throw new Error('expected channel messages to be an array');
      return apiResult.filter(isIMessage);
    });
    cachedMessageRecordArrays[channelId] = cached;
  }
  return await cached;
}
