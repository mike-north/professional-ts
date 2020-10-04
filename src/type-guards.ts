/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IChannel, IMessage, ITeam, IUser } from './types';

export function isTeam(arg: any): arg is ITeam {
  return (
    typeof arg.name === 'string' &&
    typeof arg.id === 'string' &&
    typeof arg.iconUrl === 'string'
  );
}
export function isChannel(arg: any): arg is IChannel {
  return typeof arg.name === 'string' && typeof arg.id === 'string';
}

export function isUser(arg: any): arg is IUser {
  return (
    typeof arg.username === 'string' &&
    typeof arg.id === 'number' &&
    typeof arg.iconUrl === 'string'
  );
}

export function isMessage(arg: any): arg is IMessage {
  return (
    typeof arg.body === 'string' &&
    typeof arg.id === 'number' &&
    typeof arg.channelId === 'string' &&
    typeof arg.teamId === 'string' &&
    isUser(arg.user)
  );
}

export function isTypedArray<T>(
  arg: unknown,
  guard: (x: T) => x is T,
): arg is T[] {
  if (!Array.isArray(arg)) return false;
  const validated = arg.filter(guard);
  if (validated.length < arg.length) return false;
  return true;
}
