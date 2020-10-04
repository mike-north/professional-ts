import { isTeam, isTypedArray } from '../type-guards';
import { ITeam } from '../types';
import { apiCall } from '../utils/networking';

let cachedAllTeamsList: Promise<ITeam[]>;
export async function getAllTeams(): Promise<ITeam[]> {
  if (typeof cachedAllTeamsList === 'undefined')
    cachedAllTeamsList = new Promise<ITeam[]>((resolve, reject) => {
      void apiCall('teams')
        .catch(reject)
        .then((rawData) => {
          if (!isTypedArray(rawData, isTeam))
            reject(
              new Error(
                `Unexpected API response. Expected ITeam[]\nFound: ${JSON.stringify(
                  rawData,
                  null,
                  '  ',
                )}`,
              ),
            );
          else resolve(rawData);
        });
    });
  return await cachedAllTeamsList;
}

const cachedTeamRecords: {
  [k: string]: Promise<ITeam> | undefined;
} = {};

export async function getTeamById(id: string): Promise<ITeam> {
  let cached = cachedTeamRecords[id];
  if (typeof cached !== 'undefined') return await cached;
  cached = cachedTeamRecords[id] = new Promise<ITeam>(
    (resolve, reject) => {
      void apiCall(`teams/${id}`)
        .catch(reject)
        .then((rawData) => {
          if (!isTeam(rawData))
            reject(
              new Error(
                `Unexpected API response. Expected ITeam\nFound: ${JSON.stringify(
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
