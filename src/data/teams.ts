import type { ITeam } from '../types';
import { apiCall } from '../utils/networking';

// function isITeam(arg:any): arg is ITeam{

// }

let cachedAllTeamsList: ITeam[];
export async function getAllTeams() : Promise<ITeam[]> {
  if (typeof cachedAllTeamsList === 'undefined')
    cachedAllTeamsList = await apiCall('teams');

  return cachedAllTeamsList;
}

const cachedTeamRecords: Record<string,Promise<ITeam>> = {};

export async function getTeamById(id:string) :Promise<ITeam> {
  let cached = cachedTeamRecords[id];
  if (typeof cached === 'undefined')
    cached = cachedTeamRecords[id] = apiCall(`teams/${id}`);
  return await cached;
}
