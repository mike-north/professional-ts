export interface IChannel {
  id: string;
  name: string;
  teamId: string;
  description: string;
}

export interface IMessage {
  body: string;
  id: string;
  user: IUser;
  createdAt: string;
}
export interface IUser {
  name: string;
  iconUrl: string;
}

export interface ITeam {
  iconUrl: string;
  name: string;
  id: string;
  channels: IChannel[];
}
