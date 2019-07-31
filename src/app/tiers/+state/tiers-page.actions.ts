import { createAction, props, union } from '@ngrx/store';
import { Position } from 'src/app/shared/enums/position.enum';

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
    GetPlayersForPosition,
    GetPlayersSuccess,
    DraftPlayer
}

const ActionsUnion = union(TiersPageActions);

export type TiersPageActionsType = typeof ActionsUnion;