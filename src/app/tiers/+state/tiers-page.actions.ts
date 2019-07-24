import { createAction, props, union } from '@ngrx/store';
import { Position } from 'src/app/shared/enums/position.enum';

const UpdateActiveTab = createAction(
    '[Tiers] Update Active Tab',
    props<{ tab: Position }>()
);

const GetPlayersForPosition = createAction(
    '[Tiers] Get Players For Position',
    props<{ position: Position }>()
);

const GetPlayersSuccess = createAction(
    '[API] Get Players Success',
    props<{ normalized: any, position: Position }>()
);

const DraftPlayer = createAction(
    '[Tiers] Draft Player',
    props<{ playerId: string }>()
);

export const TiersPageActions = {
    UpdateActiveTab,
    GetPlayersForPosition,
    GetPlayersSuccess,
    DraftPlayer
}

const ActionsUnion = union(TiersPageActions);

export type TiersPageActionsType = typeof ActionsUnion;