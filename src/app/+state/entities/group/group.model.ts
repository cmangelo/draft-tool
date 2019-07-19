import { Position } from 'src/app/shared/enums/position.enum';

export interface GroupModel {
    position: Position;
    tiers: Array<string>;
}