import { isChannel } from '../type-guards';
import { IChannel } from '../types';
import { apiCall } from '../utils/networking';

const cachedChannelRecords: {
  [k: string]: Promise<IChannel> | undefined;
} = {};

export async function getChannelById(id: string): Promise<IChannel> {
  let cached = cachedChannelRecords[id];
  if (typeof cached !== 'undefined') return await cached;
  cached = cachedChannelRecords[id] = new Promise<IChannel>(
    (resolve, reject) => {
      void apiCall(`Channels/${id}`)
        .catch(reject)
        .then((rawData) => {
          if (!isChannel(rawData))
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
    },
  );
  return await cached;
}
