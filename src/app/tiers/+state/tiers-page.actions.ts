import { createAction, props, union } from '@ngrx/store';
import { Position } from 'src/app/shared/enums/position.enum';

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

export const TiersPageActions = {
    UpdateActiveTab,
    GetPlayersForPosition,
    GetPlayersForAllPositions
}

const ActionsUnion = union(TiersPageActions);

export type TiersPageActionsType = typeof ActionsUnion;