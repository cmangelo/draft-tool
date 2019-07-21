import { PlayerModel } from '../player/player.model';

export interface TeamModel {
  _id: string;
  owner: string;
  draftPosition: number;
  players: Array<string> | Array<PlayerModel>;
}
