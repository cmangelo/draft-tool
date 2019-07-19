import { createAction, props, union } from '@ngrx/store';
import { Position } from 'src/app/shared/enums/position.enum';
import { Tier } from 'src/app/shared/models/tier.interface';

const AddTier = createAction(
    '[Tiers/API] Add Tier',
    props<{ tiers: { [_id: string]: Tier }, ids: Array<string> }>()
);

const UpdateActiveTab = createAction(
    '[Tiers] Update Active Tier',
    props<{ tab: Position }>()
);

const GetPlayersForPosition = createAction(
    '[Tiers] Get Players For Position',
    props<{ position: Position }>()
);

const GetPlayersForAllPositions = createAction(
    '[Tiers] Get Players For All Positions'
);

export const TiersActions = {
    AddTier,
    UpdateActiveTab,
    GetPlayersForPosition,
    GetPlayersForAllPositions
}

const ActionsUnion = union(TiersActions);

export type TiersActionsType = typeof ActionsUnion;