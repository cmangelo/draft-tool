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

export const TiersPageActions = {
    UpdateActiveTab,
    GetPlayersForPosition
}

const ActionsUnion = union(TiersPageActions);

export type TiersPageActionsType = typeof ActionsUnion;