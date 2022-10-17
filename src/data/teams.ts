import type { ITeam } from '../types';
import { apiCall } from '../utils/networking';

export function isITeam(arg:any): arg is ITeam{
  return (
  typeof arg.iconUrl  == "string"
  && typeof arg.name == "string"
  && typeof arg.id == "string"
  && Array.isArray(arg.channels)
  )
}

export function assertIsTypedArray<T>(arg: any, typeGuard: (val: any) => val is T): asserts arg is T[] {
  if (!Array.isArray(arg)) 
    throw new Error(`arg is not an array ${JSON.stringify(arg)}`);

  if (arg.some((item) => !typeGuard(item))) 
    throw new Error(`some or all of the items don't follow the expected type. arg: ${JSON.stringify(arg)}`)
}

let cachedAllTeamsList: ITeam[];
export async function getAllTeams() : Promise<ITeam[]> {
  if (typeof cachedAllTeamsList === 'undefined')
    cachedAllTeamsList = await apiCall('teams');
  assertIsTypedArray(cachedAllTeamsList,isITeam);

  return cachedAllTeamsList;
}

const cachedTeamRecords: Record<string,Promise<ITeam>> = {};

export async function getTeamById(id:string) :Promise<ITeam> {
  let cached = cachedTeamRecords[id];
  if (typeof cached === 'undefined')
    cached = cachedTeamRecords[id] = apiCall(`teams/${id}`);
  return await cached;
}
