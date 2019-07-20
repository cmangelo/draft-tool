import { createAction, props, union } from '@ngrx/store';

import { PlayerModel } from './player.model';

export const AddPlayers = createAction(
  '[Player/API] Add Players',
  props<{ players: { [_id: string]: PlayerModel } }>()
);

export const DraftPlayer = createAction(
  '[Tiers Effects] Draft Player',
  props<{ playerId: string }>()
);

export const ResetDrafted = createAction(
  '[Tiers] Reset Drafted'
);

export const ClearPlayers = createAction(
  '[Player/API] Clear Players'
);

export const PlayerActions = {
  AddPlayers,
  DraftPlayer,
  ResetDrafted,
  ClearPlayers
}

const ActionsUnion = union(PlayerActions);

export type PlayerActionsType = typeof ActionsUnion;