import { Position } from '../../../shared/enums/position.enum';

export interface PlayerModel {
  _id: string;
  position: Position;
  group: Position;
  name: string;
  team: string;
  bye: number;
  points: number;
  risk: number;
  adp: number;
  drafted: boolean;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
