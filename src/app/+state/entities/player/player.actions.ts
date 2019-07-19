import { createAction, props, union } from '@ngrx/store';

import { Player } from './player.model';

export const AddPlayers = createAction(
  '[Player/API] Add Players',
  props<{ players: { [_id: string]: Player } }>()
);

export const ClearPlayers = createAction(
  '[Player/API] Clear Players'
);

export const PlayerActions = {
  AddPlayers,
  ClearPlayers
}

const ActionsUnion = union(PlayerActions);

export type PlayerActionsType = typeof ActionsUnion;