import { Position } from '../../../shared/enums/position.enum';

export interface Player {
  _id: string;
  group: Position;
  name: string;
  team: string;
  bye: number;
  // rank: number;
  points: number;
  risk: number;
  adp: number;
  // tier: number;
  drafted: boolean;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}
