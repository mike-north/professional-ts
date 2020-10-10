import { isChannel } from '../type-guards';
import { IChannel } from '../types';
import { apiCall } from '../utils/networking';

const cachedChannelRecords: {
  [k: string]: Promise<IChannel> | undefined;
} = {};

export async function getChannelById(id: string): Promise<IChannel> {
  let cached = cachedChannelRecords[id];
  if (typeof cached !== 'undefined') return await cached;
  cached = cachedChannelRecords[id] = apiCall(`Channels/${id}`).then(
    (rawData) => {
      if (!isChannel(rawData))
        throw new Error(
          `Unexpected API response. Expected IChannel\nFound: ${JSON.stringify(
            rawData,
            null,
            '  ',
          )}`,
        );
      else return rawData;
    },
  );

  return await cached;
}
