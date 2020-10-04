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
export interface IMessage {
  channelId: string;
  id: string;
  body: string;
}
