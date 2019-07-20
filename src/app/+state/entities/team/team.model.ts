import { PlayerModel } from '../player/player.model';

export interface Team {
  _id: string;
  owner: string;
  draftOrder: number;
  players: Array<string> | Array<PlayerModel>;
}
