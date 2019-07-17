import { Position } from '../enums/position.enum';

export interface Player {
    _id: string;
    group: Position;
    name: string;
    team: string;
    bye: number;
    rank: number;
    points: number;
    risk: number;
    adp: number;
    tier: number;
    notes: string;
    taken: boolean;
    createdAt: Date;
    updatedAt: Date;
}