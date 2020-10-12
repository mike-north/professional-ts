/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IChannel, IMessage, ITeam } from './types';

export function isTypedArray<T>(
  arr: unknown,
  check: (x: any) => x is T,
): arr is T[] {
  if (!Array.isArray(arr)) return false;
  if (arr.some((item) => !check(item))) return false;
  return true;
}

export function isTeam(arg: any): arg is ITeam {
  return (
    typeof arg.name === 'string' &&
    typeof arg.id === 'string' &&
    Array.isArray(arg.channels)
  );
}

export function isChannel(arg: any): arg is IChannel {
  return (
    typeof arg.teamId === 'string' &&
    typeof arg.description === 'string' &&
    typeof arg.name === 'string' &&
    typeof arg.iconUrl === 'string'
  );
}

export function isMessage(arg: any): arg is IMessage {
  return (
    typeof arg.teamId === 'string' &&
    typeof arg.channelId === 'string' &&
    typeof arg.userId === 'number' &&
    typeof arg.body === 'string'
  );
}
