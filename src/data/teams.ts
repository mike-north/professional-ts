import { apiCall } from '../utils/networking';

export async function getAllTeams(): Promise<any> {
  return await apiCall('teams');
}
