import { apiCall } from '../utils/networking';
import type { ITeam } from '../types';

export function isITeam(arg: any): arg is ITeam {
  return (
    typeof arg.iconUrl == 'string' &&
    typeof arg.name == 'string' &&
    typeof arg.id == 'string' &&
    Array.isArray(arg.channels)
  );
}

export function assertIsTypedArray<T>(
  arg: any,
  checker: (x: any) => x is T,
): asserts arg is T[] {
  if (!Array.isArray(arg)) {
    throw new Error(`Not an array: ${JSON.stringify(arg)}`);
  }
  if (
    arg.some((x) => {
      return !checker(x);
    })
  ) {
    throw new Error(
      `Some entries are not of expected type: ${JSON.stringify(arg)}`,
    );
  }
}

let cachedAllTeamsList: Promise<ITeam[]>;
export async function getAllTeams(): Promise<ITeam[]> {
  if (typeof cachedAllTeamsList === 'undefined')
    cachedAllTeamsList = apiCall('teams');

  return await cachedAllTeamsList;
}

const cachedTeamRecords: Record<string, Promise<ITeam>> = {};

export async function getTeamById(id: string): Promise<ITeam> {
  let cached = cachedTeamRecords[id];
  if (typeof cached === 'undefined')
    cached = cachedTeamRecords[id] = apiCall(`teams/${id}`);
  return await cached;
}
