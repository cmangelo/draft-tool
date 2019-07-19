import { createAction, props } from '@ngrx/store';

import { Player } from './player.model';

export const addPlayers = createAction(
  '[Player/API] Add Players',
  props<{ players: { [_id: string]: Player } }>()
);

export const clearPlayers = createAction(
  '[Player/API] Clear Players'
);