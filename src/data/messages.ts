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
  if (typeof cached !== 'undefined') return await cached;
  cached = cachedMessageRecordArrays[channelId] = new Promise<
    IMessage[]
  >((resolve, reject) => {
    void apiCall(`teams/${teamId}/channels/${channelId}/messages`)
      .catch(reject)
      .then((rawData) => {
        if (!isTypedArray(rawData, isMessage))
          reject(
            new Error(
              `Unexpected API response. Expected IChannel\nFound: ${JSON.stringify(
                rawData,
                null,
                '  ',
              )}`,
            ),
          );
        else resolve(rawData);
      });
  });
  return await cached;
}
