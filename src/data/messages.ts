import { isMessage, isTypedArray } from '../type-guards';
import { IMessage } from '../types';
import { apiCall } from '../utils/networking';

const cachedMessageRecordArrays: {
  [k: string]: Promise<IMessage[]> | undefined;
} = {};

export async function getChannelMessages(
  teamId: string,
  channelId: string,
): Promise<IMessage[]> {
  let cached = cachedMessageRecordArrays[channelId];
  if (typeof cached === 'undefined')
    cached = cachedMessageRecordArrays[channelId] = apiCall(
      `teams/${teamId}/channels/${channelId}/messages`,
    ).then((rawData) => {
      if (!isTypedArray(rawData, isMessage))
        throw new Error(
          `Unexpected API response. Expected IChannel\nFound: ${JSON.stringify(
            rawData,
            null,
            '  ',
          )}`,
        );
      else return rawData;
    });
  return await cached;
}
