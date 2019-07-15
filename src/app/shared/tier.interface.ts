import { Player } from './player.interface';

export interface Tier {
    tier: number;
    players: Array<Player>;
}