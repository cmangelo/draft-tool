import { Player } from './player.interface';

export interface Tier {
    tierNumber: number;
    players: Array<Player>;
}