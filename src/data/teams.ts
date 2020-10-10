import { isTeam, isTypedArray } from '../type-guards';
import { ITeam } from '../types';
import { apiCall } from '../utils/networking';

let cachedAllTeamsList: Promise<ITeam[]>;
export async function getAllTeams(): Promise<ITeam[]> {
  if (typeof cachedAllTeamsList === 'undefined')
    cachedAllTeamsList = apiCall('teams').then((rawData) => {
      if (!isTypedArray(rawData, isTeam))
        throw new Error(
          `Unexpected API response. Expected ITeam[]\nFound: ${JSON.stringify(
            rawData,
            null,
            '  ',
          )}`,
        );
      else return rawData;
    });

  return await cachedAllTeamsList;
}

const cachedTeamRecords: {
  [k: string]: Promise<ITeam> | undefined;
} = {};

export async function getTeamById(id: string): Promise<ITeam> {
  let cached = cachedTeamRecords[id];
  if (typeof cached === 'undefined')
    cached = cachedTeamRecords[id] = apiCall(`teams/${id}`).then(
      (rawData) => {
        if (!isTeam(rawData))
          throw new Error(
            `Unexpected API response. Expected ITeam\nFound: ${JSON.stringify(
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
