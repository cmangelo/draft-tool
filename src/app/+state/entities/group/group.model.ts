import { Position } from 'src/app/shared/enums/position.enum';
import { TierModel } from '../tier/tier.model';

export interface GroupModel {
    position: Position;
    tiers: Array<string> | Array<TierModel>;
}