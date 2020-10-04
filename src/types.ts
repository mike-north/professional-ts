export interface IChannel {
  teamId: string;
  description: string;
  id: string;
  name: string;
}
export interface ITeam {
  name: string;
  id: string;
  iconUrl: string;
  channels: IChannel[];
}
export interface IUser {
  id: number;
  name: string;
  username: string;
  iconUrl: string;
}

export interface IMessage {
  channelId: string;
  id: string;
  user: IUser;
  body: string;
  createdAt: string;
}
